(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{157:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(31),r=n.n(c),s=n(7),o=n(22),i=n(60),u="[Auth] Login",l="[Auth] Logout",d="[UI] Set Error",j="[UI] Remove Error",b="[UI] Start loading",p="[UI] Finish loading",m="[Notes] New note",h="[Notes] Set active note",f="[Notes] Load notes",O="[Notes] Updated note saved",x="[Notes] Delete note",v="[Notes] Logout Cleaning",g=n(45),_=n(5),y={notes:[],active:null},w={loading:!1,msgError:null},N="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,k=Object(o.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return{uid:t.payload.uid,name:t.payload.displayName};case l:return{};default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(_.a)(Object(_.a)({},e),{},{active:Object(_.a)({},t.payload)});case m:return Object(_.a)(Object(_.a)({},e),{},{notes:[t.payload].concat(Object(g.a)(e.notes))});case f:return Object(_.a)(Object(_.a)({},e),{},{notes:Object(g.a)(t.payload)});case O:return Object(_.a)(Object(_.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case x:return Object(_.a)(Object(_.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case v:return Object(_.a)({},y);default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(_.a)(Object(_.a)({},e),{},{msgError:t.payload});case j:return Object(_.a)(Object(_.a)({},e),{},{msgError:null});case b:return{loading:!0};case p:return{loading:!1};default:return e}}}),E=Object(o.e)(k,N(Object(o.a)(i.a))),C=n(19),I=n(2),S=n(20),L=n(10),D=n(9),P=n.n(D),A=n(14),U=n(21),R=n.n(U),z=n(29);n(72),n(75);z.a.initializeApp({apiKey:"AIzaSyA8p5Y1l9hwd7cBRhNqZADzjV3lKDGcojQ",authDomain:"react-app-cursos-e427a.firebaseapp.com",databaseURL:"https://react-app-cursos-e427a.firebaseio.com",projectId:"react-app-cursos-e427a",storageBucket:"react-app-cursos-e427a.appspot.com",messagingSenderId:"565317690180",appId:"1:565317690180:web:2c166c9362d5f228742d11"});var G=z.a.firestore(),W=new z.a.auth.GoogleAuthProvider,B=function(){var e=Object(A.a)(P.a.mark((function e(t){var n,a,c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return" https://api.cloudinary.com/v1_1/ds8hbpdht/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),console.log(n),e.prev=5,e.next=8,fetch(" https://api.cloudinary.com/v1_1/ds8hbpdht/upload",{method:"POST",body:n});case 8:if(!(a=e.sent).ok){e.next=16;break}return e.next=12,a.json();case 12:return c=e.sent,e.abrupt("return",c.secure_url);case 16:return e.next=18,a.json();case 18:throw e.sent;case 19:e.next=24;break;case 21:throw e.prev=21,e.t0=e.catch(5),e.t0;case 24:case"end":return e.stop()}}),e,null,[[5,21]])})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(A.a)(P.a.mark((function e(t){var n,a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,G.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=n.docs.map((function(e){return Object(_.a)({id:e.id},e.data())})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),K=function(e,t){return{type:h,payload:Object(_.a)({id:e},t)}},T=function(e,t){return{type:m,payload:Object(_.a)({id:e},t)}},q=function(e){return{type:f,payload:e}},J=function(e){return function(){var t=Object(A.a)(P.a.mark((function t(n,a){var c,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,delete(r=Object(_.a)({},e)).id,t.next=5,G.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 5:n(V(e.id,e)),R.a.fire("Saved",e.title,"success");case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},V=function(e,t){return{type:O,payload:{id:e,note:t}}},X=function(e){return{type:x,payload:e}},H=n(34),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(I.useState)(e),n=Object(C.a)(t,2),a=n[0],c=n[1],r=function(){c(e)},s=function(e){var t=e.target;c(Object(_.a)(Object(_.a)({},a),{},Object(H.a)({},t.name,t.value)))};return[a,s,r]},Q=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"notes__appbar",children:[Object(a.jsx)("span",{children:"28 de agosto del 2020"}),Object(a.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(A.a)(P.a.mark((function t(n,a){var c,r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,R.a.fire({title:"Uploading",text:"Please wait...",showConfirmButton:!1,allowOutsideClick:!1,allowEscapeKey:!1,allowEnterKey:!1,willOpen:function(){R.a.showLoading()}}),t.next=4,B(e);case 4:r=t.sent,c.url=r,n(J(c)),R.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(a.jsx)("button",{className:"btn",onClick:function(){e(J(t))},children:"Save"})]})]})},Y=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.notes})).active,n=M(t),c=Object(C.a)(n,3),r=c[0],o=c[1],i=c[2],u=r.id,l=r.title,d=r.body,j=Object(I.useRef)(t.id);Object(I.useEffect)((function(){t.id!==j.current&&(i(t),j.current=t.id)}),[t,i]),Object(I.useEffect)((function(){e(K(u,Object(_.a)({},r)))}),[u,r,e]);return Object(a.jsxs)("div",{className:"notes__main-content",children:[Object(a.jsx)(Q,{}),Object(a.jsxs)("div",{className:"notes__content",children:[Object(a.jsx)("input",{text:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off",name:"title",value:l,onChange:o}),Object(a.jsx)("textarea",{placeholder:"What happened today",className:"notes__textarea",name:"body",value:d,onChange:o}),t.url&&Object(a.jsx)("div",{className:"notes__image",children:Object(a.jsx)("img",{src:t.url,alt:"image0"})})]}),Object(a.jsx)("button",{className:"btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(A.a)(P.a.mark((function t(n,a){var c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,G.doc("".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(X(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(u))},children:"Delete"})]})},Z=function(e){return{type:d,payload:e}},$=function(){return{type:j}},ee=function(){return{type:b}},te=function(){return{type:p}},ne=function(e,t){return{type:u,payload:{uid:e,displayName:t}}},ae=function(){return{type:l}},ce=n(61),re=n.n(ce),se=function(e){var t=e.id,n=e.date,c=e.title,r=e.body,o=e.url,i=Object(s.b)(),u=re()(n);return Object(a.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn animate__faster",onClick:function(){i(K(t,e))},children:[o&&Object(a.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(o,")")}}),Object(a.jsxs)("div",{className:"journal__entry-body",children:[Object(a.jsx)("p",{className:"journal__entry-title",children:c}),Object(a.jsx)("p",{className:"journal__entry-content",children:r})]}),Object(a.jsxs)("div",{className:"journal__entry-date-box",children:[Object(a.jsx)("span",{children:u.format("dddd")}),Object(a.jsx)("h4",{children:u.format("Do")})]})]})},oe=function(){var e=Object(s.c)((function(e){return e.notes})).notes;return Object(a.jsx)("div",{className:"journal__entries ",children:e.map((function(e){return Object(a.jsx)(se,Object(_.a)({},e),e.id)}))})},ie=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})).name;return Object(a.jsxs)("aside",{className:"journal__sidebar",children:[Object(a.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(a.jsxs)("h3",{className:"mt-5",children:[Object(a.jsx)("i",{className:"far fa-moon"}),Object(a.jsx)("span",{className:"ml-1",children:t})]}),Object(a.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(A.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.auth().signOut();case 2:t(ae()),t({type:v});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(a.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(A.a)(P.a.mark((function e(t,n){var a,c,r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.next=4,G.collection("".concat(a,"/journal/notes")).add(c);case 4:r=e.sent,t(K(r.id,c)),t(T(r.id,c));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(a.jsx)("p",{className:"mt-5",children:"New entry"})]}),Object(a.jsx)(oe,{})]})},ue=function(){return Object(a.jsxs)("div",{className:"nothing__main-content",children:[Object(a.jsxs)("p",{children:["Select something",Object(a.jsx)("br",{}),"pr create an entry!"]}),Object(a.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},le=function(){var e=Object(s.c)((function(e){return e.notes})).active;return Object(a.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn animate__faster",children:[Object(a.jsx)(ie,{}),Object(a.jsx)("main",{children:e?Object(a.jsx)(Y,{}):Object(a.jsx)(ue,{})})]})},de=n(35),je=n.n(de),be=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})),n=t.msgError,c=t.loading,r=M({email:"nando@gmail.com",password:"123456"}),o=Object(C.a)(r,2),i=o[0],u=o[1],l=i.email,d=i.password,j=function(){return je.a.isEmail(l)?0===d.trim().length||d.length<5?(e(Z("Invalid password")),!1):(e($()),!0):(e(Z("Email is not valid")),!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title",children:"Login"}),n&&Object(a.jsx)("div",{className:"auth__alert-error",children:n}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j()&&(e(function(e,t){return function(n){n(ee()),z.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(ne(t.uid,t.displayName)),n(te())})).catch((function(e){console.log(e),n(te()),R.a.fire("Error",e.message,"error")}))}}(l,d)),console.log("sesion tal vez iniciaa"))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:l,onChange:u}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:d,onChange:u}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:c,children:"Login"}),Object(a.jsxs)("div",{className:"auth__social-networks",children:[Object(a.jsx)("p",{children:"Login with social networks"}),Object(a.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){z.a.auth().signInWithPopup(W).then((function(t){var n=t.user;e(ne(n.uid,n.displayName))}))}))},children:[Object(a.jsx)("div",{className:"google-icon-wrapper",children:Object(a.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(a.jsx)("p",{className:"btn-text",children:Object(a.jsx)("b",{children:"Sign in with Google"})})]})]}),Object(a.jsx)(S.b,{to:"register",className:"link",children:"Create new account"})]})]})},pe=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})),n=t.msgError,c=t.loading,r=M({name:"Hernando",email:"nando@gmail.com",password:"123456",password2:"123456"}),o=Object(C.a)(r,2),i=o[0],u=o[1],l=i.name,d=i.email,j=i.password,b=i.password2,p=function(){return 0===l.trim().length?(e(Z("Name is required")),!1):je.a.isEmail(d)?j!==b||j.length<5?(e(Z("Password should be at least 6 chracters and match each other")),!1):(e($()),!0):(e(Z("Email is not valid")),!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{className:"auth__title",children:"Register"}),n&&Object(a.jsx)("div",{className:"auth__alert-error",children:n}),Object(a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),p()&&e(function(e,t,n){return function(a){a(ee()),z.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(A.a)(P.a.mark((function e(t){var c;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(ne(c.uid,c.displayName)),a(te());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),a(te()),R.a.fire("Error",e.message,"error")}))}}(d,j,l))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(a.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:d,onChange:u}),Object(a.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:l,onChange:u}),Object(a.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:j,onChange:u}),Object(a.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:b,onChange:u}),Object(a.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",disabled:c,children:"Register"}),Object(a.jsx)(S.b,{to:"login",className:"link",children:"Already register?"})]})]})},me=function(){return Object(a.jsx)("div",{className:"auth__main",children:Object(a.jsx)("div",{className:"auth__box-container",children:Object(a.jsxs)(L.d,{children:[Object(a.jsx)(L.b,{exact:!0,path:"/auth/login",component:be}),Object(a.jsx)(L.b,{exact:!0,path:"/auth/register",component:pe}),Object(a.jsx)(L.a,{to:"/auth/login"})]})})})},he=n(36),fe=function(e){var t=e.isLoggedIn,n=e.component,c=Object(he.a)(e,["isLoggedIn","component"]);return Object(a.jsx)(L.b,Object(_.a)(Object(_.a)({},c),{},{component:function(e){return t?Object(a.jsx)(n,Object(_.a)({},e)):Object(a.jsx)(L.a,{to:"/auth/login"})}}))},Oe=function(e){var t=e.isLoggedIn,n=e.component,c=Object(he.a)(e,["isLoggedIn","component"]);return Object(a.jsx)(L.b,Object(_.a)(Object(_.a)({},c),{},{component:function(e){return t?Object(a.jsx)(L.a,{to:"/"}):Object(a.jsx)(n,Object(_.a)({},e))}}))},xe=function(){var e=Object(s.b)(),t=Object(I.useState)(!0),n=Object(C.a)(t,2),c=n[0],r=n[1],o=Object(I.useState)(!1),i=Object(C.a)(o,2),u=i[0],l=i[1];return Object(I.useEffect)((function(){z.a.auth().onAuthStateChanged((function(t){var n;(null===t||void 0===t?void 0:t.uid)?(e(ne(t.uid,t.displayName)),l(!0),e((n=t.uid,function(){var e=Object(A.a)(P.a.mark((function e(t){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F(n);case 2:a=e.sent,t(q(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):l(!1),r(!1)}))}),[e]),c?Object(a.jsx)("h1",{children:"Wait..."}):Object(a.jsx)(S.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(L.d,{children:[Object(a.jsx)(Oe,{path:"/auth",component:me,isLoggedIn:u}),Object(a.jsx)(fe,{exact:!0,path:"/",component:le,isLoggedIn:u})]})})})},ve=function(){return Object(a.jsx)(s.a,{store:E,children:Object(a.jsx)(xe,{})})};n(157);r.a.render(Object(a.jsx)(ve,{}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.e1987c8f.chunk.js.map