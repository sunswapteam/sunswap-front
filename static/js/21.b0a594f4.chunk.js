(this["webpackJsonpswap-front"]=this["webpackJsonpswap-front"]||[]).push([[21],{1041:function(e,t,a){},1045:function(e,t,a){"use strict";var n=a(6),o=a(7),r=a(10),l=a(11),i=a(1),s=a.n(i),c=a(170),m=a(29),p=a.n(m),u=a(859),d=a(8),v=(a(1149),function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).confirm=function(){o.props.confirm&&o.props.confirm()},o.cancel=function(){o.props.cancel&&o.props.cancel()},o.state={},o}return Object(o.a)(a,[{key:"render",value:function(){var e=Object(c.a)(window.navigator).any?0:64;return s.a.createElement(u.a,{footer:null,title:null,closable:!0,maskClosable:!1,visible:this.props.visible,className:"unfinished-pop",onCancel:this.cancel,style:{marginLeft:Object(d.t)()+e},width:430,centered:!0},s.a.createElement("div",{className:"title"},p.a.get("action.popTitle"),s.a.createElement("p",null,p.a.get("action.popDesc"))),s.a.createElement("div",{className:"btns"},s.a.createElement("button",{onClick:this.confirm},p.a.get("action.popQuitBtn")),s.a.createElement("button",{onClick:this.cancel},p.a.get("action.popCancelBtn"))))}}]),a}(s.a.Component));t.a=v},1046:function(e,t,a){e.exports=a.p+"static/media/TransactionSuccess.294bae05.svg"},1148:function(e,t,a){},1149:function(e,t,a){},1456:function(e,t,a){"use strict";a.d(t,"a",(function(){return _}));var n=a(0),o=a.n(n),r=a(2),l=a(6),i=a(7),s=a(16),c=a(10),m=a(11),p=a(1),u=a.n(p),d=a(1146),v=a.n(d),b=a(29),h=a.n(b),f=a(1525),k=a(79),E=a.n(k),g=(a(13),a(1476)),x=a(97),y=a(170),N=a(264),w=a(1470),S=a.n(w),_=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getChartOptions=function(){Object(s.a)(n);var e=n.state,t=e.xAxisData,a=void 0===t?[]:t,o=e.seriesData,r=void 0===o?[]:o,l=e.ymin,i=e.d_max,c=e.d_min,m=(h.a.get("swap.chart_price_title",{d_max:i,d_min:c,ymin:l}),n.props.type);return{toolbox:{feature:{saveAsImage:{}},show:!1},color:["rgba(69,77,226,0.20)"],grid:{left:"0",top:"8%",right:"10%",bottom:"2%",containLabel:!0,show:!1},xAxis:[{type:"category",boundaryGap:["20%","20%"],data:a,show:!0,axisLine:{lineStyle:{color:"#F3F3F3"}},axisLabel:{showMaxLabel:!0,fontSize:10,color:"#999"}}],yAxis:[{type:"value",axisTick:{},splitLine:{show:!1},axisLine:{lineStyle:{color:"#F3F3F3"}},axisLabel:{showMaxLabel:!1,showMinLabel:!1,fontSize:10,color:"#999",formatter:function(e){return e<100?e.toPrecision(3):Number(e.toPrecision(3))}},min:function(e){return Number((.98*e.min).toPrecision(3))},max:function(e){return Number((1.02*e.max).toPrecision(3))}}],series:[{type:void 0===m?"line":m,smooth:!0,barCategoryGap:"0",itemStyle:{normal:{lineStyle:{color:"#5915E1"}}},emphasis:{itemStyle:{borderColor:"#5915E1",borderWidth:2}},symbol:"none",markPoint:{data:[{coord:[a.length-1,r[r.length-1]],value:r[r.length-1],itemStyle:{color:"transparent"},label:{fontSize:10,backgroundColor:"#FF8E18",padding:[4,5],color:"#ffffff",borderRadius:5}}],symbol:"roundRect",symbolOffset:[0,"-100%"],symbolSize:[50,20]},markLine:{label:{show:!1},data:[{0:{lineStyle:{type:"dashed",color:"rgba(72,80,229,.5)",width:1},coord:[a.length-1,Number((.98*c).toPrecision(3))],value:Number((.98*c).toPrecision(3)),symbol:"none"},1:{symbol:"path://M1552,577C1552,574.7900390625,1553.7900390625,573,1556,573C1558.2099609375,573,1560,574.7900390625,1560,577C1560,579.2099609375,1558.2099609375,581,1556,581C1553.7900390625,581,1552,579.2099609375,1552,577Z",symbolSize:8,symbolKeepAspect:!1,coord:[a.length-1,r[r.length-1]],value:r[r.length-1]}}]},data:r}]}},n.conversionData=function(){var e=Object(r.a)(o.a.mark((function e(t){var a,r,l,i,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.getKlineData({token_address:t,granularity:"5min",time_start:parseInt((new Date).getTime()/1e3)-9e4,time_end:parseInt((new Date).getTime()/1e3),type:1}).catch((function(e){return console.log(e)}));case 2:a=e.sent,r=[],l=[],a&&a.data&&a.data.map((function(e,t){t%3===(a.data.length-1)%3&&(r.push(E()(1e3*e.t).format("HH:mm")),l.push(e.c))})),i=Math.max.apply(null,l),s=Math.min.apply(null,l),n.setState({d_max:i,d_min:s}),n.setState({xAxisData:r,seriesData:l});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.setChart=function(){var e=n.state,t=e.d_max,a=e.d_min,o=n.props.token_adddress,r=n.getChartOptions(),l=Object(y.a)(window.navigator).any?"80vw":"430px",i=n.props.token;return u.a.createElement("div",{className:"chart-content"},u.a.createElement(N.b,{to:{pathname:"scan/detail/".concat(o),search:"".concat(Object(y.a)(window.navigator).any?"?to=kline":"")},target:"".concat(Object(y.a)(window.navigator).any?"":"_blank")},u.a.createElement("div",{className:"chart-title"},u.a.createElement("div",null,u.a.createElement("h4",null,h.a.get("swap.chart_title",{token:i})),u.a.createElement("p",{dangerouslySetInnerHTML:{__html:h.a.get("swap.chart_price_title",{d_max:t,d_min:a})}})),u.a.createElement("img",{src:S.a})),u.a.createElement(v.a,{option:r,style:{height:"254px",width:l},lazyUpdate:!0,notMerge:!0})))},n.setLineChart=function(e){var t=Object(y.a)(window.navigator).any?"150px":"194px",a=Object(y.a)(window.navigator).any?"40px":"44px";return u.a.createElement(g.Sparklines,{data:e,style:{width:t,height:a}},u.a.createElement(g.SparklinesCurve,{style:{strokeWidth:1,stroke:"#5915E1",fill:"#A3A6DF",fillOpacity:"0.05"}}))},n.state={xAxisData:[],seriesData:[],token_adddress:"",d_max:0,d_min:0,ymin:0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(r.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.token_adddress,e.next=3,this.conversionData(t);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"shouldComponentUpdate",value:function(){var e=Object(r.a)(o.a.mark((function e(t,a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.token_adddress===t.token_adddress){e.next=7;break}if(this.setState({seriesData:[]}),e.t0=t.token_adddress,!e.t0){e.next=6;break}return e.next=6,this.conversionData(t.token_adddress);case 6:return e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 8:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.seriesData,t=this.props.token_adddress,a=this.setChart();return u.a.createElement("div",{className:"sparkline-content align-items-center"},e.length>0&&u.a.createElement(p.Fragment,null,u.a.createElement(f.a,{content:a,trigger:"".concat(Object(y.a)(window.navigator).any?"click":"hover"),overlayClassName:"price-chart-popover"},u.a.createElement("div",{className:"sparkline-wrap"},Object(y.a)(window.navigator).any?this.setLineChart(e):u.a.createElement(N.b,{to:{pathname:"scan/detail/".concat(t)},target:"_blank"},this.setLineChart(e))))))}}]),a}(p.Component)},1470:function(e,t,a){e.exports=a.p+"static/media/kline.6788783b.svg"},1516:function(e,t,a){"use strict";var n,o=a(17),r=a(0),l=a.n(r),i=a(2),s=a(6),c=a(7),m=a(10),p=a(11),u=a(1),d=a.n(u),v=a(29),b=a.n(v),h=(a(170),a(217)),f=a(1524),k=a(269),E=a(859),g=a(967),x=a(1045),y=a(13),N=a(62),w=a(1456),S=a(8),_=(a(1041),a(414)),O=a.n(_),C=a(262),D=a.n(C),j=a(1046),P=a.n(j),L=Object(h.b)("pool")(n=Object(h.b)("network")(n=Object(h.c)(n=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).componentDidMount=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.getUserPool();case 1:case"end":return e.stop()}}),e)}))),n.getUserPool=Object(i.a)(l.a.mark((function e(){var t,a,o,r,i,s,c,m,p,u,d,v;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.pool.tokenInfo,a=n.props.network.defaultAccount,e.next=4,Object(N.m)(a,t.tokenAddress);case 4:o=e.sent,r=o.exchangeAddr,i=o.exTokenBalance,s=o.exTrxBalance,c=o.totalLiquidity,m=o.userLiquidity,p=o.userTrxBalance,u=o.userTokenBalance,r&&(d=s.div(new S.a(10).pow(y.a.trxDecimal)),v=i.div(new S.a(10).pow(t.tokenDecimal)),d.gt(0)&&n.setState({tokenDetail:{trx:new S.a(p).div(new S.a(10).pow(y.a.trxDecimal)),value:new S.a(u).div(new S.a(10).pow(t.tokenDecimal)),tokens:new S.a(m).div(new S.a(10).pow(y.a.trxDecimal)),totalSupply:new S.a(c).div(new S.a(10).pow(y.a.trxDecimal)),price1:d.div(v),price2:v.div(d),exTrx:d,exToken:v}}));case 13:case"end":return e.stop()}}),e)}))),n.showSettingModal=function(){n.props.network.setData({settingVisible:!0})},n.setPercent=function(e){n.setState({percentNum:e})},n.userTokenInfo=function(){var e=n.state,t=e.percentNum,a=e.tokenDetail,o=n.props.pool,r=o.selectTokenOne,l=o.tokenInfo,i=t,s=function(e,t){return e.isNaN()||e.eq(1/0)?"--":e._toFixed(Number(t),1)},c=s(a.value.div(a.trx),l.tokenDecimal),m=s(a.trx.div(a.value),y.a.trxDecimal);return d.a.createElement(d.a.Fragment,null,d.a.createElement("div",null,d.a.createElement("div",{className:"action-info"},d.a.createElement("div",{className:"info-title flex between"},d.a.createElement("span",null,b.a.get("pool.base_posi_title")),d.a.createElement("p",{className:"ib yourPosi"},d.a.createElement("img",{src:r.tokenLogoUrl}),d.a.createElement("img",{src:l.tokenLogoUrl||D.a}),d.a.createElement("span",null,r.tokenSymbol),d.a.createElement("span",{className:"symbol"},"/"),d.a.createElement("span",null,l.tokenSymbol))),d.a.createElement("div",{className:"info-detail"},d.a.createElement("div",null,d.a.createElement("p",null,r.tokenSymbol),d.a.createElement("p",null,a.trx._toFixed(4,1))),d.a.createElement("div",{className:"d8line"}),d.a.createElement("div",null,d.a.createElement("p",null,l.tokenSymbol),d.a.createElement("p",null,a.value._toFixed(4,1))),d.a.createElement("div",{className:"d8line"}),d.a.createElement("div",null,d.a.createElement("p",null,b.a.get("pool.add_tokens_text")),d.a.createElement("p",null,a.tokens._toFixed(4,1))))),d.a.createElement("div",{className:"flex justify-content price-chart-wrap align-items-center"},d.a.createElement("div",{className:"token-pairs"},d.a.createElement("div",null,b.a.get("swap.detail_token_info")," "),d.a.createElement("div",null,d.a.createElement(d.a.Fragment,null,Object(S.O)(d.a.createElement(d.a.Fragment,null,d.a.createElement("img",{src:l.tokenLogoUrl,alt:"logo",onError:function(e){e.target.onerror=null,e.target.src=D.a}}),d.a.createElement("span",null,l.tokenSymbol)),l.tokenAddress)))),d.a.createElement(w.a,{token:l.tokenSymbol,token_adddress:l.tokenAddress})),d.a.createElement("div",{className:"action-ui-box"},d.a.createElement("div",{className:"action-info"},d.a.createElement("div",{className:"info-title pd0 flex between"},b.a.get("pool.remove_amount_title"),d.a.createElement("span",{className:"link fz12",onClick:n.showSettingModal},b.a.get("pool.add_set_link"))),d.a.createElement("div",{className:"schedule"},d.a.createElement("div",{className:"num"},d.a.createElement("span",{className:"percent"},i),"%"),d.a.createElement(f.a,{defaultValue:t,onChange:function(e){return n.setPercent(e)},tipFormatter:null,className:"super-slider",value:t})),d.a.createElement("div",{className:"schedule-key"},d.a.createElement("button",{className:"25"===t?"schedule-btn-active":"schedule-btn",onClick:function(e){return n.setPercent(25)}},"25%"),d.a.createElement("button",{className:"50"===t?"schedule-btn-active":"schedule-btn",onClick:function(e){return n.setPercent(50)}},"50%"),d.a.createElement("button",{className:"75"===t?"schedule-btn-active":"schedule-btn",onClick:function(e){return n.setPercent(75)}},"75%"),d.a.createElement("button",{className:"100"===t?"schedule-btn-active":"schedule-btn",onClick:function(e){return n.setPercent(100)}},b.a.get("pool.remove_max_text")))),d.a.createElement("div",{className:"convert flex"},d.a.createElement("div",{className:"token1"},d.a.createElement("p",null,0===t?0:a.trx.times(t).div(100)._toFixed(4,1)<1e-4?"<0.0001":a.trx.times(t).div(100)._toFixed(4,1)),d.a.createElement("p",null,d.a.createElement("img",{src:r.tokenLogoUrl,alt:""}),d.a.createElement("span",null,r.tokenSymbol))),d.a.createElement("div",{className:"convert-info"},d.a.createElement("p",{className:"relative"},"1 ",r.tokenSymbol," ="," ",Object(S.a)(1).div(Object(S.a)(10).pow(l.tokenDecimal)).gt(c)?"< "+Object(S.a)(1).div(Object(S.a)(10).pow(l.tokenDecimal)).toString():c," ",l.tokenSymbol,d.a.createElement("span",{className:"hook absolute"})),d.a.createElement("p",{className:"relative"},d.a.createElement("span",{className:"hook absolute"}),"1 ",l.tokenSymbol," ="," ",Object(S.a)(1).div(Object(S.a)(10).pow(r.tokenDecimal)).gt(m)?"< "+Object(S.a)(1).div(Object(S.a)(10).pow(r.tokenDecimal)).toString():m," ",r.tokenSymbol)),d.a.createElement("div",{className:"token2"},d.a.createElement("p",null,0===t?0:a.value.times(t).div(100)._toFixed(4,1)<1e-4?"<0.0001":a.value.times(t).div(100)._toFixed(4,1)),d.a.createElement("p",null,d.a.createElement("img",{src:l.tokenLogoUrl,alt:""}),d.a.createElement("span",null,l.tokenSymbol)))))))},n.setLiq=function(e){n.props.pool.setData({actionLiqV2:e})},n.beforeRemoveLiquidity=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.setState({actionStarted:!0,removePopBtn:b.a.get("action.startBtn"),removePopBtnDisabled:!0},(function(){n.removeLiquidity()}));case 1:case"end":return e.stop()}}),e)}))),n.removeLiquidity=Object(i.a)(l.a.mark((function e(){var t,a,o,r,i,s,c,m,p,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.state,a=t.percentNum,o=t.tokenDetail,r=n.props.pool.tokenInfo,i=o.tokens.times(n.state.percentNum).div(100).times(new S.a(10).pow(y.a.trxDecimal)).integerValue(S.a.ROUND_DOWN),e.next=5,Object(N.o)(r.tokenAddress,r.address);case 5:return s=e.sent,c=s.div(new S.a(10).pow(r.tokenDecimal)),m=i.times(o.exTrx).div(o.totalSupply).integerValue(S.a.ROUND_DOWN),p=i.times(c).div(o.totalSupply).integerValue(S.a.ROUND_DOWN),u={title:"pair_actions.remove",obj:{trxAmount:Object(S.n)(Object(S.a)(o.trx).times(a).div(100),6),trx:"TRX",tokenSymbol:r.tokenSymbol,tokenAmount:Object(S.n)(Object(S.a)(o.value).times(a).div(100),r.tokenDecimal)}},e.t0=N.x,e.t1=r.address,e.t2="0x".concat(i.toString(16)),e.t3="0x".concat(m.toString(16)),e.t4="0x".concat(p.toString(16)),e.next=17,Object(N.g)(n.props.network.settingDeadline);case 17:return e.t5=e.sent,e.t6=u,e.next=21,(0,e.t0)(e.t1,e.t2,e.t3,e.t4,e.t5,e.t6);case 21:e.sent?n.setState({removeErrorInfo:"",removePopBtn:b.a.get("action.doingBtn"),removePopBtnDisabled:!0,actionStarted:!0},(function(){setTimeout((function(){n.setState({actionState:"success",actionStarted:!1})}),5e3)})):n.setState({removeErrorInfo:b.a.get("action.removeActErr"),removePopBtn:b.a.get("action.retryBtn"),removePopBtnDisabled:!1,actionStarted:!0});case 23:case"end":return e.stop()}}),e)}))),n.initRemoveModal=function(){return{removeErrorInfo:"",removePopBtn:b.a.get("pool.popup_remove_btn"),removePopBtnDisabled:!1,actionState:"info",actionStarted:!1,miniPopVisible:!1}},n.showRemoveModal=function(){var e=n.state,t=e.percentNum,a=e.tokenDetail;t>0&&a.tokens.gt(0)&&n.setState(Object(o.a)(Object(o.a)({},n.initRemoveModal()),{},{removePopStatus:!0}))},n.beforeHideRemoveModal=function(){n.state.actionStarted?n.setState({miniPopVisible:!0}):n.hideRemoveModal()},n.hideRemoveModal=function(){n.setState({removePopStatus:!1},(function(){setTimeout((function(){n.setState(Object(o.a)({},n.initRemoveModal()))}),1e3)}))},n.miniPopOk=function(){n.setState({miniPopVisible:!1},(function(){n.hideRemoveModal()}))},n.miniPopCancel=function(){n.setState({miniPopVisible:!1})},n.gotoPool=function(){n.props.pool.setData({actionLiqV2:0})},n.state={percentNum:0,removePopStatus:!1,tokenDetail:{trx:new S.a(0),value:new S.a(0),tokens:new S.a(0),totalSupply:new S.a(0),price1:"--",price2:"--",exTrx:new S.a(0),exToken:new S.a(0),removeErrorInfo:"",removePopBtn:b.a.get("pool.popup_remove_btn"),removePopBtnDisabled:!1,actionState:"info",actionStarted:!1,miniPopVisible:!1}},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.percentNum,n=t.removePopStatus,o=t.tokenDetail,r=this.props.pool,l=r.selectTokenOne,i=r.tokenInfo,s=function(e,t){return e.isNaN()||e.eq(1/0)?"--":e._toFixed(Number(t),1)},c=s(o.value.div(o.trx),i.tokenDecimal),m=s(o.trx.div(o.value),y.a.trxDecimal);return d.a.createElement("section",{className:"action-content"},d.a.createElement("header",{className:"flex between"},d.a.createElement("div",null,d.a.createElement("span",{className:"return ib",onClick:function(t){return e.setLiq(0)}},d.a.createElement("img",{src:O.a,alt:"back"})),d.a.createElement("div",{className:"add-title"},b.a.get("pool.remove_liq_title"))),d.a.createElement(k.a,{title:d.a.createElement("div",{className:"pool-tooltip-text"},b.a.get("pool.remove_liq_title_tip")),overlayClassName:"pool-tooltip",placement:"bottom",color:"rgba(27,31,38,0.90)"},d.a.createElement("span",{className:"ques"},"?"))),this.userTokenInfo(),d.a.createElement("div",{className:"action-btns"},d.a.createElement("button",{className:"single "+(a>0&&o.tokens.gt(0)?"blue":"gray"),onClick:this.showRemoveModal},b.a.get("pool.remove_confirm_btn"))),d.a.createElement(E.a,{title:null,closable:"success"!==this.state.actionState,visible:n,onCancel:this.beforeHideRemoveModal,className:"pool-modal remove-modal",footer:null,style:{marginLeft:Object(S.t)()},width:630,centered:!0},"info"===this.state.actionState&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"title big"},b.a.get("pool.popup_remove_title")),d.a.createElement("div",{className:"amount ib-parent center pb25"},d.a.createElement("div",null,d.a.createElement("p",{className:"add-value"},o.trx.times(a).div(100).lt(1e-4)?"<0.0001":o.trx.times(a).div(100)._toFixed(4,1)),d.a.createElement("p",{className:"add-token"},d.a.createElement("img",{src:l.tokenLogoUrl,alt:""}),d.a.createElement("span",null,l.tokenSymbol))),d.a.createElement("span",{className:"plus"},"+"),d.a.createElement("div",null,d.a.createElement("p",{className:"add-value"},o.value.times(a).div(100).lt(1e-4)?"<0.0001":o.value.times(a).div(100)._toFixed(4,1)),d.a.createElement("p",{className:"add-token"},d.a.createElement("img",{src:i.tokenLogoUrl,alt:""}),d.a.createElement("span",null,i.tokenSymbol)))),d.a.createElement("div",{className:"price"},d.a.createElement("p",{className:"flex param"},d.a.createElement("span",{className:"price-key"},b.a.get("pool.popup_burned_text")),d.a.createElement("span",{className:"price-value"},d.a.createElement("img",{src:l.tokenLogoUrl,alt:""}),d.a.createElement("img",{src:i.tokenLogoUrl||D.a,alt:""}),d.a.createElement("span",null,o.tokens.times(a).div(100).lt(1e-4)?"<0.0001":o.tokens.times(a).div(100)._toFixed(4,1)))),d.a.createElement("div",{className:"flex param"},d.a.createElement("span",{className:"price-key"},b.a.get("pool.popup_price_text")),d.a.createElement("div",{className:"price-value ib right"},d.a.createElement("p",null,"1 ",l.tokenSymbol," = ",c," ",i.tokenSymbol),d.a.createElement("p",{className:"mb20"},"1 ",i.tokenSymbol," = ",m," ",l.tokenSymbol)))),this.state.removeErrorInfo&&d.a.createElement("div",{className:"errorMsg"},this.state.removeErrorInfo),d.a.createElement(g.a,{type:"single",disabled:this.state.removePopBtnDisabled,info:this.state.removePopBtn,onClick:this.beforeRemoveLiquidity})),"success"===this.state.actionState&&d.a.createElement(d.a.Fragment,null,d.a.createElement("div",{className:"modal-success"},d.a.createElement("img",{src:P.a,alt:""}),d.a.createElement("div",{className:"title green"},b.a.get("action.removeSuccessTitle")),d.a.createElement("div",{className:"ib-parent center mb25"},d.a.createElement("div",null,d.a.createElement("span",{className:"remove-value"},o.trx.times(a).div(100).lt(1e-4)?"<0.0001":o.trx.times(a).div(100)._toFixed(4,1)),d.a.createElement("span",{className:"remove-token"},l.tokenSymbol)),d.a.createElement("span",{className:"plus"},"+"),d.a.createElement("div",null,d.a.createElement("span",{className:"remove-value"},o.value.times(a).div(100).lt(1e-4)?"<0.0001":o.value.times(a).div(100)._toFixed(4,1)),d.a.createElement("span",{className:"remove-token"},i.tokenSymbol))),d.a.createElement(g.a,{type:"single",info:b.a.get("action.closeBtn"),onClick:this.gotoPool}),d.a.createElement("div",{className:"endTip"},b.a.get("action.removeDescTitle"))))),d.a.createElement(x.a,{visible:this.state.miniPopVisible,confirm:this.miniPopOk,cancel:this.miniPopCancel}))}}]),a}(d.a.Component))||n)||n)||n;t.a=L},1548:function(e,t,a){"use strict";a.r(t);var n,o=a(6),r=a(7),l=a(10),i=a(11),s=a(1),c=a.n(s),m=a(217),p=a(1516),u=Object(m.b)("network")(n=Object(m.c)(n=function(e){Object(l.a)(a,e);var t=Object(i.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p.a,null))}}]),a}(c.a.Component))||n)||n;t.default=u},967:function(e,t,a){"use strict";var n=a(6),o=a(7),r=a(10),l=a(11),i=a(1),s=a.n(i),c=(a(29),a(170),a(1148),function(e){Object(r.a)(a,e);var t=Object(l.a)(a);function a(e){var o;return Object(n.a)(this,a),(o=t.call(this,e)).onClick=function(){o.props.disabled||o.props.state||o.props.onClick&&o.props.onClick()},o.onLeftClick=function(){o.props.lDisabled||o.props.lState||o.props.onLeftClick&&o.props.onLeftClick()},o.onMiddleClick=function(){o.props.mDisabled||o.props.mState||o.props.onMiddleClick&&o.props.onMiddleClick()},o.onRightClick=function(){o.props.rDisabled||o.props.rState||o.props.onRightClick&&o.props.onRightClick()},o.state={},o}return Object(o.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"trisection":e=s.a.createElement("div",null,s.a.createElement("button",{className:"trisection "+(this.props.lDisabled?"gray":this.props.lState?this.props.lState:"blue"),onClick:this.onLeftClick},this.props.lInfo),s.a.createElement("button",{className:"trisection "+(this.props.mDisabled?"gray":this.props.mState?this.props.mState:"blue"),onClick:this.onMiddleClick},this.props.mInfo),s.a.createElement("button",{className:"trisection "+(this.props.rDisabled?"gray":this.props.rState?this.props.rState:"blue"),onClick:this.onRightClick},this.props.rInfo));break;case"half":e=s.a.createElement("div",null,s.a.createElement("button",{className:"half "+(this.props.lDisabled?"gray":this.props.lState?this.props.lState:"blue"),onClick:this.onLeftClick},this.props.lInfo),s.a.createElement("button",{className:"half "+(this.props.rDisabled?"gray":this.props.rState?this.props.rState:"blue"),onClick:this.onRightClick},this.props.rInfo));break;case"single":default:e=s.a.createElement("button",{className:"single "+(this.props.disabled?"gray":this.props.state?this.props.state:this.props.btnColor?this.props.btnColor:"blue"),onClick:this.onClick},this.props.info)}return s.a.createElement(s.a.Fragment,null,e)}}]),a}(s.a.Component));t.a=c}}]);