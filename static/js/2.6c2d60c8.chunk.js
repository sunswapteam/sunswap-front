(this["webpackJsonpswap-front"]=this["webpackJsonpswap-front"]||[]).push([[2],{1062:function(e,t,n){"use strict";var a=n(20),r=n(10),o=n(1),i=n(25),c=n.n(i),l=n(1387),s=n(1064),u=n(22),p=n(16),f=n(233),d=n(117),v=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},m=o.createContext(null),b=function(e,t){var n=e.defaultValue,i=e.children,l=e.options,s=void 0===l?[]:l,b=e.prefixCls,y=e.className,g=e.style,O=e.onChange,h=v(e,["defaultValue","children","options","prefixCls","className","style","onChange"]),C=o.useContext(d.b),j=C.getPrefixCls,w=C.direction,N=o.useState(h.value||n||[]),E=Object(p.a)(N,2),k=E[0],P=E[1],S=o.useState([]),D=Object(p.a)(S,2),T=D[0],R=D[1];o.useEffect((function(){"value"in h&&P(h.value||[])}),[h.value]);var V=function(){return s.map((function(e){return"string"===typeof e||"number"===typeof e?{label:e,value:e}:e}))},I=j("checkbox",b),L="".concat(I,"-group"),A=Object(f.a)(h,["value","disabled"]);s&&s.length>0&&(i=V().map((function(e){return o.createElement(x,{prefixCls:I,key:e.value.toString(),disabled:"disabled"in e?e.disabled:h.disabled,value:e.value,checked:-1!==k.indexOf(e.value),onChange:e.onChange,className:"".concat(L,"-item"),style:e.style},e.label)})));var M={toggleOption:function(e){var t=k.indexOf(e.value),n=Object(u.a)(k);-1===t?n.push(e.value):n.splice(t,1),"value"in h||P(n);var a=V();null===O||void 0===O||O(n.filter((function(e){return-1!==T.indexOf(e)})).sort((function(e,t){return a.findIndex((function(t){return t.value===e}))-a.findIndex((function(e){return e.value===t}))})))},value:k,disabled:h.disabled,name:h.name,registerValue:function(e){R((function(t){return[].concat(Object(u.a)(t),[e])}))},cancelValue:function(e){R((function(t){return t.filter((function(t){return t!==e}))}))}},K=c()(L,Object(a.a)({},"".concat(L,"-rtl"),"rtl"===w),y);return o.createElement("div",Object(r.a)({className:K,style:g},A,{ref:t}),o.createElement(m.Provider,{value:M},i))},y=o.forwardRef(b),g=o.memo(y),O=n(63),h=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},C=function(e,t){var n,i=e.prefixCls,u=e.className,p=e.children,f=e.indeterminate,v=void 0!==f&&f,b=e.style,y=e.onMouseEnter,g=e.onMouseLeave,C=e.skipGroup,j=void 0!==C&&C,x=h(e,["prefixCls","className","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup"]),w=o.useContext(d.b),N=w.getPrefixCls,E=w.direction,k=o.useContext(m),P=Object(o.useContext)(s.a).isFormItemInput,S=o.useRef(x.value);o.useEffect((function(){null===k||void 0===k||k.registerValue(x.value),Object(O.a)("checked"in x||!!k||!("value"in x),"Checkbox","`value` is not a valid prop, do you mean `checked`?")}),[]),o.useEffect((function(){if(!j)return x.value!==S.current&&(null===k||void 0===k||k.cancelValue(S.current),null===k||void 0===k||k.registerValue(x.value),S.current=x.value),function(){return null===k||void 0===k?void 0:k.cancelValue(x.value)}}),[x.value]);var D=N("checkbox",i),T=Object(r.a)({},x);k&&!j&&(T.onChange=function(){x.onChange&&x.onChange.apply(x,arguments),k.toggleOption&&k.toggleOption({label:p,value:x.value})},T.name=k.name,T.checked=-1!==k.value.indexOf(x.value),T.disabled=x.disabled||k.disabled);var R=c()((n={},Object(a.a)(n,"".concat(D,"-wrapper"),!0),Object(a.a)(n,"".concat(D,"-rtl"),"rtl"===E),Object(a.a)(n,"".concat(D,"-wrapper-checked"),T.checked),Object(a.a)(n,"".concat(D,"-wrapper-disabled"),T.disabled),Object(a.a)(n,"".concat(D,"-wrapper-in-form-item"),P),n),u),V=c()(Object(a.a)({},"".concat(D,"-indeterminate"),v)),I=v?"mixed":void 0;return o.createElement("label",{className:R,style:b,onMouseEnter:y,onMouseLeave:g},o.createElement(l.a,Object(r.a)({"aria-checked":I},T,{prefixCls:D,className:V,ref:t})),void 0!==p&&o.createElement("span",null,p))},j=o.forwardRef(C);j.displayName="Checkbox";var x=j,w=x;w.Group=g,w.__ANT_CHECKBOX=!0;t.a=w},1063:function(e,t,n){"use strict";var a=n(10),r=n(30),o=n(20),i=n(1),c=n(1444),l=n(25),s=n.n(l),u=n(1069),p=n(16),f=n(1423),d=n(135),v=n(117),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},b=d.a.Group,y=function(e){var t=i.useContext(v.b),n=t.getPopupContainer,r=t.getPrefixCls,o=t.direction,c=e.prefixCls,l=e.type,u=void 0===l?"default":l,y=e.disabled,g=e.loading,O=e.onClick,h=e.htmlType,C=e.children,j=e.className,x=e.overlay,N=e.trigger,E=e.align,k=e.visible,P=e.onVisibleChange,S=e.placement,D=e.getPopupContainer,T=e.href,R=e.icon,V=void 0===R?i.createElement(f.a,null):R,I=e.title,L=e.buttonsRender,A=void 0===L?function(e){return e}:L,M=e.mouseEnterDelay,K=e.mouseLeaveDelay,F=e.overlayClassName,U=e.overlayStyle,B=e.destroyPopupOnHide,W=m(e,["prefixCls","type","disabled","loading","onClick","htmlType","children","className","overlay","trigger","align","visible","onVisibleChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide"]),_=r("dropdown-button",c),H={align:E,overlay:x,disabled:y,trigger:y?[]:N,onVisibleChange:P,getPopupContainer:D||n,mouseEnterDelay:M,mouseLeaveDelay:K,overlayClassName:F,overlayStyle:U,destroyPopupOnHide:B};"visible"in e&&(H.visible=k),H.placement="placement"in e?S:"rtl"===o?"bottomLeft":"bottomRight";var G=A([i.createElement(d.a,{type:u,disabled:y,loading:g,onClick:O,htmlType:h,href:T,title:I},C),i.createElement(d.a,{type:u,icon:V})]),q=Object(p.a)(G,2),z=q[0],$=q[1];return i.createElement(b,Object(a.a)({},W,{className:s()(_,j)}),z,i.createElement(w,H,$))};y.__ANT_BUTTON=!0;var g=y,O=n(63),h=n(90),C=n(98),j=n(309),x=(Object(h.a)("topLeft","topCenter","topRight","bottomLeft","bottomCenter","bottomRight","top","bottom"),function(e){var t,n=i.useContext(v.b),l=n.getPopupContainer,p=n.getPrefixCls,f=n.direction,d=e.arrow,m=e.prefixCls,b=e.children,y=e.trigger,g=e.disabled,h=e.getPopupContainer,x=e.overlayClassName,w=p("dropdown",m),N=i.Children.only(b),E=Object(C.a)(N,{className:s()("".concat(w,"-trigger"),Object(o.a)({},"".concat(w,"-rtl"),"rtl"===f),N.props.className),disabled:g}),k=s()(x,Object(o.a)({},"".concat(w,"-rtl"),"rtl"===f)),P=g?[]:y;P&&-1!==P.indexOf("contextMenu")&&(t=!0);var S=Object(j.a)({arrowPointAtCenter:"object"===Object(r.a)(d)&&d.pointAtCenter,autoAdjustOverflow:!0});return i.createElement(c.a,Object(a.a)({alignPoint:t},e,{builtinPlacements:S,arrow:!!d,overlayClassName:k,prefixCls:w,getPopupContainer:h||l,transitionName:function(){var t=p(),n=e.placement,a=void 0===n?"":n,r=e.transitionName;return void 0!==r?r:a.indexOf("top")>=0?"".concat(t,"-slide-down"):"".concat(t,"-slide-up")}(),trigger:P,overlay:function(){return function(t){var n,a=e.overlay;n="function"===typeof a?a():a;var r=(n=i.Children.only("string"===typeof n?i.createElement("span",null,n):n)).props;Object(O.a)(!r.mode||"vertical"===r.mode,"Dropdown",'mode="'.concat(r.mode,"\" is not supported for Dropdown's Menu."));var o=r.selectable,c=void 0!==o&&o,l=r.expandIcon,s="undefined"!==typeof l&&i.isValidElement(l)?l:i.createElement("span",{className:"".concat(t,"-menu-submenu-arrow")},i.createElement(u.a,{className:"".concat(t,"-menu-submenu-arrow-icon")}));return"string"===typeof n.type?n:Object(C.a)(n,{mode:"vertical",selectable:c,expandIcon:s})}(w)},placement:function(){var t=e.placement;if(!t)return"rtl"===f?"bottomRight":"bottomLeft";if(t.includes("Center")){var n=t.slice(0,t.indexOf("Center"));return Object(O.a)(!t.includes("Center"),"Dropdown","You are using '".concat(t,"' placement in Dropdown, which is deprecated. Try to use '").concat(n,"' instead.")),n}return t}()}),E)});x.Button=g,x.defaultProps={mouseEnterDelay:.15,mouseLeaveDelay:.1};var w=x;t.a=w},1377:function(e,t,n){var a=n(249),r=n(1428),o=n(1429),i=Math.max,c=Math.min;e.exports=function(e,t,n){var l,s,u,p,f,d,v=0,m=!1,b=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=l,a=s;return l=s=void 0,v=t,p=e.apply(a,n)}function O(e){return v=e,f=setTimeout(C,t),m?g(e):p}function h(e){var n=e-d;return void 0===d||n>=t||n<0||b&&e-v>=u}function C(){var e=r();if(h(e))return j(e);f=setTimeout(C,function(e){var n=t-(e-d);return b?c(n,u-(e-v)):n}(e))}function j(e){return f=void 0,y&&l?g(e):(l=s=void 0,p)}function x(){var e=r(),n=h(e);if(l=arguments,s=this,d=e,n){if(void 0===f)return O(d);if(b)return clearTimeout(f),f=setTimeout(C,t),g(d)}return void 0===f&&(f=setTimeout(C,t)),p}return t=o(t)||0,a(n)&&(m=!!n.leading,u=(b="maxWait"in n)?i(o(n.maxWait)||0,t):u,y="trailing"in n?!!n.trailing:y),x.cancel=function(){void 0!==f&&clearTimeout(f),v=0,l=d=s=f=void 0},x.flush=function(){return void 0===f?p:j(r())},x}},1387:function(e,t,n){"use strict";var a=n(10),r=n(20),o=n(46),i=n(9),c=n(35),l=n(36),s=n(43),u=n(44),p=n(1),f=n.n(p),d=n(25),v=n.n(d),m=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(e){var a;Object(c.a)(this,n),(a=t.call(this,e)).handleChange=function(e){var t=a.props,n=t.disabled,r=t.onChange;n||("checked"in a.props||a.setState({checked:e.target.checked}),r&&r({target:Object(i.a)(Object(i.a)({},a.props),{},{checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},a.saveInput=function(e){a.input=e};var r="checked"in e?e.checked:e.defaultChecked;return a.state={checked:r},a}return Object(l.a)(n,[{key:"focus",value:function(){this.input.focus()}},{key:"blur",value:function(){this.input.blur()}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,i=t.className,c=t.style,l=t.name,s=t.id,u=t.type,p=t.disabled,d=t.readOnly,m=t.tabIndex,b=t.onClick,y=t.onFocus,g=t.onBlur,O=t.onKeyDown,h=t.onKeyPress,C=t.onKeyUp,j=t.autoFocus,x=t.value,w=t.required,N=Object(o.a)(t,["prefixCls","className","style","name","id","type","disabled","readOnly","tabIndex","onClick","onFocus","onBlur","onKeyDown","onKeyPress","onKeyUp","autoFocus","value","required"]),E=Object.keys(N).reduce((function(e,t){return"aria-"!==t.substr(0,5)&&"data-"!==t.substr(0,5)&&"role"!==t||(e[t]=N[t]),e}),{}),k=this.state.checked,P=v()(n,i,(e={},Object(r.a)(e,"".concat(n,"-checked"),k),Object(r.a)(e,"".concat(n,"-disabled"),p),e));return f.a.createElement("span",{className:P,style:c},f.a.createElement("input",Object(a.a)({name:l,id:s,type:u,required:w,readOnly:d,disabled:p,tabIndex:m,className:"".concat(n,"-input"),checked:!!k,onClick:b,onFocus:y,onBlur:g,onKeyUp:C,onKeyDown:O,onKeyPress:h,onChange:this.handleChange,autoFocus:j,ref:this.saveInput,value:x},E)),f.a.createElement("span",{className:"".concat(n,"-inner")}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"checked"in e?Object(i.a)(Object(i.a)({},t),{},{checked:e.checked}):null}}]),n}(p.Component);m.defaultProps={prefixCls:"rc-checkbox",className:"",style:{},type:"checkbox",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){},onKeyDown:function(){},onKeyPress:function(){},onKeyUp:function(){}},t.a=m},1388:function(e,t,n){"use strict";var a=n(10),r=n(20),o=n(35),i=n(36),c=n(43),l=n(44),s=n(1),u=n(25),p=n.n(u),f=n(233),d=n(1377),v=n.n(d),m=n(117),b=n(90),y=n(98),g=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},O=(Object(b.a)("small","default","large"),null);var h=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var i;Object(o.a)(this,n),(i=t.call(this,e)).debouncifyUpdateSpinning=function(e){var t=(e||i.props).delay;t&&(i.cancelExistingSpin(),i.updateSpinning=v()(i.originalUpdateSpinning,t))},i.updateSpinning=function(){var e=i.props.spinning;i.state.spinning!==e&&i.setState({spinning:e})},i.renderSpin=function(e){var t,n=e.direction,o=i.props,c=o.spinPrefixCls,l=o.className,u=o.size,d=o.tip,v=o.wrapperClassName,m=o.style,b=g(o,["spinPrefixCls","className","size","tip","wrapperClassName","style"]),h=i.state.spinning,C=p()(c,(t={},Object(r.a)(t,"".concat(c,"-sm"),"small"===u),Object(r.a)(t,"".concat(c,"-lg"),"large"===u),Object(r.a)(t,"".concat(c,"-spinning"),h),Object(r.a)(t,"".concat(c,"-show-text"),!!d),Object(r.a)(t,"".concat(c,"-rtl"),"rtl"===n),t),l),j=Object(f.a)(b,["spinning","delay","indicator","prefixCls"]),x=s.createElement("div",Object(a.a)({},j,{style:m,className:C,"aria-live":"polite","aria-busy":h}),function(e,t){var n=t.indicator,a="".concat(e,"-dot");return null===n?null:Object(y.b)(n)?Object(y.a)(n,{className:p()(n.props.className,a)}):Object(y.b)(O)?Object(y.a)(O,{className:p()(O.props.className,a)}):s.createElement("span",{className:p()(a,"".concat(e,"-dot-spin"))},s.createElement("i",{className:"".concat(e,"-dot-item")}),s.createElement("i",{className:"".concat(e,"-dot-item")}),s.createElement("i",{className:"".concat(e,"-dot-item")}),s.createElement("i",{className:"".concat(e,"-dot-item")}))}(c,i.props),d?s.createElement("div",{className:"".concat(c,"-text")},d):null);if(i.isNestedPattern()){var w=p()("".concat(c,"-container"),Object(r.a)({},"".concat(c,"-blur"),h));return s.createElement("div",Object(a.a)({},j,{className:p()("".concat(c,"-nested-loading"),v)}),h&&s.createElement("div",{key:"loading"},x),s.createElement("div",{className:w,key:"container"},i.props.children))}return x};var c=e.spinning,l=function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(c,e.delay);return i.state={spinning:c&&!l},i.originalUpdateSpinning=i.updateSpinning,i.debouncifyUpdateSpinning(e),i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return s.createElement(m.a,null,this.renderSpin)}}]),n}(s.Component);h.defaultProps={spinning:!0,size:"default",wrapperClassName:""};var C=function(e){var t=e.prefixCls,n=(0,s.useContext(m.b).getPrefixCls)("spin",t),r=Object(a.a)(Object(a.a)({},e),{spinPrefixCls:n});return s.createElement(h,r)};C.setDefaultIndicator=function(e){O=e},t.a=C},1428:function(e,t,n){var a=n(91);e.exports=function(){return a.Date.now()}},1429:function(e,t,n){var a=n(1430),r=n(249),o=n(1432),i=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(o(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=a(e);var n=c.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):i.test(e)?NaN:+e}},1430:function(e,t,n){var a=n(1431),r=/^\s+/;e.exports=function(e){return e?e.slice(0,a(e)+1).replace(r,""):e}},1431:function(e,t){var n=/\s/;e.exports=function(e){for(var t=e.length;t--&&n.test(e.charAt(t)););return t}},1432:function(e,t,n){var a=n(158),r=n(159);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==a(e)}},1444:function(e,t,n){"use strict";var a=n(9),r=n(20),o=n(16),i=n(46),c=n(1),l=n(252),s=n(25),u=n.n(s),p={adjustX:1,adjustY:1},f=[0,0],d={topLeft:{points:["bl","tl"],overflow:p,offset:[0,-4],targetOffset:f},topCenter:{points:["bc","tc"],overflow:p,offset:[0,-4],targetOffset:f},topRight:{points:["br","tr"],overflow:p,offset:[0,-4],targetOffset:f},bottomLeft:{points:["tl","bl"],overflow:p,offset:[0,4],targetOffset:f},bottomCenter:{points:["tc","bc"],overflow:p,offset:[0,4],targetOffset:f},bottomRight:{points:["tr","br"],overflow:p,offset:[0,4],targetOffset:f}},v=n(201),m=v.a.ESC,b=v.a.TAB;function y(e){var t=e.visible,n=e.setTriggerVisible,a=e.triggerRef,r=e.menuRef,o=e.onVisibleChange,i=function(){var e,r,i,c;t&&a.current&&(null===(e=a.current)||void 0===e||null===(r=e.triggerRef)||void 0===r||null===(i=r.current)||void 0===i||null===(c=i.focus)||void 0===c||c.call(i),n(!1),"function"===typeof o&&o(!1))},l=function(e){switch(e.keyCode){case m:case b:i()}};c.useEffect((function(){return t?(setTimeout((function(){!function(){var e,t;null===(e=r.current)||void 0===e||null===(t=e.focus)||void 0===t||t.call(e)}(),window.addEventListener("keydown",l)}),100),function(){window.removeEventListener("keydown",l)}):function(){return null}}),[t]);return{returnFocus:function(){t&&setTimeout((function(){var e,t,n,r;null===(e=a.current)||void 0===e||null===(t=e.triggerRef)||void 0===t||null===(n=t.current)||void 0===n||null===(r=n.focus)||void 0===r||r.call(n)}),100)}}}var g=n(82),O=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger"];function h(e,t){var n=e.arrow,s=void 0!==n&&n,p=e.prefixCls,f=void 0===p?"rc-dropdown":p,v=e.transitionName,m=e.animation,b=e.align,h=e.placement,C=void 0===h?"bottomLeft":h,j=e.placements,x=void 0===j?d:j,w=e.getPopupContainer,N=e.showAction,E=e.hideAction,k=e.overlayClassName,P=e.overlayStyle,S=e.visible,D=e.trigger,T=void 0===D?["hover"]:D,R=Object(i.a)(e,O),V=c.useState(),I=Object(o.a)(V,2),L=I[0],A=I[1],M="visible"in e?S:L,K=c.useRef(null);c.useImperativeHandle(t,(function(){return K.current}));var F=c.useRef(null),U="".concat(f,"-menu"),B=y({visible:M,setTriggerVisible:A,triggerRef:K,menuRef:F,onVisibleChange:e.onVisibleChange}).returnFocus,W=function(){var t=e.overlay;return"function"===typeof t?t():t},_=function(t){var n=e.onOverlayClick,a=W().props;A(!1),n&&n(t),a.onClick&&a.onClick(t),B()},H=function(){var e,t=W(),n=Object(g.a)(F,t.ref),a=(e={prefixCls:U},Object(r.a)(e,"data-dropdown-inject",!0),Object(r.a)(e,"onClick",_),Object(r.a)(e,"ref",Object(g.c)(t)?n:void 0),e);return"string"===typeof t.type&&(delete a.prefixCls,delete a["data-dropdown-inject"]),c.createElement(c.Fragment,null,s&&c.createElement("div",{className:"".concat(f,"-arrow")}),c.cloneElement(t,a))},G=E;return G||-1===T.indexOf("contextMenu")||(G=["click"]),c.createElement(l.a,Object(a.a)(Object(a.a)({builtinPlacements:x},R),{},{prefixCls:f,ref:K,popupClassName:u()(k,Object(r.a)({},"".concat(f,"-show-arrow"),s)),popupStyle:P,action:T,showAction:N,hideAction:G||[],popupPlacement:C,popupAlign:b,popupTransitionName:v,popupAnimation:m,popupVisible:M,stretch:function(){var t=e.minOverlayWidthMatchTrigger,n=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!n}()?"minWidth":"",popup:"function"===typeof e.overlay?H:H(),onPopupVisibleChange:function(t){var n=e.onVisibleChange;A(t),"function"===typeof n&&n(t)},getPopupContainer:w}),function(){var t=e.children,n=t.props?t.props:{},a=u()(n.className,function(){var t=e.openClassName;return void 0!==t?t:"".concat(f,"-open")}());return M&&t?c.cloneElement(t,{className:a}):t}())}var C=c.forwardRef(h);t.a=C}}]);