import React, { useEffect, useState } from 'react'
import { addresses } from '../addresses';

import "../css/SelectedDegen.css"
export default function SelectedDegen({Moralis,data,chainId}) {
    const [imageLayers, setImageLayers ] = useState([])
    const [degenStats, setDegenStats ] = useState(false)
    const decodeFileBase64 = (base64String) => {
      // From Bytestream to Percent-encoding to Original string
      return decodeURIComponent(
        atob(base64String)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    };
    useEffect(()=>{
        async function load(){
            try{
                let degenImage = await Moralis.executeFunction({abi:[{"inputs":[{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"getDegenImage","outputs":[{"internalType":"string[13]","name":"","type":"string[13]"}],"stateMutability":"view","type":"function"}],
                contractAddress: addresses[chainId].degenAddress,
                functionName: "getDegenImage",
                params:{"_id":data
                },msgValue:0});
                setImageLayers(degenImage)
                let degenStat = await Moralis.executeFunction({abi:[{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}],
                contractAddress: addresses[chainId].degenAddress,
                functionName: "tokenURI",
                params:{"tokenId":data
                },msgValue:0});
                setDegenStats(JSON.parse(decodeFileBase64(
                  degenStat.substring(degenStat.indexOf(",") + 1)
                )))
                console.log(JSON.parse(decodeFileBase64(
                  degenStat.substring(degenStat.indexOf(",") + 1)
                )))
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
      const getRegNumber = (str) => {
        return Number(str)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      };
  return (
    <div className='selectDegenContainer'>
        <div className="degenStatsContainer">
            <h2 className="nickname">
              NICKNAME
            </h2>
            <div className="degenInfo">
              <div className="degenImage">
                {imageLayers.map((_,index)=>{
                return <img key={index} className='degenImageLayer' src={convertUrlToFileString(_)}></img>
                  })}
              </div>
              <div className='degenStats'>
                <h4 className='degenStatsHeader'>STATS:</h4>
                <div className="styleValues">
                  <div className='column'>
                    <h4 className='degenStatsHeader'>CORE SCORE</h4>
                    <h5 className='headerP1'>{degenStats && getRegNumber(degenStats.attributes[0].value + degenStats.attributes[3].value + degenStats.attributes[10].value)}</h5>
                  </div>
                  <div className='column'>
                    <h4 className='degenStatsHeader2'>MAX DAMAGE PER HIT</h4>
                    <h5 className='headerP2'>{degenStats && getRegNumber(((degenStats.attributes[1].value + degenStats.attributes[4].value + degenStats.attributes[7].value) / 100000) * (degenStats.attributes[0].value + degenStats.attributes[3].value + degenStats.attributes[10].value))}</h5>
                  </div>
                </div>
                <div className="styleValues">
                  <div className='column'>
                    <h4 className='degenStatsHeader'>DAMAGE CAP</h4>
                    <h5 className='headerP1'>{degenStats && getRegNumber(degenStats.attributes[1].value + degenStats.attributes[4].value + degenStats.attributes[7].value)}</h5>
                  </div>
                  <div className='column'>
                    <h4 className='degenStatsHeader2'>STATUS</h4>
                    <h5 className='headerP2'>Not on mission</h5>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="equippedHeader">
            GEAR (EQUIPPED):
            </h5>
            <div className="equippedItems">
              <div className="equippedSlot">
                <img src={degenStats ? convertUrlToFileString(degenStats.attributes[5].value):""} className='itemImage'></img>
                <h6 className="itemTitle">
                  weapon
                </h6>
              </div>
              <div className="equippedSlot">
                <img src={degenStats ? convertUrlToFileString(degenStats.attributes[8].value):""} className='itemImage'></img>
                <h6 className="itemTitle">
                  mod
                </h6>
              </div>
              <div className="equippedSlot">
                <img src={degenStats ? convertUrlToFileString(degenStats.attributes[12].value):""} className='itemImage'></img>
                <h6 className="itemTitle">
                  equipment
                </h6>
              </div>
            </div>

        </div>


        <div className="inventoryContainer">
          <h3 className="inventoryHeader">INVENTORY</h3>
          
        </div>



        <div className="footerSection">

        </div>
    </div>
  )
}
