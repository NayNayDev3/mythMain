(this["webpackJsonpamazon-clone"]=this["webpackJsonpamazon-clone"]||[]).push([[19],{1570:function(e,t,n){"use strict";n.r(t),n.d(t,"WalletConnectV1Adapter",(function(){return G}));var r=n(7),a=n(3),c=n(4),o=n(8),i=n(48),s=n(32),u=n(9),l=n(10),p=n(1),h=n.n(p),d=n(11),f=n.n(d),v=n(601),b=n(56),m=n(154);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={EIP155:"eip155",SOLANA:"solana"},E=y(y({},g),{},{MULTICHAIN:"multichain"}),N="776218ac4734478c90191dde8cae483c",k=function(e,t){var n=t?"number"===typeof t?t:parseInt(t,16):function(e){if(e===g.EIP155)return 1;if(e===g.SOLANA)return 1;throw new Error("Chain namespace ".concat(e," is not supported"))}(e);return e===g.EIP155?function(e){var t=g.EIP155;return 1===e?{chainNamespace:t,chainId:"0x1",rpcTarget:"https://mainnet.infura.io/v3/".concat(N),displayName:"Ethereum Mainnet",blockExplorer:"https://etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:3===e?{chainNamespace:t,chainId:"0x3",rpcTarget:"https://ropsten.infura.io/v3/".concat(N),displayName:"ropsten",blockExplorer:"https://ropsten.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:4===e?{chainNamespace:t,chainId:"0x4",rpcTarget:"https://rinkeby.infura.io/v3/".concat(N),displayName:"rinkeby",blockExplorer:"https://rinkeby.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:5===e?{chainNamespace:t,chainId:"0x5",rpcTarget:"https://goerli.infura.io/v3/".concat(N),displayName:"goerli",blockExplorer:"https://goerli.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:42===e?{chainNamespace:t,chainId:"0x2a",rpcTarget:"https://kovan.infura.io/v3/".concat(N),displayName:"kovan",blockExplorer:"https://kovan.etherscan.io/",ticker:"ETH",tickerName:"Ethereum"}:137===e?{chainNamespace:t,rpcTarget:"https://polygon-rpc.com",blockExplorer:"https://polygonscan.com",chainId:"0x89",displayName:"Polygon Mainnet",ticker:"matic",tickerName:"matic"}:80001===e?{chainNamespace:t,rpcTarget:"https://rpc-mumbai.maticvigil.com",blockExplorer:"https://mumbai-explorer.matic.today",chainId:"0x13881",displayName:"Polygon Mumbai Testnet",ticker:"matic",tickerName:"matic"}:56===e?{chainNamespace:t,rpcTarget:"https://bsc-dataseed.binance.org",blockExplorer:"https://bscscan.com",chainId:"0x38",displayName:"Binance SmartChain Mainnet",ticker:"BNB",tickerName:"BNB"}:97===e?{chainNamespace:t,rpcTarget:"https://data-seed-prebsc-2-s3.binance.org:8545",blockExplorer:"https://testnet.bscscan.com",chainId:"0x61",displayName:"Binance SmartChain Testnet",ticker:"BNB",tickerName:"BNB"}:null}(n):e===g.SOLANA?function(e){var t=g.SOLANA;return 1===e?{chainNamespace:t,blockExplorer:"https://explorer.solana.com",chainId:"0x1",displayName:"Solana Mainnet",rpcTarget:"https://api.mainnet-beta.solana.com",ticker:"SOL",tickerName:"Solana Token"}:2===e?{rpcTarget:"https://api.testnet.solana.com",blockExplorer:"https://explorer.solana.com?cluster=testnet",chainId:"0x2",chainNamespace:t,displayName:"testnet",ticker:"SOL",tickerName:"solana"}:3===e?{rpcTarget:"https://api.devnet.solana.com",blockExplorer:"https://explorer.solana.com?cluster=devnet",chainId:"0x3",chainNamespace:t,displayName:"devnet",ticker:"SOL",tickerName:"solana"}:null}(n):null},w=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e,r){var c;return Object(a.a)(this,n),c=t.call(this,r),f()(Object(o.a)(c),"code",void 0),f()(Object(o.a)(c),"message",void 0),c.code=e,c.message=r||"",Object.defineProperty(Object(o.a)(c),"name",{value:"Web3AuthError"}),c}return Object(c.a)(n,[{key:"toJSON",value:function(){return{name:this.name,code:this.code,message:this.message}}},{key:"toString",value:function(){return JSON.stringify(this.toJSON())}}]),n}(m.a),C=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e,r){var c;return Object(a.a)(this,n),c=t.call(this,e,r),Object.defineProperty(Object(o.a)(c),"name",{value:"WalletInitializationError"}),c}return Object(c.a)(n,null,[{key:"fromCode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new n(e,"".concat(n.messages[e],", ").concat(t))}},{key:"notFound",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5001,e)}},{key:"notInstalled",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5002,e)}},{key:"notReady",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5003,e)}},{key:"windowBlocked",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5004,e)}},{key:"windowClosed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5005,e)}},{key:"incompatibleChainNameSpace",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5006,e)}},{key:"duplicateAdapterError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5007,e)}},{key:"invalidProviderConfigError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5008,e)}},{key:"providerNotReadyError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5009,e)}},{key:"rpcConnectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5010,e)}},{key:"invalidParams",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5011,e)}},{key:"invalidNetwork",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5013,e)}}]),n}(w);f()(C,"messages",{5e3:"Custom",5001:"Wallet is not found",5002:"Wallet is not installed",5003:"Wallet is not ready yet",5004:"Wallet window is blocked",5005:"Wallet window has been closed by the user",5006:"Incompatible chain namespace provided",5007:"Adapter has already been included",5008:"Invalid provider Config",5009:"Provider is not ready yet",5010:"Failed to connect with rpc url",5011:"Invalid params passed in",5013:"Invalid network provided"});var j=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e,r){var c;return Object(a.a)(this,n),c=t.call(this,e,r),Object.defineProperty(Object(o.a)(c),"name",{value:"WalletLoginError"}),c}return Object(c.a)(n,null,[{key:"fromCode",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return new n(e,"".concat(n.messages[e]).concat(t))}},{key:"connectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5111,e)}},{key:"disconnectionError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5112,e)}},{key:"notConnectedError",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5113,e)}},{key:"popupClosed",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return n.fromCode(5114,e)}}]),n}(w);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}f()(j,"messages",{5e3:"Custom",5111:"Failed to connect with wallet",5112:"Failed to disconnect from wallet",5113:"Wallet is not connected",5114:"Wallet popup has been closed by the user"});var T={OPENLOGIN:"openlogin",WALLET_CONNECT_V1:"wallet-connect-v1",WALLET_CONNECT_V2:"wallet-connect-v2"},I=x({TORUS_SOLANA:"torus-solana",PHANTOM:"phantom"},T),D=x({TORUS_EVM:"torus-evm",METAMASK:"metamask"},T),A=x(x({},D),I);function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _="external",W={NOT_READY:"not_ready",READY:"ready",CONNECTING:"connecting",CONNECTED:"connected",DISCONNECTED:"disconnected",ERRORED:"errored"},L=S(S({},W),{},{ADAPTER_DATA_UPDATED:"adapter_data_updated"}),Y=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),e=t.apply(this,arguments),f()(Object(o.a)(e),"adapterData",{}),f()(Object(o.a)(e),"chainConfig",null),e}return Object(c.a)(n,[{key:"chainConfigProxy",get:function(){return this.chainConfig?S({},this.chainConfig):null}},{key:"setChainConfig",value:function(e){if(this.status!==W.READY){if(!e.chainNamespace)throw C.notReady("ChainNamespace is required while setting chainConfig");var t=k(e.chainNamespace,e.chainId);this.chainConfig=S(S({},t),e)}}},{key:"setAdapterSettings",value:function(e){}},{key:"checkConnectionRequirements",value:function(){if(this.name!==A.WALLET_CONNECT_V1||this.status!==W.CONNECTING){if(this.status===W.CONNECTING)throw C.notReady("Already connecting");if(this.status===W.CONNECTED)throw j.connectionError("Already connected");if(this.status!==W.READY)throw j.connectionError("Wallet adapter is not ready yet")}}},{key:"checkInitializationRequirements",value:function(){if(this.status!==W.NOT_READY){if(this.status===W.CONNECTED)throw C.notReady("Already connected");if(this.status===W.READY)throw C.notReady("Adapter is already initialized")}}},{key:"updateAdapterData",value:function(e){this.adapterData=e,this.emit(L.ADAPTER_DATA_UPDATED,{adapterName:this.name,data:e})}}]),n}(b.e);var M=n(1481),B=n(22),H=n.n(B);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){f()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e=t.call(this),f()(Object(o.a)(e),"name",A.WALLET_CONNECT_V1),f()(Object(o.a)(e),"adapterNamespace",E.EIP155),f()(Object(o.a)(e),"currentChainNamespace",g.EIP155),f()(Object(o.a)(e),"type",_),f()(Object(o.a)(e),"adapterOptions",void 0),f()(Object(o.a)(e),"status",W.NOT_READY),f()(Object(o.a)(e),"adapterData",{uri:""}),f()(Object(o.a)(e),"connector",null),f()(Object(o.a)(e),"wcProvider",null),f()(Object(o.a)(e),"rehydrated",!1),e.adapterOptions=q({},r),e.chainConfig=r.chainConfig||null,e}return Object(c.a)(n,[{key:"connected",get:function(){var e;return!(null===(e=this.connector)||void 0===e||!e.connected)}},{key:"provider",get:function(){var e;return(null===(e=this.wcProvider)||void 0===e?void 0:e.provider)||null},set:function(e){throw new Error("Not implemented")}},{key:"init",value:function(){var e=Object(r.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(i.a)(Object(s.a)(n.prototype),"checkInitializationRequirements",this).call(this),this.chainConfig||(this.chainConfig=k(g.EIP155,1)),this.connector=this.getWalletConnectInstance(),this.wcProvider=new M.WalletConnectProvider({config:{chainConfig:this.chainConfig}}),this.emit(L.READY,A.WALLET_CONNECT_V1),this.status=W.READY,!this.connector.connected){e.next=10;break}return this.rehydrated=!0,e.next=10,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId.toString()});case 10:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"connect",value:function(){var e=Object(r.a)(h.a.mark((function e(){var t,a=this;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(i.a)(Object(s.a)(n.prototype),"checkConnectionRequirements",this).call(this),this.connector){e.next=3;break}throw C.notReady("Wallet adapter is not ready yet");case 3:if(!this.connected){e.next=7;break}return e.next=6,this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId.toString()});case 6:return e.abrupt("return",this.provider);case 7:if(this.status===W.CONNECTING){e.next=13;break}return null!==(t=this.adapterOptions.adapterSettings)&&void 0!==t&&t.qrcodeModal&&(this.connector=this.getWalletConnectInstance()),e.next=11,this.createNewSession();case 11:this.status=W.CONNECTING,this.emit(L.CONNECTING,{adapter:A.WALLET_CONNECT_V1});case 13:return e.abrupt("return",new Promise((function(e,t){if(!a.connector)return t(C.notReady("Wallet adapter is not ready yet"));a.connector.on("modal_closed",Object(r.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.status=W.READY,a.emit(L.READY,A.WALLET_CONNECT_V1),e.abrupt("return",t(new Error("User closed modal")));case 3:case"end":return e.stop()}}),e)}))));try{a.connector.on("connect",function(){var t=Object(r.a)(h.a.mark((function t(n,r){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n&&a.emit(L.ERRORED,n),t.next=3,a.onConnectHandler(r.params[0]);case 3:return t.abrupt("return",e(a.provider));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}())}catch(n){H.a.error("Wallet connect v1 adapter error while connecting",n),a.status=W.READY,a.rehydrated=!0,a.emit(L.ERRORED,n),t(n instanceof w?n:j.connectionError("Failed to login with wallet connect: ".concat((null===n||void 0===n?void 0:n.message)||"")))}})));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getUserInfo",value:function(){var e=Object(r.a)(h.a.mark((function e(){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.connected){e.next=2;break}throw j.notConnectedError("Not connected with wallet, Please login/connect first");case 2:return e.abrupt("return",{});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"disconnect",value:function(){var e=Object(r.a)(h.a.mark((function e(){var t,n,r=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=r.length>0&&void 0!==r[0]?r[0]:{cleanup:!1},n=t.cleanup,this.connector&&this.connected){e.next=4;break}throw j.notConnectedError("Not connected with wallet");case 4:return e.next=6,this.connector.killSession();case 6:this.rehydrated=!1,n?(this.connector=null,this.status=W.NOT_READY,this.wcProvider=null):this.status=W.READY,this.emit(L.DISCONNECTED);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"createNewSession",value:function(){var e=Object(r.a)(h.a.mark((function e(){var t,n,a,c,o=this,i=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=i.length>0&&void 0!==i[0]?i[0]:{forceNewSession:!1},this.connector){e.next=3;break}throw C.notReady("Wallet adapter is not ready yet");case 3:if(!a.forceNewSession||!this.connector.pending){e.next=6;break}return e.next=6,this.connector.killSession();case 6:if(null===(t=this.adapterOptions)||void 0===t||null===(n=t.adapterSettings)||void 0===n||!n.qrcodeModal){e.next=10;break}return e.next=9,this.connector.createSession({chainId:parseInt((null===(c=this.chainConfig)||void 0===c?void 0:c.chainId)||"0x1",16)});case 9:return e.abrupt("return");case 10:return e.abrupt("return",new Promise((function(e,t){var n;if(!o.connector)return t(C.notReady("Wallet adapter is not ready yet"));H.a.debug("creating new session for web3auth wallet connect"),o.connector.on("display_uri",function(){var n=Object(r.a)(h.a.mark((function n(r,a){var c,i;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r){n.next=3;break}return o.emit(L.ERRORED,j.connectionError("Failed to display wallet connect qr code")),n.abrupt("return",t(r));case 3:return i=a.params[0],o.updateAdapterData({uri:i}),null===(c=o.connector)||void 0===c||c.off("display_uri"),n.abrupt("return",e());case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()),o.connector.createSession({chainId:parseInt((null===(n=o.chainConfig)||void 0===n?void 0:n.chainId)||"0x1",16)}).catch((function(e){return H.a.error("error while creating new wallet connect session",e),o.emit(L.ERRORED,e),t(e)}))})));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onConnectHandler",value:function(){var e=Object(r.a)(h.a.mark((function e(t){var n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.connector&&this.wcProvider){e.next=2;break}throw C.notReady("Wallet adapter is not ready yet");case 2:if(this.chainConfig){e.next=4;break}throw C.invalidParams("Chain config is not set");case 4:if(n=t.chainId,H.a.debug("connected chainId",n),(r=parseInt(n,"string"!==typeof(a=n)&&"number"!==typeof a||!/^(-)?0x[0-9a-f]*$/i.test(a)?10:16))===parseInt(this.chainConfig.chainId,16)){e.next=12;break}return e.next=10,this.createNewSession({forceNewSession:!0});case 10:return this.emit(L.ERRORED,C.fromCode(5e3,"Not connected to correct chainId. Expected: ".concat(this.chainConfig.chainId,", Current: ").concat(r,", Please switch to correct chain from wallet"))),e.abrupt("return");case 12:return e.next=14,this.wcProvider.setupProvider(this.connector);case 14:this.subscribeEvents(this.connector),this.status=W.CONNECTED,this.emit(L.CONNECTED,{adapter:A.WALLET_CONNECT_V1,reconnected:this.rehydrated});case 17:case"end":return e.stop()}var a}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"subscribeEvents",value:function(e){var t=this;e.on("session_update",function(){var e=Object(r.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n&&t.emit(L.ERRORED,n);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},{key:"getWalletConnectInstance",value:function(){var e=this.adapterOptions.adapterSettings||{};return e.bridge=e.bridge||"https://bridge.walletconnect.org",new v.a(e)}}]),n}(Y)}}]);
//# sourceMappingURL=19.80823f3b.chunk.js.map