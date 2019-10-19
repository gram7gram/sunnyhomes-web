(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{62:function(e,t,a){e.exports=a(97)},72:function(e){e.exports={}},97:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a(12),i=a(9),s=a(61),l=a(54),u=a(55),m=a(52),d=a(11),p=a(7),f=a.n(p),v=a(6),h="Login/LOGOUT",g="Login/LOGIN_SUCCESS",E="Login/LOGIN_FAILURE",b="Login/LOGIN_CHECK_SUCCESS",O="Login/LOGIN_CHECK_FAILURE",y="Login/CREDENTIALS_CHANGED",j="Login/LOGIN_VALIDATE_REQUEST",w=function(e,t){return function(t){var a=function(e){var t={total:0,errors:[]};return e.email||++t.total,e.password||++t.total,t}(e);return 0===a.total?t({type:"Login/LOGIN_VALIDATE_SUCCESS"}):t({type:"Login/LOGIN_VALIDATE_FAILURE",payload:a}),a}},N=f.a.mark(A),L=f.a.mark(x),_=f.a.mark(C);function A(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)({type:j});case 2:case"end":return e.stop()}},N)}function x(){var e;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(v.d)();case 2:return e=t.sent,t.next=5,Object(v.c)(w(e.Login));case 5:case"end":return t.stop()}},L)}function C(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.e)([y],A),Object(v.g)(400,j,x)]);case 2:case"end":return e.stop()}},_)}var I=a(10),k="/login",S="/profile",P="/owners",D="/owners/new",V="/owners/:id",F="/admins",R="/admins/new",T="/admins/:id",U=f.a.mark(B),G=f.a.mark(K),H=f.a.mark(q);function B(e){var t;return f.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,localStorage.setItem("token",t.token),a.next=4,Object(v.c)(Object(I.d)(S));case 4:case"end":return a.stop()}},U)}function K(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return localStorage.removeItem("token"),e.next=3,Object(v.c)(Object(I.d)(k));case 3:case"end":return e.stop()}},G)}function q(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.f)([g,b],B),Object(v.f)([h,O],K)]);case 2:case"end":return e.stop()}},H)}var z=f.a.mark(J);function J(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.b)(C),Object(v.b)(q)]);case 2:case"end":return e.stop()}},z)}var M="Profile/FETCH_BEFORE",Q="Profile/FETCH_SUCCESS",W="Profile/SAVE_SUCCESS",X="Profile/SAVE_FAILURE",Y="Profile/VALIDATE_REQUEST",Z="Profile/MODEL_CHANGED",$=a(17),ee=a(29),te=a.n(ee),ae={en:function(){return a(72)}};te.a.fallbacks=!0,te.a.translations=Object($.a)({},"en",ae.en()),te.a.locale="en",te.a.missingTranslation=function(e){return e};var ne=te.a,re=a(56),ce=a.n(re),oe=a(57);(new(a.n(oe).a)).is().min(8).is().max(100).has().not().spaces();var ie=function(e,t){return function(a){var n=function(e,t){var a={count:0,messages:[],errors:{}};return t.name&&(e.name||(++a.count,a.errors.name=ne.t("validation.required"))),t.surname&&(e.surname||(++a.count,a.errors.surname=ne.t("validation.required"))),t.email&&(e.email?ce.a.validate(e.email)||(++a.count,a.errors.email=ne.t("validation.invalid_email")):(++a.count,a.errors.email=ne.t("validation.required"))),a}(e,t);return 0===n.count?a({type:"Profile/VALIDATE_SUCCESS"}):a({type:"Profile/VALIDATE_FAILURE",payload:n}),n}},se=f.a.mark(me),le=f.a.mark(de),ue=f.a.mark(pe);function me(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.c)({type:Y});case 2:case"end":return e.stop()}},se)}function de(){var e,t,a;return f.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(v.d)(function(e){return e.Profile});case 2:return e=n.sent,t=e.model,a=e.changes,n.next=7,Object(v.c)(ie(t,a));case 7:case"end":return n.stop()}},le)}function pe(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.g)(400,[Z,Q],me),Object(v.e)(Y,de)]);case 2:case"end":return e.stop()}},ue)}var fe=a(31),ve=f.a.mark(ge);function he(){fe.b.success(ne.t("notification.save_success"),{position:fe.b.POSITION.TOP_RIGHT})}function ge(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.e)(W,he)]);case 2:case"end":return e.stop()}},ve)}var Ee=f.a.mark(be);function be(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.b)(pe),Object(v.b)(ge)]);case 2:case"end":return e.stop()}},Ee)}var Oe=f.a.mark(ye);function ye(){return f.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.a)([Object(v.b)(J),Object(v.b)(be)]);case 2:case"end":return e.stop()}},Oe)}var je=a(28),we=Object(i.c)({isLoadingVisible:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"Login/LOGIN_CHECK_BEFORE":return!0;case b:case O:return!1;default:return e}},isAuthenticated:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case g:case b:return!0;case h:case E:case"Login/LOGIN_BEFORE":case"Login/LOGIN_CHECK_BEFORE":case O:return!1;default:return e}},token:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:case b:return void 0!==t.payload.token?t.payload.token:e;case h:case E:case O:return null;default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:case b:return void 0!==t.payload.user?t.payload.user:e;case h:case E:case O:return null;default:return e}}}),Ne=Object(i.c)({email:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return void 0!==t.payload.email?t.payload.email:e;default:return e}},password:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return void 0!==t.payload.password?t.payload.password:e;default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"Login/LOGIN_BEFORE":case g:case"Login/LOGIN_VALIDATE_SUCCESS":return[];case"Login/LOGIN_VALIDATE_FAILURE":return t.payload.errors;case E:var a=t.payload.data;return void 0!==a&&void 0!==a.message?[t.payload.data.message]:[];default:return e}},isValid:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"Login/LOGIN_VALIDATE_FAILURE":case g:return!1;case"Login/LOGIN_VALIDATE_SUCCESS":return!0;default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"Login/LOGIN_BEFORE":return!0;case g:case E:return!1;default:return e}}}),Le=Object(i.c)({id:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:case W:return void 0!==t.payload._id?t.payload._id:null;default:return e}},email:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:case Q:return void 0!==t.payload.email?t.payload.email:null;case Z:return void 0!==t.payload.email?t.payload.email:e;default:return e}},name:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:case Q:return void 0!==t.payload.name?t.payload.name:null;case Z:return void 0!==t.payload.name?t.payload.name:e;default:return e}},surname:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case W:case Q:return void 0!==t.payload.surname?t.payload.surname:null;case Z:return void 0!==t.payload.surname?t.payload.surname:e;default:return e}}});function _e(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var Ae={count:0,messages:[],errors:{}},xe=Object(i.c)({isValid:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"Profile/VALIDATE_SUCCESS":return!0;case"Profile/VALIDATE_FAILURE":case X:return!1;default:return e}},isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"Profile/FETCH_FAILURE":case Q:case W:case X:return!1;case M:case"Profile/SAVE_BEFORE":return!0;default:return e}},validator:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:case"Profile/VALIDATE_SUCCESS":return Ae;case"Profile/VALIDATE_FAILURE":return t.payload;default:return e}},changes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case M:return{};case Z:var a=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_e(a,!0).forEach(function(t){Object($.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_e(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e);return Object.keys(t.payload).forEach(function(e){a[e]=!0}),a;default:return e}},model:Le,serverErrors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case X:return void 0!==t.payload.data.message?[t.payload.data.message]:[];case W:case"Profile/SAVE_BEFORE":return[];default:return e}}}),Ce=function(e){return Object(i.c)({router:Object(je.b)(e),App:we,Login:Ne,Profile:xe})},Ie=a(19),ke=a.n(Ie),Se={apiHost:"http://api.sunnyhomes.com.cy"},Pe=Object(d.a)(),De=Object(s.a)(),Ve=[l.a,u.a,De,Object(m.a)(Pe)],Fe=i.d;var Re=localStorage.getItem("token");Re||(Re=null);var Te={App:{isAuthenticated:!1,isLoadingVisible:!!Re,token:Re}},Ue=a(41),Ge=a(16),He=function(){return r.a.createElement("div",{className:"text-center space-2"},r.a.createElement("img",{src:"/img/loading.gif",alt:"Loading...",width:100}))},Be=a(20),Ke=a(21),qe=a(24),ze=a(22),Je=a(25),Me=a(27),Qe=a(23),We=function(e){function t(){var e,a;Object(Be.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(qe.a)(this,(e=Object(ze.a)(t)).call.apply(e,[this].concat(r)))).logout=function(){a.props.dispatch({type:h})},a}return Object(Je.a)(t,e),Object(Ke.a)(t,[{key:"render",value:function(){var e=this.props.isAuthenticated;return r.a.createElement("header",{id:"header",className:"u-header u-header--full-container u-header--abs-top u-header--show-hide shadow-sm p-0 m-0","data-header-fix-moment":"500","data-header-fix-effect":"slide"},r.a.createElement("div",{className:"u-header__section pt-3"},r.a.createElement("div",{id:"logoAndNav",className:"container"},r.a.createElement("nav",{className:"navbar navbar-expand u-header__navbar u-header__navbar--no-space p-0"},r.a.createElement("a",{className:"navbar-brand u-header__navbar-brand u-header__navbar-brand-center p-0",href:""},"Logo"),r.a.createElement("ul",{className:"navbar-nav u-header__navbar-nav text-center"},!e&&r.a.createElement("li",{className:"nav-item u-header__nav-item mb-1 mb-lg-0 mr-1"},r.a.createElement(Me.a,{className:"btn btn-sm btn-primary transition-3d-hover",to:k},ne.t("navigation.login"))),e&&r.a.createElement("li",{className:"nav-item u-header__nav-item mb-1 mb-lg-0 mr-1"},r.a.createElement("button",{className:"btn btn-sm btn-outline-primary transition-3d-hover",onClick:this.logout},ne.t("navigation.logout"))))))))}}]),t}(n.PureComponent),Xe=Object(Qe.a)({isAuthenticated:function(e){return e.App.isAuthenticated}}),Ye=Object(Ge.g)(Object(o.c)(Xe)(We)),Ze=function(e){function t(){return Object(Be.a)(this,t),Object(qe.a)(this,Object(ze.a)(t).apply(this,arguments))}return Object(Je.a)(t,e),Object(Ke.a)(t,[{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,a=e.user;return t?r.a.createElement("div",{className:"gradient-half-primary-v6"},r.a.createElement("div",{className:"container space-top-1 pb-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("h1",{className:"h3 text-white font-weight-medium mb-1"},ne.t("navigation.welcome"),", ",a.name,"!")))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("div",{className:"u-header u-header-left-aligned-nav u-header--bg-transparent u-header--white-nav-links z-index-4"},r.a.createElement("div",{className:"u-header__section bg-transparent"},r.a.createElement("nav",{className:" navbar navbar-expand u-header__navbar u-header__navbar--no-space"},r.a.createElement("ul",{className:"navbar-nav u-header__navbar-nav m-0"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(Me.a,{className:"nav-link u-header__nav-link",to:F},ne.t("navigation.admins"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(Me.a,{className:"nav-link u-header__nav-link",to:P},ne.t("navigation.owners"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(Me.a,{className:"nav-link u-header__nav-link",to:S},ne.t("navigation.profile")))))))))):null}}]),t}(n.PureComponent),$e=Object(Qe.a)({isAuthenticated:function(e){return e.App.isAuthenticated},user:function(e){return e.App.user}}),et=Object(Ge.g)(Object(o.c)($e)(Ze)),tt=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"container text-center space-1 border-top"},r.a.createElement("a",{className:"d-inline-flex align-items-center mb-2",href:"/"},"Logo"),r.a.createElement("p",{className:"small text-muted"},ne.t("footer.copyright"))))},at=function(e,t){return function(a){a({type:"Login/LOGIN_BEFORE"}),ke.a.post(Se.apiHost+"/api/v1/login",{email:e,password:t}).then(function(e){var t=e.data;a({type:g,payload:t})}).catch(function(e){console.log(e),e.response&&a({type:E,payload:{status:e.response.status,data:e.response.data}})})}},nt=function(e){function t(){var e,a;Object(Be.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(qe.a)(this,(e=Object(ze.a)(t)).call.apply(e,[this].concat(r)))).submit=function(){var e=a.props.Login,t=e.email,n=e.password;a.props.dispatch(at(t,n))},a.submitIfEnter=function(e){13===e.keyCode&&a.submit()},a.onChange=function(e){return function(t){a.props.dispatch({type:y,payload:Object($.a)({},e,t.target.value)})}},a.onChangeIgnoreCase=function(e){return function(t){var n=t.target.value=t.target.value.toLowerCase();a.props.dispatch({type:y,payload:Object($.a)({},e,n)})}},a}return Object(Je.a)(t,e),Object(Ke.a)(t,[{key:"render",value:function(){var e=this.props.Login,t=e.email,a=e.password,n=e.isValid,c=e.errors,o=e.isLoading;return r.a.createElement("div",{className:"row no-gutters space-lg-2"},r.a.createElement("div",{className:"col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-2 space-lg-0"},r.a.createElement("div",{className:"mb-3"},r.a.createElement("h2",{className:"h3 text-primary font-weight-normal mb-0"},ne.t("login.title")),r.a.createElement("p",null,ne.t("login.subtitle"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},c.length>0&&r.a.createElement("div",{className:"alert alert-danger"},r.a.createElement("ul",{className:"simple"},c.map(function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("form",{noValidate:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-label"},ne.t("login.login")),r.a.createElement("input",{type:"text",className:"form-control",name:"login",autoFocus:!0,placeholder:ne.t("login.placeholder"),onChange:this.onChangeIgnoreCase("email"),onKeyDown:this.submitIfEnter,value:t||""})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"form-label"},ne.t("login.password")),r.a.createElement("input",{type:"password",className:"form-control",name:"password",placeholder:"********",onChange:this.onChange("password"),onKeyDown:this.submitIfEnter,value:a||""})),r.a.createElement("div",{className:"form-group text-right"},r.a.createElement("button",{className:"btn btn-primary transition-3d-hover",onClick:this.submit,disabled:!n||o},r.a.createElement("i",{className:o?"fa fa-spin fa-circle-notch":"fa fa-lock"}),"\xa0",ne.t("login.action"))))))))}}]),t}(r.a.Component),rt=Object(Qe.a)({Login:function(e){return e.Login}}),ct=Object(o.c)(rt)(nt);function ot(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var it=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ot(a,!0).forEach(function(t){Object($.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ot(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e);return delete t.id,t},st=function(e){return function(t,a){var n=a().App.token,r=it(e);t({type:"Profile/SAVE_BEFORE"}),ke.a.post(Se.apiHost+"/api/v1/profile",r,{headers:{Authorization:n}}).then(function(e){var a=e.data;t({type:W,payload:a})}).catch(function(e){console.log(e),e.response&&t({type:X,payload:{status:e.response.status,data:e.response.data}})})}},lt=function(e){function t(){var e,a;Object(Be.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(qe.a)(this,(e=Object(ze.a)(t)).call.apply(e,[this].concat(c)))).submit=function(){var e=a.props.Profile.model;a.props.dispatch(st(e))},a.change=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return a.props.dispatch({type:Z,payload:Object($.a)({},e,t)})},a.changeBool=function(e){return function(t){return a.change(e,t.target.checked)}},a.changeString=function(e){return function(t){return a.change(e,t.target.value)}},a.getError=function(e){var t=a.props.Profile.validator.errors;return void 0===t[e]?null:r.a.createElement("small",{className:"feedback invalid-feedback d-block"},t[e])},a}return Object(Je.a)(t,e),Object(Ke.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(function(e,t){var a=t().App.token;e({type:M}),ke.a.get(Se.apiHost+"/api/v1/profile",{headers:{Authorization:a}}).then(function(t){var a=t.data;e({type:Q,payload:a})}).catch(function(t){t.response&&e({type:"Profile/FETCH_FAILURE",payload:{status:t.response.status,data:t.response.data}})})})}},{key:"render",value:function(){var e=this.props.Profile,t=e.model,a=e.isValid,n=e.isLoading,c=e.serverErrors;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card shadow-sm my-3"},r.a.createElement("div",{className:"card-header"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",{className:"m-0"},ne.t("profile.title"))),r.a.createElement("div",{className:"col-12 col-md-auto text-right"},r.a.createElement("button",{className:"btn btn-primary transition-3d-hover",type:"button",onClick:this.submit,disabled:n||!a},r.a.createElement("i",{className:n?"fa fa-spin fa-circle-notch":"fa fa-check"}),"\xa0",ne.t("profile.action"))))),r.a.createElement("div",{className:"card-body"},c.length>0&&r.a.createElement("div",{className:"alert alert-danger"},r.a.createElement("ul",{className:"simple"},c.map(function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"m-0"},ne.t("profile.name")),r.a.createElement("input",{type:"text",name:"name",className:"form-control",onChange:this.changeString("name"),value:t.name||""}),this.getError("name")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"m-0"},ne.t("profile.surname")),r.a.createElement("input",{type:"text",name:"surname",className:"form-control",onChange:this.changeString("surname"),value:t.surname||""}),this.getError("surname")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"m-0"},ne.t("profile.email")),r.a.createElement("input",{type:"email",name:"email",className:"form-control",onChange:this.changeString("email"),value:t.email||""}),this.getError("email"))))))}}]),t}(r.a.Component),ut=Object(Qe.a)({Profile:function(e){return e.Profile}}),mt=Object(o.c)(ut)(lt);a(96);var dt=document.getElementById("root");try{var pt=function(){var e,t=Object(i.e)(Ce(Pe),Te,Fe(i.a.apply(void 0,Ve)));return De.run(ye),Re&&t.dispatch((e={token:Re},function(t){t({type:"Login/LOGIN_CHECK_BEFORE"}),ke.a.post(Se.apiHost+"/api/v1/login-check",e).then(function(e){var a=e.data;t({type:b,payload:a})}).catch(function(e){console.log(e),e.response&&t({type:O,payload:{status:e.response.status,data:e.response.data}})})})),t}(),ft=r.a.createElement(o.a,{store:pt},r.a.createElement(je.a,{history:Pe},function(e){var t=function(t){var a=t.component,n=Object(Ue.a)(t,["component"]),c=e.getState().App;return c.isLoadingVisible?r.a.createElement(Ge.b,Object.assign({},n,{render:function(){return r.a.createElement(He,null)}})):!0===c.isAuthenticated?r.a.createElement(Ge.b,Object.assign({},n,{render:function(e){return r.a.createElement(a,e)}})):r.a.createElement(Ge.a,{to:k})};return r.a.createElement("div",null,r.a.createElement(Ye,null),r.a.createElement("main",{id:"main-content"},r.a.createElement(et,null),r.a.createElement("div",{className:"container"},r.a.createElement(Ge.d,null,r.a.createElement(function(t){var a=t.component,n=Object(Ue.a)(t,["component"]);return e.getState().App.isLoadingVisible?r.a.createElement(Ge.b,Object.assign({},n,{render:function(){return r.a.createElement(He,null)}})):r.a.createElement(Ge.b,Object.assign({},n,{render:function(e){return r.a.createElement(a,e)}}))},{exact:!0,path:k,component:ct}),r.a.createElement(t,{exact:!0,path:S,component:mt}),r.a.createElement(t,{exact:!0,path:F,component:mt}),r.a.createElement(t,{exact:!0,path:R,component:mt}),r.a.createElement(t,{path:T,component:mt}),r.a.createElement(t,{exact:!0,path:P,component:mt}),r.a.createElement(t,{exact:!0,path:D,component:mt}),r.a.createElement(t,{path:V,component:mt}),r.a.createElement(Ge.a,{path:"*",to:k})))),r.a.createElement(tt,null),r.a.createElement("div",{className:"notification-container"},r.a.createElement(fe.a,null)))}(pt)));Object(c.render)(ft,dt)}catch(vt){console.error(vt),window.location.reload()}}},[[62,1,2]]]);
//# sourceMappingURL=main.51a2c286.chunk.js.map