(function(t){function e(e){for(var s,n,o=e[0],l=e[1],c=e[2],m=0,d=[];m<o.length;m++)n=o[m],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&d.push(r[n][0]),r[n]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==r[l]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},r={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"2cfd":function(t,e,a){"use strict";a("e314")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"container"},[a("router-view")],1)])},i=[],n=(a("034f"),a("2877")),o={},l=Object(n["a"])(o,r,i,!1,null,null,null),c=l.exports,u=a("8c4f"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 bg-app"},[s("div",{staticClass:"header-app"},[s("div",{staticClass:"icon-back"},[s("a",{staticClass:"nav-link",attrs:{href:"/message-app/#/room"}},[s("i",{staticClass:"fas fa-angle-left"})])]),s("h2",{staticClass:"text-uppercase"},[s("a",{staticClass:"nav-link hover-color-white",attrs:{href:"/message-app/#/room"}},[s("i",{staticClass:"fab fa-facebook-messenger"})])]),t._m(0)]),t._m(1),s("div",{staticClass:"search-app collapse",attrs:{id:"collapseExample"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newMemberText,expression:"newMemberText"}],staticClass:"w-100 border-0 p-3 outline-none",attrs:{placeholder:"Find ..."},domProps:{value:t.newMemberText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.findMember(e)},input:function(e){e.target.composing||(t.newMemberText=e.target.value)}}}),t.newMember.length>0?s("ul",t._l(t.newMember,(function(e){return s("li",{key:e.id,staticClass:"p-3 border-top border-bottom bg-light d-flex align-items-center",attrs:{if:t.newMember},on:{click:function(a){return t.addMember(e)}}},[s("div",{staticClass:"row"},[t._m(2,!0),s("div",{staticClass:"col-10"},[s("div",[t._v(" "+t._s(e.id)+" ")])])])])})),0):t._e(),""!==t.message.error?s("div",{staticClass:"alert alert-danger alert-dismissible fade show mb-0",attrs:{role:"alert"}},[t._v(" "+t._s(t.message.error)+" "),t._m(3)]):t._e(),""!==t.message.success?s("div",{staticClass:"alert alert-success alert-dismissible fade show mb-0",attrs:{role:"alert"}},[t._v(" "+t._s(t.message.success)+" "),t._m(4)]):t._e()]),t._m(5),s("div",{staticClass:"content-app"},[s("ul",{ref:"messagesContainer",staticClass:"list-message",attrs:{id:"list-message"}},[s("infinite-loading",{attrs:{spinner:"waveDots",direction:"top",distance:10,identifier:t.infiniteId},on:{infinite:t.fetch}},[s("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("No more message")]),s("div",{attrs:{slot:"no-results"},slot:"no-results"},[t._v("No results message")])]),t._l(t.listComments,(function(e){return s("li",{key:e.uid},[s("div",{class:{"user-left":t.currentUser!==e.uidUser,"user-right":t.currentUser===e.uidUser}},[s("div",{staticClass:"avtMessage",class:{"avtMessage--on":1==e.status,"avtMessage--off":0==e.status}},[s("img",{staticClass:"img rounded-circle img-fluid",attrs:{src:a("6f03"),alt:"#",width:"100%"}})]),s("div",{staticClass:"contentMessage"},[1===e.type?s("div",{class:{"user-left-audio":t.currentUser!==e.uidUser,"user-right-audio":t.currentUser===e.uidUser}},[s("audio",{attrs:{src:e.src,controls:""}}),s("span",{class:{"user-left-time":t.currentUser!==e.uidUser,"user-right-time":t.currentUser===e.uidUser}},[t._v(t._s(e.dateTime))])]):t._e(),0===e.type?s("div",{class:{"user-left-text":t.currentUser!==e.uidUser,"user-right-text":t.currentUser===e.uidUser}},[t._v(" "+t._s(e.message)+" "),s("span",{class:{"user-left-date":t.currentUser!==e.uidUser,"user-right-date":t.currentUser===e.uidUser},on:{click:function(a){return t.addStatusWishList(!e.wishlist,e.id)}}},[s("i",{staticClass:"fas fa-heart",class:{active:1==e.wishlist}})]),s("span",{class:{"user-left-time":t.currentUser!==e.uidUser,"user-right-time":t.currentUser===e.uidUser}},[t._v(t._s(e.dateTime))])]):t._e()])])])}))],2)]),s("div",{staticClass:"footer-app"},[t._m(6),t._m(7),s("vue-record-audio",{on:{result:t.onResult}}),s("div",{staticClass:"position-relative mr-2"},[t._m(8),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newComment.message,expression:"newComment.message"}],staticClass:"input-search-app form-control",attrs:{rows:t.rowText},domProps:{value:t.newComment.message},on:{keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"delete",[8,46],e.key,["Backspace","Delete","Del"])?null:t.deleteRow(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:void e.preventDefault()},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.shiftKey?e.ctrlKey||e.altKey||e.metaKey?null:t.newline(e):null}],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.addComment(e)},input:function(e){e.target.composing||t.$set(t.newComment,"message",e.target.value)}}})]),s("button",{staticClass:"btn-send-app btn",attrs:{type:"submit"},on:{click:t.addComment}},[s("i",{staticClass:"fas fa-paper-plane text-white"})])],1),s("div",{staticClass:"emoji-app collapse",attrs:{id:"emojiToggleExternalContent"}},[s("VEmojiPicker",{on:{select:t.selectEmoji}})],1)])])])},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"icon-info"},[a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarToggleExternalContent","aria-controls":"navbarToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("i",{staticClass:"fas fa-info-circle"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"nav-app"},[s("div",{staticClass:"collapse",attrs:{id:"navbarToggleExternalContent"}},[s("div",{staticClass:"bg-dark p-4"},[s("img",{staticClass:"rounded-circle mx-auto d-block img img-fluid img-thumbnail",attrs:{src:a("6f03"),alt:"#",width:"30%"}}),s("h4",{staticClass:"text-white m-4"},[t._v("Nguyễn Nhật Thông")]),s("ul",{staticClass:"nav flex-column text-left"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Chủ đề")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Biểu tượng cảm xúc")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Biệt danh")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Xem ảnh & video")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Block")])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-2"},[s("div",{staticClass:"avtMessage mr-3"},[s("img",{staticClass:"img rounded-circle img-fluid",attrs:{src:a("6f03"),alt:"#",width:"100%"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"btn-search",attrs:{"data-toggle":"collapse",href:"#collapseExample",role:"button","aria-expanded":"false","aria-controls":"collapseExample"}},[a("i",{staticClass:"fas fa-equals"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group dropup"},[a("a",{attrs:{href:"#","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"fas fa-ellipsis-v text-white"})]),a("div",{staticClass:"dropdown-menu"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-group dropup"},[a("a",{attrs:{href:"#","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[a("i",{staticClass:"far fa-image text-white"})]),a("div",{staticClass:"dropdown-menu"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon-smile"},[a("i",{staticClass:"fas fa-smile text-white navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#emojiToggleExternalContent","aria-controls":"emojiToggleExternalContent","aria-expanded":"false","aria-label":"Toggle navigation"}})])}],f=a("9cae"),p=f["a"],v=(a("cccb"),Object(n["a"])(p,m,d,!1,null,null,null)),g=v.exports,h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 bg-app"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.signInWithEmailAndPassword()}}},[a("div",{staticClass:"form-auth"},[a("h1",[t._v("Login")]),a("div",{staticClass:"form-group mb-4"},[t.$v.form.$error?a("div",{staticClass:"alert alert-danger mb-4",attrs:{role:"alert"}},[t.$v.form.login_id.email?t._e():a("p",{staticClass:"mb-0",domProps:{textContent:t._s("Error - Email")}}),t.$v.form.login_id.required?t._e():a("p",{staticClass:"mb-0",domProps:{textContent:t._s("Error - Email")}}),t.$v.form.login_password.required?t._e():a("p",{staticClass:"mb-0",domProps:{textContent:t._s("Error - Password")}})]):t._e(),t.error?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]),a("div",{staticClass:"form-group mb-4"},[a("label",{attrs:{for:"login_id"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.form.login_id.$model,expression:"$v.form.login_id.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"email",id:"login_id",name:"login_id",placeholder:"Enter email"},domProps:{value:t.$v.form.login_id.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.login_id,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group mb-4"},[a("label",{attrs:{for:"login_password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.form.login_password.$model,expression:"$v.form.login_password.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"password",id:"login_password",name:"login_password",placeholder:"Password"},domProps:{value:t.$v.form.login_password.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.login_password,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("a",{staticClass:"btn btn-outline-light w-100",attrs:{href:"/message-app/#/register"},domProps:{textContent:t._s("Register")}})]),a("div",{staticClass:"col-6"},[a("button",{staticClass:"btn btn-custom",attrs:{type:"submit",disabled:t.$v.form.$invalid||t.isSubmit},domProps:{textContent:t._s("Login")}})])])])])])])])},b=[],C=a("1da1"),_=(a("96cf"),a("6ff5")),w=a("b5ae");s["a"].directive("focus",{inserted:function(t){t.focus()}});var y={name:"Home",components:{},data:function(){return{isSubmit:!1,form:{login_id:"",login_password:""},error:""}},validations:{form:{login_id:{email:w["email"],required:w["required"]},login_password:{required:w["required"]}}},methods:{signInWithEmailAndPassword:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isSubmit=!0,!t.$v.form.$invalid){e.next=4;break}return t.isSubmit=!1,e.abrupt("return",!1);case 4:return e.next=6,_["a"].auth().signInWithEmailAndPassword(t.$v.form.login_id.$model,t.$v.form.login_password.$model).then((function(){t.$router.push("room")})).catch((function(e){t.error=e.message}));case 6:case"end":return e.stop()}}),e)})))()}}},$=y,x=(a("d6db"),Object(n["a"])($,h,b,!1,null,null,null)),k=x.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"login"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 bg-app"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.createUser(e)}}},[a("div",{staticClass:"form-auth"},[a("h1",[t._v("Register")]),a("div",{staticClass:"form-group"},[t.$v.form.$error?a("div",{staticClass:"alert alert-danger mb-4",attrs:{role:"alert"}},[t.$v.form.register_id.email?t._e():a("p",{staticClass:"mb-0",domProps:{textContent:t._s("Error - Email")}}),t.$v.form.register_id.required?t._e():a("p",{staticClass:"mb-0",domProps:{textContent:t._s("Error - Email")}}),t.$v.form.register_password.required?t._e():a("p",{staticClass:"mb-0",domProps:{textContent:t._s("Error - Password")}}),t.$v.form.register_name.required?t._e():a("p",{staticClass:"mb-0",domProps:{textContent:t._s("Error - Name")}})]):t._e(),t.message.error?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[t._v(" "+t._s(t.message.error)+" ")]):t._e()]),a("div",{staticClass:"form-group"},[t.message.success?a("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v(" "+t._s(t.message.success)+" ")]):t._e()]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"register_id"}},[t._v("Email address")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.form.register_id.$model,expression:"$v.form.register_id.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"register_id",name:"register_id",placeholder:"Enter email"},domProps:{value:t.$v.form.register_id.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.register_id,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"register_password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.form.register_password.$model,expression:"$v.form.register_password.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"password",id:"register_password",name:"register_password",placeholder:"Password"},domProps:{value:t.$v.form.register_password.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.register_password,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"form-group mb-4"},[a("label",{attrs:{for:"register_name"}},[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.form.register_name.$model,expression:"$v.form.register_name.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"register_name",name:"register_name",placeholder:"Name"},domProps:{value:t.$v.form.register_name.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.register_name,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-6"},[a("a",{staticClass:"btn btn-outline-light w-100",attrs:{href:"/message-app/#/login"},domProps:{textContent:t._s("Back")}})]),a("div",{staticClass:"col-6"},[a("button",{staticClass:"btn btn-custom",attrs:{type:"submit",disabled:t.$v.form.$invalid||t.isSubmit},domProps:{textContent:t._s("Register")}})])])])])])])])},U=[];s["a"].directive("focus",{inserted:function(t){t.focus()}});var T={name:"Home",data:function(){return{isSubmit:!1,form:{register_id:"",register_password:"",register_name:""},message:{success:"",error:""}}},validations:{form:{register_id:{required:w["required"],email:w["email"]},register_password:{required:w["required"]},register_name:{required:w["required"]}}},methods:{createUser:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.isSubmit=!0,!t.$v.form.$invalid){e.next=4;break}return t.isSubmit=!1,e.abrupt("return",!1);case 4:return e.next=6,_["a"].auth().createUserWithEmailAndPassword(t.$v.form.register_id.$model,t.$v.form.register_password.$model).then((function(e){return t.addUser(e)})).catch((function(e){t.message.error=e.message}));case 6:case"end":return e.stop()}}),e)})))()},addUser:function(t){var e=this;_["a"].database().ref("/users").child("".concat(t.user.uid)).update({name:"".concat(this.$v.form.register_name.$model),remember:!1}).then((function(){e.message.success="Register Successfully",setTimeout((function(){window.location.href="/message-app/#/login"}),2e3)}))}}},R=T,P=(a("2cfd"),Object(n["a"])(R,E,U,!1,null,null,null)),S=P.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"room"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 bg-app justify-content-start position-relative"},[s("div",{staticClass:"modal fade position-absolute",attrs:{id:"exampleModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[s("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[s("div",{staticClass:"modal-content"},[t._m(0),s("div",{staticClass:"modal-body"},[s("div",{staticClass:"form-group mb-0"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.newRoom.name,expression:"newRoom.name"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Enter name group"},domProps:{value:t.newRoom.name},on:{input:function(e){e.target.composing||t.$set(t.newRoom,"name",e.target.value)}}})])]),s("div",{staticClass:"modal-footer"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"},domProps:{textContent:t._s("Close")}}),s("button",{staticClass:"btn bg-dark-purple text-white",attrs:{type:"button","data-dismiss":"modal"},domProps:{textContent:t._s("Add Group")},on:{click:t.addRoom}})])])])]),t._m(1),t._m(2),s("div",{staticClass:"content-app content-app--group"},[s("div",{staticClass:"tab-content"},[t._m(3),s("div",{staticClass:"container tab-pane fade",attrs:{id:"menu1"}},[s("br"),s("ul",{staticClass:"pl-0"},[t._m(4),t._l(t.rooms,(function(e,r){return s("li",{key:e.id,staticClass:"group-item p-3",class:{active:t.interval,"room-active":e.isDelete},attrs:{if:t.rooms},on:{mousedown:function(e){return t.start(r)},mouseleave:t.stop,mouseup:t.stop,touchstart:function(e){return t.start(r)},touchend:t.stop,touchcancel:t.stop}},[s(e.isDelete?"span":"a",{tag:"component",attrs:{href:"/message-app/#/room/"+e.id}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-3 col-md-2"},[s("img",{staticClass:"img rounded-circle img-fluid",attrs:{src:a("6f03"),alt:"#",width:"100%"}})]),s("div",{staticClass:"col-7 col-md-8"},[s("h6",{staticClass:"link-group mb-0 font-weight-bold"},[t._v(" "+t._s(e.name)+" ")]),s("small",{staticClass:"font-italic"},[t._v("id: "+t._s(e.id))])]),s("div",{staticClass:"col-2 col-md-2"},[s("i",{staticClass:"fas fa-trash-alt text-danger p-2",class:{"d-none":!e.isDelete},on:{click:function(a){return t.removeRoom(e.id)}}}),s("i",{staticClass:"fas fa-times text-danger p-2 ",class:{"d-none":!e.isDelete},on:{click:function(t){e.isDelete=!1}}})])])])],1)}))],2)]),t._m(5),s("div",{staticClass:"container tab-pane fade",attrs:{id:"menu3"}},[s("br"),s("nav",{staticClass:"nav flex-column text-left"},[s("a",{staticClass:"nav-link active",attrs:{href:"/message-app/#/profile"}},[t._v("Profile")]),s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Link")]),s("a",{staticClass:"nav-link",attrs:{href:"#"}},[t._v("Link")]),s("a",{staticClass:"nav-link",on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")]),s("a",{staticClass:"nav-link disabled",attrs:{href:"#"}},[t._v("Disabled")])])])])])])])])},M=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header"},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Add name")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-app"},[a("h1",{staticClass:"text-uppercase"},[a("i",{staticClass:"fab fa-facebook-messenger"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav nav-tabs nav-custom"},[a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link active",attrs:{"data-toggle":"tab",href:"#home"}},[a("i",{staticClass:"fas fa-home"})])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#menu1"}},[a("i",{staticClass:"fas fa-user-friends"})])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#menu2"}},[a("i",{staticClass:"fas fa-gamepad"})])]),a("li",{staticClass:"nav-item"},[a("a",{staticClass:"nav-link",attrs:{"data-toggle":"tab",href:"#menu3"}},[a("i",{staticClass:"fas fa-info"})])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container tab-pane active",attrs:{id:"home"}},[a("br"),a("h3",[t._v("HOME")]),a("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"btn-add-group",attrs:{"data-toggle":"modal","data-target":"#exampleModal"}},[a("i",{staticClass:"fas fa-plus"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container tab-pane fade",attrs:{id:"menu2"}},[a("br"),a("h3",[t._v("Menu 2")]),a("p",[t._v(" Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. ")])])}];a("159b"),a("b64b"),a("d81d"),a("b0c0"),a("4de4");s["a"].directive("focus",{inserted:function(t){t.focus()}});var O={name:"Room",components:{},data:function(){return{btnRemove:!1,interval:!1,count:0,rooms:[],newRoom:{name:"",listUsers:[]},error:""}},beforeCreate:function(){_["a"].auth().onAuthStateChanged((function(t){null==t&&(window.location.href="/message-app/#/login")}))},mounted:function(){this.fetch()},methods:{logout:function(){_["a"].auth().signOut().then((function(){_["a"].auth().onAuthStateChanged((function(t){null==t&&(window.location.href="/message-app/#/login")}))})).catch((function(t){t.log(t)}))},removeRoom:function(t){_["a"].database().ref("/comments").orderByChild("uidRoom").equalTo(t).on("value",(function(t){var e=t.val();null!=e&&Object.keys(e).forEach((function(t){_["a"].database().ref("/comments/"+t).remove()}))})),_["a"].database().ref("/rooms/"+t).remove(),this.fetch()},start:function(t){var e=this;this.interval||(this.interval=setInterval((function(){e.rooms.map((function(t){return t.isDelete=!1})),e.rooms[t].isDelete=!0}),500))},stop:function(){clearInterval(this.interval),this.interval=!1},addRoom:function(){_["a"].database().ref("/rooms").push({name:this.newRoom.name,listUsers:[this.fetchLocalStorage()]}),this.newRoom.name=""},fetchLocalStorage:function(){return JSON.parse(localStorage.getItem(this.$store.state.STORAGE_KEY)||null)},filter:function(t){var e=[];return _["a"].auth().onAuthStateChanged((function(a){t.forEach((function(t){void 0!==t.listUser.filter((function(t){return t===a.uid}))[0]&&e.push(t)}))})),e},fetch:function(){var t=this;_["a"].database().ref("/rooms").on("value",(function(e){var a=[],s=e.val(),r=[];null!=s?Object.keys(s).forEach((function(e){r=[],s[e].listUsers.map((function(t){return r.push(t)})),a.push({id:e,name:s[e].name,listUser:r,isDelete:!1}),t.rooms=t.filter(a)})):t.rooms=[]}))}}},D=O,A=(a("5ca1"),Object(n["a"])(D,j,M,!1,null,null,null)),I=A.exports,L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-12 col-sm-12 col-md-12 col-lg-6 bg-app justify-content-start position-relative"},[a("div",{staticClass:"header-app"},[a("h1",{staticClass:"text-uppercase"},[a("i",{staticClass:"fab fa-facebook-messenger"})])]),a("div",{staticClass:"content-app content-app--group"})])])])}];s["a"].directive("focus",{inserted:function(t){t.focus()}});var B={name:"Profile",components:{},data:function(){return{btnRemove:!1,interval:!1,count:0,rooms:[],newRoom:{name:"",listUsers:[]},error:""}},beforeCreate:function(){_["a"].auth().onAuthStateChanged((function(t){null==t&&(window.location.href="/message-app/#/login")}))},mounted:function(){this.fetch()},methods:{logout:function(){_["a"].auth().signOut().then((function(){_["a"].auth().onAuthStateChanged((function(t){null==t&&(window.location.href="/message-app/#/login")}))})).catch((function(t){t.log(t)}))},removeRoom:function(t){_["a"].database().ref("/comments").orderByChild("uidRoom").equalTo(t).on("value",(function(t){var e=t.val();null!=e&&Object.keys(e).forEach((function(t){_["a"].database().ref("/comments/"+t).remove()}))})),_["a"].database().ref("/rooms/"+t).remove(),this.fetch()},start:function(t){var e=this;this.interval||(this.interval=setInterval((function(){e.rooms.map((function(t){return t.isDelete=!1})),e.rooms[t].isDelete=!0}),500))},stop:function(){clearInterval(this.interval),this.interval=!1},addRoom:function(){_["a"].database().ref("/rooms").push({name:this.newRoom.name,listUsers:[this.fetchLocalStorage()]}),this.newRoom.name=""},fetchLocalStorage:function(){return JSON.parse(localStorage.getItem(this.$store.state.STORAGE_KEY)||null)},filter:function(t){var e=[];return _["a"].auth().onAuthStateChanged((function(a){t.forEach((function(t){void 0!==t.listUser.filter((function(t){return t===a.uid}))[0]&&e.push(t)}))})),e},fetch:function(){var t=this;_["a"].database().ref("/rooms").on("value",(function(e){var a=[],s=e.val(),r=[];null!=s?Object.keys(s).forEach((function(e){r=[],s[e].listUsers.map((function(t){return r.push(t)})),a.push({id:e,name:s[e].name,listUser:r,isDelete:!1}),t.rooms=t.filter(a)})):t.rooms=[]}))}}},N=B,K=Object(n["a"])(N,L,q,!1,null,null,null),F=K.exports;s["a"].use(u["a"]);var H=[{path:"/",redirect:"/room"},{path:"/login",name:"Login",component:k},{path:"/register",name:"register",component:S},{path:"/room/:id",name:"Home",component:g},{path:"/room",name:"Room",component:I},{path:"/profile",name:"Profile",component:F},{path:"*",name:"Room",component:I}],W=new u["a"]({routes:H}),G=W,Y=a("2f62");s["a"].use(Y["a"]);var J=new Y["a"].Store({state:{STORAGE_KEY:"currentUser",todos:[]},getters:{doneTodos:function(t){return t.todos}},mutations:{listtodo:function(t,e){t.todos=e}},actions:{},modules:{}}),Q=a("e166"),z=a.n(Q),X=a("79b5"),V=a("1dce"),Z=a.n(V),tt=a("c9d0"),et=a.n(tt);s["a"].config.productionTip=!1,s["a"].use(Z.a),s["a"].use(X["a"]),s["a"].use(et.a),s["a"].use(z.a,{}),new s["a"]({router:G,store:J,render:function(t){return t(c)}}).$mount("#app")},"5ca1":function(t,e,a){"use strict";a("f255")},"5ced":function(t,e,a){},"6f03":function(t,e,a){t.exports=a.p+"img/T01F936FQDP-U01G4PWTPMF-8d0d2822fc46-512.5b652bfb.jpg"},"6ff5":function(t,e,a){"use strict";var s=a("2591"),r=(a("e71f"),{apiKey:"AIzaSyDdMaJYcnyD5BI5Dkh9aANNQu54WgIMT5A",authDomain:"message-app-vue.firebaseapp.com",databaseURL:"https://message-app-vue-default-rtdb.firebaseio.com",projectId:"message-app-vue",storageBucket:"message-app-vue.appspot.com",messagingSenderId:"846538630965",appId:"1:846538630965:web:85355f01a4ba32c6a3ce7c",measurementId:"G-4SCQ5F2ELT"}),i=s["a"].initializeApp(r);e["a"]=i},"85ec":function(t,e,a){},"9cae":function(t,e,a){"use strict";(function(t){a("159b"),a("1276"),a("ac1f"),a("498a"),a("c19f"),a("d3b7"),a("5cc6"),a("9a8c"),a("a975"),a("735e"),a("c1ac"),a("d139"),a("3a7b"),a("d5d6"),a("82f8"),a("e91f"),a("60bd"),a("5f96"),a("3280"),a("3fcc"),a("ca91"),a("25a1"),a("cd26"),a("3c5d"),a("2954"),a("649e"),a("219c"),a("170b"),a("b39a"),a("72f7"),a("2b3d"),a("3ca3"),a("ddb0"),a("d81d"),a("b64b"),a("b0c0");var s=a("2b0e"),r=a("6ff5"),i=a("e166"),n=a.n(i);s["a"].directive("focus",{inserted:function(t){t.focus()}}),e["a"]={name:"Home",components:{InfiniteLoading:n.a},data:function(){return{rowText:1,recordings:[],showRecorder:!0,headers:{"X-Custom-Header":"some data"},list:[],page:1,totalItems:0,totalPage:10,listComments:[],infiniteId:+new Date,newMemberText:"",newMember:[],message:{success:"",error:""},newComment:{message:"",dateTime:"",currentUser:String,imageTest:"",wishlist:!1},reset:!1}},beforeCreate:function(){var t=this;r["a"].auth().onAuthStateChanged((function(e){null==e?(localStorage.removeItem("myPage.expectSignIn"),window.location.href="/message-app/#/login"):(localStorage.setItem("myPage.expectSignIn","1"),t.currentUser=e.uid)}))},watch:{test:function(){var t=this.$el.querySelector("#container");t.scrollTop=t.scrollHeight,console.log(t.scrollTop)}},created:function(){},computed:{},mounted:function(){setTimeout((function(){}),2e3),setTimeout((function(){r["a"].auth().onAuthStateChanged((function(t){t?r["a"].database().ref("/users/"+t.uid).update({status:"1"}):r["a"].database().ref("/users/").once("value",(function(t){t.forEach((function(t){t.ref.update({status:0})}))}))}))}))},updated:function(){},methods:{addStatusWishList:function(t,e){r["a"].database().ref("/comments/"+e).update({wishlist:t}),this.changeType()},deleteRow:function(){this.rowText>1&&this.rowText--},selectEmoji:function(t){this.newComment.message=this.newComment.message+" ".concat(t.data)},onResult:function(t){var e=this,a=new window.FileReader;a.readAsDataURL(t),a.onloadend=function(){var t=a.result+"";t=t.split(",")[1],e.newComment.message=t,e.addRecording()}},addRecording:function(){var t=this.newComment.message&&this.newComment.message.trim();t&&null!==this.currentUser&&(this.addCommentFB(1),this.changeType(),this.newComment={},this.reset=!0)},covertBase64ToBlob:function(e,a){if(1===a){for(var s=new ArrayBuffer(e.length),r=new t.from(e,"base64"),i=new Uint8Array(s),n=0;n<r.length;++n)i[n]=r[n];var o=new Uint8Array(i),l=new Blob([o]);return window.URL.createObjectURL(l)}},changeType:function(){this.totalItems=0,this.totalPage=10,this.page=1,this.listComments=[],this.infiniteId+=1},newline:function(){this.rowText<5&&this.rowText++,this.newComment.message="".concat(this.newComment.message,"\n")},addMember:function(t){var e=[];r["a"].database().ref("/rooms/"+this.$route.params.id).on("value",(function(t){var a=t.val();Object.keys(a.listUsers).map((function(t){return e.push(a.listUsers[t])}))})),e.push(t.id),r["a"].database().ref("/rooms/"+this.$route.params.id+"/listUsers").update(e),this.message.success="Add user success"},findMember:function(){var t=this;this.newMember=[];var e=this.newMemberText.trim(),a=[];r["a"].database().ref("/users").on("value",(function(s){var r=s.val();Object.keys(r).forEach((function(s){console.log(t.findMemberAdded(s)),r[s].name===e&&1==t.findMemberAdded(s)&&a.push({id:s,name:r[s].name})}))})),0==this.newMember.length?this.message.error="Find not found":this.message.error="",this.newMember=a},findMemberAdded:function(t){var e=!0;return r["a"].database().ref("/rooms/"+this.$route.params.id+"/listUsers").on("value",(function(a){var s=a.val();Object.keys(s).forEach((function(a){if(t===s[a])return e=!1}))})),e},addComment:function(){var t=this.newComment.message&&this.newComment.message.trim();t&&null!==this.currentUser&&(this.addCommentFB(0),this.changeType(),this.newComment={message:"",dateTime:"",currentUser:String,imageTest:"",wishlist:!1},this.reset=!0)},addCommentFB:function(t){r["a"].database().ref("/comments").push({message:this.newComment.message,dateTime:Date.now(),uidUser:this.currentUser,uidRoom:this.$route.params.id,type:t,wishlist:!1})},toDataURL:function(t,e){var a=new Image;a.crossOrigin="Anonymous",a.onload=function(){var t=document.createElement("canvas"),a=t.getContext("2d");t.height=this.naturalHeight,t.width=this.naturalWidth,a.drawImage(this,0,0);var s=t.toDataURL("image/jpeg");e(s)},a.src=t},fetch:function(t){var e=this,a=this.$router.currentRoute.params.id,s=10,i=[];r["a"].database().ref("/comments").orderByChild("uidRoom").equalTo(a).limitToLast(10*this.page).on("value",(function(a){var r=a.val();null!=r?(e.page+=1,Object.keys(r).forEach((function(t){i.push({id:t,src:e.covertBase64ToBlob(r[t].message,r[t].type),message:r[t].message,dateTime:e.convertDate(r[t].dateTime),uidUser:r[t].uidUser,uidRoom:r[t].uidRoom,type:r[t].type,wishlist:r[t].wishlist}),e.listComments=i,s=i+1})),t.loaded()):t.complete(),e.totalItems==s?t.complete():e.totalItems=s}))},convertDate:function(t){if(!t)return"-";function e(t){return t>9?t:"0"+t}var a="",s=new Date(t),r=new Date,i=r.getFullYear(),n=e(r.getMonth()+1),o=e(r.getDate()),l=e(r.getHours()),c=e(r.getMinutes()),u=s.getFullYear(),m=e(s.getMonth()+1),d=e(s.getDate()),f=e(s.getHours()),p=e(s.getMinutes()),v=e(s.getSeconds());return i==u&&n==m?(a="".concat(o-d," ngày trước"),o-d==0&&(a="Today",o>=d&&(a="".concat(l-f," giờ trước"),l-f==0&&c>=p&&(a="".concat(c-p," phút trước"),c-p==0&&(a="Bây giờ"))))):a=u+"-"+m+"-"+d+" "+f+":"+p+":"+v,a}}}}).call(this,a("b639").Buffer)},cccb:function(t,e,a){"use strict";a("5ced")},d6db:function(t,e,a){"use strict";a("e67a")},e314:function(t,e,a){},e67a:function(t,e,a){},f255:function(t,e,a){}});
//# sourceMappingURL=app.58983bc1.js.map