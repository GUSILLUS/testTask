(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),a=n(6),r=n.n(a),o=(n(12),n(2)),i=(n(13),n(7)),u=(n(14),function(e,t){var n=Object(s.useState)((function(){try{var n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(s){return t}})),c=Object(o.a)(n,2),a=c[0],r=c[1];return[a,function(t){r(t),localStorage.setItem(e,JSON.stringify(t))}]}),l=(n(15),n(0)),j=function(){return Object(l.jsxs)("div",{className:"lds-roller",children:[Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{}),Object(l.jsx)("div",{})]})},d=(n(17),function(e){var t=e.post,n=e.onDelete,s=t.user,c=t.body,a=t.postId,r=s.username,o=r.split(" ").map((function(e){return e.slice(0,1)})).join("");return Object(l.jsxs)("li",{className:"post",children:[Object(l.jsx)("div",{className:"post__username--firs-letter",children:o}),Object(l.jsx)("div",{className:"post__username",children:r}),Object(l.jsx)("p",{className:"post__text",children:c}),Object(l.jsx)("button",{className:"post__delete",type:"button",onClick:function(){n(a)},children:"\u2716"})]})}),b=(n(18),function(e){var t=e.posts,n=e.onDelete;return Object(l.jsx)("ul",{className:"postsList",children:t.map((function(e){return Object(l.jsx)(d,{post:e,onDelete:n},e.id)}))})}),m=function(){return+crypto.randomUUID().split("").join("").replace(/[^\d]/g,"")},f=(n(19),function(e){var t=e.message;return Object(l.jsx)("div",{className:"errorMessage",children:Object(l.jsx)("p",{className:"errorMessage__text",children:t})})}),p=function(e){var t=e.userName,n=Object(s.useState)([]),c=Object(o.a)(n,2),a=c[0],r=c[1],d=u("text",""),p=Object(o.a)(d,2),O=p[0],x=p[1],h=Object(s.useState)(!0),v=Object(o.a)(h,2),N=v[0],_=v[1],y=Object(s.useState)(null),g=Object(o.a)(y,2),k=g[0],S=g[1],C=function(){if(O){var e={user:{username:t,id:m()},id:m(),body:O,postId:m()};r((function(t){return[].concat(Object(i.a)(t),[e])})),x("")}else S("Please write some text to post it!")};return Object(s.useEffect)((function(){var e=setTimeout((function(){S(null)}),3e3);return function(){clearTimeout(e)}}),[k]),Object(s.useEffect)((function(){fetch("https://dummyjson.com/comments?limit=5").then((function(e){return e.json()})).then((function(e){r(e.comments)})).catch((function(e){return S(e.message)})).finally((function(){return _(!1)}))}),[]),Object(l.jsxs)("div",{className:"posts",children:[N?Object(l.jsx)(j,{}):Object(l.jsx)(b,{posts:a,onDelete:function(e){r((function(t){return t.filter((function(t){return t.postId!==e}))}))}}),k&&Object(l.jsx)(f,{message:k}),Object(l.jsxs)("div",{className:"posts__addPost",children:[Object(l.jsx)("textarea",{className:"posts__addPost-textarea",name:"addPost",id:"addPost",cols:30,rows:10,placeholder:"Write some post....",value:O,onChange:function(e){x(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),C())}}),Object(l.jsx)("button",{type:"button",className:"posts__addPost-button",onClick:C,disabled:null!==k,children:"Send"})]})]})},O=(n(20),function(e){var t=e.onChange,n=e.onClick,s=e.username;return Object(l.jsxs)("label",{htmlFor:"username",className:"username",children:[Object(l.jsx)("input",{type:"text",id:"username",placeholder:"Please write your username",value:s,onChange:t,className:"username__input",autoComplete:"off"}),Object(l.jsx)("button",{type:"button",disabled:!s,onClick:n,className:"username__button",children:"Apply"})]})}),x=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],a=u("username",""),r=Object(o.a)(a,2),i=r[0],j=r[1];return Object(l.jsx)("div",{className:"testTask",children:i?Object(l.jsx)(p,{userName:i}):Object(l.jsx)(O,{onChange:function(e){c(e.target.value)},onClick:function(){n&&j(n)},username:n})})};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.f6e242e4.chunk.js.map