(this["webpackJsonpreact-typescript-starter-pack"]=this["webpackJsonpreact-typescript-starter-pack"]||[]).push([[0],[,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var s=n(1),c=n.n(s),r=n(6),o=n.n(r),a=(n(12),n(13),n(7)),i=n(2),u=(n(14),function(t,e){var n=Object(s.useState)((function(){try{var n=localStorage.getItem(t);return n?JSON.parse(n):e}catch(s){return e}})),c=Object(i.a)(n,2),r=c[0],o=c[1];return[r,function(e){o(e),localStorage.setItem(t,JSON.stringify(e))}]}),j=(n(15),n(0)),l=function(){return Object(j.jsxs)("div",{className:"lds-roller",children:[Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{}),Object(j.jsx)("div",{})]})},d=(n(17),function(t){var e=t.post,n=t.onClick,s=e.user,c=e.body,r=e.postId,o=s.username,a=o.split(" ").map((function(t){return t.slice(0,1)})).join("");return Object(j.jsxs)("div",{className:"post",children:[Object(j.jsx)("div",{className:"post__username--firs-letter",children:a}),Object(j.jsx)("div",{className:"post__username",children:o}),Object(j.jsx)("p",{className:"post__text",children:c}),Object(j.jsx)("button",{className:"post__delete",type:"button",onClick:function(){return n(r)},children:"\u2573"})]})}),b=(n(18),function(t){var e=t.posts,n=t.onClick;return Object(j.jsx)("ul",{className:"postsList",children:e.map((function(t){return Object(j.jsx)("li",{children:Object(j.jsx)(d,{post:t,onClick:n})},t.id)}))})}),f=(n(19),function(t){var e=t.onChange,n=t.onClick,s=t.username;return Object(j.jsxs)("label",{htmlFor:"username",className:"username",children:[Object(j.jsx)("input",{type:"text",id:"username",placeholder:"Please write your username",value:s,onChange:function(t){return e(t)},className:"username__input"}),Object(j.jsx)("button",{type:"button",disabled:!s,onClick:n,className:"username__button",children:"Apply"})]})}),p=function(){return+crypto.randomUUID().split("").join("").replace(/[^\d]/g,"")},O=function(){var t=Object(s.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],r=u("text",""),o=Object(i.a)(r,2),d=o[0],O=o[1],m=Object(s.useState)(!1),x=Object(i.a)(m,2),h=x[0],v=x[1],_=Object(s.useState)(!1),y=Object(i.a)(_,2),N=y[0],k=y[1],C=Object(s.useState)(""),g=Object(i.a)(C,2),S=g[0],I=g[1],P=Object(s.useState)(""),w=Object(i.a)(P,2),E=w[0],J=w[1],D=u("username",""),T=Object(i.a)(D,2),U=T[0],A=T[1],B=function(){if(!d)return k(!0),void I("Please write some text to post it!");var t={user:{username:U,id:p()},id:p(),body:d,postId:p()};c((function(e){return[].concat(Object(a.a)(e),[t])})),O("")};return Object(s.useEffect)((function(){setTimeout((function(){return k(!1)}),3e3)}),[N]),Object(s.useEffect)((function(){setTimeout((function(){return I("")}),3e3)}),[S]),Object(s.useEffect)((function(){v(!0),fetch("https://dummyjson.com/comments?limit=5").then((function(t){return t.json()})).then((function(t){c(t.comments)})).finally((function(){return v(!1)}))}),[]),U?Object(j.jsxs)("div",{className:"posts",children:[h?Object(j.jsx)(l,{}):Object(j.jsx)(b,{posts:n,onClick:function(t){c((function(e){return e.filter((function(e){return e.postId!==t}))}))}}),N&&Object(j.jsx)("p",{className:"posts__error",children:S}),Object(j.jsxs)("div",{className:"posts__addPost",children:[Object(j.jsx)("textarea",{className:"posts__addPost-textarea",name:"addPost",id:"addPost",cols:30,rows:10,placeholder:"Write some post....",value:d,onChange:function(t){O(t.target.value)},onKeyDown:function(t){return function(t){"Enter"===t.key&&(t.preventDefault(),B())}(t)}}),Object(j.jsx)("button",{type:"button",className:"posts__addPost-button",onClick:B,children:"Send"})]})]}):Object(j.jsx)(f,{onChange:function(t){J(t.target.value)},onClick:function(){E&&A(E)},username:E})},m=function(){return Object(j.jsx)("div",{className:"testTask",children:Object(j.jsx)(O,{})})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.f8e52657.chunk.js.map