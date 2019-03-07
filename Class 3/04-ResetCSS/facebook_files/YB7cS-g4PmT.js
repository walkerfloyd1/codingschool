if (self.CavalryLogger) { CavalryLogger.start_js(["2cooO"]); }

__d("CameraFileBugButton.react",["ix","fbt","AsyncDialog","AsyncRequest","Image.react","React","ReactMenu","fbglyph"],(function(a,b,c,d,e,f,g,h){"use strict";var i=b("ReactMenu").Item,j="/ajax/bugs/report",k="219500115583764";function a(){var a=function(){b("AsyncDialog").send(new(b("AsyncRequest"))().setData({product_category_id:k}).setURI(j))};return b("React").createElement(i,{onClick:a,key:"bug"},b("React").createElement(b("Image.react"),{src:g("112874")}),h._("Something isn't working"))}e.exports=a}),null);
__d("FBStoriesPog.react",["ix","cx","fbt","CameraPostTypes","CameraPostTypesHelper","Image.react","React","XUISpinner.react","asset"],(function(a,b,c,d,e,f,g,h,i){"use strict";__p&&__p();var j;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){var a=this.props,c=a.previewImageUri;a=a.profileImageUri;c=c?c:a;a=!!c;c=a?b("React").createElement(b("Image.react"),{src:c,className:"_26w6"}):null;var d=this.$1(),e="_26w4"+(this.props.highlighted?" _26w9":"")+(this.props.live?" _26wp":"")+(a?" _26wu":"")+(this.props.size==="small"?" size-small":"")+(this.props.size==="small-44"?" size-small-44":"")+(this.props.size==="small-48"?" size-small-48":"")+(this.props.borderOption==="hide-and-expand"?" no-border":"")+(this.props.borderOption==="hide"?" hide-border":""),f=b("React").createElement("div",{className:"_2h3r"},b("React").createElement(b("Image.react"),{src:g("504435")})),h=b("React").createElement("div",{className:"_26wx"},b("React").createElement(b("Image.react"),{alt:i._("LIVE"),src:g("404364")}));return b("React").createElement("div",{className:e},c,d,b("React").createElement(b("XUISpinner.react"),{size:"large",background:a?"light":"dark",className:"_26ww"}),this.props.live?h:null,this.props.showBlueCross&&!this.props.live?f:null)};a.prototype.$1=function(){var a=b("CameraPostTypesHelper").isEventStory(this.props.cameraPostType),c=b("CameraPostTypesHelper").isGroupStory(this.props.cameraPostType),d=b("CameraPostTypesHelper").isBirthdayStory(this.props.cameraPostType);return!a&&!c&&!d?null:b("React").createElement("div",{className:"_26ws"},b("React").createElement("div",{className:(a?"_26wz":"")+(c?" _26w-":"")+(d?" _7dcv":"")}))};function a(){j.apply(this,arguments)}a.defaultProps={highlighted:!1,live:!1,size:"normal",cameraPostType:b("CameraPostTypes").STORY,borderOption:"show"};e.exports=a}),null);
__d("FBStoriesTrayUploadingAnimation.react",["cssVar","cx","React"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i=48,j=58,k=76,l=2,m=i/2,n=j/2,o=k/2,p=m-2,q=n-2,r=o-2;a=function(a){__p&&__p();var c,d,e;switch(a.size){case"small":c=i;d=m;e=p;break;case"medium":c=j;d=n;e=q;break;case"large":default:c=k;d=o;e=r;break}return b("React").createElement("svg",{className:"_65xu"+(a.size==="small"?" size-small":"")+(a.size==="medium"?" size-medium":""),height:c,width:c},b("React").createElement("g",{className:"_65xv"},b("React").createElement("circle",{className:"_4kq4",cx:d,cy:d,fill:"none",r:e,stroke:"#4080ff",strokeWidth:l})))};e.exports=a}),null);
__d("FBStoriesTrayFullItem.react",["cx","Arbiter","FBStoriesTrayUploadingAnimation.react","React"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.$1=function(){!this.props.disabled&&!this.props.loading&&!this.props.uploading&&this.props.onSelect(this.props.bucketID)}.bind(this),b}a.prototype.componentDidMount=function(){this.props.highlighted||b("Arbiter").inform("has_story_bucket_been_seen",this.props.profileID)};a.prototype.componentDidUpdate=function(a){!this.props.highlighted&&a.highlighted&&b("Arbiter").inform("has_story_bucket_been_seen",this.props.profileID)};a.prototype.render=function(){var a;if(!this.props.bucketID)return null;var c=this.props.uploading&&b("React").createElement(b("FBStoriesTrayUploadingAnimation.react"),{size:"medium"});return b("React").createElement("div",{"data-testid":this.props.webDriverTestID,tabIndex:0,role:"button",onClick:this.$1,onKeyPress:this.$1,className:"_1zp8"+(((a=this.props.isRHCRedesign)!=null?a:!1)?" isRHCRedesign":"")},c,this.props.children)};e.exports=a}),null);
__d("FBStoriesTrayItemTitle.react",["cx","fbt","CameraPostTypesHelper","React","Timestamp.react","formatDate"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){var a=this.$1(),c=this.$2();return b("React").createElement("div",{className:"_mx9"+(this.props.ownBucket?" _mxa":"")+(this.props.verbose?" verbose":"")},a,c)};a.prototype.$1=function(){var a=this.$3();return a?b("React").createElement("div",{dir:"auto",className:"_mxb"},b("React").createElement("span",{className:"_nbt"},a)):null};a.prototype.$3=function(){__p&&__p();var a=b("CameraPostTypesHelper").isBirthdayStory(this.props.cameraPostType);if(this.props.ownBucket)if(a)return h._("Happy Birthday!");else return h._("Your Story");if(this.props.actorName)if(a)return h._("{actor}'s Birthday",[h._param("actor",this.props.actorName)]);else return this.props.actorName;return null};a.prototype.$2=function(){return this.props.verbose&&this.props.lastUpdateTime?b("React").createElement("div",{className:"_mxc"},b("React").createElement(b("Timestamp.react"),{key:"timestamp",autoUpdate:!0,time:this.props.lastUpdateTime,text:b("formatDate")(this.props.lastUpdateTime,"M j, Y",{utc:!0})})):null};function a(){i.apply(this,arguments)}a.defaultProps={ownBucket:!1,verbose:!1,lastUpdateTime:void 0,cameraPostType:void 0};e.exports=a}),null);
__d("AppRequestReminders",["AsyncRequest","CSS","DOM","$","ge"],(function(a,b,c,d,e,f){__p&&__p();var g=0,h={},i=1,j=b("ge")("OtherAppReqReminder");a=function(a,b,c){h[b]={node:a,seq:i++,reqCount:c}};c=function(a){g=a};var k=function(a){return a.id.split("_")[1]};d=function(a){a=b("ge")(a);a=a.nextSibling;a!==j&&(b("CSS").show(a),g-=h[k(a)].reqCount);l(g)};var l=function(a){new(b("AsyncRequest"))().setURI("/ajax/reminders/update_count.php").setData({new_count:a}).setMethod("POST").send()};e=function(a,c){j&&c&&a>0?b("DOM").setContent(b("ge")("OtherAppReqLabel"),c):j?b("CSS").hide(j):b("CSS").hide(b("$")("OtherAppReqReminder"))};f.initNode=a;f.handleRemove=d;f.updateCount=e;f.setTotalOtherCount=c}),null);
__d("onRectIsWithinViewport",["onViewportChanged"],(function(a,b,c,d,e,f){__p&&__p();function g(a,b){return!(a.bottom<b.top||a.top>b.bottom||a.right<b.left||a.left>b.right)}function a(a,c){var d;function e(b){var c=a();return!!c&&g(c,b)}function f(a){d!==a&&(d=a,c(a))}return b("onViewportChanged")(f,e)}e.exports=a}),null);
__d("LitestandStreamTailStoryPlaceholderVisibilityTracker",["PageletEventConstsJS","PageletEventsHelper","onRectIsWithinViewport","performanceAbsoluteNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=null,h=null,i=null,j=!1,k={};a={setPlaceholderElement:function(a){j||(b("PageletEventsHelper").subscribeToPageletEvents(l),j=!0),g=a,h&&h.remove(),h=b("onRectIsWithinViewport")(function(){return a.getBoundingClientRect()},function(a){!i&&a&&(i=b("performanceAbsoluteNow")())})},getStoryPlaceholderVisibleDuration:function(a){return k[a]||0}};function l(a,c){__p&&__p();if(a.startsWith("hyperfeed_story")&&c===b("PageletEventConstsJS").DISPLAY_END){c=b("performanceAbsoluteNow")();k[a]=i?c-i:0;if(g){a=g.getBoundingClientRect().top;a=a-window.scrollTop;i=a<window.innerHeight&&a>0?c:null}else i=null}}e.exports=a}),null);
__d("NewsFeedDedupeStoryTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:NewsFeedDedupeStoryLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:NewsFeedDedupeStoryLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:NewsFeedDedupeStoryLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setIsWorkplaceUser=function(a){this.$1.is_workplace_user=a;return this};a.prototype.setPositionOfDuplicate=function(a){this.$1.position_of_duplicate=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={is_workplace_user:!0,position_of_duplicate:!0,time:!0,vc:!0,weight:!0};e.exports=a}),null);
__d("NewsFeedTailloadPlaceholderTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.$1={}}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:NewsFeedTailloadPlaceholderLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:NewsFeedTailloadPlaceholderLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:NewsFeedTailloadPlaceholderLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setDisplayDone=function(a){this.$1.display_done=a;return this};a.prototype.setTailLoadPosition=function(a){this.$1.tail_load_position=a;return this};a.prototype.setTailLoadStatus=function(a){this.$1.tail_load_status=a;return this};a.prototype.setTime=function(a){this.$1.time=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};a.prototype.setVisibleDuration=function(a){this.$1.visible_duration=a;return this};a.prototype.setWeight=function(a){this.$1.weight=a;return this};c={display_done:!0,tail_load_position:!0,tail_load_status:!0,time:!0,vc:!0,visible_duration:!0,weight:!0};e.exports=a}),null);
__d("EgoUnitSlideInsert",["csx","cx","Animation","CSS","DataStore","DOM","Ease","Event","Parent","TidyArbiterMixin","tidyEvent"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i="sliding",j="EgoSlider/End",k=babelHelpers["extends"]({isSliding:function(a){return b("DataStore").get(a,i)},runAfterSlide:function(a,c){var d=b("tidyEvent")(k.subscribe(j,function(b,e){e===a&&(d&&d.unsubscribe(),c())}))},registerSlide:function(a,c){__p&&__p();b("Event").listen(a,"click",function(d){__p&&__p();d=b("Parent").bySelector(d.getTarget(),"._5cl_");if(!d)return;var e=b("Parent").byClass(a,"ego_unit");d=0;var f=b("Parent").byClass(e,"ego_unit_container"),g=b("DOM").scry(f,".ego_unit")[0];g===e&&(e.nextSibling&&(e.nextSibling.style.paddingTop="0px",e.nextSibling.style.borderTop="0px"));b("CSS").addClass(e,"_5cl-");b("DataStore").set(e,i,!0);new(b("Animation"))(e).to("height",0).to("padding-top",d).to("padding-bottom",0).to("margin",0).from("opacity",1).to("opacity",0).ease(b("Ease").circOut).duration(300).checkpoint(1,function(){b("DOM").appendContent(f,e),b("DOM").prependContent(e,c),b("DataStore").remove(e,i)}).to("height",12).to("opacity",1).to("margin-bottom",10).duration(0).checkpoint(2,function(){k.inform(j,e)}).go()})}},b("TidyArbiterMixin"));e.exports=k}),null);
__d("NetEgo",["csx","Animation","Arbiter","CSS","DOM","EgoUnitSlideInsert","PageLikeConstants","Parent","URI","ge"],(function(a,b,c,d,e,f,g){__p&&__p();var h={setup:function(a){__p&&__p();b("Arbiter").subscribe([b("PageLikeConstants").LIKED,"FriendRequest/sending"],function(c,d){__p&&__p();if(a==d.profile_id&&d.origin=="hovercard"||a==d.uid){c=b("ge")(document.body,".ego_unit_container");if(c){d=b("DOM").scry(c,".ego_unit");c=d.length;for(var e=0;e<c;e++){var f=d[e].getAttribute("data-ego-fbid");if(f==a){f=b("DOM").scry(d[e],".ego_action a")[0];f&&f.click();break}}}}})},updateXids:function(a,c){__p&&__p();if(a.length==0&&c.length==0)return;a=function(a){return function(c){c=c.getAttribute(a);if(!c)return!1;c=new(b("URI"))(c).getQueryData();return!!c.xids}};var d=b("DOM").scry(document.body,".ego_section a");d=d.filter(a("ajaxify"));if(d.length==0)return;var e=new(b("URI"))(d[0].getAttribute("ajaxify")),f=e.getQueryData();if(!f.xids)return;var g=null;try{g=JSON.parse(f.xids)}catch(a){return}for(var h=0;h<c.length;++h)g[c[h]]=1;var i=JSON.stringify(g);c=function(a,c){e=new(b("URI"))(a.getAttribute(c)),f=e.getQueryData(),f.xids=i,e.setQueryData(f),a.setAttribute(c,e.toString())};for(h=0;h<d.length;++h)c(d[h],"ajaxify");g=b("DOM").scry(document.body,".ego_unit form");g=g.filter(a("action"));for(h=0;h<g.length;++h)c(g[h],"action")},replaceUnit:function(a,b,c,d){h.replaceUnitCheckParent(a,b,c,d,"")},replaceUnitCheckParent:function(a,c,d,e,f){var g=b("Parent").byClass(a,"ego_unit_container");if(g&&b("EgoUnitSlideInsert").isSliding(a)){g=b("DOM").appendContent(g,c);g.forEach(b("CSS").hide);b("EgoUnitSlideInsert").runAfterSlide(a,h._replaceUnitElement.bind(null,a,g,f))}else h._replaceUnit(a,c,d,e,f)},_replaceUnit:function(a,c,d,e,f){var g=b("DOM").insertAfter(a,c);g.forEach(b("CSS").hide);e!==void 0&&e!==null?setTimeout(function(){h._replaceUnitFadeout(a,g,d,f)},e):h._replaceUnitFadeout(a,g,d,f)},_replaceUnitFadeout:function(a,c,d,e){d?new(b("Animation"))(a).from("opacity",1).to("opacity",0).duration(d).checkpoint(1,function(){h._replaceUnitElement(a,c,e)}).go():h._replaceUnitElement(a,c,e)},_replaceUnitElement:function(a,c,d){var e=b("CSS").hasClass(a,"ego_unit")?a.parentNode:null;e&&e.tagName==="LI"&&(e=b("DOM").scry(a.parentNode,"^ul")[0]);b("DOM").remove(a);c.length&&c.forEach(b("CSS").show);b("Arbiter").inform("netego_replacedUnit",{serializedData:d,numUnitsRemained:e.childNodes.length});h.clearHeader()},clearHeader:function(){__p&&__p();var a=b("DOM").scry(document.body,".ego_column"),c=[];for(var d=0;d<a.length;++d)c=c.concat(b("DOM").scry(a[d],".uiHeader"));for(d=0;d<c.length;++d){a=c[d].nextSibling;var e=b("DOM").find(a,"._2xq");e||(e=a);if(!e||e.childNodes.length===0)b("DOM").remove(c[d]);else if(e.childNodes.length===1){a=e.childNodes[0];b("CSS").hasClass(a,"ego_appended_units")&&a.childNodes.length===0&&b("DOM").remove(c[d])}}}};e.exports=h}),null);
__d("NetEgoLogger",["AsyncSignal"],(function(a,b,c,d,e,f){e.exports={log:function(a){var c=a.uri,d=a.sid,e=a.fbid;a=a.element;new(b("AsyncSignal"))(c,{sid:d,fbid:e,height:a.offsetHeight}).send()}}}),null);
__d("FeedConsumptionEvents",["keyMirror"],(function(a,b,c,d,e,f){"use strict";a=Object.freeze(b("keyMirror")({PLACEHOLDER_HIDDEN:null,PLACEHOLDER_VISIBLE:null,REQUEST_CANCELLED:null,REQUEST_COMPLETE:null,REQUEST_ERROR:null,REQUEST_STARTED:null,STORY_DISPLAY:null}));e.exports=a}),null);
__d("FeedConsumptionController",["EventEmitter","FeedConsumptionEvents","IntersectionObserver","PageletEventConstsJS","PageletEventsHelper"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){this.$3=null,this.$4=null,this.$6=0,this.$2=a,this.$1=new(b("EventEmitter"))()}a.prototype.setPlaceholder=function(a){!this.$3?this.$3=new(b("IntersectionObserver"))(function(a){return this.$7(a)}.bind(this),{threshold:.1}):this.$5&&this.$3.unobserve(this.$5),this.$5=a,this.$3.observe(a)};a.prototype.start=function(){this.$6=0,this.$4||(this.$4=b("PageletEventsHelper").subscribeToPageletEvents(function(a,c){c===b("PageletEventConstsJS").DISPLAY_END&&a.startsWith("hyperfeed_story")&&this.$1.emit(b("FeedConsumptionEvents").STORY_DISPLAY,this.$6++)}.bind(this))),this.$1.emit(b("FeedConsumptionEvents").REQUEST_STARTED)};a.prototype.complete=function(){this.$1.emit(b("FeedConsumptionEvents").REQUEST_COMPLETE)};a.prototype.error=function(){this.$1.emit(b("FeedConsumptionEvents").REQUEST_ERROR)};a.prototype.cancel=function(){this.$1.emit(b("FeedConsumptionEvents").REQUEST_CANCELLED)};a.prototype.destroy=function(){this.$3&&this.$3.disconnect(),this.$3=null,this.$4&&this.$4.remove(),this.$4=null};a.prototype.addListener=function(a,b){return this.$1.addListener(a,b)};a.prototype.once=function(a,b){return this.$1.once(a,b)};a.prototype.$7=function(a){var c=this.$5,d=this.$3&&this.$3.thresholds,e=Array.isArray(d)&&d[0]||0;a.forEach(function(a){a.target===c&&this.$1.emit(a.intersectionRatio>e?b("FeedConsumptionEvents").PLACEHOLDER_VISIBLE:b("FeedConsumptionEvents").PLACEHOLDER_HIDDEN,this.$2())}.bind(this))};e.exports=a}),null);
__d("FeedConsumptionRestorationLogger",["FeedConsumptionEvents","FeedQuickLogModule","QuickPerformanceLogger","SubscriptionsHandler"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(a){this.$2=0,this.$1=a}a.prototype.destroy=function(){this.$3&&this.$3.release(),this.$4&&this.$4.remove()};a.prototype.$5=function(a){b("QuickPerformanceLogger").markerEnd(b("FeedQuickLogModule").CONSUMPTION_RESTORATION_WWW,a),this.reset()};a.prototype.reset=function(){this.destroy(),this.$2=0,this.$4=this.$1.once(b("FeedConsumptionEvents").PLACEHOLDER_VISIBLE,function(a){b("QuickPerformanceLogger").markerStart(b("FeedQuickLogModule").CONSUMPTION_RESTORATION_WWW),b("QuickPerformanceLogger").annotateMarkerInt(b("FeedQuickLogModule").CONSUMPTION_RESTORATION_WWW,"STORY_POSITION",a),this.$3=new(b("SubscriptionsHandler"))(),this.$3.addSubscriptions(this.$1.once(b("FeedConsumptionEvents").STORY_DISPLAY,function(a){b("QuickPerformanceLogger").annotateMarkerInt(b("FeedQuickLogModule").CONSUMPTION_RESTORATION_WWW,"TAIL_LOAD_STORY_POSITION",a),this.$5("SUCCESS")}.bind(this)),this.$1.once(b("FeedConsumptionEvents").PLACEHOLDER_HIDDEN,function(){return this.$5("CANCEL")}.bind(this)),this.$1.once(b("FeedConsumptionEvents").REQUEST_CANCELLED,function(){return this.$5("CANCEL")}.bind(this)),this.$1.once(b("FeedConsumptionEvents").REQUEST_ERROR,function(){return this.$5("FAIL")}.bind(this)))}.bind(this))};e.exports=a}),null);
__d("NewsFeedDedupeStoryController",["CSS","CurrentUser","DOMQuery","NewsFeedDedupeStoryTypedLogger","queryThenMutateDOM"],(function(a,b,c,d,e,f){__p&&__p();a={dedupe:function(a,c){__p&&__p();b("queryThenMutateDOM")(function(){var d={};return b("DOMQuery").scry(a,c).filter(function(a){var c=a.getAttribute("data-dedupekey");if(c&&b("CSS").shown(a)){if(d[c])return!0;d[c]=!0}return!1})},function(a){a.forEach(function(a){new(b("NewsFeedDedupeStoryTypedLogger"))().setIsWorkplaceUser(b("CurrentUser").isWorkUser()).setPositionOfDuplicate(a.getAttribute("data-insertion-position")).log(),b("CSS").hide(a),a.removeAttribute("style")})},"NewsFeedDedupeStoryControllerDedupe")}};e.exports=a}),null);
__d("NewsFeedOffscreenController",["cx","Arbiter","CSS","DOMQuery","IntersectionObserver","LitestandShareAttachment","NavigationMessage","Run","Style","SubscriptionsHandler","debounce","getOrCreateDOMID","intersectionObserverEntryIsIntersecting","queryThenMutateDOM"],(function(a,b,c,d,e,f,g){__p&&__p();a=400;var h=10,i="_5qqr",j={},k=null,l={rootMargin:a+"px 0px "+a+"px 0px"},m=null,n={};function o(){for(var a in n)b("DOMQuery").scry(n[a],"div[data-fullscreen]").length?delete n[a]:j[a]=n[a].offsetHeight}function p(){var a;for(var c in n)a=j[c],a!==void 0&&a>0&&(b("Style").apply(n[c],{height:a+"px",marginBottom:h+"px"}),a=n[c].firstElementChild,a&&b("CSS").hide(a),delete j[c]),delete n[c]}var q=b("debounce")(function(){b("queryThenMutateDOM")(o,p,"NewsFeedOffscreenController")});function r(a){delete n[b("getOrCreateDOMID")(a)];b("Style").apply(a,{height:"",marginBottom:""});a=a.firstElementChild;if(a){b("CSS").show(a);a=b("DOMQuery").scry(a,"."+i);a.forEach(function(a){b("LitestandShareAttachment").init(a)})}}function s(a){var c=[];a.forEach(function(a){b("intersectionObserverEntryIsIntersecting")(a)?c.push(a.target):n[b("getOrCreateDOMID")(a.target)]=a.target});q();c.forEach(r)}function t(){k&&k.disconnect(),k=null,m&&m.release(),m=null}function u(){if(k)return k;k=new(b("IntersectionObserver"))(s,l);var a=new(b("SubscriptionsHandler"))();a.addSubscriptions(b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,t),b("Run").onLeave(t));return k}c={attachSubstream:function(a){u().observe(a)}};e.exports=c}),null);
__d("NewsFeedTailLoadPlaceholderLoggerStatus",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SUCCESS:"success",FAILED:"failed",CANCELLED:"cancelled"})}),null);
__d("TailLoadLogger",["invariant","Arbiter","BigPipe","FBLogger","IntersectionObserver","NewsFeedTailLoadPlaceholderLoggerStatus","PageEvents","SubscriptionsHandler","performanceNow"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function h(a,b,c){this.$2=0,this.$3=0,this.$4=a,this.$4.setTailLoadPosition(c),this.$1=c,this.$5=b}h.prototype.getTailLoadPosition=function(){return this.$1};h.prototype.visibleStart=function(a){this.$3=a;return this};h.prototype.visibleEnd=function(a){if(this.$3>0){var c=a-this.$3;c>0&&(this.$2+=c,c>1e6&&b("FBLogger")(this.$5).warn("Logging a placeholder visible duration of over 1M! Duration: %s Start time: %s, End time: %s",this.$2,this.$3,a),this.$3=0)}return this};h.prototype.setDisplayDone=function(a){this.$4.setDisplayDone(Math.round(a));return this};h.prototype.setTailLoadStatus=function(a){this.$4.setTailLoadStatus(a);return this};h.prototype.log=function(){this.$4.setVisibleDuration(Math.round(this.$2)).log()};function a(a,c,d){this.$1={},this.$5={},this.$7=a,this.$4=d,this.$3=new(b("IntersectionObserver"))(function(a){return this.$8(a)}.bind(this),{threshold:c}),this.$6=new(b("SubscriptionsHandler"))(),this.$6.addSubscriptions(b("Arbiter").subscribe(b("BigPipe").Events.init,function(a,b){return this.$9(b)}.bind(this)))}a.prototype.createLogger=function(){g(0,4408)};a.prototype.getStoryCount=function(){g(0,4409)};a.prototype.setQPLEndMarker=function(a){};a.prototype.setQPLMarkerPoint=function(){};a.prototype.setQPLStartMarker=function(){};a.prototype.destroy=function(){this.$3.disconnect(),this.$6.release()};a.prototype.tailLoadStarted=function(){this.setQPLStartMarker(),this.$2||(this.$3.observe(this.$4),this.$2=new h(this.createLogger(),this.$7,this.getStoryCount()))};a.prototype.tailLoadSuccessful=function(a){this.setQPLEndMarker("SUCCESS");var c=this.$2;c&&(c.visibleEnd(b("performanceNow")()).setTailLoadStatus(b("NewsFeedTailLoadPlaceholderLoggerStatus").SUCCESS),this.$1[a]=c,this.$10(a),this.$11())};a.prototype.tailLoadFailed=function(){this.setQPLEndMarker("FAIL");var a=this.$2;a&&(a.visibleEnd(b("performanceNow")()).setDisplayDone(-1).setTailLoadStatus(b("NewsFeedTailLoadPlaceholderLoggerStatus").FAILED).log(),this.$11())};a.prototype.tailLoadCancelled=function(){this.setQPLEndMarker("CANCEL");var a=this.$2;a&&(a.visibleEnd(b("performanceNow")()).setDisplayDone(-1).setTailLoadStatus(b("NewsFeedTailLoadPlaceholderLoggerStatus").CANCELLED).log(),this.$11())};a.prototype.$11=function(){this.$3.unobserve(this.$4),this.$2=null};a.prototype.$8=function(a){var b=this.$2;if(!b)return;var c=this.$3.thresholds,d=Array.isArray(c)&&c[0]||0;a.forEach(function(a){a.target===this.$4&&(a.intersectionRatio>d?b.visibleStart(a.time):(this.setQPLMarkerPoint(),b.visibleEnd(a.time)))}.bind(this))};a.prototype.$9=function(a){var c=a.arbiter;a=a.lid;var d={requestStart:0};this.$5[a]=d;c.subscribe(b("PageEvents").AJAXPIPE_SEND,function(a,b){a=b.ts;return d.requestStart=a});c.subscribe(b("BigPipe").Events.displayed,function(a,b){return this.$12(b)}.bind(this))};a.prototype.$12=function(a){var c=a.lid;a=a.ts;var d=this.$5[c];if(!d)return;var e=a-d.requestStart;e<=0&&b("FBLogger")(this.$7).warn("Tail load display done is invalid! Start: %s, Display Done: %s",d.requestStart,a);d.displayDone=e;this.$10(c)};a.prototype.$10=function(a){var b=this.$5[a],c=this.$1[a];b&&c&&b.displayDone!=null&&(b.displayDone>0&&c.setDisplayDone(b.displayDone).log(),delete this.$1[a],delete this.$5[a])};e.exports=a}),null);
__d("NewsFeedTailLoadPlaceholderLogger",["DOM","LitestandStream","NewsFeedTailloadPlaceholderTypedLogger","TailLoadLogger"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("TailLoadLogger"));g=c&&c.prototype;function a(a,b){g.constructor.call(this,"feed",a,b)}a.prototype.createLogger=function(){return new(b("NewsFeedTailloadPlaceholderTypedLogger"))()};a.prototype.getStoryCount=function(){return b("DOM").scry(b("LitestandStream").getStreamRoot(),b("LitestandStream").getStoriesSelector()).length};e.exports=a}),null);
__d("NewsFeedTailLoadController",["Arbiter","Bootloader","CSS","DOM","Event","FBLogger","FeedConsumptionController","FeedConsumptionRestorationLogger","FunnelLogger","LitestandMessages","LitestandStream","LitestandStreamTailStoryPlaceholderVisibilityTracker","MainThreadPerformanceLoggerActions","MainThreadPerformanceMonitor","NavigationMessage","NewsFeedDedupeStoryController","NewsFeedOffscreenController","NewsFeedTailLoadPlaceholderLogger","Run","SubscriptionsHandler","ge","getOrCreateDOMID","gkx","intersectionObserverEntryIsIntersecting","observeIntersection","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){__p&&__p();var g={"streamload.tail.commence":!0,"streamload.tail.success":!0,"streamload_error.tail":!0,"streamload_error.tail.transport":!0,"streamload_error.tail.final":!0,"streamload.tail.retry":!0,"streamload_error.tail.retry":!0,"streamload.tail.retry.success":!0,"streamload_timeout.tail":!0},h="WWW_NEWSFEED_TAILLOAD_FUNNEL",i=2,j=3e4,k=null;function l(){if(!k)return;k.destroy();k=null}function m(a){__p&&__p();var c=a.container,d=a.cursor,e=a.pager,f=a.pagerConfig,g=a.placeholderLoggingIntersectionThreshold;a=a.streamConfig;this.$3=!1;this.$5=null;this.$6=null;this.$7=null;this.$8=null;this.$9=null;this.$12=null;this.$13={};this.$14=0;this.$15=0;this.$17=new(b("SubscriptionsHandler"))();this.$20=function(){clearTimeout(this.$6)}.bind(this);this.$19=function(){this.$20(),this.$6=b("setTimeoutAcrossTransitions")(function(){this.$23(["streamload_timeout.tail"])}.bind(this),j)}.bind(this);this.$1=c;this.$2=d;this.$10=e;this.$11=f;this.$16=a;b("LitestandStreamTailStoryPlaceholderVisibilityTracker").setPlaceholderElement(this.$10);var h=new(b("FeedConsumptionController"))(function(){return b("DOM").scry(b("LitestandStream").getStreamRoot(),b("LitestandStream").getStoriesSelector()).length});h.setPlaceholder(this.$10);this.$17.addSubscriptions({remove:function(){h.cancel(),h.destroy()}});this.$4=h;if(b("gkx")("678702")){var i=new(b("FeedConsumptionRestorationLogger"))(this.$4);i.reset();this.$17.addSubscriptions({remove:function(){i.destroy()}});this.$5=i}this.$17.addSubscriptions(this.$18(),b("Arbiter").subscribe(b("LitestandMessages").STORIES_REQUESTED,this.$19),b("Arbiter").subscribe([b("LitestandMessages").STORIES_INSERTED,b("LitestandMessages").STREAM_LOAD_ERROR],this.$20),b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,l),b("Event").listen(this.$10,"click",function(a){this.$21(),a.preventDefault()}.bind(this)),b("Run").onLeave(l));if(g!=null){var k=new(b("NewsFeedTailLoadPlaceholderLogger"))(g,this.$10);this.$17.addSubscriptions({remove:function(){k.tailLoadCancelled(),k.destroy()}});this.$12=k}}m.prototype.destroy=function(){"use strict";if(this.$3)return;this.$3=!0;this.$20();this.$17.release()};m.prototype.handleError=function(a,c){"use strict";if(this.$3)return;b("Arbiter").inform(b("LitestandMessages").STREAM_LOAD_ERROR,c);c=["streamload_error.tail"];this.$14>0&&c.push("streamload_error.tail.retry");a!=null&&this.$14<i?(this.$14++,this.$2=a,this.$22(),c.push("streamload.tail.retry"),b("Arbiter").inform(b("LitestandMessages").STREAM_LOAD_RETRY)):(b("CSS").removeClass(this.$10,"async_saving"),this.$12&&this.$12.tailLoadFailed(),this.$4.error(),b("MainThreadPerformanceMonitor").stop(b("MainThreadPerformanceLoggerActions").TAIL_LOAD));this.$23(c)};m.prototype.handleMoreStoriesInserted=function(){"use strict";if(this.$3)return;this.$14>0&&(this.$14=0,this.$23(["streamload.tail.retry.success"]))};m.prototype.handleTailLoadCompleted=function(a,c){"use strict";if(this.$3)return;b("CSS").removeClass(this.$10,"async_saving");this.$2=a;this.$17.addSubscriptions(this.$18());this.$14=0;this.$12&&this.$12.tailLoadSuccessful(c);this.$4.complete()};m.prototype.hidePager=function(){"use strict";if(this.$3)return;b("CSS").hide(this.$10)};m.prototype.setPagerConfig=function(a){"use strict";this.$11=a};m.prototype.$22=function(){"use strict";__p&&__p();var a=this.$2;this.$14<1&&(b("FunnelLogger").startFunnel(h,this.$15),b("FunnelLogger").addFunnelTag(h,this.$15,"NewsFeedTailLoadController"));this.$23(["streamload.tail.commence"]);this.$13[a]&&(this.$23(["duplicate_cursor"]),b("Arbiter").inform(b("LitestandMessages").DUPLICATE_CURSOR_ERROR,a));this.$13[a]=!0;var c={client_stories_count:b("DOM").scry(b("LitestandStream").getStreamRoot(),b("LitestandStream").getStoriesSelector()).length,cursor:a,pager_config:this.$11,scroll_count:this.$15+1,story_id:b("LitestandStream").getStoryID()},d=function(b){this.handleError(a,b)}.bind(this),e=function(a){a.error?this.$23(["streamload_error.tail.final"]):(this.$23(["streamload.tail.success"]),this.$15++)}.bind(this),f=function(b){this.$23(["streamload_error.tail.transport"]),this.handleError(a,b)}.bind(this),g=this.$8;if(!g){this.$9&&(this.$9.remove(),this.$9=null);var i=b("Bootloader").loadModules(["UIPagelet"],function(a){this.$9=null,this.$8=g=a.loadFromEndpoint("LitestandTailLoadPagelet",b("getOrCreateDOMID")(this.$1),c,{append:!0,automatic:!0,constHeight:!0,crossPage:!0,errorHandler:d,finallyHandler:e,transportErrorHandler:f,usePipe:!0}),this.$17.addSubscriptions({remove:function(){g&&g.abandon()}}),b("Arbiter").inform(b("LitestandMessages").STORIES_REQUESTED)}.bind(this),"NewsFeedTailLoadController");this.$17.addSubscriptions(i);this.$9=i}else g.setErrorHandler(d).setTransportErrorHandler(f).go(c),b("Arbiter").inform(b("LitestandMessages").STORIES_REQUESTED)};m.prototype.$23=function(a){"use strict";a.forEach(function(a){g[a]&&b("FunnelLogger").appendActionWithTag(h,this.$15,a,"try_"+this.$14)}.bind(this)),b("Bootloader").loadModules(["BanzaiODS"],function(b){a.forEach(function(a){b.bumpEntityKey("feed_load",a)})},"NewsFeedTailLoadController")};m.prototype.$18=function(){var a;this.$7&&this.$7.remove();this.$7=b("observeIntersection")(this.$10,function(a){a=b("intersectionObserverEntryIsIntersecting")(a);a&&(this.$21(),this.$7&&(this.$7.remove(),this.$7=null))}.bind(this),{rootMargin:"0px 0px "+((a=this.$16.bufferPixels)!=null?a:0)+"px 0px"});return this.$7};m.prototype.$21=function(){"use strict";b("CSS").addClass(this.$10,"async_saving"),this.$22(),this.$4.start(),this.$12&&this.$12.tailLoadStarted(),b("MainThreadPerformanceMonitor").start(b("MainThreadPerformanceLoggerActions").TAIL_LOAD)};m.destroy=function(){"use strict";k&&(k.hidePager(),l())};m.handleErrorV2=function(a){"use strict";k&&k.handleError(a)};m.init=function(a,c,d,e,f,g){"use strict";k&&(b("FBLogger")("news_feed_tail_load").warn("The server called `NewsFeedTailLoadController.init()` but an instance of this singleton already exists. Please call `NewsFeedTailLoadController.destroy()` before creating a new one. To mitigate this, the old one has been destroyed for you."),l()),k=new m({container:d,cursor:a,pager:c,pagerConfig:e,placeholderLoggingIntersectionThreshold:g,streamConfig:f})};m.moreStoriesInserted=function(a){"use strict";if(!k){b("FBLogger")("news_feed_tail_load").warn("The server called `NewsFeedTailLoadController.moreStoriesInserted()` without an active instance of that controller. Create one first using `NewsFeedTailLoadController.init()` and make sure not to send this sort of signal to the client after having called `NewsFeedTailLoadController.destroy()`.");return}b("Arbiter").inform(b("LitestandMessages").STORIES_INSERTED,{substream_id:a});a=b("ge")(a);a&&(b("NewsFeedOffscreenController").attachSubstream(a),k&&k.handleMoreStoriesInserted())};m.setPagerConfig=function(a){"use strict";if(!k){b("FBLogger")("news_feed_tail_load").warn("The server called `NewsFeedTailLoadController.setPagerConfig()` without an active instance of that controller. Create one first using `NewsFeedTailLoadController.init()` and make sure not to send this sort of signal to the client after having called `NewsFeedTailLoadController.destroy()`.");return}k.setPagerConfig(a)};m.tailloadCompleted=function(a,c){"use strict";if(!k){b("FBLogger")("news_feed_tail_load").warn("The server called `NewsFeedTailLoadController.tailloadCompleted()` without an active instance of that controller. Create one first using `NewsFeedTailLoadController.init()` and make sure not to send this sort of signal to the client after having called `NewsFeedTailLoadController.destroy()`.");return}var d=b("LitestandStream").getStreamRoot();d&&b("NewsFeedDedupeStoryController").dedupe(d,b("LitestandStream").getStoriesSelector());k.handleTailLoadCompleted(a,c);b("MainThreadPerformanceMonitor").stop(b("MainThreadPerformanceLoggerActions").TAIL_LOAD)};e.exports=m}),null);
__d("FBStoriesQPLUtils",["QuickPerformanceLogger","Run"],(function(a,b,c,d,e,f){"use strict";function g(a){a.navigationStart?b("QuickPerformanceLogger").markerStartFromNavStart(a.qplMarker):b("QuickPerformanceLogger").markerStart(a.qplMarker,0),b("Run").onUnload(function(){b("QuickPerformanceLogger").markerEnd(a.qplMarker,"CANCEL")})}a={start:function(a){g(a)},end:function(a){b("QuickPerformanceLogger").markerEnd(a.qplMarker,a.action?a.action:"SUCCESS")}};e.exports=a}),null);
__d("StoriesArchiveQuickLogModule",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ARCHIVE_GRID_TTI:22347781,ARCHIVE_GRID_TTI_WWW:22347782,PAGINATION_TTI:22347779,SCROLL_PERF:22347783,STORIES_VIEWER_TTI:22347777,THUMBNAIL_TTI:22347780,VIEWERS_LIST_TTI:22347778})}),null);
__d("StoryArchiveAutoSavingMode",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ENABLED:"ENABLED",DISABLED:"DISABLED"})}),null);