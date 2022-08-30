import React from 'react'
import "../css/DegenPage.css"
import { IconPlus } from '../utils/icons'

export default function DegenPage() {
  return (
    <div className='degenPageContent'>
        <h3>START YOUR JOURNEY</h3>
        <p>Acquire or Select a Degen to get started.</p>
        <div className="degens">
            <div className="degensItem">
                <div className="avatarDegen avatarDegenPlus">
                    {IconPlus}
                </div>
            </div>
        </div>
    </div>
  )
}
