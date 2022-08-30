import React,{useState} from 'react'
import "../css/DegenPage.css"
import { IconPlus } from '../utils/icons'
import DegenImage from './DegenImage'
import MintModal from './MintModal'

export default function DegenPage({account,chainId,Moralis,convertUrlToFileString,defaultCosmetics,allCosmetics,degenOwnerList}) {

  const [mintModalOpen, setMintModalOpen ] = useState(false)

  return (
    <div className='degenPageContent'>
      {mintModalOpen && <MintModal chainId={chainId} Moralis={Moralis} convertUrlToFileString={convertUrlToFileString} defaultCosmetics={defaultCosmetics} setMintModalOpen={setMintModalOpen} />}
      {!mintModalOpen && <>
        <h3>START YOUR JOURNEY</h3>
        <p>Acquire or Select a Degen to get started.</p>
        <div className="degens">
            <div className="degensItem">
                <div onClick={()=>{setMintModalOpen(true)}} className="avatarDegen avatarDegenPlus">
                    {IconPlus}
                </div>
                {degenOwnerList && Object.keys(degenOwnerList).map((_,index)=>{
                  if(degenOwnerList[_] === account ){
                    return <DegenImage chainId={chainId} Moralis={Moralis} key={index} data={_}/>
                  }
                  
                })}
            </div>
        </div>
      </>}

    </div>
  )
}
