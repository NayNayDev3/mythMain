import React from 'react'
import DegenPage from './DegenPage'

export default function MainApp({defaultCosmetics,allCosmetics,degenOwnerList,mainAppState,chainId}) {
  if(chainId !== 97){
    return (
      <div className="connectMetaMask">
         <h3 >Please Connect To BSC Main Net</h3> 
         <h3 >Network Name: BSC Mainnet</h3> 
         <h3 >New RPC URL: https://bsc-dataseed.binance.org/</h3> 
         <h3 >ChainID: 56</h3> 
         <h3 >Symbol: BNB</h3> 
         <h3 >Block Explorer URL: https://bscscan.com/</h3> 
      </div>
    )
  }
  return (
    <div className='container'>
      {mainAppState === "DEGENS" && <DegenPage degenOwnerList={degenOwnerList} allCosmetics={allCosmetics} defaultCosmetics={defaultCosmetics}/>}
    </div>
  )
}
