(this["webpackJsonpswap-front"]=this["webpackJsonpswap-front"]||[]).push([[20],{1041:function(e,t,a){},1045:function(e,t,a){"use strict";var n=a(6),s=a(7),i=a(10),o=a(11),r=a(1),c=a.n(r),l=a(170),p=a(29),m=a.n(p),u=a(859),d=a(8),g=(a(1149),function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).confirm=function(){s.props.confirm&&s.props.confirm()},s.cancel=function(){s.props.cancel&&s.props.cancel()},s.state={},s}return Object(s.a)(a,[{key:"render",value:function(){var e=Object(l.a)(window.navigator).any?0:64;return c.a.createElement(u.a,{footer:null,title:null,closable:!0,maskClosable:!1,visible:this.props.visible,className:"unfinished-pop",onCancel:this.cancel,style:{marginLeft:Object(d.t)()+e},width:430,centered:!0},c.a.createElement("div",{className:"title"},m.a.get("action.popTitle"),c.a.createElement("p",null,m.a.get("action.popDesc"))),c.a.createElement("div",{className:"btns"},c.a.createElement("button",{onClick:this.confirm},m.a.get("action.popQuitBtn")),c.a.createElement("button",{onClick:this.cancel},m.a.get("action.popCancelBtn"))))}}]),a}(c.a.Component));t.a=g},1046:function(e,t,a){e.exports=a.p+"static/media/TransactionSuccess.294bae05.svg"},1143:function(e,t,a){"use strict";var n=a(6),s=a(7),i=a(10),o=a(11),r=a(1),c=a.n(r),l=a(29),p=a.n(l),m=a(1466),u=a(132),d=(a(1457),c.a.createElement(u.a,{style:{fontSize:24},spin:!0})),g=function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={},s}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.children,t=c.a.Children.toArray(e).map((function(e,t){var a=e.props,n=a.children,s=a.status,i=a.err,o=a.failed,r=n;return"error"===s&&(r=i||n),"pending"===s&&(r=p.a.get("action.doingAct")),"failed"===s&&(r=o||n),c.a.createElement("div",{className:"al_item ".concat(s?"".concat(s):""),key:e.key},c.a.createElement("div",{className:"flex"},c.a.createElement("span",{className:"al_number"},t+1),c.a.createElement("span",{className:"al_title".concat(s?" ".concat(s):"")},r)),"pending"===s&&c.a.createElement(m.a,{indicator:d,className:"spiny"}))}));return c.a.createElement("div",{className:"action-line"},t)}}]),a}(c.a.Component);t.a=g},1148:function(e,t,a){},1149:function(e,t,a){},1457:function(e,t,a){},1471:function(e,t,a){"use strict";var n,s=a(6),i=a(7),o=a(10),r=a(11),c=a(1),l=a.n(c),p=a(29),m=a.n(p),u=(a(170),a(217)),d=a(859),g=a(1474),v=(a(1480),a(267)),b=a(967),f=a(8),h=Object(u.b)("network")(n=Object(u.c)(n=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).initState=function(e,t){n.setState({_slippage:e,_deadline:t,slippage:e,deadline:t},(function(){n.showInfoMsg()}))},n.onCancel=function(){n.setState({slippage:n.state._slippage,deadline:n.state._deadline},(function(){n.showInfoMsg()})),n.props.onCancel&&n.props.onCancel()},n.onChange=function(){n.setState({_slippage:n.state.slippage,_deadline:n.state.deadline},(function(){n.showInfoMsg()})),n.props.onChange&&n.props.onChange(n.state.slippage,n.state.deadline)},n.onSlippageChange=function(e){var t=e.target.value,a=Object(f.D)(t,2),s=a.valid,i=a.str;s&&n.setState({slippage:i},(function(){n.showInfoMsg()}))},n.onDeadlineChange=function(e){var t=e.target.value,a=Object(f.D)(t,0),s=a.valid,i=a.str;if(t){if(s){var o=i;Number(i)>1e4&&(o=1e4),n.setState({deadline:o})}}else n.setState({deadline:t})},n.onSlippageBlur=function(){var e=n.state.slippage;Number(e)>=50?n.setState({slippage:e.slice(0,1)},(function(){n.showInfoMsg()})):0!=Number(e)||n.setState({slippage:"0.01"},(function(){n.showInfoMsg()}))},n.onDeadlineBlur=function(){var e=Number(n.state.deadline);0===e&&(e=1),n.setState({deadline:e})},n.showInfoMsg=function(){var e=n.state.slippage;e&&(Number(e)<.5?n.setState({info:m.a.get("settings.slippage_info_1")}):Number(e)>5&&Number(e)<50?n.setState({info:m.a.get("settings.slippage_info_2")}):Number(e)>=50?n.setState({info:m.a.get("settings.slippage_info_3")}):n.setState({info:""}))},n.state={_slippage:"0.5",_deadline:"1",slippage:"0.5",deadline:"1",info:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{title:l.a.createElement("span",{className:"setting-title"},m.a.get("settings.title")),closable:!0,visible:this.props.visible,onCancel:this.onCancel,footer:null,className:"setting-modal",style:{marginLeft:Object(f.t)()},width:630,centered:!0},l.a.createElement("div",{className:"modal-content"},l.a.createElement(v.a,{tip:this.props.slippate_tip||m.a.get("settings.slippage_tip")},l.a.createElement("span",{className:"setting-slippage"},m.a.get("settings.slippage"))),l.a.createElement("div",{className:"flex justify-content btns"},l.a.createElement("button",{className:"0.1"===this.state.slippage?"active":"default",onClick:function(){return e.onSlippageChange({target:{value:"0.1"}})}},"0.1%"),l.a.createElement("button",{className:"0.5"===this.state.slippage?"active":"",onClick:function(){return e.onSlippageChange({target:{value:"0.5"}})}},"0.5%"),l.a.createElement("button",{className:"1"===this.state.slippage?"active":"",onClick:function(){return e.onSlippageChange({target:{value:"1"}})}},"1%"),l.a.createElement("div",{className:"slippage-input"},l.a.createElement(g.a,{suffix:"%",value:this.state.slippage,onChange:this.onSlippageChange,onBlur:this.onSlippageBlur}))),this.state.info?l.a.createElement("div",{className:"info"},this.state.info):null,l.a.createElement("div",{className:"dead-line"},l.a.createElement(v.a,{tip:m.a.get("settings.deadline_tip")},m.a.get("settings.deadline")),l.a.createElement("div",{className:"flex"},l.a.createElement(g.a,{value:this.state.deadline,onChange:this.onDeadlineChange,onBlur:this.onDeadlineBlur}),l.a.createElement("div",{className:"minutes"},m.a.get("settings.deadline_minutes"))))),l.a.createElement(b.a,{type:"single",info:m.a.get("settings.confirm_btn"),onClick:this.onChange})))}}]),a}(l.a.Component))||n)||n;t.a=h},1478:function(e,t,a){"use strict";var n,s=a(0),i=a.n(s),o=a(2),r=a(6),c=a(7),l=a(10),p=a(11),m=a(1),u=a.n(m),d=a(29),g=a.n(d),v=a(217),b=a(859),f=(a(1479),a(1041),a(8)),h=a(62),k=a(13),E=a(1471),N=a(1143),w=a(1045),O=a(967),x=a(267),j=a(170),S=a(1046),T=a.n(S),y=Object(v.b)("network")(n=Object(v.b)("pool")(n=Object(v.c)(n=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).showModal=function(){n.setState({visible:!0})},n.cancel=function(){n.state.actionStarted?n.setState({miniPopVisible:!0}):(n.setState({visible:!1}),n.props.hideMigrateModal())},n.migrate=Object(o.a)(i.a.mark((function e(){var t,a,s,o,r,c,l,p,m,u,d,g,v,b,E;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,a=t.migrateData,t.migrateDataV2,s=n.computeV2(),o=s.tokenV2,r=s.trxV2,s.lpV2,c="v1.5"===n.props.version?k.a.migrateContract.v15:k.a.migrateContract.v1,l=n.props.network,p=l.settingSlippageMigrate,m=l.defaultAccount,p=Number(p),g=new f.a(r),v=new f.a(o),u="0x".concat(v.times(1-p/100).times(new f.a(10).pow(a.tokenDecimal)).integerValue(f.a.ROUND_DOWN).toString(16)),d="0x".concat(g.times(1-p/100).times(new f.a(10).pow(6)).integerValue(f.a.ROUND_DOWN).toString(16)),b={title:"pair_actions.add",obj:{trxAmount:Object(f.n)(a.trx.toString(),6),trx:"TRX",tokenAmount:Object(f.n)(a.value.toString(),a.tokenDecimal),tokenSymbol:a.tokenSymbol}},e.t0=c,e.t1=a.tokenAddress,e.t2=Object(f.a)(u)._toIntegerDown()._toHex(),e.t3=Object(f.a)(d)._toIntegerDown()._toHex(),e.t4=m,e.next=17,Object(h.g)(n.props.network.settingDeadlineMigrate);case 17:return e.t5=e.sent,E={contractAddress:e.t0,token:e.t1,amountTokenMin:e.t2,amountETHMin:e.t3,to:e.t4,deadline:e.t5},e.next=21,Object(h.w)(E,b);case 21:e.sent?n.setState({step:3}):n.setApproveBarText("two",!1);case 23:case"end":return e.stop()}}),e)}))),n.computeV2=function(){var e,t,a,s,i,o=n.props,r=o.migrateData,c=o.migrateDataV2,l=Object(f.a)(r.value).div(Object(f.a)(r.trx)),p=Object(f.a)(c.exTokenABalance.div(new f.a(10).pow(r.tokenDecimal))).div(Object(f.a)(c.exTokenBBalance.div(new f.a(10).pow(6))));return Object(f.a)(l).gt(Object(f.a)(p))?(e=Object(f.a)(r.trx),t=Object(f.a)(c.exTokenABalance.div(new f.a(10).pow(r.tokenDecimal))).div(Object(f.a)(c.exTokenBBalance.div(new f.a(10).pow(6)))).times(Object(f.a)(r.trx)),a=Object(f.a)(c.totalLiquidity.div(new f.a(10).pow(18))).div(Object(f.a)(c.exTokenBBalance.div(new f.a(10).pow(6)))).times(Object(f.a)(r.trx)),s=r.tokenSymbol,i=Object(f.o)(Object(f.a)(Object(f.a)(r.value).minus(t)),{miniText:1e-4,cutZero:!0,dp:4})):(t=Object(f.a)(r.value),e=Object(f.a)(c.exTokenBBalance.div(new f.a(10).pow(6))).div(Object(f.a)(c.exTokenABalance.div(new f.a(10).pow(r.tokenDecimal)))).times(Object(f.a)(r.value)),a=Object(f.a)(c.totalLiquidity.div(new f.a(10).pow(18))).div(Object(f.a)(c.exTokenABalance.div(new f.a(10).pow(r.tokenDecimal)))).times(Object(f.a)(r.value)),s="TRX",i=Object(f.o)(Object(f.a)(Object(f.a)(r.trx).minus(e)),{miniText:1e-4,cutZero:!0,dp:4})),{tokenV2:t,trxV2:e,lpV2:a,refundedToken:s,refundedValue:i}},n.checkApproveStatus=Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.isApproved();case 2:e.sent?n.setState({needApproveOne:"false",actionRetry:"setApproveTwo",step:2,actionStarted:!0},(function(){n.onRetryAction()})):n.onRetryAction();case 4:case"end":return e.stop()}}),e)}))),n.onRetryAction=function(){var e=n.state,t=e.needApproveOne,a=e.needApproveTwo,s=e.actionRetry;switch(s||(t?s="setApproveOne":a&&(s="setApproveTwo")),s){case"setApproveOne":n.setState({approveActionOneState:"start",actionInfo:g.a.get("action.startBtn"),actionDisabled:!0},(function(){n.setApprove("one")}));break;case"setApproveTwo":n.setState({approveActionOneState:"success",approveActionTwoState:"start",actionInfo:g.a.get("action.startBtn"),actionDisabled:!0},(function(){n.migrate()}))}},n.setApproveBarText=function(e,t){console.log(e),t?("one"===e&&n.setState({approveActionOneState:"pending",actionInfo:g.a.get("action.doingBtn"),actionDisabled:!0,actionStarted:!0},(function(){console.log(273),setTimeout((function(){n.setState({approveActionOneState:"success",approveActionTwoState:"start"})}),5e3)})),"two"===e&&n.setState({approveActionTwoState:"pending",actionInfo:g.a.get("action.doingBtn"),actionDisabled:!0,actionStarted:!0},(function(){setTimeout((function(){n.setState({approveActionTwoState:"success",baseActionState:"info"})}),5e3)}))):("one"===e&&n.setState({approveActionOneState:"error"}),"two"===e&&n.setState({approveActionTwoState:"error"}),n.setState({actionRetry:"one"===e?"setApproveOne":"setApproveTwo",actionInfo:g.a.get("action.retryBtn"),actionDisabled:!1,actionStarted:!0}))},n.setApprove=function(){var e=Object(o.a)(i.a.mark((function e(t){var a,s,o,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.props,s=a.migrateData,a.migrateDataV2,o="v1.5"===n.props.version?k.a.migrateContract.v15:k.a.migrateContract.v1,n.setState({step:2}),r={title:"migrate.action1"},e.next=6,Object(h.e)(s.address,o,r);case 6:e.sent?(n.setApproveBarText(t,!0),"one"===t?n.setState({needApproveOne:!1,actionRetry:"setApproveTwo"},(function(){n.onRetryAction()})):n.setState({needApproveTwo:!1})):n.setApproveBarText(t,!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.miniPopOk=function(){n.setState({miniPopVisible:!1,visible:!1,step:1,actionStarted:!1}),n.props.hideMigrateModal()},n.miniPopCancel=function(){n.setState({miniPopVisible:!1})},n.gotoPool=function(){n.props.pool.setData({actionLiqV2:0}),n.props.onChange(1),n.props.hideMigrateModal()},n.changeRate=function(){var e=n.props,t=e.migrateData,a=e.migrateDataV2;1===n.state.newRateType?n.setState({oldRateType:2,oldRateLabel:"TRX-"+t.tokenSymbol,oldRate:Object(f.o)(Object(f.a)(t.value).div(Object(f.a)(t.trx)),{miniText:1e-4,cutZero:!0,dp:4}),newRateType:2,newRateLabel:"TRX-"+t.tokenSymbol,newRate:Object(f.o)(Object(f.a)(a.exTokenABalance.div(new f.a(10).pow(t.tokenDecimal))).div(Object(f.a)(a.exTokenBBalance.div(new f.a(10).pow(6)))),{miniText:1e-4,cutZero:!0,dp:4})}):n.setState({oldRateType:1,oldRateLabel:t.tokenSymbol+"-TRX",oldRate:Object(f.o)(Object(f.a)(t.trx).div(Object(f.a)(t.value)),{miniText:1e-4,cutZero:!0,dp:4}),newRateType:1,newRateLabel:t.tokenSymbol+"-TRX",newRate:Object(f.o)(Object(f.a)(a.exTokenBBalance.div(new f.a(10).pow(6))).div(Object(f.a)(a.exTokenABalance.div(new f.a(10).pow(t.tokenDecimal)))),{miniText:1e-4,cutZero:!0,dp:4})})},n.isApproved=Object(o.a)(i.a.mark((function e(){var t,a,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="v1.5"===n.props.version?k.a.migrateContract.v15:k.a.migrateContract.v1,a=n.props.network.defaultAccount,e.next=4,Object(h.u)(n.props.migrateData.address,a,t);case 4:return s=e.sent,e.abrupt("return",Object(f.a)(s).gt(0));case 6:case"end":return e.stop()}}),e)}))),n.settingsRef=u.a.createRef(),n.state={visible:!1,step:1,actionInfo:g.a.get("action.startBtn"),actionDisabled:!0,approveActionOneState:"",approveActionOneError:g.a.get("action.approveActErr"),approveActionOneTitle:g.a.get("migrate.action1"),needApproveOne:!0,needApproveTwo:!0,approveActionTwoState:"",supplyActionEapproveActionTwoErrorrror:g.a.get("action.supplyActErr"),approveActionTwoTitle:g.a.get("migrate.action2"),miniPopVisible:!1,actionStarted:!1,oldRateType:1,oldRateLabel:e.migrateData.tokenSymbol+"-TRX",oldRate:Object(f.o)(Object(f.a)(e.migrateData.trx).div(Object(f.a)(e.migrateData.value)),{miniText:1e-4,cutZero:!0,dp:4}),newRateType:1,newRateLabel:e.migrateData.tokenSymbol+"-TRX",newRate:Object(f.o)(Object(f.a)(e.migrateDataV2.exTokenBBalance.div(new f.a(10).pow(6))).div(Object(f.a)(e.migrateDataV2.exTokenABalance.div(new f.a(10).pow(e.migrateData.tokenDecimal)))),{miniText:1e-4,cutZero:!0,dp:4}),refundedValue:"",refundedToken:"",actionRetry:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=this.props,a=t.migrateData,n=(t.migrateDataV2,this.computeV2()),s=n.tokenV2,i=n.trxV2,o=n.lpV2,r=n.refundedToken,c=n.refundedValue,l=this.state,p=l.step,m=l.actionDisabled,d=l.actionInfo,v=l.approveActionTwoState,h=l.approveActionTwoError,S=l.approveActionTwoTitle,y=l.approveActionOneState,C=l.approveActionOneError,D=l.approveActionOneTitle,A=l.oldRateLabel,_=l.oldRate,L=l.newRateLabel,R=l.newRate;return u.a.createElement("div",null,u.a.createElement(b.a,{title:null,closable:3!==this.state.step,visible:this.props.visible||this.state.visible,onCancel:this.cancel,className:"pool-modal add-gai ".concat(1===p?"migrateModal":""),footer:null,style:{marginLeft:Object(f.t)()},width:630,destroyOnClose:!0,centered:!0},1===p&&u.a.createElement("div",{className:"step1"},u.a.createElement("div",{className:"title"},g.a.get("migrate.title")),u.a.createElement("p",{className:"desc"},g.a.get("migrate.desc")),u.a.createElement("section",{className:"info"},u.a.createElement("div",{className:"lptokens"},u.a.createElement("span",{className:"images"},u.a.createElement("img",{className:"logo",src:k.a.trxLogoUrl,alt:""}),u.a.createElement("img",{className:"logo",src:a.tokenLogoUrl,alt:""})),u.a.createElement("span",{className:"name"},"TRX-",a.tokenSymbol),u.a.createElement("span",{className:"version"},"v1.5"===this.props.version?"V1.5":"V1")),u.a.createElement("div",{className:"box"},u.a.createElement("div",{className:"line-box"},u.a.createElement("span",null)),u.a.createElement("div",{className:"lp"},u.a.createElement("span",{className:"images"},u.a.createElement("img",{className:"logo",src:k.a.trxLogoUrl,alt:""}),u.a.createElement("img",{className:"logo",src:a.tokenLogoUrl,alt:""})),u.a.createElement("span",{className:"name"},a.tokenSymbol,"-TRX LP"),u.a.createElement("span",{className:"amount"},Object(f.o)(a.tokens,{miniText:1e-4,cutZero:!0,dp:4}))),u.a.createElement("div",{className:"token"},u.a.createElement("span",{className:"images"},u.a.createElement("img",{className:"logo",src:a.tokenLogoUrl,alt:""})),u.a.createElement("span",{className:"name"},a.tokenSymbol),u.a.createElement("span",{className:"amount"},Object(f.o)(a.value,{miniText:1e-4,cutZero:!0,dp:4}))),u.a.createElement("div",{className:"token"},u.a.createElement("span",{className:"images"},u.a.createElement("img",{className:"logo",src:k.a.trxLogoUrl,alt:""})),u.a.createElement("span",{className:"name"},"TRX"),u.a.createElement("span",{className:"amount"},Object(f.o)(a.trx,{miniText:1e-4,cutZero:!0,dp:4})))),u.a.createElement("div",{className:"rate"},u.a.createElement("span",{className:"rate-title"},g.a.get("migrate.rate")),A,u.a.createElement("em",{onClick:function(){return e.changeRate()}}),u.a.createElement("span",{className:"value mr-0"},_))),u.a.createElement("div",{className:"advanced"},u.a.createElement("span",{onClick:function(){e.settingsRef.current.initState(e.props.network.settingSlippageMigrate,e.props.network.settingDeadlineMigrate),e.props.network.setData({settingVisibleMigrate:!0})}},g.a.get("migrate.set_link"))),u.a.createElement("section",{className:"info v2"},u.a.createElement("div",{className:"lptokens"},u.a.createElement("span",{className:"images"},u.a.createElement("img",{className:"logo",src:k.a.trxLogoUrl,alt:""}),u.a.createElement("img",{className:"logo",src:a.tokenLogoUrl,alt:""})),u.a.createElement("span",{className:"name"},"TRX-",a.tokenSymbol),u.a.createElement("span",{className:"version"},"V2")),u.a.createElement("div",{className:"box"},u.a.createElement("div",{className:"line-box"},u.a.createElement("span",null)),u.a.createElement("div",{className:"lp"},u.a.createElement("span",{className:"images"},u.a.createElement("img",{className:"logo",src:k.a.trxLogoUrl,alt:""}),u.a.createElement("img",{className:"logo",src:a.tokenLogoUrl,alt:""})),u.a.createElement("span",{className:"name"},a.tokenSymbol,"-TRX LP"),u.a.createElement("span",{className:"amount"},Object(f.o)(o,{miniText:1e-4,cutZero:!0,dp:4}))),u.a.createElement("div",{className:"token"},u.a.createElement("span",{className:"images"},u.a.createElement("img",{className:"logo",src:a.tokenLogoUrl,alt:""})),u.a.createElement("span",{className:"name"},a.tokenSymbol),u.a.createElement("span",{className:"amount"},Object(f.o)(s,{miniText:1e-4,cutZero:!0,dp:4}))),u.a.createElement("div",{className:"token"},u.a.createElement("span",{className:"images"},u.a.createElement("img",{className:"logo",src:k.a.trxLogoUrl,alt:""})),u.a.createElement("span",{className:"name"},"TRX"),u.a.createElement("span",{className:"amount"},Object(f.o)(i,{miniText:1e-4,cutZero:!0,dp:4})))),u.a.createElement("div",{className:"rate"},u.a.createElement("span",{className:"rate-title"},g.a.get("migrate.rate")),L,u.a.createElement("em",{onClick:function(){return e.changeRate()}}),u.a.createElement("span",{className:"value"},R)),u.a.createElement("div",{className:"refunded"},u.a.createElement(x.a,{tip:u.a.createElement("div",{className:"pool-tooltip-text"},g.a.get("migrate.refunded_tips")),children:g.a.get("migrate.refunded",{value1:c,value2:r}),toolClass:"common-tool",titleClass:"common-tool-title",tail:!0,placement:j.a?"left":"bottom"}))),u.a.createElement("div",{className:"btn",onClick:this.checkApproveStatus},g.a.get("migrate.btn"))),2===p&&u.a.createElement("div",{className:"step2"},u.a.createElement("div",{className:"title normal"},g.a.get("migrate.migrate")),u.a.createElement("div",{className:"line"},u.a.createElement("span",{className:"version"},"v1.5"===this.props.version?"V1.5":"V1"),u.a.createElement("span",{className:"version"},"V2")),u.a.createElement("div",{className:"ib-parent center"},u.a.createElement("div",null,u.a.createElement("span",{className:"add-value"},Object(f.o)(a.value,{miniText:1e-4,cutZero:!0,dp:4})),u.a.createElement("span",{className:"add-token"},a.tokenSymbol)),u.a.createElement("span",{className:"plus"},"+"),u.a.createElement("div",null,u.a.createElement("span",{className:"add-value"},Object(f.o)(a.trx,{miniText:1e-4,cutZero:!0,dp:4})),u.a.createElement("span",{className:"add-token"},"TRX")),u.a.createElement("div",{className:"add-ver"},"v1.5"===this.props.version?"V1.5":"V1")),u.a.createElement("div",{className:"supplyLineTitle"},g.a.get("action.supplyLineTitle")),u.a.createElement(N.a,null,"success"!==y&&u.a.createElement("span",{status:y,err:C},D),"success"!==v&&u.a.createElement("span",{status:v,err:h},S)),u.a.createElement(O.a,{type:"single",disabled:m,info:d,onClick:this.onRetryAction})),3===p&&u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"modal-success"},u.a.createElement("img",{src:T.a,alt:""}),u.a.createElement("div",{className:"title green"},g.a.get("migrate.successTitle")),u.a.createElement("div",{className:"ib-parent center mb40"},u.a.createElement("div",null,u.a.createElement("span",{className:"add-value"},Object(f.o)(a.value,{miniText:1e-4,cutZero:!0,dp:4})),u.a.createElement("span",{className:"add-token"},a.tokenSymbol)),u.a.createElement("span",{className:"plus"},"+"),u.a.createElement("div",null,u.a.createElement("span",{className:"add-value"},Object(f.o)(a.trx,{miniText:1e-4,cutZero:!0,dp:4})),u.a.createElement("span",{className:"add-token"},"TRX")),u.a.createElement("div",{className:"add-ver"},"v1.5"===this.props.version?"V1.5":"V1")),u.a.createElement(O.a,{type:"single",info:g.a.get("action.closeBtn"),onClick:this.gotoPool}),u.a.createElement("div",{className:"supplyDescTitle"},g.a.get("action.supplyDescTitle")))),u.a.createElement(E.a,{slippate_tip:g.a.get("migrate.slippate_tip"),ref:this.settingsRef,visible:this.props.network.settingVisibleMigrate,onCancel:function(t){e.props.network.setData({settingVisibleMigrate:!1})},onChange:function(t,a){e.props.network.setData({settingVisibleMigrate:!1}),e.props.network.saveSettingsForMigrate(t,a)}})),this.state.miniPopVisible&&u.a.createElement(w.a,{visible:this.state.miniPopVisible,confirm:this.miniPopOk,cancel:this.miniPopCancel}))}}]),a}(u.a.Component))||n)||n)||n;t.a=y},1479:function(e,t,a){},1480:function(e,t,a){},1487:function(e,t,a){e.exports=a.p+"static/media/wallet.54d00c4e.svg"},1488:function(e,t,a){e.exports=a.p+"static/media/arrow-right-long.97fae796.svg"},1517:function(e,t,a){"use strict";var n,s=a(67),i=a(0),o=a.n(i),r=a(2),c=a(6),l=a(7),p=a(10),m=a(11),u=a(1),d=a.n(u),g=a(29),v=a.n(g),b=a(170),f=a(217),h=a(1526),k=a(1466),E=a(1134),N=a(62),w=a(1478),O=a(13),x=a(8),j=a(99),S=a.n(j),T=(a(1041),a(97)),y=a(967),C=a(267),D=a(262),A=a.n(D),_=a(268),L=a.n(_),R=a(1487),V=a.n(R),B=a(1488),M=a.n(B),q=a(132),I=d.a.createElement(q.a,{style:{fontSize:24},spin:!0}),P=null,U=Object(f.b)("network")(n=Object(f.b)("pool")(n=Object(f.c)(n=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.unmount=!1,t=setInterval((function(){n.props.network.isConnected&&(n.timer=setInterval((function(){n.getLiquidityUserData()}),3e3),n.getLiquidityUserData(),clearInterval(t))}),1e3);case 2:case"end":return e.stop()}}),e)}))),n.componentWillUnmount=function(){n.unmount=!0,clearInterval(n.timer)},n.addLiq=function(e){n.props.pool.setData({actionLiqV2:1,tokenTwoFixed:!0,tokenInfo:e})},n.removeLiq=function(e){if(!(e.tokens.times(O.a.defaultTokenPrecision).integerValue(x.a.ROUND_DOWN).gt(0)&&e.trx.times(O.a.trxPrecision).integerValue(x.a.ROUND_DOWN).gt(0)&&e.value.times(O.a.defaultTokenPrecision).integerValue(x.a.ROUND_DOWN).gt(0)))return!1;e.tokens.lte(0)||n.props.pool.setData({actionLiqV2:2,tokenInfo:e})},n.migrateLiq=function(){var e=Object(r.a)(o.a.mark((function e(t){var a,s,i,r,c,l,p,m,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O.a.wtrxAddress,s=t.tokenAddress,i=n.props.network.defaultAccount,e.next=5,Object(N.n)(i,s,a);case 5:r=e.sent,c=r.exchangeAddr,l=r.exTokenABalance,p=r.exTokenBBalance,m=r.totalLiquidity,u={exchangeAddr:c,exTokenABalance:l,exTokenBBalance:p,totalLiquidity:m},n.setState({migrateModalVisbile:!0,migrateData:t,migrateDataV2:u});case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.hasContractV2=function(){var e=Object(r.a)(o.a.mark((function e(t){var a,n,s,i,r,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O.a.wtrxAddress,n=t.tokenAddress,s=Object(x.j)(a,n),i=O.a.chain,r=new S.a({fullHost:i.fullHost}),e.next=7,r.trx.getContract(s);case 7:if(c=e.sent,"{}"!==JSON.stringify(c)){e.next=12;break}return e.abrupt("return",!1);case 12:return!0,e.abrupt("return",!0);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.hideMigrateModal=function(e){n.setState({migrateModalVisbile:!1})},n.changeAndFree=function(){n.props.pool.setData({actionLiqV2:1,tokenTwoFixed:!1,tokenInfo:{tokenAddress:"",tokenSymbol:""},tokenDetail:{trx:new x.a(0),value:new x.a(0),tokens:new x.a(0),price1:"--",price2:"--",exTrx:new x.a(0)}})},n.getContractData=Object(r.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t=n.state.currentPage,!((a=n.props.pool.originLiquidityList.slice((t-1)*n.pageSize,(t-1)*n.pageSize+n.pageSize)).length>0)){e.next=8;break}if(n.props.pool.originLiquidityList.map((function(e){var t=a.filter((function(t){t.tokenAddress,e.tokenAddress}));t.length>0&&Object.assign(e,t[0])})),!n.unmount){e.next=7;break}return e.abrupt("return");case 7:t===n.state.currentPage&&n.setState({liquidityList:a});case 8:e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])}))),n.onChange=function(){var e=Object(r.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({currentPage:t},(function(){n.getContractData()}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.showLoginModal=function(e){n.props.network.connectWallet()},n.timer=0,n.unmount=!1,n.pageSize=3,n.state={currentPage:1,liquidityList:[],version:window.localStorage.getItem("swapVersion")||"v1.0",migrateModalVisbile:!1,migrateData:"",status:!1},n}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){var a=this;e.pool.version!==t.version&&this.setState({currentPage:1,liquidityList:[],version:e.pool.version,status:!1},(function(){a.getLiquidityUserData(),P=setTimeout((function(){a.setState({status:!0}),clearTimeout(P)}),3500)}))}},{key:"getLiquidityUserData",value:function(){var e=Object(r.a)(o.a.mark((function e(){var t,a,n,i,r,c,l,p,m,u,d,g,v,b;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props.network.defaultAccount){e.next=3;break}return e.abrupt("return");case 3:return a=this.props.pool,n=a.originLiquidityList,void 0===n?[]:n,i=a.version,r="v1.5"===i?2:1,e.next=7,T.a.getLiquidityUserList(t);case 7:c=e.sent,l=c.filter((function(e){return new x.a(e.jswapBalance).gt(0)&&e.ver===r})),p=[],m=Object(s.a)(l);try{for(m.s();!(u=m.n()).done;)d=u.value,new x.a(d.jswapBalance).gt(0)&&p.push(d.address)}catch(o){m.e(o)}finally{m.f()}return e.next=14,Object(N.p)(this.props.network.defaultAccount,p);case 14:g=e.sent,v=0;case 16:if(!(v<(null===(b=g._trx)||void 0===b?void 0:b.length))){e.next=27;break}return l[v].trx=new x.a(g._trx[v]._hex).div(new x.a(10).pow(6)),l[v].value=new x.a(g._token[v]._hex).div(new x.a(10).pow(l[v].tokenDecimal)),l[v].tokens=new x.a(g._uniToken[v]._hex).div(new x.a(10).pow(6)),l[v].share=new x.a(g._uniToken[v]._hex).times(100).div(new x.a(g._totalsupply[v]._hex)),e.next=23,this.hasContractV2(l[v]);case 23:l[v].hasContractV2=e.sent;case 24:v++,e.next=16;break;case 27:l=l.filter((function(e){return Object(x.a)(e.tokens).gt(0)})),this.props.pool.setData({originLiquidityList:l}),1===this.state.currentPage&&this.getContractData();case 31:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.liquidityList,n=t.status,s=this.props.network.isConnected,i=this.props.pool,o=i.originLiquidityList,r=void 0===o?[]:o,c=(i.version,a.length),l=v.a.options.currentLocale;return P&&clearTimeout(P),P=setTimeout((function(){e.setState({status:!0}),clearTimeout(P)}),3500),d.a.createElement(h.a,{className:"pool-content"},d.a.createElement(y.a,{type:"single",info:v.a.get("pool.base_addLiq_btn"),onClick:this.changeAndFree}),d.a.createElement(C.a,{tip:d.a.createElement("div",{className:"pool-tooltip-text"},v.a.get("pool.base_list_title_tip")),children:v.a.get("pool.base_list_title")+(n&&c>0&&r.length>0?"(".concat(r.length,")"):""),toolClass:"common-tool",titleClass:"common-tool-title",tail:!0,placement:b.a?"left":"bottom"}),!n&&d.a.createElement("section",{className:"err-list loading-section"},d.a.createElement(k.a,{indicator:I,className:"spiny loading-spiny"}),d.a.createElement("span",{className:"loading-text"},v.a.get("loading"))),n&&(s?d.a.createElement(d.a.Fragment,null,d.a.createElement("section",{className:c>0?"base-list":"err-list"},c>0&&r.length>0?d.a.createElement("div",null,d.a.createElement("ul",null,a.map((function(t,a){return d.a.createElement("li",{className:"item",key:t.address},d.a.createElement("div",{className:"line-name flex between"},d.a.createElement("div",{className:"inline-flex"},d.a.createElement("img",{className:"logo",src:L.a,alt:""}),d.a.createElement("img",{className:"logo",src:t.tokenLogoUrl||A.a,onError:function(e){e.target.onerror=null,e.target.src=A.a},alt:""}),d.a.createElement("div",null,d.a.createElement("span",{className:"name"},t.tokenSymbol,d.a.createElement("span",{className:"symbol"},"/"),"TRX"),d.a.createElement("a",{className:"link",href:"/?lang="+l+"#/scan/detail/"+t.tokenAddress,target:"_blank"},v.a.get("pool.base_info_link")))),d.a.createElement("div",{className:"inline-flex actions actions-new"},!Object.keys(O.a.deflationToken).includes(t.tokenAddress)&&t.hasContractV2&&t.tokens.gt(0)&&t.trx.gt(0)&&t.value.gt(0)&&d.a.createElement("span",{className:"link migrate",onClick:function(a){return e.migrateLiq(t)}},v.a.get("migrate.title")),d.a.createElement("div",{className:"inline-flex"},d.a.createElement("span",{className:"link",onClick:function(a){return e.addLiq(t)}},v.a.get("pool.base_increase_link")),d.a.createElement("span",{className:"link ".concat(t.tokens.times(O.a.trxPrecision).integerValue(x.a.ROUND_DOWN).gt(0)&&t.trx.times(O.a.trxPrecision).integerValue(x.a.ROUND_DOWN).gt(0)&&t.value.times(O.a.defaultTokenPrecision).integerValue(x.a.ROUND_DOWN).gt(0)?"":"disabled"),onClick:function(a){return e.removeLiq(t)}},v.a.get("pool.base_remove_link"))))),d.a.createElement("div",{className:"line-value "},d.a.createElement("div",{className:"flex between"},d.a.createElement("p",null,v.a.get("pool.base_amount_text"),d.a.createElement("span",{className:"name"},t.tokenSymbol,d.a.createElement("span",{className:"symbol"},"/"),"TRX")),d.a.createElement("p",null,d.a.createElement("span",{className:"name"},v.a.get("pool.base_tokens_text"),d.a.createElement("span",{className:"symbol"},"/"),v.a.get("pool.base_share_text")))),d.a.createElement("div",{className:"flex between"},d.a.createElement("p",null,t.value&&d.a.createElement("span",{className:"value"},t.value._toFixed(4,1),d.a.createElement("span",{className:"symbol"},"/"),t.trx._toFixed(4,1))),d.a.createElement("p",null,t.value&&d.a.createElement("span",{className:"value"},Object(x.o)(t.tokens,{miniText:1e-4,cutZero:!0,dp:4}),d.a.createElement("span",{className:"symbol"},"/"),t.share.gt(0)&&t.share.lt(.01)?"<0.01":isNaN(t.share._toFixed(2,1))?"--":t.share._toFixed(2,1),"%")))))}))),d.a.createElement(E.a,{current:this.state.currentPage,pageSize:3,size:"small",onChange:this.onChange,total:r.length,hideOnSinglePage:!0})):v.a.get("pool.base_noLiquidity_tip"))):d.a.createElement("section",{className:"err-list"},d.a.createElement("span",{className:"wallet-link",onClick:function(t){e.showLoginModal(t)}},d.a.createElement("img",{src:V.a}),d.a.createElement("span",null,v.a.get("pool.base_notConnect_tip")),d.a.createElement("img",{src:M.a})))),this.state.migrateModalVisbile&&d.a.createElement(w.a,{visible:this.state.migrateModalVisbile,hideMigrateModal:this.hideMigrateModal,migrateData:this.state.migrateData,migrateDataV2:this.state.migrateDataV2,onChange:this.onChange,version:this.props.pool.version}))}}]),a}(d.a.Component))||n)||n)||n;t.a=U},1546:function(e,t,a){"use strict";a.r(t);var n,s=a(6),i=a(7),o=a(10),r=a(11),c=a(1),l=a.n(c),p=a(217),m=a(1517),u=Object(p.b)("network")(n=Object(p.c)(n=function(e){Object(o.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.a,null))}}]),a}(l.a.Component))||n)||n;t.default=u},967:function(e,t,a){"use strict";var n=a(6),s=a(7),i=a(10),o=a(11),r=a(1),c=a.n(r),l=(a(29),a(170),a(1148),function(e){Object(i.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).onClick=function(){s.props.disabled||s.props.state||s.props.onClick&&s.props.onClick()},s.onLeftClick=function(){s.props.lDisabled||s.props.lState||s.props.onLeftClick&&s.props.onLeftClick()},s.onMiddleClick=function(){s.props.mDisabled||s.props.mState||s.props.onMiddleClick&&s.props.onMiddleClick()},s.onRightClick=function(){s.props.rDisabled||s.props.rState||s.props.onRightClick&&s.props.onRightClick()},s.state={},s}return Object(s.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"trisection":e=c.a.createElement("div",null,c.a.createElement("button",{className:"trisection "+(this.props.lDisabled?"gray":this.props.lState?this.props.lState:"blue"),onClick:this.onLeftClick},this.props.lInfo),c.a.createElement("button",{className:"trisection "+(this.props.mDisabled?"gray":this.props.mState?this.props.mState:"blue"),onClick:this.onMiddleClick},this.props.mInfo),c.a.createElement("button",{className:"trisection "+(this.props.rDisabled?"gray":this.props.rState?this.props.rState:"blue"),onClick:this.onRightClick},this.props.rInfo));break;case"half":e=c.a.createElement("div",null,c.a.createElement("button",{className:"half "+(this.props.lDisabled?"gray":this.props.lState?this.props.lState:"blue"),onClick:this.onLeftClick},this.props.lInfo),c.a.createElement("button",{className:"half "+(this.props.rDisabled?"gray":this.props.rState?this.props.rState:"blue"),onClick:this.onRightClick},this.props.rInfo));break;case"single":default:e=c.a.createElement("button",{className:"single "+(this.props.disabled?"gray":this.props.state?this.props.state:this.props.btnColor?this.props.btnColor:"blue"),onClick:this.onClick},this.props.info)}return c.a.createElement(c.a.Fragment,null,e)}}]),a}(c.a.Component));t.a=l}}]);