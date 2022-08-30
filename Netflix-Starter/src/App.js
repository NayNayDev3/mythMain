import React,{ useEffect, useState } from 'react';
import './App.css';
import AppBody from './components/AppBody';
import Header from './components/Header';

import { useMoralis, useERC20Balances } from "react-moralis"
import { useMoralisQuery } from "react-moralis";

const App = () => {


  const [ chainId, setChainId ] = useState(false)
  const [ loaded, setLoaded ] = useState(false)
  const { data: assets } = useERC20Balances();
  const {
    account,
    isAuthenticated,
    logout,
    enableWeb3,
    isWeb3Enabled,
    isWeb3EnableLoading,
    isAuthenticating,
    authenticate,
    Moralis,
    authError
} = useMoralis();

const [web3Status, setWeb3Status] =
useState('disconnected');

const [timerState, setTimerState] = useState(0);

useEffect( ()=>{
  const loadIntervalId = setInterval(()=>{setTimerState(timerState + 1)},1000);
  return () => clearInterval(loadIntervalId)
},[timerState])

useEffect(() => {
    // to avoid problems in Next.JS apps because of window object
    if (typeof window == 'undefined') return;
    if (
        !isWeb3Enabled &&
        !isWeb3EnableLoading &&
        !account&&
        web3Status === 'disconnected'
    ) {
        enableWeb3({
            provider: "metamask",
            onSuccess: () => setWeb3Status('only_web3')
        });
    }
}, [isWeb3Enabled, isWeb3EnableLoading, account, web3Status, enableWeb3]);

useEffect(() => {
  if(isWeb3Enabled === false) return
  else{
    load()
  }
  async function load(){
    if(!Moralis)return
    let chainIdFetch = await Moralis.getChainId()
    setChainId(parseInt(chainIdFetch))
  }
}, [timerState])
useEffect(()=>{
  if(isWeb3Enabled) setLoaded(true)
},[Moralis,isWeb3Enabled])

  return(
    <div className='App'>
      <Header isAuthenticated={isAuthenticated} account={account} />
      <AppBody Moralis={Moralis} account={account} timerState={timerState} useMoralisQuery={useMoralisQuery} chainId={chainId} />
      
    </div>
  )
};

export default App;
