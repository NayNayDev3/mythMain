import React,{useState} from 'react'
import "../css/DegenPage.css"
import { IconPlus } from '../utils/icons'
import MintModal from './MintModal'

export default function DegenPage({defaultCosmetics,allCosmetics,degenOwnerList}) {
  const [mintModalOpen, setMintModalOpen ] = useState(false)
  return (
    <div className='degenPageContent'>
      {mintModalOpen && <MintModal defaultCosmetics={defaultCosmetics} setMintModalOpen={setMintModalOpen} />}
      {!mintModalOpen && <>
        <h3>START YOUR JOURNEY</h3>
        <p>Acquire or Select a Degen to get started.</p>
        <div className="degens">
            <div className="degensItem">
                <div onClick={()=>{setMintModalOpen(true)}} className="avatarDegen avatarDegenPlus">
                    {IconPlus}
                </div>
            </div>
        </div>
      </>}

    </div>
  )
}
