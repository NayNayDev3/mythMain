import React from 'react'
import "../css/Header.css"
import { ConnectButton } from 'web3uikit';

export default function Header({isAuthenticated,account}) {
    const shortenAddress = (address) => {
        return address.slice(0, 5) + '...' + address.slice(-4);
      };
      const getRegNumber = (str) => {
        return Number(str)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      };
  return (
    <div className='headerContainer'>
        <div className='logo'>MYTH</div>
        <div className='balance'>
          <img src="/img/coin.png" width="40px" alt="" />
          <div className='balanceAmount'>
            MYTHRAL
            <span className='spanText'>{getRegNumber(0)}</span>
          </div>
        
        <div className="account">
            <div className="avatarHeader">
            <img src="/img/avatar.png" width="40px" alt="" />
            </div>
            <ConnectButton />
            {/* <p className='pText'>
            {isAuthenticated
              ? shortenAddress(account ? account : '')
              : 'Logged Out'}
          </p> */}
        </div>
        </div>
    </div>
  )
}
