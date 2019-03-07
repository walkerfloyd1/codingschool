if (self.CavalryLogger) { CavalryLogger.start_js(["T+x8F"]); }

__d("ScrollableArea.react",["cx","Bootloader","React","ReactDOM","ScrollBoundaryContain","Style","SubscriptionsHandler","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=b("React").PropTypes;var i="uiScrollableArea native",j="uiScrollableAreaWrap scrollable",k="uiScrollableAreaBody",l="uiScrollableAreaContent";d=babelHelpers.inherits(a,b("React").Component);h=d&&d.prototype;function a(a){h.constructor.call(this,a),this.$4=function(a){if(this.$2)return;this.$1=a.fromNative(b("ReactDOM").findDOMNode(this.refs.root),{fade:this.props.fade,persistent:this.props.persistent,shadow:this.props.shadow===void 0?!0:this.props.shadow,tabIndex:this.props.tabIndex});this.$5();(this.props.onScroll||this.props.onEndReached||this.props.onTopReached)&&this.$1&&this.$1.subscribe("scroll",this.$6)}.bind(this),this.$6=function(){this.props.onScroll&&this.props.onScroll(),this.$1&&this.$1.isScrolledToBottom()?this.props.onEndReached&&this.props.onEndReached():this.$1&&this.$1.isScrolledToTop()&&(this.props.onTopReached&&this.props.onTopReached())}.bind(this),this.$3=new(b("SubscriptionsHandler"))()}a.prototype.render=function(){var a={height:this.props.height},c=Object.assign({},this.props);delete c.maxHeight;delete c.fade;delete c.persistent;delete c.contain;return b("React").createElement("div",babelHelpers["extends"]({},c,{className:b("joinClasses")(this.props.className,i),ref:"root",role:this.props.role,style:babelHelpers["extends"]({},this.props.style||{},a)}),b("React").createElement("div",{className:j,ref:"wrap",role:this.props.role,style:{maxHeight:this.props.maxHeight}},b("React").createElement("div",{className:k,ref:"body",role:this.props.role},b("React").createElement("div",{className:l,role:this.props.contentRole||this.props.role},this.props.children))))};a.prototype.getArea=function(){return this.$1};a.prototype.componentDidMount=function(){b("Bootloader").loadModules(["ScrollableArea"],this.$4,"ScrollableArea.react");var a=b("ReactDOM").findDOMNode(this.refs.wrap);if(a&&this.props.contain){a=b("ScrollBoundaryContain").applyToElem(a);a&&this.$3.addSubscriptions(a)}};a.prototype.componentDidUpdate=function(a){a.width!==this.props.width&&this.$5();a=this.getArea();a&&a.throttledAdjustGripper()};a.prototype.componentWillUnmount=function(){this.$1&&this.$1.destroy(),this.$2=!0,this.$3.release()};a.prototype.$5=function(){var a=b("ReactDOM").findDOMNode(this.refs.body);b("Style").set(a,"width",this.props.width+"px")};a.propTypes={width:c.number,height:c.oneOfType([c.number,c.string]),maxHeight:c.oneOfType([c.number,c.string]),onScroll:c.func,onEndReached:c.func,onTopReached:c.func,shadow:c.bool,fade:c.bool,persistent:c.bool,role:c.string,contentRole:c.string,contain:c.bool};a.defaultProps={contain:!0};e.exports=a}),null);
__d("XUITextInput.react",["cx","AbstractTextInput.react","React","XUIError.react","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").Component;d=b("React").PropTypes;f=babelHelpers.inherits(a,c);h=f&&f.prototype;function a(a){"use strict";h.constructor.call(this,a),this.$1=function(a){this.props.onFocus&&this.props.onFocus(a),this.setState({focused:!0})}.bind(this),this.$2=function(a){this.props.onBlur&&this.props.onBlur(a),this.setState({focused:!1})}.bind(this),this.state={focused:!1}}a.prototype.render=function(){"use strict";var a="_55r1"+(this.props.height==="tall"?" _55r2":"")+(this.props.disabled?" _53a0":"")+(this.state.focused?" _1488":"");return b("React").createElement(b("XUIError.react"),this.props,b("React").createElement(b("AbstractTextInput.react"),babelHelpers["extends"]({},this.props,{onFocus:this.$1,onBlur:this.$2,ref:"textInput",className:b("joinClasses")(this.props.className,a)})))};a.prototype.focusInput=function(){"use strict";this.refs.textInput&&this.refs.textInput.focusInput()};a.prototype.blurInput=function(){"use strict";this.refs.textInput&&this.refs.textInput.blurInput()};a.prototype.selectInput=function(){"use strict";this.refs.textInput&&this.refs.textInput.selectInput()};a.prototype.getValue=function(){"use strict";return this.refs.textInput&&this.refs.textInput.getValue()};a.prototype.getTextFieldDOM=function(){"use strict";return this.refs.textInput?this.refs.textInput.getTextFieldDOM():null};a.defaultProps={height:"short"};a.propTypes=babelHelpers["extends"]({},b("AbstractTextInput.react").propTypes,b("XUIError.react").propTypes,{height:d.oneOf(["short","tall"])});e.exports=a}),null);
__d("SimpleNUXMessageTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:SimpleNUXMessageLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:SimpleNUXMessageLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:SimpleNUXMessageLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setEvent=function(a){this.$1.event=a;return this};a.prototype.setEventTimestamp=function(a){this.$1.event_timestamp=a;return this};a.prototype.setName=function(a){this.$1.name=a;return this};a.prototype.setNuxMessageType=function(a){this.$1.nux_message_type=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={event:!0,event_timestamp:!0,name:!0,nux_message_type:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("SimpleNUXMessageEvents",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MARK_AS_SEEN:"seen",USER_IS_ELIGIBLE:"eligible"})}),null);
__d("XSimpleNUXMessagesController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/nux/{msg_id}/seen/",{msg_id:{type:"Int",required:!0}})}),null);
__d("SimpleNUXMessage",["AsyncRequest","SimpleNUXMessageConfig","SimpleNUXMessageEvents","SimpleNUXMessageTypedLogger","SimpleNUXMessageTypesToShow","XSimpleNUXMessagesController"],(function(a,b,c,d,e,f){__p&&__p();var g=new Set();function h(a,c){var d=b("SimpleNUXMessageTypesToShow").mapping[a];new(b("SimpleNUXMessageTypedLogger"))().setNuxMessageType(a).setName(d).setEvent(c).setEventTimestamp(Math.floor(Date.now()/1e3)).log()}function a(a){var c=!b("SimpleNUXMessageTypesToShow").mapping[a];!c&&!g.has(a)&&(h(a,b("SimpleNUXMessageEvents").USER_IS_ELIGIBLE),g.add(a));return c}function c(a){delete b("SimpleNUXMessageTypesToShow").mapping[a];a=b("XSimpleNUXMessagesController").getURIBuilder().setInt("msg_id",a).getURI();new(b("AsyncRequest"))().setURI(a).send()}function d(){return b("SimpleNUXMessageConfig").isEnabled}e.exports={isEnabled:d,hasUserSeenMessage:a,markMessageSeenByUser:c}}),null);
__d("StoreBasedStateMixinHelper",["invariant","SubscriptionsHandler"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){this.$1=a,this.$2=new(b("SubscriptionsHandler"))()}a.prototype.subscribeCallback=function(a,b){__p&&__p();var c=this.$1.map(function(c){__p&&__p();var d=b!=null?function(d){b&&b(c);return a(d)}:a;if(c.hasChanged&&c.getDispatchToken&&c.addListener)return c.addListener(d);else if(c.subscribe)return c.subscribe("change",d);else if(c.addListener)return c.addListener("change",d);else g(0,574)});this.$1.length>0&&this.$2.addSubscriptions.apply(this.$2,c)};a.prototype.release=function(){this.$2.release()};e.exports=a}),null);
__d("isCanvasAppURI",["isFacebookURI"],(function(a,b,c,d,e,f){"use strict";function a(a){return b("isFacebookURI")(a)&&a.getSubdomain()==="apps"}e.exports=a}),null);
__d("memoizeByReference",["MemoizationInstrumentation"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=typeof WeakMap==="function";function a(a,c){__p&&__p();c===void 0&&(c=a.name||"unknown");var d=g?new WeakMap():new Map(),e=function(e){__p&&__p();var f=b("MemoizationInstrumentation").onFunctionCall("memoizeByReference",c);if(d.has(e)){var g=d.get(e);if(g!==void 0){f&&f(!0);return g[0]}}g=a(e);d.set(e,[g]);f&&f(!1);return g};return e}e.exports=a}),null);
__d("FluxContainerInstrumentation",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=null;function i(a,b,c){c=c||b;var d=!1;if(typeof b.getDependencyStores==="function"){var e=b.getDependencyStores();for(var f=0;f<e.length;f++)e[f].hasChanged()&&(d=d||i(a,e[f],c))}d||(a.push(b.__moduleID||"unnamed_store"),d=!0);return d}var j={updateTracking:null,inject:function(a){h==null||g(0,1394),h=a,a.updateTracking&&(j.updateTracking=a.updateTracking)},hasInstrumentation:function(){return Boolean(h)},onInit:function(a){h&&h.init(a)},onCalculateStateStart:function(a){return h?h.calculateStateStart(a):null},onDidUpdate:function(a,b,c,d,e,f){h&&h.didUpdate(a,b,c,d,e,f)},addStoreDependencies:i};e.exports=j}),null);
__d("FluxStoreGroup",["invariant"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a,b,c){this.__dispatcher=h(a);var d=a.map(function(a){return a.getDispatchToken()});this.$1=this.__dispatcher.register(function(a){this.__dispatcher.waitFor(d),b()}.bind(this),c,null,c);this.__dispatcher.explicitlyRegisterStore&&this.__dispatcher.explicitlyRegisterStore(this)}a.prototype.release=function(){this.__dispatcher.unregister(this.$1)};a.prototype.getDispatchToken=function(){return this.$1};function h(a){a&&a.length||g(0,5731);a=a[0].getDispatcher();return a}e.exports=a}),null);
__d("FluxContainerNameUtils",[],(function(a,b,c,d,e,f){"use strict";function a(a,b){if(a&&b)try{Object.defineProperty(a,"name",{value:b})}catch(a){}return a}e.exports={nameContainer:a}}),null);
__d("FluxContainerSubscriptions",["FluxStoreGroup"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,b){if(a===b)return!0;if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}function a(a,b){this.$1=[],this.$5=a||this.constructor.name,this.$6=b}a.prototype.setStores=function(a){__p&&__p();if(this.$4&&g(this.$4,a))return;this.$4=a;this.$7();this.$8();var c=!1,d=[];if(this.$6)this.$3=a.map(function(a){return a.addListener(function(){c=!0,this.$6!=null&&this.$6(a)}.bind(this))}.bind(this));else{var e=function(){c=!0};this.$3=a.map(function(a){return a.addListener(e)})}d=function(){c&&(this.$1.forEach(function(a){return a()}),c=!1)}.bind(this);this.$2=new(b("FluxStoreGroup"))(a,d,this.$5)};a.prototype.addListener=function(a){this.$1.push(a)};a.prototype.reset=function(){this.$7(),this.$8(),this.$9(),this.$10()};a.prototype.$7=function(){this.$3&&(this.$3.forEach(function(a){return a.remove()}),this.$3=null)};a.prototype.$8=function(){this.$2&&(this.$2.release(),this.$2=null)};a.prototype.$10=function(){this.$4=null};a.prototype.$9=function(){this.$1=[]};e.exports=a}),null);
__d("getModuleNameFromFluxContainer",[],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){if(a==null)return null;var b=a.match(/.* \[from (.*?)\]/);if(!b)return a;a=b[1];b=a.indexOf(".");return b>0?a.substr(0,b):a}e.exports=a}),null);
__d("FluxContainer",["FluxContainerInstrumentation","FluxContainerNameUtils","FluxContainerSubscriptions","React","getModuleNameFromFluxContainer","shallowEqual","warning"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("React").Component,h=b("React").PureComponent,i={pure:!0,pureProps:!1,withProps:!1,withContext:!1};function j(a,c){__p&&__p();var d=babelHelpers["extends"]({},i,c||{}),e,f,g=d.name,j=function(){g=g||b("getModuleNameFromFluxContainer")(f?f.displayName||f.name:null)||"FluxContainer(unknown)";return g},l=function(c,e,f){e=d.withProps?e:void 0;f=d.withContext?f:void 0;var g=b("FluxContainerInstrumentation").onCalculateStateStart(j());c=a.calculateState(c,e,f);g&&g();return c},m=function(b,c){b=d.withProps?b:void 0;c=d.withContext?c:void 0;return a.getStores(b,c)};e=function(){__p&&__p();var c,e;c=babelHelpers.inherits(g,a);e=c&&c.prototype;function g(a,c){"use strict";__p&&__p();e.constructor.call(this,a,c);this.$BasicContainer2=null;f||(f=this.constructor);this.$BasicContainer1=new(b("FluxContainerSubscriptions"))(f.displayName||f.name,b("FluxContainerInstrumentation").hasInstrumentation()?function(a){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.shouldRecord()&&(this.$BasicContainer2=this.$BasicContainer2||[],b("FluxContainerInstrumentation").addStoreDependencies(this.$BasicContainer2,a))}.bind(this):null);this.$BasicContainer1.setStores(m(a,c));this.$BasicContainer1.addListener(function(){var a=this.$BasicContainer2;this.$BasicContainer2=null;var d=b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch();this.setState(function(e,f){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.storeEmitChange(this,j(),a||[],d);return l(e,f,c)}.bind(this))}.bind(this));a=l(void 0,a,c);b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.initialState(this,j());this.state=babelHelpers["extends"]({},this.state||{},a)}g.prototype.UNSAFE_componentWillReceiveProps=function(a,c){"use strict";__p&&__p();e.UNSAFE_componentWillReceiveProps&&e.UNSAFE_componentWillReceiveProps.call(this,a,c);var f=!d.withProps||d.pureProps&&b("shallowEqual")(a,this.props),g=!d.withContext||d.pureProps&&b("shallowEqual")(c,this.context);if(g&&f)return;this.$BasicContainer1.setStores(m(a,c));var h=b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.getCurrentDispatch();this.setState(function(d){b("FluxContainerInstrumentation").updateTracking&&b("FluxContainerInstrumentation").updateTracking.receiveProps(this,j(),h);return l(d,a,c)}.bind(this))};g.prototype.componentWillUnmount=function(){"use strict";e.componentWillUnmount&&e.componentWillUnmount.call(this),this.$BasicContainer1.reset()};return g}();e=d.pure&&!(a.prototype instanceof h)?k(e):e;if(b("FluxContainerInstrumentation").hasInstrumentation()){var n=!1;e=function(){__p&&__p();var a,c;a=babelHelpers.inherits(d,e);c=a&&a.prototype;function d(a,d){"use strict";c.constructor.call(this,a,d),n||(b("FluxContainerInstrumentation").onInit(this.constructor),n=!0)}d.prototype.componentDidUpdate=function(a,d){"use strict";c.componentDidUpdate&&c.componentDidUpdate.call(this,a,d),b("FluxContainerInstrumentation").onDidUpdate(this,j(),a,this.props,d,this.state)};return d}()}b("FluxContainerNameUtils").nameContainer(e,d.name||a.displayName||a.name);return e}function k(c){__p&&__p();var d;c=babelHelpers.inherits(a,c);d=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,e=new Array(c),f=0;f<c;f++)e[f]=arguments[f];return b=(a=d.constructor).call.apply(a,[this].concat(e)),this.isPureFluxContainer=!0,b}a.prototype.shouldComponentUpdate=function(a,c){"use strict";return!b("shallowEqual")(this.props,a)||!b("shallowEqual")(this.state,c)};return a}function a(a,b,c,d){__p&&__p();var e;e=babelHelpers.inherits(f,g);e&&e.prototype;f.getStores=function(a,c){"use strict";return b(a,c)};f.calculateState=function(a,b,d){"use strict";return c(a,b,d)};f.prototype.render=function(){"use strict";return a(this.state)};function f(){"use strict";e.apply(this,arguments)}return j(f,d)}e.exports={create:j,createFunctional:a}}),null);