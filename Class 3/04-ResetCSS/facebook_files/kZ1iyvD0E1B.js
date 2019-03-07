if (self.CavalryLogger) { CavalryLogger.start_js(["bCRw5"]); }

__d("AppUseTrackerLogger",["AsyncRequest","PageTransitions","Run","isInIframe","pageID"],(function(a,b,c,d,e,f){__p&&__p();function g(){g.instance||(g.instance=this);return g.instance}Object.assign(g,{setup:function(a,b,c,d,e,f){new g().init(a,b,c,d,e,f)}});Object.assign(g.prototype,{instance:null,endpoint:"/ajax/apps/usage_update.php",heartbeat_endpoint:"/ajax/apps/heartbeat.php",INITIAL_PING:0,ONGOING_PING:1,DISCOVERY_PING:2,ENDING_PING:3,_application_id:0,_is_game:0,_createRequest:function(a){return new(b("AsyncRequest"))().setURI(this.endpoint).setMethod("POST").setData({app:this._application_id,is_game:this._is_game,type:a,condition:this._signal_on_page_transition})},_createHeartbeatRequest:function(){return new(b("AsyncRequest"))().setURI(this.heartbeat_endpoint).setMethod("POST").setData({app:this._application_id,page_id:b("pageID")})},init:function(a,c,d,e,f,g){__p&&__p();if(b("isInIframe")())return;this.cleanup();b("PageTransitions").registerHandler(this.catchPageTransition.bind(this));this._application_id=a;this._is_game=c;if(g){a=function(){return this._createHeartbeatRequest().send()}.bind(this);a();this._timers.push(setInterval(a,g))}this._timers.push(setTimeout(function(){this._createRequest(this.INITIAL_PING).send();var a=this._createRequest(this.ONGOING_PING);this._timers.push(setInterval(a.send.bind(a),e))}.bind(this),d));f&&this._timers.push(setTimeout(function(){this._createRequest(this.DISCOVERY_PING).send()}.bind(this),f));b("Run").onBeforeUnload(this.onBeforeUnload.bind(this))},catchPageTransition:function(a){this._createRequest(this.ENDING_PING).send(),this.cleanup()},onBeforeUnload:function(){this._createRequest(this.ENDING_PING).send(),this.cleanup()},cleanup:function(){if(this._timers)for(var a=0;a<this._timers.length;a++)clearInterval(this._timers[a]);this._timers=[]}});e.exports=g}),null);
__d("Button.react",["cx","AbstractButton.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props.use||"default",c=this.props.size||"medium";c="_42fu"+(a==="special"?" _42gz":"")+(a==="confirm"?" _42g-":"")+(c==="large"?" _42gy":"")+(this.props.suppressed?" _42gx":"")+(a!=="default"?" selected":"");return b("React").createElement(b("AbstractButton.react"),babelHelpers["extends"]({},this.props,{label:this.props.label,className:b("joinClasses")(this.props.className,c)}))};function a(){"use strict";h.apply(this,arguments)}a.propTypes={use:c.oneOf(["special","confirm","default"]),size:c.oneOf(["medium","large"]),suppressed:c.bool};e.exports=a}),null);
__d("XGamerGraphMarkUserPlaysFBAppController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/gamer-graph/mark-user-plays-fb-app/",{})}),null);
__d("GamerGraphMarkUserPlaysFBApp",["AsyncRequest","XGamerGraphMarkUserPlaysFBAppController"],(function(a,b,c,d,e,f){"use strict";e.exports.mark=function(a){var c=b("XGamerGraphMarkUserPlaysFBAppController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(c).setData({app_id:a}).send()}}),null);
__d("GiftCredits",["AsyncRequest","Dialog","URI"],(function(a,b,c,d,e,f){__p&&__p();var g={dialog:null,callback:null,purchaseLock:!1,purchaseLockExpiryThreshold:5e3,purchaseLockTimeoutId:null,getPurchaseCreditPrompt:function(a,b,c,d){g.main(a,null,null,null,c,null,null,null,"BuyCredits",{},d)},redeemGiftcard:function(a,c,d){var e=new(b("URI"))(document.location).setPath("/giftcards").toString();g.main(a,null,null,e,null,null,null,null,c,{},d)},getPrompt:function(a,b,c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y){g.main(a,b,c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y)},main:function(a,c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){if(g.isPurchaseLocked())return!1;g.setPurchaseLock(!0);h={_path:"pay",method:"pay",display:"async",app_id:a,receiver:c,api_key:i,credits_purchase:p,action:k,next:e,dev_purchase_params:JSON.stringify(l),additional_params:JSON.stringify(m),order_info:JSON.stringify(d),product:n,package_id:o,request_id:q,sdk:r,quantity:s,quantity_min:t,quantity_max:u,test_currency:v,pricepoint_id:w,user:x,user_hash:y,ingame_gift_data:z};j=new(b("AsyncRequest"))().setURI("/fbml/ajax/dialog/").setData(h).setMethod("GET").setReadOnly(!0).setStatusElement("commerce_get_more_loading");g.callback=f;g.dialog=new(b("Dialog"))().setAsync(j).setModal(!0).setCloseHandler(function(a){g.setPurchaseLock(!1),f(a)}).show()},isPurchaseLocked:function(){return g.purchaseLock},setPurchaseLock:function(a){g.purchaseLock=a;a?g.purchaseLockTimeoutId=setTimeout(function(){g.setPurchaseLock(!1)},g.purchaseLockExpiryThreshold):clearTimeout(g.purchaseLockTimeoutId);return!0}};e.exports=g}),null);
__d("legacy:giftcredits",["GiftCredits"],(function(a,b,c,d,e,f){a.GiftCredits=b("GiftCredits")}),3);
__d("TimePlayingEnum",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({FIVE_SECONDS:"five_seconds",TEN_SECONDS:"ten_seconds",THIRTY_SECONDS:"thirty_seconds",ONE_MINUTE:"one_minute",TWO_MINUTES:"two_minutes",FIVE_MINUTES:"five_minutes"})}),null);
__d("CanvasActivityLogger",["Banzai","Event","ScriptPath","TimePlayingEnum","Visibility","clickRefAction","getActiveElement","setIntervalAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g=1e3,h=!1,i=!1,j=!1,k=!1,l=null,m=null,n=null,o=0,p=0,q=0,r={5:b("TimePlayingEnum").FIVE_SECONDS,10:b("TimePlayingEnum").TEN_SECONDS,30:b("TimePlayingEnum").THIRTY_SECONDS,60:b("TimePlayingEnum").ONE_MINUTE,120:b("TimePlayingEnum").TWO_MINUTES,300:b("TimePlayingEnum").FIVE_MINUTES},s={CANVAS_ACTIVE:"active",CANVAS_INACTIVE:"inactive"},t=s.CANVAS_INACTIVE;function u(){return k&&j&&(h||i)}function v(){__p&&__p();if(t==s.CANVAS_ACTIVE&&!u()){t=s.CANVAS_INACTIVE;var a=Date.now()-m;b("ScriptPath").closeOverlayView("canvas",m?{ms_since_open:a}:null);p+=a;for(var c in r)if(Object.prototype.hasOwnProperty.call(r,c)&&p>c*g){var d=r[c];b("Banzai").post("canvas_playing_game",{played:d,app_id:q});delete r[c]}if(Date.now()-n>60*g){d=a+o;b("Banzai").post("canvas_time_spent",[d,q]);n=Date.now();o=0}else o=m?a+o:o}else t==s.CANVAS_INACTIVE&&u()&&(t=s.CANVAS_ACTIVE,m=Date.now(),n||(n=Date.now()),b("ScriptPath").openOverlayView("canvas"))}b("Banzai").subscribe(b("Banzai").SHUTDOWN,function(){u()&&b("ScriptPath").closeOverlayView("canvas",m?{ms_since_open:Date.now()-m}:null)});function w(a){__p&&__p();b("clickRefAction")("canvas",l,a,"FORCE").set_namespace("canvas");switch(a.type){case"beforeunload":k=!1;h=!1;i=!1;break;case"visible":k=!0;break;case"hidden":k=!1;break;case"mouseover":i=!0;break;case"mouseout":i=!1;break;case"focus":case"blur":h=b("getActiveElement")()==document.getElementById("iframe_canvas");break;default:break}v()}function x(a){var b=document.createEvent("FocusEvent");b.initEvent(a,!0,!0);return b}a={trackState:function(a,c){q=c,k=!b("Visibility").isHidden(),j=document.hasFocus(),h=b("getActiveElement")()==document.getElementById("iframe_canvas"),i=a.querySelector(":hover")!==null,v(),b("Event").listen(a,"mouseover",w),b("Event").listen(a,"mouseout",w),b("Event").listen(window,"blur",w),b("Event").listen(window,"focus",w),b("Event").listen(window,"beforeunload",w),b("Visibility").addListener("hidden",function(){return w(x("hidden"))}),b("Visibility").addListener("visible",function(){return w(x("visible"))}),b("setIntervalAcrossTransitions")(function(){j=document.hasFocus(),v()},g)}};e.exports=a}),null);
__d("CanvasResizer",["CSS","DOMEventListener","Vector","createArrayFromMixed"],(function(a,b,c,d,e,f){__p&&__p();var g;function h(){__p&&__p();var a,c=document.documentElement;window.innerHeight?a=window.innerHeight:c&&c.clientHeight?a=c.clientHeight:a=document.body.clientHeight;for(var c=0;c<g.length;c++){var d=g[c];if(!b("CSS").hasClass(d,"noresize")){var e=b("Vector").getElementPosition(d,"document").y;e=a-e;d.style.height=e/(g.length-c)+"px"}}}b("DOMEventListener").add(window,"resize",h);a={smartSizingFrameAdded:function(){g=[];var a=b("createArrayFromMixed")(document.getElementsByTagName("iframe"));a.forEach(function(a){b("CSS").hasClass(a,"smart_sizing_iframe")&&!b("CSS").hasClass(a,"noresize")&&(b("CSS").removeClass(a,"canvas_iframe_util"),g.push(a))});h()}};e.exports=a}),null);
__d("getNormalizedClientRect",["getDocumentScrollElement"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){__p&&__p();var c=a.getBoundingClientRect(),d=0,e=0;a=b("getDocumentScrollElement")(a.ownerDocument);var f=a.getBoundingClientRect();if(f.left>0)d=-f.left;else{a=a.scrollWidth+f.left;var g=f.width;g>a&&(d=g-a)}f.top>0&&(e=-f.top);return{bottom:c.bottom+e,height:c.height,left:c.left+d,right:c.right+d,top:c.top+e,width:c.width}}e.exports=a}),null);
__d("StickyArea",["cx","CSS","DOM","DOMQuery","Event","Run","Style","ViewportBounds","getNormalizedClientRect","getOverlayZIndex","getStyleProperty","removeFromArray","throttle"],(function(a,b,c,d,e,f,g){__p&&__p();var h=[],i=null,j=null,k=b("throttle").acrossTransitions(n,1e3),l="$$StickyArea_scrollListener",m="$$StickyArea_scrollListenerCount";function n(){h.sort(function(a,b){a=a.getNode();b=b.getNode();if(a.compareDocumentPosition)return 3-(a.compareDocumentPosition(b)&6);else return a.sourceIndex-b.sourceIndex})}function o(a,c,d){var e=a.getPlaceholder(),f=a.getNode(),g=b("Style").get(f,"float");a=a.getData();(a.placeholderWidth!==c||a.placeholderHeight!==d||a.placeholderFloat!==g)&&(b("Style").apply(e,{"float":g,height:d+"px",width:c+"px"}),a.placeholderHeight=d,a.placeholderWidth=c);f.nextSibling!==e&&b("DOM").insertAfter(f,e)}function p(a,c){var d=a.getData();d.fixed!==c&&(b("Style").apply(a.getNode(),d.styles),b("CSS").conditionShow(a.getPlaceholder(),c),b("CSS").conditionClass(a.getNode(),"_1a1e",c),b("Event").fire(a.getNode(),"change"),d.fixed=c)}function q(a,b){if(!a)return 0;else if(b.right<=a.rect.left||b.left>=a.rect.right)return q(a.prev,b);else return a.bottom}function r(){__p&&__p();var a=0,c=h.length,d=100,e=null;function f(g,i){__p&&__p();var j=d;while(a<c){var k=h[a],l=k.getNode(),m=k._scrollTarget;if(i&&!b("DOMQuery").contains(i,l))break;d=Math.max(j,k.getZIndex());var n=k.getData(),r=l.parentNode,s=n.styles;if(r==null){a++;continue}for(var t in s)s[t]="";p(k,!1);var u=l.offsetHeight,v=parseFloat(b("getStyleProperty")(l,"width"))||l.offsetWidth,w=m!==window?m.getBoundingClientRect().top:0,x=b("getNormalizedClientRect")(l);m=q(g||(m===window?e:null),x)+k.getOffset();var y=x.top-w;if(y<=m){s.width=v+"px";y=parseInt(b("Style").get(r,"padding-bottom"),10);var z=b("getNormalizedClientRect")(r);if(z.bottom-y>m+u||!k.getIsBoundToContainer()){var A=parseInt(b("Style").get(l,"margin-left"),10);s.position="fixed";s.bottom="auto";s.top=m+w+"px";s.left=x.left-A+"px"}else{(!n.parent||r!==n.parent)&&(b("Style").get(r,"position")==="static"&&b("Style").set(r,"position","relative"),n.parent=r);s.position="absolute";s.top="auto";s.bottom=y+"px";w=parseInt(b("Style").get(r,"border-left-width"),10);s.left=x.left-z.left-w+"px"}o(k,v,u);p(k,!0)}a++;A={bottom:m+u,prev:g,rect:x};n=0;k.getIsBoundToContainer()||(e=A,n=100);f(A,r);y=k.getZIndexOverride()||d+++n;b("Style").set(l,"z-index",y)}}f(null,null)}function s(a,c,d,e){e===void 0&&(e={}),this._isDestroyed=!1,this._node=a,this._data={fixed:!1,placeholderFloat:null,placeholderHeight:null,placeholderWidth:null,styles:{}},this._offset=d,this._boundToContainer=e.boundToContainer!==!1,e.stickTo===s.stickTo.SCROLL_PARENT?this._scrollTarget=b("Style").getScrollParent(a.parentNode)||window:this._scrollTarget=window,this._zIndexOverride=e.zIndexOverride,b("CSS").addClass(a,"_k"),c||b("Run").onLeave(this.destroy.bind(this)),!this._scrollTarget[l]?(this._scrollTarget[l]=b("Event").listen(this._scrollTarget,"scroll",function(){k(),r()}),this._scrollTarget[m]=1):this._scrollTarget[m]++,h.length||(i=b("Event").listen(window,"resize",function(){k(),r()}),j=b("ViewportBounds").subscribe("change",function(){k(),r()})),h.push(this),s.reflow()}s.prototype.destroy=function(){"use strict";__p&&__p();if(this._isDestroyed)return;b("removeFromArray")(h,this);this._scrollTarget[m]--;this._scrollTarget[m]===0&&(this._scrollTarget[l].remove(),this._scrollTarget[l]=null);h.length||(i.remove(),i=null,j.unsubscribe(),j=null);this._placeholder&&b("DOM").remove(this._placeholder);var a=0;for(var c in this._data.styles)this._data.styles[c]="",a++;a&&b("Style").apply(this._node,this._data.styles);this._isDestroyed=!0};s.prototype.getData=function(){"use strict";return this._data};s.prototype.getNode=function(){"use strict";return this._node};s.prototype.getOffset=function(){"use strict";return this._offset||0};s.prototype.getPlaceholder=function(){"use strict";this._placeholder||(this._placeholder=b("DOM").create("div"));return this._placeholder};s.prototype.getIsBoundToContainer=function(){"use strict";return this._boundToContainer};s.prototype.getZIndexOverride=function(){"use strict";return this._zIndexOverride};s.prototype.getZIndex=function(){"use strict";this._zIndex||(this._zIndex=b("getOverlayZIndex")(this._node));return this._zIndex};s.prototype.setOffset=function(a){"use strict";this._offset=a};s.reflow=b("throttle").acrossTransitions(function(){n(),r()},100);s.stickTo={SCROLL_PARENT:"SCROLL_PARENT",WINDOW:"WINDOW"};e.exports=s}),null);
__d("XGroupsInviteController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/a/group/user/invite/",{group_id:{type:"Int"},invite_response:{type:"Enum",enumType:1},invite_type:{type:"Enum",enumType:1},is_new_user:{type:"Bool",defaultValue:!1},ref_source:{type:"Enum",enumType:1},prevent_future_invites:{type:"Bool",defaultValue:!1},target_id_for_ego_logging:{type:"Int"}})}),null);