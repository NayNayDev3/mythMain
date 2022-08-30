import React,{useState} from 'react'
import "../css/AppBody.css"
import MainApp from './MainApp'
import SideBar from './SideBar'
export default function AppBody({chainId}) {
  const [mainAppState, setMainAppState ] = useState("DEGENS")
  return (
    <div className='AppBodyContainer'>
      <SideBar setMainAppState={setMainAppState} mainAppState={mainAppState} />
      <MainApp chainId={chainId} mainAppState={mainAppState}/>
    </div>
  )
}
