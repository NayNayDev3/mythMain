(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[4],{1e3:function(e,t){},1001:function(e,t){},1008:function(e,t){},1010:function(e,t){},1022:function(e,t){},1038:function(e,t){},1040:function(e,t){},1042:function(e,t){},1171:function(e,t){},1173:function(e,t){},1180:function(e,t){},1181:function(e,t){},1197:function(e,t){},1199:function(e,t){},1207:function(e,t){},1218:function(e,t){},1279:function(e,t,n){},1280:function(e,t,n){},1281:function(e,t,n){},1282:function(e,t,n){},1283:function(e,t,n){},1284:function(e,t,n){},1286:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(264),i=n.n(s),r=(n(645),n(7)),o=n(19),u=n(1),l=n.n(u),d=(n(646),n(91)),j=n(217),b=(n(1279),n(1280),n(5)),m=Object(b.jsxs)("svg",{width:"43",height:"44",viewBox:"0 0 43 44",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[Object(b.jsx)("rect",{x:"18.5781",y:"0.832031",width:"5.85",height:"42.4125",rx:"2.925",fill:"white"}),Object(b.jsx)("rect",{x:"0.296875",y:"24.9633",width:"5.85",height:"42.4125",rx:"2.925",transform:"rotate(-90 0.296875 24.9633)",fill:"white"})]}),f={56:{},97:{degenShopAddress:"0x8060e8A126a58353333D351d95E49a4E19C17741",degenAddress:"0x35fB8070e7c0075197892A6aad8132Ae6ae46101"}};function O(e){var t=e.timerState,n=e.setDegenSelected,a=e.data,s=e.chainId,i=e.Moralis,u=Object(c.useState)(!1),d=Object(o.a)(u,2),j=d[0],m=d[1];function O(e){if(""===e)return"";var t=e.split("/");return"/images/MythCityCompressed/".concat(t[5],"/").concat(t[6].replace("%20"," "))}var p=Object(c.useState)([]),h=Object(o.a)(p,2),g=h[0],x=h[1];return Object(c.useEffect)((function(){function e(){return(e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.executeFunction({abi:[{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"getDegenImage",outputs:[{internalType:"string[13]",name:"",type:"string[13]"}],stateMutability:"view",type:"function"}],contractAddress:f[s].degenAddress,functionName:"getDegenImage",params:{_id:a},msgValue:0});case 3:t=e.sent,x(t),m(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Failed to load image");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}j||function(){e.apply(this,arguments)}()}),[t]),Object(b.jsx)("div",{onClick:function(){n(a)},className:"degenBaseImageContainer",children:g.map((function(e,t){return Object(b.jsx)("img",{className:"degenBaseImageLayer",src:O(e)},t)}))})}n(1281);function p(e){var t=e.chainId,n=e.Moralis,a=e.convertUrlToFileString,s=e.defaultCosmetics,i=e.setMintModalOpen,u=Object(c.useState)(!1),d=Object(o.a)(u,2),j=d[0],m=d[1],O=Object(c.useState)(!1),p=Object(o.a)(O,2),h=p[0],g=p[1],x=Object(c.useState)(!1),v=Object(o.a)(x,2),y=v[0],N=v[1],S=Object(c.useState)(!1),I=Object(o.a)(S,2),C=I[0],k=I[1],A=Object(c.useState)(!1),M=Object(o.a)(A,2),T=M[0],w=M[1],E=Object(c.useState)(!1),B=Object(o.a)(E,2),D=B[0],U=B[1],F=Object(c.useState)(!1),L=Object(o.a)(F,2),R=L[0],P=L[1],G=Object(c.useState)(0),_=Object(o.a)(G,2),H=_[0],W=_[1];function J(){return(J=Object(r.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h&&y&&C&&T&&D&&R){e.next=5;break}console.log("Not all layers chosen"),m(!1),e.next=23;break;case 5:return e.prev=5,(c=[]).push(parseInt(h.defaultId)),c.push(parseInt(y.defaultId)),c.push(parseInt(D.defaultId)),c.push(parseInt(T.defaultId)),c.push(parseInt(R.defaultId)),c.push(parseInt(C.defaultId)),e.next=15,n.executeFunction({abi:[{inputs:[{internalType:"uint256[6]",name:"_listOfDefaults",type:"uint256[6]"}],name:"mintDegen",outputs:[],stateMutability:"payable",type:"function"}],contractAddress:f[t].degenShopAddress,functionName:"mintDegen",params:{_listOfDefaults:c},msgValue:5e16});case 15:e.sent,m(!1),i(!1),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),m(!1);case 23:case"end":return e.stop()}}),e,null,[[5,20]])})))).apply(this,arguments)}return Object(b.jsxs)("div",{className:"mintModalContainer",children:[Object(b.jsx)("div",{children:Object(b.jsx)("button",{disabled:j,className:"backButton",onClick:function(){i(!1)},children:"Back To Degens"})}),Object(b.jsx)("div",{className:"centerWidth",children:Object(b.jsx)("button",{disabled:j,className:"selectionButton",onClick:function(){m(!0),function(){J.apply(this,arguments)}()},children:"MINT FOR 0.05 BNB"})}),Object(b.jsx)("div",{className:"layerSelectionDiv",children:Object(b.jsxs)("div",{className:"imageDiv",children:[Object(b.jsx)("img",{className:"imageContainer",src:h?a(h.cosmeticObject.imageUrl):""}),Object(b.jsx)("img",{className:"imageContainer",src:y?a(y.cosmeticObject.imageUrl):""}),Object(b.jsx)("img",{className:"imageContainer",src:C?a(C.cosmeticObject.imageUrl):""}),Object(b.jsx)("img",{className:"imageContainer",src:T?a(T.cosmeticObject.imageUrl):""}),Object(b.jsx)("img",{className:"imageContainer",src:D?a(D.cosmeticObject.imageUrl):""}),Object(b.jsx)("img",{className:"imageContainer",src:R?a(R.cosmeticObject.imageUrl):""})]})}),Object(b.jsxs)("div",{className:"layerSelectionDiv",children:[Object(b.jsx)("button",{className:"selectionButton",onClick:function(){W(0)},children:"Background"}),Object(b.jsx)("button",{className:"selectionButton",onClick:function(){W(1)},children:"Body Type"}),Object(b.jsx)("button",{className:"selectionButton",onClick:function(){W(5)},children:"Hair"}),Object(b.jsx)("button",{className:"selectionButton",onClick:function(){W(3)},children:"Eyes"}),Object(b.jsx)("button",{className:"selectionButton",onClick:function(){W(2)},children:"Nose"}),Object(b.jsx)("button",{className:"selectionButton",onClick:function(){W(4)},children:"Mouth"})]}),Object(b.jsx)("div",{className:"cosmeticChoiceContainer",children:s&&s[H].map((function(e,t){return Object(b.jsx)("div",{onClick:function(){0===H?g(e):1===H?N(e):5===H?k(e):3===H?w(e):2===H?U(e):4===H&&P(e)},children:Object(b.jsx)("img",{className:"cosmeticContainer",src:a(e.cosmeticObject.imageUrl)})},t)}))})]})}n(1282);function h(e){var t=e.Moralis,n=e.data,a=e.chainId,s=Object(c.useState)([]),i=Object(o.a)(s,2),u=i[0],d=i[1];function j(e){if(""===e)return"";var t=e.split("/");return"/images/MythCityCompressed/".concat(t[5],"/").concat(t[6].replace("%20"," "))}return Object(c.useEffect)((function(){function e(){return(e=Object(r.a)(l.a.mark((function e(){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.executeFunction({abi:[{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"getDegenImage",outputs:[{internalType:"string[13]",name:"",type:"string[13]"}],stateMutability:"view",type:"function"}],contractAddress:f[a].degenAddress,functionName:"getDegenImage",params:{_id:n},msgValue:0});case 3:c=e.sent,d(c),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Failed to load image");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsxs)("div",{className:"selectDegenContainer",children:[Object(b.jsx)("div",{className:"degenStatsContainer",children:Object(b.jsx)("div",{className:"degenImage",children:u.map((function(e,t){return Object(b.jsx)("img",{className:"degenImageLayer",src:j(e)},t)}))})}),Object(b.jsx)("div",{className:"inventoryContainer"}),Object(b.jsx)("div",{className:"footerSection"})]})}function g(e){var t=e.timerState,n=e.account,a=e.chainId,s=e.Moralis,i=e.convertUrlToFileString,r=e.defaultCosmetics,u=(e.allCosmetics,e.degenOwnerList),l=Object(c.useState)(!1),d=Object(o.a)(l,2),j=d[0],f=d[1],g=Object(c.useState)(!1),x=Object(o.a)(g,2),v=x[0],y=x[1];return Object(c.useEffect)((function(){}),[u]),Object(b.jsxs)("div",{className:"degenPageContent",children:[j&&!v&&Object(b.jsx)(p,{chainId:a,Moralis:s,convertUrlToFileString:i,defaultCosmetics:r,setMintModalOpen:f}),!j&&!v&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h3",{children:"START YOUR JOURNEY"}),Object(b.jsx)("p",{children:"Acquire or Select a Degen to get started."}),Object(b.jsxs)("div",{className:"degens",children:[Object(b.jsx)("div",{onClick:function(){f(!0)},className:"avatarDegen avatarDegenPlus",children:m}),u&&Object.keys(u).map((function(e,c){if(u[e]===n)return Object(b.jsx)(O,{timerState:t,setDegenSelected:y,chainId:a,Moralis:s,data:e},c)}))]})]}),v&&!j&&Object(b.jsx)(h,{Moralis:s,chainId:a,data:v})]})}function x(e){var t=e.timerState,n=e.account,c=e.Moralis,a=e.convertUrlToFileString,s=e.defaultCosmetics,i=e.allCosmetics,r=e.degenOwnerList,o=e.mainAppState,u=e.chainId;return 97!==u?Object(b.jsxs)("div",{className:"connectMetaMask",children:[Object(b.jsx)("h3",{children:"Please Connect To BSC Main Net"}),Object(b.jsx)("h3",{children:"Network Name: BSC Mainnet"}),Object(b.jsx)("h3",{children:"New RPC URL: https://bsc-dataseed.binance.org/"}),Object(b.jsx)("h3",{children:"ChainID: 56"}),Object(b.jsx)("h3",{children:"Symbol: BNB"}),Object(b.jsx)("h3",{children:"Block Explorer URL: https://bscscan.com/"})]}):Object(b.jsx)("div",{className:"container",children:"DEGENS"===o&&Object(b.jsx)(g,{timerState:t,account:n,chainId:u,Moralis:c,convertUrlToFileString:a,degenOwnerList:r,allCosmetics:i,defaultCosmetics:s})})}n(1283);function v(e){var t=e.mainAppState,n=e.setMainAppState,c={play:[{icon:"degens",text:"DEGENS",link:"/degens"},{icon:"",text:"MISSIONS",link:"/missions"},{icon:"fight",text:"FIGHT",link:"/fight"},{icon:"crafting",text:"CRAFTING",link:"/crafting"}],markets:[{icon:"shop",text:"SHOP",link:"/shop"},{icon:"",text:"MARKETPLACE",link:"/marketplace"},{icon:"trade",text:"TRADE",link:"/trade"}],other:[{icon:"",text:"STAKING",link:"/staking"},{icon:"games",text:"GAMES",link:"/games"}]};return Object(b.jsxs)("div",{className:"sidebarContainer",children:[Object.keys(c).map((function(e){return Object(b.jsxs)("div",{className:"sidebarBox",children:[Object(b.jsx)("h3",{className:"h3Text",children:e.toUpperCase()}),c[e].map((function(e){return Object(b.jsxs)("div",{onClick:function(){n(e.text)},className:t===e.text?"menuItem menuItemActive":"menuItem",children:[e.icon&&Object(b.jsx)("img",{className:"imgSide",src:"/img/icons/".concat(e.icon,".svg"),alt:""}),e.text]},"menu-".concat(e.text))}))]},"menu-title-".concat(e))})),Object(b.jsx)("div",{className:"sidebarBox last",children:Object(b.jsx)("h3",{className:"h3Text",children:"SOCIALS"})})]})}function y(e){var t=e.Moralis,n=e.account,a=e.timerState,s=e.chainId,i=e.useMoralisQuery,u=Object(c.useState)("DEGENS"),j=Object(o.a)(u,2),m=j[0],f=j[1],O=Object(c.useState)(!1),p=Object(o.a)(O,2),h=p[0],g=p[1],y=Object(c.useState)({}),N=Object(o.a)(y,2),S=N[0],I=N[1],C=Object(c.useState)(!1),k=Object(o.a)(C,2),A=k[0],M=k[1],T=Object(c.useState)(!1),w=Object(o.a)(T,2),E=w[0],B=w[1],D=Object(c.useState)(!1),U=Object(o.a)(D,2),F=U[0],L=U[1],R=Object(c.useState)([]),P=Object(o.a)(R,2),G=P[0],_=P[1];var H=i("transferDegen",(function(e){return e.descending("createdAt")}),[],{autoFetch:!1}),W=i("cosmeticAdded",(function(e){return e.descending("createdAt").limit(2e3)}),[],{autoFetch:!1}),J=i("defaultAdded",(function(e){return e.descending("createdAt").limit(2e3)}),[],{autoFetch:!1});return Object(c.useEffect)((function(){F&&(G.includes(F.id)||(S[F.attributes.tokenId]=F.attributes.to,I(S),_([].concat(Object(d.a)(G),[F.id]))),L(!1))}),[F]),Object(c.useEffect)((function(){var e=new t.Query("transferDegen");function n(){return(n=Object(r.a)(l.a.mark((function t(){var n,c,a,s,i,r,o,u;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!h){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,e.subscribe();case 5:t.sent.on("update",(function(e){setTimeout((function(){L(e)}),1e4)})),t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(2),t.abrupt("return");case 12:return t.next=14,H.fetch();case 14:return n=t.sent,t.next=17,W.fetch();case 17:return c=t.sent,t.next=20,J.fetch();case 20:a=t.sent,s={},n&&c&&(g(!0),n.forEach((function(e){s[e.attributes.tokenId]||(s[e.attributes.tokenId]=e.attributes.to)})),I(s),i={0:[],1:[],2:[],3:[],4:[],5:[],6:[],7:[],8:[],9:[],10:[]},r={0:{},1:{},2:{},3:{},4:{},5:{},6:{},7:{},8:{},9:{},10:{}},c.forEach((function(e,t){var n=e.attributes;i[parseInt(n.layerType)].push({layerType:parseInt(n.layerType),layerId:parseInt(n.layerId),imageUrl:n.imageURL,name:n.imageName}),r[parseInt(n.layerType)][parseInt(n.layerId)]={layerType:parseInt(n.layerType),layerId:parseInt(n.layerId),imageUrl:n.imageURL,name:n.imageName}})),o={0:[],1:[],2:[],3:[],4:[],5:[]},u={0:0,1:1,2:5,3:2,4:4,5:6},a.forEach((function(e){var t=e.attributes;o[t.layerType].push({defaultId:t.defaultId,cosmeticObject:r[u[parseInt(t.layerType)]][parseInt(t.cosmeticId)]})})),B(o),M(r));case 23:case"end":return t.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a]),Object(b.jsxs)("div",{className:"AppBodyContainer",children:[Object(b.jsx)(v,{setMainAppState:f,mainAppState:m}),Object(b.jsx)(x,{account:n,timerState:a,degenOwnerList:S,Moralis:t,convertUrlToFileString:function(e){if(""===e)return"";var t=e.split("/");return"/images/MythCityCompressed/".concat(t[5],"/").concat(t[6].replace("%20"," "))},allCosmetics:A,defaultCosmetics:E,chainId:s,mainAppState:m})]})}n(1284);function N(e){var t;e.isAuthenticated,e.account;return Object(b.jsxs)("div",{className:"headerContainer",children:[Object(b.jsx)("div",{className:"logo",children:"MYTH"}),Object(b.jsxs)("div",{className:"balance",children:[Object(b.jsx)("img",{src:"/img/coin.png",width:"40px",alt:""}),Object(b.jsxs)("div",{className:"balanceAmount",children:["MYTHRAL",Object(b.jsx)("span",{className:"spanText",children:(t=0,Number(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})]}),Object(b.jsxs)("div",{className:"account",children:[Object(b.jsx)("div",{className:"avatarHeader",children:Object(b.jsx)("img",{src:"/img/avatar.png",width:"40px",alt:""})}),Object(b.jsx)(j.a,{})]})]})]})}var S=n(85),I=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),i=Object(o.a)(s,2),u=(i[0],i[1]),d=(Object(S.b)().data,Object(S.c)()),j=d.account,m=d.isAuthenticated,f=(d.logout,d.enableWeb3),O=d.isWeb3Enabled,p=d.isWeb3EnableLoading,h=(d.isAuthenticating,d.authenticate,d.Moralis),g=(d.authError,Object(c.useState)("disconnected")),x=Object(o.a)(g,2),v=x[0],I=x[1],C=Object(c.useState)(0),k=Object(o.a)(C,2),A=k[0],M=k[1];return Object(c.useEffect)((function(){var e=setInterval((function(){M(A+1)}),1e3);return function(){return clearInterval(e)}}),[A]),Object(c.useEffect)((function(){"undefined"!=typeof window&&(O||p||j||"disconnected"!==v||f({provider:"metamask",onSuccess:function(){return I("only_web3")}}))}),[O,p,j,v,f]),Object(c.useEffect)((function(){function e(){return(e=Object(r.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,h.getChainId();case 4:t=e.sent,a(parseInt(t));case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!1!==O&&function(){e.apply(this,arguments)}()}),[A]),Object(c.useEffect)((function(){O&&u(!0)}),[h,O]),Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(N,{isAuthenticated:m,account:j}),Object(b.jsx)(y,{Moralis:h,account:j,timerState:A,useMoralisQuery:S.d,chainId:n})]})},C=function(e){e&&e instanceof Function&&n.e(20).then(n.bind(null,1564)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))},k=n(621);i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(S.a,{appId:"logf0U8JaWXUU1KVW1TAQeLfG9smPkDK3Xz9NX0w",serverUrl:"https://l8ffx9ewemaf.usemoralis.com:2053/server",children:Object(b.jsx)(j.b,{children:Object(b.jsx)(k.a,{children:Object(b.jsx)(I,{})})})})}),document.getElementById("root")),C()},645:function(e,t,n){},646:function(e,t,n){},913:function(e,t){},943:function(e,t){},984:function(e,t){},986:function(e,t){}},[[1286,5,6]]]);
//# sourceMappingURL=main.1d230531.chunk.js.map