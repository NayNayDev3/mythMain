import React,{useEffect, useState} from 'react'
import { Loading } from 'web3uikit'
import "../css/AppBody.css"
import MainApp from './MainApp'
import SideBar from './SideBar'
export default function AppBody({Moralis,account,timerState,chainId,useMoralisQuery}) {
  const [mainAppState, setMainAppState ] = useState("DEGENS")
  const [loaded, setLoaded ] = useState(false)
  const [degenOwnerList, setDegenOwnerList ] = useState({})
  const [allCosmetics, setAllCosmetics ] = useState(false)
  const [defaultCosmetics, setDefaultCosmetics ] = useState(false)
  const [degenTransfer, setDegenTransfer ] = useState(false)
  const [recievedDatabaseID, setRecievedID ] = useState([])

  function convertUrlToFileString(urlString){
    if(urlString === "" ) {
      return ""
    }
    let splits = urlString.split("/")
    return `/images/MythCityCompressed/${splits[5]}/${splits[6].replace("%20"," ")}`
  }

  const getDegenTransfers  = useMoralisQuery(
    "transferDegen",
    (query) => query.descending("createdAt"),
    [],
    { autoFetch: false }
  );
  const availableCosmetics  = useMoralisQuery(
    "cosmeticAdded",
    (query) => query.descending("createdAt").limit(2000),
    [],
    { autoFetch: false }
  );
  const availableDefaults  = useMoralisQuery(
    "defaultAdded",
    (query) => query.descending("createdAt").limit(2000),
    [],
    { autoFetch: false }
  );
    useEffect(()=>{
      if(!degenTransfer) return
      if(!recievedDatabaseID.includes(degenTransfer.id)){
        degenOwnerList[degenTransfer.attributes.tokenId] = degenTransfer.attributes.to
        setDegenOwnerList(degenOwnerList)
        setRecievedID([...recievedDatabaseID,degenTransfer.id])
      } else {
    
      }
      setDegenTransfer(false)

    },[degenTransfer])
    
    useEffect(()=>{
      const degenOwnerQuery = new Moralis.Query("transferDegen")
      async function load(){
        if(loaded) return
        try{
          let degenSub = await degenOwnerQuery.subscribe()
          degenSub.on('update', (object) => {
            setTimeout(()=>{setDegenTransfer(object)},10000)
            
              
            });
        } catch {
          return
        }

        const degenTransfers = await getDegenTransfers.fetch()
        const cosmeticsAvailable = await availableCosmetics.fetch()
        const defaultsAvailable = await availableDefaults.fetch()
        let tempDegenObject = {}
        if(degenTransfers && cosmeticsAvailable){
          setLoaded(true)
          degenTransfers.forEach((_)=>{
            if(!tempDegenObject[_.attributes.tokenId]){
              tempDegenObject[_.attributes.tokenId] = _.attributes.to
            } 
          })
          setDegenOwnerList(tempDegenObject)
          let tempCosmetics = {
            0:[],
            1:[],
            2:[],
            3:[],
            4:[],
            5:[],
            6:[],
            7:[],
            8:[],
            9:[],
            10:[]
          }
          let tempCosmetics2 = {
            0:{},
            1:{},
            2:{},
            3:{},
            4:{},
            5:{},
            6:{},
            7:{},
            8:{},
            9:{},
            10:{}
          }
          cosmeticsAvailable.forEach((_,index)=>{
            let tempAttributes = _.attributes
            tempCosmetics[parseInt(tempAttributes.layerType)].push({layerType:parseInt(tempAttributes.layerType),layerId:parseInt(tempAttributes.layerId),imageUrl:tempAttributes.imageURL, name:tempAttributes.imageName})
            tempCosmetics2[parseInt(tempAttributes.layerType)][parseInt(tempAttributes.layerId)] = {layerType:parseInt(tempAttributes.layerType),layerId:parseInt(tempAttributes.layerId),imageUrl:tempAttributes.imageURL, name:tempAttributes.imageName}
         
          })

          let defaultCosmeticObject = {
            0:[],
            1:[],
            2:[],
            3:[],
            4:[],
            5:[]

          }
          const convertLayerObject = {
            0:0,
            1:1,
            2:5,
            3:2,
            4:4,
            5:6
          }

            defaultsAvailable.forEach((_)=>{
              let tempAttributes = _.attributes
              defaultCosmeticObject[tempAttributes.layerType].push({defaultId:tempAttributes.defaultId, cosmeticObject:tempCosmetics2[convertLayerObject[parseInt(tempAttributes.layerType)]][parseInt(tempAttributes.cosmeticId)]})
            })
            setDefaultCosmetics(defaultCosmeticObject)

          setAllCosmetics(tempCosmetics2)

        }
      }
      load()
    },[timerState])
  return (
    <div className='AppBodyContainer'>
      <SideBar setMainAppState={setMainAppState} mainAppState={mainAppState} />
      <MainApp account={account} timerState={timerState} degenOwnerList={degenOwnerList} Moralis={Moralis} convertUrlToFileString={convertUrlToFileString} allCosmetics={allCosmetics} defaultCosmetics={defaultCosmetics} chainId={chainId} mainAppState={mainAppState}/>
    </div>
  )
}
