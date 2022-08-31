import React, { useEffect, useState } from 'react'
import { addresses } from '../addresses';

export default function DegenImage({timerState,setDegenSelected,data,chainId,Moralis}) {
  const [ isLoaded, setIsLoaded ] =useState(false)
    function convertUrlToFileString(urlString){
        if(urlString === "" ) {
          return ""
        }
        let splits = urlString.split("/")
        return `/images/MythCityCompressed/${splits[5]}/${splits[6].replace("%20"," ")}`
      }
    const [imageLayers, setImageLayers ] = useState([])
    useEffect(()=>{
      if(isLoaded) return
        async function load(){
            try{
                let degenImage = await Moralis.executeFunction({abi:[{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getDegenImage","outputs":[{"internalType":"string[13]","name":"","type":"string[13]"}],"stateMutability":"view","type":"function"}],
                contractAddress: addresses[chainId].degenAddress,
                functionName: "getDegenImage",
                params:{"_id":data
                },msgValue:0});
                setImageLayers(degenImage)
                setIsLoaded(true)
            }catch {
              console.log("Failed to load image")
            }
        }
        load()
      
    },[timerState])
  return (
    <div onClick={()=>{setDegenSelected(data)}} className='degenBaseImageContainer'>
        {imageLayers.map((_,index)=>{
            return <img key={index} className='degenBaseImageLayer' src={convertUrlToFileString(_)}></img>
        })}
    </div>
  )
}
