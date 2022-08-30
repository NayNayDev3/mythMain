import React from 'react'
import "../css/SideBar.css"
export default function SideBar({mainAppState,setMainAppState}) {

    const menus = {
        play: [
          { icon: 'degens', text: 'DEGENS', link: '/degens' },
          { icon: '', text: 'MISSIONS', link: '/missions' },
          { icon: 'fight', text: 'FIGHT', link: '/fight' },
          { icon: 'crafting', text: 'CRAFTING', link: '/crafting' },
        ],
        markets: [
          { icon: 'shop', text: 'SHOP', link: '/shop' },
          { icon: '', text: 'MARKETPLACE', link: '/marketplace' },
          { icon: 'trade', text: 'TRADE', link: '/trade' },
        ],
        other: [
          { icon: '', text: 'STAKING', link: '/staking' },
          { icon: 'games', text: 'GAMES', link: '/games' },
        ],
      };
  return (
    <div className='sidebarContainer'>
      {Object.keys(menus).map((title) => (
        <div  className='sidebarBox' key={`menu-title-${title}`}>
          <h3 className='h3Text'>{title.toUpperCase()}</h3>
          {menus[title].map((item) => (
            <div
            onClick={()=>{setMainAppState(item.text)}}
            className={mainAppState === item.text ? "menuItem menuItemActive":"menuItem"}
              key={`menu-${item.text}`}
            >
              {item.icon && <img className='imgSide' src={`/img/icons/${item.icon}.svg`} alt="" />}
              {item.text}
            </div>
          ))}
        </div>
      ))}
      <div className='sidebarBox last'>
        <h3 className='h3Text'>SOCIALS</h3>
      </div>
    </div>
  )
}
