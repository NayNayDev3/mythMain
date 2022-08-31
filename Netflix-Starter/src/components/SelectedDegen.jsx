import React, { useEffect, useState } from 'react'
import { addresses } from '../addresses';

import "../css/SelectedDegen.css"
export default function SelectedDegen({Moralis,data,chainId}) {
    const [imageLayers, setImageLayers ] = useState([])

    useEffect(()=>{
        async function load(){
            try{
                let degenImage = await Moralis.executeFunction({abi:[{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getDegenImage","outputs":[{"internalType":"string[13]","name":"","type":"string[13]"}],"stateMutability":"view","type":"function"}],
                contractAddress: addresses[chainId].degenAddress,
                functionName: "getDegenImage",
                params:{"_id":data
                },msgValue:0});
                setImageLayers(degenImage)
            }catch {
              console.log("Failed to load image")
            }
        }
        load()
      
    },[])
    function convertUrlToFileString(urlString){
        if(urlString === "" ) {
          return ""
        }
        let splits = urlString.split("/")
        return `/images/MythCityCompressed/${splits[5]}/${splits[6].replace("%20"," ")}`
      }
  return (
    <div className='selectDegenContainer'>
        <div className="degenStatsContainer">
            <div className="degenImage">
            {imageLayers.map((_,index)=>{
            return <img key={index} className='degenImageLayer' src={convertUrlToFileString(_)}></img>
        })}
            </div>

        </div>
        <div className="inventoryContainer">

        </div>
        <div className="footerSection">

        </div>
    </div>
  )
}
