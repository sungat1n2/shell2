(this.webpackJsonphashlips_minting_card=this.webpackJsonphashlips_minting_card||[]).push([[0],{233:function(t,e){},242:function(t,e){},260:function(t,e){},262:function(t,e){},281:function(t,e){},282:function(t,e){},29:function(t){t.exports=JSON.parse('{"name":"ProBitSnowman","symbol":"PBSM","total_supply":10000,"chain_symbol":"MATIC","chain":"Polygon","chain_id":137,"address":"0x3de158272cf88c0fec51f387db1fd70fdf3f9799","abi":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"string","name":"_initBaseURI","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseExtension","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"cost","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxMintAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_mintAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bool","name":"_state","type":"bool"}],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"removeWhitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseExtension","type":"string"}],"name":"setBaseExtension","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_newBaseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newCost","type":"uint256"}],"name":"setCost","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newmaxMintAmount","type":"uint256"}],"name":"setmaxMintAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"walletOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"whitelistUser","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]}')},344:function(t,e){},346:function(t,e){},379:function(t,e){},381:function(t,e){},382:function(t,e){},387:function(t,e){},389:function(t,e){},395:function(t,e){},397:function(t,e){},410:function(t,e){},422:function(t,e){},425:function(t,e){},430:function(t,e){},438:function(t,e){},447:function(t,e){},449:function(t,e){},519:function(t,e,n){},521:function(t,e,n){"use strict";n.r(e);var a=n(28),s=n.n(a),i=n(210),u=n.n(i),r=n(16),o=n.n(r),c=n(12),p=n(63),l=n(110),d=n(211),y=n.n(d),m=n(29),b=n.p+"static/media/hero.b711af24.png",f=n(10),w={connected:!1,status:null,account:null,web3:null,contract:null,address:null,contractJSON:null},h={loading:!1,status:"Mint your ".concat(m.name),amount:1,supply:"0",cost:"0"};var j=function(){var t,e=Object(a.useState)(w),n=Object(l.a)(e,2),s=n[0],i=n[1],u=Object(a.useState)(h),r=Object(l.a)(u,2),d=r[0],j=r[1];console.log(s);var T=function(){var t=Object(p.a)(o.a.mark((function t(e,n){var a,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!window.ethereum.isMetaMask){t.next=17;break}return t.prev=1,t.next=4,window.ethereum.request({method:e});case 4:return a=t.sent,t.next=7,window.ethereum.request({method:"net_version"});case 7:t.sent==n.chain_id?(s=new y.a(window.ethereum),i((function(t){return Object(c.a)(Object(c.a)({},t),{},{connected:!0,status:null,account:a[0],web3:s,contract:new s.eth.Contract(n.abi,n.address),contractJSON:n})}))):i((function(){return Object(c.a)(Object(c.a)({},w),{},{status:"Change network to ".concat(n.chain,".")})})),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0.message),i((function(){return Object(c.a)({},w)}));case 15:t.next=18;break;case 17:i((function(){return Object(c.a)(Object(c.a)({},w),{},{status:"Please install metamask."})}));case 18:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e,n){return t.apply(this,arguments)}}(),x=function(){var t=Object(p.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={to:s.contractJSON.address,from:s.account,data:s.contract.methods.totalSupply().encodeABI()},t.prev=1,t.next=4,window.ethereum.request({method:"eth_call",params:[e]});case 4:n=t.sent,console.log(s.web3.utils.hexToNumberString(n)),j((function(t){return Object(c.a)(Object(c.a)({},t),{},{supply:s.web3.utils.hexToNumberString(n)})})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),j((function(t){return Object(c.a)(Object(c.a)({},t),{},{supply:0})}));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),v=function(){var t=Object(p.a)(o.a.mark((function t(){var e,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={to:s.contractJSON.address,from:s.account,data:s.contract.methods.cost().encodeABI()},t.prev=1,t.next=4,window.ethereum.request({method:"eth_call",params:[e]});case 4:n=t.sent,console.log(s.web3.utils.hexToNumberString(n)),j((function(t){return Object(c.a)(Object(c.a)({},t),{},{cost:s.web3.utils.hexToNumberString(n)})})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),j((function(t){return Object(c.a)(Object(c.a)({},t),{},{cost:"0"})}));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}(),O=function(){var t=Object(p.a)(o.a.mark((function t(){var e;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={to:s.contractJSON.address,from:s.account,value:String(s.web3.utils.toHex(Number(d.cost)*d.amount)),data:s.contract.methods.mint(s.account,d.amount).encodeABI()},t.prev=1,j((function(t){return Object(c.a)(Object(c.a)({},t),{},{loading:!0,status:"Minting ".concat(d.amount,"...")})})),t.next=5,window.ethereum.request({method:"eth_sendTransaction",params:[e]});case 5:t.sent,j((function(t){return Object(c.a)(Object(c.a)({},t),{},{loading:!1,status:"Nice! Your NFT will show up on Opensea, once the transaction is successful."})})),x(),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),j((function(e){return Object(c.a)(Object(c.a)({},e),{},{loading:!1,status:t.t0.message})}));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}(),g=function(t){t<=5&&t>=1&&j((function(e){return Object(c.a)(Object(c.a)({},e),{},{amount:t})}))},M=function(t){T("eth_requestAccounts",t)};return Object(a.useEffect)((function(){M(m),window.ethereum&&(window.ethereum.on("accountsChanged",(function(){window.location.reload()})),window.ethereum.on("chainChanged",(function(){window.location.reload()})))}),[]),Object(a.useEffect)((function(){s.connected&&(x(),v())}),[s.connected]),Object(f.jsx)("div",{className:"page",children:Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("div",{className:"card_header colorGradient",children:Object(f.jsx)("img",{className:"card_header_image ns",alt:"banner",src:b})}),d.supply<m.total_supply?Object(f.jsxs)("div",{className:"card_body",children:[Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[Object(f.jsx)("button",{disabled:!s.connected||"0"==d.cost,className:"small_button",onClick:function(){return g(d.amount-1)},children:"-"}),Object(f.jsx)("div",{style:{width:10}}),Object(f.jsxs)("button",{disabled:!s.connected||"0"==d.cost,className:"button",onClick:function(){return O()},children:["Mint ",d.amount]}),Object(f.jsx)("div",{style:{width:10}}),Object(f.jsx)("button",{disabled:!s.connected||"0"==d.cost,className:"small_button",onClick:function(){return g(d.amount+1)},children:"+"})]}),s.connected?Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(f.jsxs)("p",{style:{color:"var(--statusText)",textAlign:"center"},children:[(null===(t=s.web3)||void 0===t?void 0:t.utils.fromWei(d.cost,"ether"))*d.amount," ",m.chain_symbol]}),Object(f.jsx)("div",{style:{width:20}}),Object(f.jsx)("p",{style:{color:"var(--statusText)",textAlign:"center"},children:"|"}),Object(f.jsx)("div",{style:{width:20}}),Object(f.jsxs)("p",{style:{color:"var(--statusText)",textAlign:"center"},children:[d.supply,"/",m.total_supply]})]}):null,d.status?Object(f.jsx)("p",{className:"statusText",children:d.status}):null,s.status?Object(f.jsx)("p",{className:"statusText",style:{color:"var(--error)"},children:s.status}):null]}):Object(f.jsxs)("div",{className:"card_body",children:[Object(f.jsxs)("p",{style:{color:"var(--statusText)",textAlign:"center"},children:[d.supply,"/",m.total_supply]}),Object(f.jsxs)("p",{className:"statusText",children:["We've sold out! .You can still buy and trade the ",m.name," ","on marketplaces such as Opensea."]})]}),Object(f.jsxs)("div",{className:"card_footer colorGradient",children:[Object(f.jsx)("button",{className:"button",style:{backgroundColor:s.connected?"var(--success)":"var(--warning)"},onClick:function(){return M(m)},children:s.account?"Connected":"Connect Wallet"}),s.connected?Object(f.jsx)("span",{className:"accountText",children:String(s.account).substring(0,6)+"..."+String(s.account).substring(38)}):null]}),Object(f.jsx)("a",{style:{position:"absolute",bottom:55,left:-75},className:"_90",target:"_blank",href:"https://polygonscan.com/token/0x3de158272cf88c0fec51f387db1fd70fdf3f9799",children:"View Contract"})]})})};n(519);u.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(j,{})}),document.getElementById("root"))}},[[521,1,2]]]);
//# sourceMappingURL=main.5c40c8c3.chunk.js.map