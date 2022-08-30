import React, {useState} from 'react'
import "../css/MintModal.css"
import {addresses} from '../addresses'
export default function MintModal({ chainId,Moralis,convertUrlToFileString,defaultCosmetics, setMintModalOpen }) {

  const [pending, setPending ] = useState(false)
  const [defaultBG, setDefaultBG ] = useState(false)
  const [defaultBodyColor, setDefaultBodyColor ] = useState(false)
  const [defaultHair, setDefaultHair ] = useState(false)
  const [defaultEyes, setDefaultEyes ] = useState(false)
  const [defaultNose, setDefaultNose ] = useState(false)
  const [defaultMouth, setDefaultMouth ] = useState(false)
  const [currentLayer, setCurrentLayer ] = useState(0)

  async function mintDegen(){
    if(!defaultBG || !defaultBodyColor || !defaultHair || !defaultEyes || !defaultNose || !defaultMouth){
      console.log("Not all layers chosen")
      setPending(false)
    } else {
      try{
        let tempList = []
        tempList.push(parseInt(defaultBG.defaultId))
        tempList.push(parseInt(defaultBodyColor.defaultId))
        tempList.push(parseInt(defaultNose.defaultId))
        tempList.push(parseInt(defaultEyes.defaultId))
        tempList.push(parseInt(defaultMouth.defaultId))
        tempList.push(parseInt(defaultHair.defaultId))
          let unlockCosmeticsTransactions = await Moralis.executeFunction({abi:[{"inputs":[{"internalType":"uint256[6]","name":"_listOfDefaults","type":"uint256[6]"}],"name":"mintDegen","outputs":[],"stateMutability":"payable","type":"function"}],
          contractAddress: addresses[chainId].degenShopAddress,
          functionName: "mintDegen",
          params:{"_listOfDefaults":tempList
          },msgValue:50000000000000000});
        
        setPending(false)
      }catch {
        setPending(false)
      }

    }
  }
  return (
    <div className='mintModalContainer'>
      <div className="centerWidth">
        <button disabled={pending} className='selectionButton' onClick={()=>{setPending(true);mintDegen()}}>MINT FOR 0.05 BNB</button>
      </div>
      
      <div className="layerSelectionDiv">
        
        <div className='imageDiv'>
          <img className="imageContainer" src={defaultBG? convertUrlToFileString(defaultBG.cosmeticObject.imageUrl): ""}></img>
          <img className="imageContainer" src={defaultBodyColor? convertUrlToFileString(defaultBodyColor.cosmeticObject.imageUrl): ""}></img>
          <img className="imageContainer" src={defaultHair? convertUrlToFileString(defaultHair.cosmeticObject.imageUrl): ""}></img>
          <img className="imageContainer" src={defaultEyes? convertUrlToFileString(defaultEyes.cosmeticObject.imageUrl): ""}></img>
          <img className="imageContainer" src={defaultNose? convertUrlToFileString(defaultNose.cosmeticObject.imageUrl): ""}></img>
          <img className="imageContainer" src={defaultMouth? convertUrlToFileString(defaultMouth.cosmeticObject.imageUrl): ""}></img>
        </div>
      </div>

      <div className="layerSelectionDiv">
        <button className='selectionButton' onClick={()=>{setCurrentLayer(0)}}>Background</button>
        <button className='selectionButton' onClick={()=>{setCurrentLayer(1)}}>Body Type</button>
        <button className='selectionButton' onClick={()=>{setCurrentLayer(5)}}>Hair</button>
        <button className='selectionButton' onClick={()=>{setCurrentLayer(3)}}>Eyes</button>
        <button className='selectionButton' onClick={()=>{setCurrentLayer(2)}}>Nose</button>
        <button className='selectionButton' onClick={()=>{setCurrentLayer(4)}}>Mouth</button>
      </div>
      <div className="cosmeticChoiceContainer">
        {defaultCosmetics && defaultCosmetics[currentLayer].map((_,index)=>{
          return (
            <div onClick={()=>{
              if(currentLayer === 0){
                setDefaultBG(_)
              } else if(currentLayer === 1){
                setDefaultBodyColor(_)
              }else if(currentLayer === 5){
                setDefaultHair(_)
              }else if(currentLayer === 3){
                setDefaultEyes(_)
              }else if(currentLayer === 2){
                setDefaultNose(_)
              }else if(currentLayer === 4){
                setDefaultMouth(_)
              }
            }}  key={index}>
                <img className="cosmeticContainer" src={convertUrlToFileString(_.cosmeticObject.imageUrl)}></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}
