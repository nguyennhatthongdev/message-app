(function(e){function t(t){for(var s,i,o=t[0],l=t[1],c=t[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&m.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(t);while(m.length)m.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var s={},n={app:0},r=[];function i(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=s,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(a,s,function(t){return e[t]}.bind(null,s));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"2cfd":function(e,t,a){"use strict";a("e314")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},r=[],i=(a("034f"),a("2877")),o={},l=Object(i["a"])(o,n,r,!1,null,null,null),c=l.exports,u=a("8c4f"),d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 bg-app"},[s("div",{staticClass:"header-app"},[s("div",{staticClass:"icon-back"},[s("a",{staticClass:"nav-link",attrs:{href:"/#/room"}},[s("i",{staticClass:"fas fa-angle-left"})])]),s("h2",{staticClass:"text-uppercase"},[s("a",{staticClass:"nav-link hover-color-white",attrs:{href:"/#/room"}},[s("i",{staticClass:"fab fa-facebook-messenger"})])]),e._m(0)]),e._m(1),s("div",{staticClass:"search-app collapse",attrs:{id:"collapseExample"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newMemberText,expression:"newMemberText"}],staticClass:"w-100 border-0 p-3 outline-none",attrs:{placeholder:"Find ..."},domProps:{value:e.newMemberText},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.findMember(t)},input:function(t){t.target.composing||(e.newMemberText=t.target.value)}}}),e.newMember.length>0?s("ul",e._l(e.newMember,(function(t){return s("li",{key:t.id,staticClass:"p-3 border-top border-bottom bg-light d-flex align-items-center",attrs:{if:e.newMember},on:{click:function(a){return e.addMember(t)}}},[s("div",{staticClass:"row"},[e._m(2,!0),s("div",{staticClass:"col-10"},[s("div",[e._v(" "+e._s(t.id)+" ")])])])])})),0):e._e(),""!==e.message.error?s("div",{staticClass:"alert alert-danger alert-dismissible fade show mb-0",attrs:{role:"alert"}},[e._v(" "+e._s(e.message.error)+" "),e._m(3)]):e._e(),""!==e.message.success?s("div",{staticClass:"alert alert-success alert-dismissible fade show mb-0",attrs:{role:"alert"}},[e._v(" "+e._s(e.message.success)+" "),e._m(4)]):e._e()]),e._m(5),s("div",{staticClass:"content-app"},[s("ul",{ref:"messagesContainer",staticClass:"list-message",attrs:{id:"list-message"}},[s("infinite-loading",{attrs:{spinner:"waveDots",direction:"top",distance:10,identifier:e.infiniteId},on:{infinite:e.fetch}},[s("div",{attrs:{slot:"no-more"},slot:"no-more"},[e._v("No more message")]),s("div",{attrs:{slot:"no-results"},slot:"no-results"},[e._v("No results message")])]),e._l(e.listComments,(function(t){return s("li",{key:t.uid},[s("div",{class:{"user-left":e.currentUser!==t.uidUser,"user-right":e.currentUser===t.uidUser}},[s("div",{staticClass:"avtMessage",class:{"avtMessage--on":1==t.status,"avtMessage--off":0==t.status}},[s("img",{staticClass:"img rounded-circle img-fluid",attrs:{src:a("6f03"),alt:"#",width:"100%"}})]),s("div",{staticClass:"contentMessage"},[1===t.type?s("div",{class:{"user-left-audio":e.currentUser!==t.uidUser,"user-right-audio":e.currentUser===t.uidUser}},[s("audio",{attrs:{src:t.src,controls:""}}),s("span",{class:{"user-left-time":e.currentUser!==t.uidUser,"user-right-time":e.currentUser===t.uidUser}},[e._v(e._s(t.dateTime))])]):e._e(),0===t.type?s("div",{class:{"user-left-text":e.currentUser!==t.uidUser,"user-right-text":e.currentUser===t.uidUser}},[e._v(" "+e._s(t.message)+" "),s("span",{class:{"user-left-date":e.currentUser!==t.uidUser,"user-right-date":e.currentUser===t.uidUser},on:{click:function(a){return e.addStatusWishList(!t.wishlist,t.id)}}},[s("i",{staticClass:"fas fa-heart",class:{active:1==t.wishlist}})]),s("span",{class:{"user-left-time":e.currentUser!==t.uidUser,"user-right-time":e.currentUser===t.uidUser}},[e._v(e._s(t.dateTime))])]):e._e()])])])}))],2)]),s("div",{staticClass:"footer-app"},[e._m(6),e._m(7),s("vue-record-audio",{on:{result:e.onResult}}),s("div",{staticClass:"position-relative mr-2"},[e._m(8),s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newComment.message,expression:"newComment.message"}],staticClass:"input-search-app form-control",attrs:{rows:e.rowText},domProps:{value:e.newComment.message},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.deleteRow(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:void t.preventDefault()},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.shiftKey?t.ctrlKey||t.altKey||t.metaKey?null:e.newline(t):null}],keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")||t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:e.addComment(t)},input:function(t){t.target.composing||e.$set(e.newComment,"message",t.target.value)}}})]),s("button",{staticClass:"btn-send-app btn",attrs:{type:"submit"},on:{click:e.addComment}},[s("i",{staticClass:"fas fa-paper-plane text-white"})])],1),s("div",{staticClass:"emoji-app collapse",attrs:{id:"emojiToggleExternalContent"}},[s("VEmojiPicker",{on:{select:e.selectEmoji}})],1)])])])])},m=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"icon-info"},[a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("i",{staticClass:"fas fa-info-circle"})])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"nav-app"},[s("div",{staticClass:"collapse",attrs:{id:"navbarToggleExternalContent"}},[s("div",{staticClass:"bg-dark p-4"},[s("img",{staticClass:"rounded-circle mx-auto d-block img img-fluid img-thumbnail",attrs:{src:a("6f03"),alt:"#",width:"30%"}}),s("h4",{staticClass:"text-white m-4"},[e._v("Nguyễn Nhật Thông")]),s("ul",{staticClass:"nav flex-column text-left"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Chủ đề")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Biểu tượng cảm xúc")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Biệt danh")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Xem ảnh & video")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[e._v("Block")])])])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"col-2"},[s("div",{staticClass:"avtMessage mr-3"},[s("img",{staticClass:"img rounded-circle img-fluid",attrs:{src:a("6f03"),alt:"#",width:"100%"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"btn-search",attrs:{"data-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[a("i",{staticClass:"fas fa-equals"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"btn-group dropup"},[a("a",{attrs:{href:"#","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-ellipsis-v text-white"})]),a("div",{staticClass:"dropdown-menu"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"btn-group dropup"},[a("a",{attrs:{href:"#","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"far fa-image text-white"})]),a("div",{staticClass:"dropdown-menu"})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"icon-smile"},[a("i",{staticClass:"fas fa-smile text-white navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#emojiToggleExternalContent","aria-controls":"emojiToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"}})])}],f=a("9cae"),p=f["a"],v=(a("cccb"),Object(i["a"])(p,d,m,!1,null,null,null)),h=v.exports,g=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 bg-app"},[a("form",[a("div",{staticClass:"form-auth"},[a("h1",[e._v("Login")]),a("div",{staticClass:"form-group"},[e.error?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" "+e._s(e.error)+" ")]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("We'll never share your email with anyone else.")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),a("div",{staticClass:"form-group form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.signInWithEmailAndPassword(t)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[e._v("Check me out")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("a",{staticClass:"btn btn-outline-light w-100",attrs:{href:"/message-app/#/register"},domProps:{textContent:e._s("Register")}})]),a("div",{staticClass:"col-6"},[a("button",{staticClass:"btn btn-custom",domProps:{textContent:e._s("Login")},on:{click:e.signInWithEmailAndPassword}})])])])])])])])])},C=[],b=a("6ff5");s["a"].directive("focus",{inserted:function(e){e.focus()}});var w={name:"Home",components:{},data:function(){return{listComments:[],email:"",password:"",error:""}},beforeCreate:function(){},watch:{},created:function(){},updated:function(){},methods:{signInWithEmailAndPassword:function(){var e=this;b["a"].auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){e.saveLocalStorage(t.user.uid)})).catch((function(t){e.error=t.message,e.email="",e.password=""}))},saveLocalStorage:function(e){localStorage.setItem(this.$store.state.STORAGE_KEY,JSON.stringify(e)),setTimeout((function(){window.location.href="./room"}),1e3)}}},_=w,y=(a("d6db"),Object(i["a"])(_,g,C,!1,null,null,null)),x=y.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"login"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 bg-app"},[a("form",[a("div",{staticClass:"form-auth"},[a("h1",[e._v("Register")]),a("div",{staticClass:"form-group"},[e.message.error?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[e._v(" "+e._s(e.message.error)+" ")]):e._e()]),a("div",{staticClass:"form-group"},[e.message.success?a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[e._v(" "+e._s(e.message.success)+" ")]):e._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputEmail1"}},[e._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.email,expression:"newUser.email"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:e.newUser.email},on:{input:function(t){t.target.composing||e.$set(e.newUser,"email",t.target.value)}}}),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[e._v("We'll never share your email with anyone else.")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[e._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.password,expression:"newUser.password"}],staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:e.newUser.password},on:{input:function(t){t.target.composing||e.$set(e.newUser,"password",t.target.value)}}})]),a("div",{staticClass:"form-group mb-4"},[a("label",{attrs:{for:"exampleInputName"}},[e._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newUser.name,expression:"newUser.name"}],staticClass:"form-control",attrs:{type:"text",id:"exampleInputName",placeholder:"Name"},domProps:{value:e.newUser.name},on:{input:function(t){t.target.composing||e.$set(e.newUser,"name",t.target.value)}}})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("a",{staticClass:"btn btn-outline-light w-100",attrs:{href:"login"},domProps:{textContent:e._s("Back")}})]),a("div",{staticClass:"col-6"},[a("button",{staticClass:"btn btn-custom",domProps:{textContent:e._s("Register")},on:{click:e.createUser}})])])])])])])])])},U=[];a("b0c0");s["a"].directive("focus",{inserted:function(e){e.focus()}});var E={name:"Home",data:function(){return{newUser:{email:"",password:"",name:""},message:{success:"",error:""}}},methods:{createUser:function(){var e=this;b["a"].auth().createUserWithEmailAndPassword(this.newUser.email,this.newUser.password).then((function(t){return e.addUser(t)})).catch((function(t){e.message.error=t.message}))},addUser:function(e){var t=this;console.log(e.user.uid),b["a"].database().ref("/users").child("".concat(e.user.uid)).update({name:"".concat(this.newUser.name),remember:!1}).then((function(){t.message.success="Register Successfully",setTimeout((function(){window.location.href="../#/login"}),2e3)}))}}},T=E,R=(a("2cfd"),Object(i["a"])(T,k,U,!1,null,null,null)),I=R.exports,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 bg-app justify-content-start position-relative"},[s("div",{staticClass:"modal fade position-absolute",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[e._m(0),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"form-group mb-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newRoom.name,expression:"newRoom.name"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter name group"},domProps:{value:e.newRoom.name},on:{input:function(t){t.target.composing||e.$set(e.newRoom,"name",t.target.value)}}})])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},domProps:{textContent:e._s("Close")}}),s("button",{staticClass:"btn bg-dark-purple text-white",attrs:{type:"button","data-dismiss":"modal"},domProps:{textContent:e._s("Add Group")},on:{click:e.addRoom}})])])])]),e._m(1),s("div",{staticClass:"content-app content-app--group"},[s("ul",{staticClass:"pl-0"},[e._m(2),e._l(e.rooms,(function(t,n){return s("li",{key:t.id,staticClass:"group-item p-3",class:{active:e.interval,"room-active":t.isDelete},attrs:{if:e.rooms},on:{mousedown:function(t){return e.start(n)},mouseleave:e.stop,mouseup:e.stop,touchstart:function(t){return e.start(n)},touchend:e.stop,touchcancel:e.stop}},[s(t.isDelete?"span":"a",{tag:"component",attrs:{href:"./room/"+t.id}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3 col-md-2"},[s("img",{staticClass:"img rounded-circle img-fluid",attrs:{src:a("6f03"),alt:"#",width:"100%"}})]),s("div",{staticClass:"col-7 col-md-8"},[s("h6",{staticClass:"link-group mb-0 font-weight-bold"},[e._v(" "+e._s(t.name)+" ")]),s("small",{staticClass:"font-italic"},[e._v("id: "+e._s(t.id))])]),s("div",{staticClass:"col-2 col-md-2"},[s("i",{staticClass:"fas fa-trash-alt text-danger p-2",class:{"d-none":!t.isDelete},on:{click:function(a){return e.removeRoom(t.id)}}}),s("i",{staticClass:"fas fa-times text-danger p-2 ",class:{"d-none":!t.isDelete},on:{click:function(e){t.isDelete=!1}}})])])])],1)}))],2)])])])])])},S=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[e._v("Add name")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"header-app"},[a("h1",{staticClass:"text-uppercase"},[a("i",{staticClass:"fab fa-facebook-messenger"})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"btn-add-group",attrs:{"data-toggle":"modal","data-target":"#exampleModal"}},[a("i",{staticClass:"fas fa-plus"})])}];a("159b"),a("b64b"),a("d81d"),a("4de4");s["a"].directive("focus",{inserted:function(e){e.focus()}});var M={name:"Room",components:{},data:function(){return{btnRemove:!1,interval:!1,count:0,rooms:[],newRoom:{name:"",listUsers:[]},error:""}},beforeCreate:function(){var e=localStorage.getItem(this.$store.state.STORAGE_KEY)||null;null==e&&(window.location.href="login")},watch:{},created:function(){},mounted:function(){this.fetch()},updated:function(){},methods:{removeRoom:function(e){b["a"].database().ref("/comments").orderByChild("uidRoom").equalTo(e).on("value",(function(e){var t=e.val();null!=t&&(console.log(t),Object.keys(t).forEach((function(e){b["a"].database().ref("/comments/"+e).remove()})))})),b["a"].database().ref("/rooms/"+e).remove(),this.fetch()},start:function(e){var t=this;this.interval||(this.interval=setInterval((function(){t.rooms.map((function(e){return e.isDelete=!1})),t.rooms[e].isDelete=!0}),500))},stop:function(){clearInterval(this.interval),this.interval=!1},addRoom:function(){b["a"].database().ref("/rooms").push({name:this.newRoom.name,listUsers:[this.fetchLocalStorage()]}),this.newRoom.name=""},fetchLocalStorage:function(){return JSON.parse(localStorage.getItem(this.$store.state.STORAGE_KEY)||null)},filter:function(e){var t=this,a=[];return e.forEach((function(e){void 0!==e.listUser.filter((function(e){return e===t.fetchLocalStorage()}))[0]&&a.push(e)})),a},fetch:function(){var e=this;b["a"].database().ref("/rooms").on("value",(function(t){var a=[],s=t.val(),n=[];null!=s?Object.keys(s).forEach((function(t){n=[],s[t].listUsers.map((function(e){return n.push(e)})),a.push({id:t,name:s[t].name,listUser:n,isDelete:!1}),e.rooms=e.filter(a)})):e.rooms=[]}))}}},O=M,j=(a("5ca1"),Object(i["a"])(O,P,S,!1,null,null,null)),$=j.exports;s["a"].use(u["a"]);var A=[{path:"/",redirect:"/room"},{path:"/login",name:"Login",component:x},{path:"/register",name:"register",component:I},{path:"/room/:id",name:"Home",component:h},{path:"/room",name:"Room",component:$},{path:"*",name:"Room",component:$}],D=new u["a"]({routes:A}),L=D,N=a("2f62");s["a"].use(N["a"]);var B=new N["a"].Store({state:{STORAGE_KEY:"currentUser",todos:[]},getters:{doneTodos:function(e){return e.todos}},mutations:{listtodo:function(e,t){e.todos=t}},actions:{},modules:{}}),K=a("e166"),H=a.n(K),F=a("79b5"),W=a("c9d0"),G=a.n(W);s["a"].config.productionTip=!1,s["a"].use(F["a"]),s["a"].use(G.a),s["a"].use(H.a,{}),new s["a"]({router:L,store:B,render:function(e){return e(c)}}).$mount("#app")},"5ca1":function(e,t,a){"use strict";a("f255")},"5ced":function(e,t,a){},"6f03":function(e,t,a){e.exports=a.p+"img/T01F936FQDP-U01G4PWTPMF-8d0d2822fc46-512.5b652bfb.jpg"},"6ff5":function(e,t,a){"use strict";var s=a("2591"),n=(a("e71f"),{apiKey:"AIzaSyDdMaJYcnyD5BI5Dkh9aANNQu54WgIMT5A",authDomain:"message-app-vue.firebaseapp.com",databaseURL:"https://message-app-vue-default-rtdb.firebaseio.com",projectId:"message-app-vue",storageBucket:"message-app-vue.appspot.com",messagingSenderId:"846538630965",appId:"1:846538630965:web:85355f01a4ba32c6a3ce7c",measurementId:"G-4SCQ5F2ELT"}),r=s["a"].initializeApp(n);t["a"]=r},"85ec":function(e,t,a){},"9cae":function(e,t,a){"use strict";(function(e){a("4de4"),a("159b"),a("1276"),a("ac1f"),a("498a"),a("c19f"),a("d3b7"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("2b3d"),a("3ca3"),a("ddb0"),a("d81d"),a("b64b"),a("b0c0");var s=a("2b0e"),n=a("6ff5"),r=a("e166"),i=a.n(r);s["a"].directive("focus",{inserted:function(e){e.focus()}}),t["a"]={name:"Home",components:{InfiniteLoading:i.a},data:function(){return{rowText:1,recordings:[],showRecorder:!0,headers:{"X-Custom-Header":"some data"},list:[],page:1,totalItems:0,totalPage:10,listComments:[],infiniteId:+new Date,newMemberText:"",newMember:[],message:{success:"",error:""},newComment:{message:"",dateTime:"",currentUser:String,imageTest:"",wishlist:!1},reset:!1}},beforeCreate:function(){n["a"].auth().onAuthStateChanged((function(e){e?localStorage.setItem("myPage.expectSignIn","1"):localStorage.removeItem("myPage.expectSignIn")}));var e=localStorage.getItem(this.$store.state.STORAGE_KEY)||null;null==e&&(window.location.href="../#/login"),n["a"].database().ref("/rooms/"+this.$route.params.id).on("value",(function(t){var a=t.val();a.listUsers.filter((function(t){return t===e}))||(window.location.href="/#/room")}))},watch:{},created:function(){},computed:{},mounted:function(){setTimeout((function(){}),2e3),setTimeout((function(){n["a"].auth().onAuthStateChanged((function(e){e?n["a"].database().ref("/users/"+e.uid).update({status:"1"}):n["a"].database().ref("/users/").once("value",(function(e){e.forEach((function(e){e.ref.update({status:0})}))}))}))})),this.currentUser=this.fetchLocalStorage()},updated:function(){},methods:{addStatusWishList:function(e,t){n["a"].database().ref("/comments/"+t).update({wishlist:e}),this.changeType()},deleteRow:function(){this.rowText>1&&this.rowText--},selectEmoji:function(e){this.newComment.message=this.newComment.message+" ".concat(e.data)},onResult:function(e){var t=this,a=new window.FileReader;a.readAsDataURL(e),a.onloadend=function(){var e=a.result+"";e=e.split(",")[1],t.newComment.message=e,t.addRecording()}},addRecording:function(){var e=this.newComment.message&&this.newComment.message.trim();e&&null!==this.currentUser&&(this.addCommentFB(1),this.changeType(),this.newComment={},this.reset=!0)},covertBase64ToBlob:function(t,a){if(1===a){for(var s=new ArrayBuffer(t.length),n=new e.from(t,"base64"),r=new Uint8Array(s),i=0;i<n.length;++i)r[i]=n[i];var o=new Uint8Array(r),l=new Blob([o]);return window.URL.createObjectURL(l)}},changeType:function(){this.totalItems=0,this.totalPage=10,this.page=1,this.listComments=[],this.infiniteId+=1},newline:function(){this.rowText<5&&this.rowText++,this.newComment.message="".concat(this.newComment.message,"\n")},addMember:function(e){var t=[];n["a"].database().ref("/rooms/"+this.$route.params.id).on("value",(function(e){var a=e.val();Object.keys(a.listUsers).map((function(e){return t.push(a.listUsers[e])}))})),t.push(e.id),n["a"].database().ref("/rooms/"+this.$route.params.id+"/listUsers").update(t),this.message.success="Add user success"},findMember:function(){var e=this;this.newMember=[];var t=this.newMemberText.trim(),a=[];n["a"].database().ref("/users").on("value",(function(s){var n=s.val();Object.keys(n).forEach((function(s){console.log(e.findMemberAdded(s)),n[s].name===t&&1==e.findMemberAdded(s)&&a.push({id:s,name:n[s].name})}))})),0==this.newMember.length?this.message.error="Find not found":this.message.error="",this.newMember=a},findMemberAdded:function(e){var t=!0;return n["a"].database().ref("/rooms/"+this.$route.params.id+"/listUsers").on("value",(function(a){var s=a.val();Object.keys(s).forEach((function(a){if(e===s[a])return t=!1}))})),t},addComment:function(){var e=this.newComment.message&&this.newComment.message.trim();e&&null!==this.currentUser&&(this.addCommentFB(0),this.changeType(),this.newComment={message:"",dateTime:"",currentUser:String,imageTest:"",wishlist:!1},this.reset=!0)},addCommentFB:function(e){console.log("sss"),n["a"].database().ref("/comments").push({message:this.newComment.message,dateTime:Date.now(),uidUser:this.currentUser,uidRoom:this.$route.params.id,type:e,wishlist:!1})},scrollToEnd:function(){var e=this.$refs.messagesContainer;console.log(e.clientHeight),e.clientHeight+e.scrollTop>=e.clientHeight&&e.scrollTo(0,e.clientHeight)},toDataURL:function(e,t){var a=new Image;a.crossOrigin="Anonymous",a.onload=function(){var e=document.createElement("canvas"),a=e.getContext("2d");e.height=this.naturalHeight,e.width=this.naturalWidth,a.drawImage(this,0,0);var s=e.toDataURL("image/jpeg");t(s)},a.src=e},fetch:function(e){var t=this,a=this.$router.currentRoute.params.id,s=10,r=[];n["a"].database().ref("/comments").orderByChild("uidRoom").equalTo(a).limitToLast(10*this.page).on("value",(function(a){var n=a.val();null!=n?(t.page+=1,Object.keys(n).forEach((function(e){r.push({id:e,src:t.covertBase64ToBlob(n[e].message,n[e].type),message:n[e].message,dateTime:t.convertDate(n[e].dateTime),uidUser:n[e].uidUser,uidRoom:n[e].uidRoom,type:n[e].type,wishlist:n[e].wishlist}),t.listComments=r,s=r+1})),e.loaded()):e.complete(),t.totalItems==s?e.complete():t.totalItems=s}))},convertDate:function(e){if(!e)return"-";function t(e){return e>9?e:"0"+e}var a="",s=new Date(e),n=new Date,r=n.getFullYear(),i=t(n.getMonth()+1),o=t(n.getDate()),l=t(n.getHours()),c=t(n.getMinutes()),u=s.getFullYear(),d=t(s.getMonth()+1),m=t(s.getDate()),f=t(s.getHours()),p=t(s.getMinutes()),v=t(s.getSeconds());return r==u&&i==d?(a="".concat(o-m," ngày trước"),o-m==0&&(a="Today",o>=m&&(a="".concat(l-f," giờ trước"),l-f==0&&c>=p&&(a="".concat(c-p," phút trước"),c-p==0&&(a="Bây giờ"))))):a=u+"-"+d+"-"+m+" "+f+":"+p+":"+v,a},fetchLocalStorage:function(){return JSON.parse(localStorage.getItem(this.$store.state.STORAGE_KEY)||null)}}}}).call(this,a("b639").Buffer)},cccb:function(e,t,a){"use strict";a("5ced")},d6db:function(e,t,a){"use strict";a("e67a")},e314:function(e,t,a){},e67a:function(e,t,a){},f255:function(e,t,a){}});
//# sourceMappingURL=app.b7010d61.js.map