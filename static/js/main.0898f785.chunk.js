(this["webpackJsonptodolist-react"]=this["webpackJsonptodolist-react"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),s=n(7),r=n.n(s),a=(n(12),function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),s(t),r(t)}))}),j=(n(13),n(0)),l=function(){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsx)("div",{className:"headDiv",children:Object(j.jsx)("h1",{children:"TodoList - React"})})})},d=n(6),u=n(4),o=(n(15),function(){var t=Object(c.useState)([]),e=Object(u.a)(t,2),n=e[0],s=e[1],r=Object(c.useState)(""),a=Object(u.a)(r,2),l=a[0],o=a[1],b=Object(c.useState)("Add Task"),O=Object(u.a)(b,2),h=O[0],x=O[1],f=function(t){var e=n.filter((function(e,n){return t!==n}));s(Object(d.a)(e))};return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("div",{className:"Container",children:[Object(j.jsx)("div",{className:"AddEventContainer",children:Object(j.jsxs)("form",{id:"form",onSubmit:function(t){t.preventDefault(),""!==l&&""!==l.trim()?s((function(t){return[].concat(Object(d.a)(t),[l])})):0!==l.length&&""===l.trim()&&alert("Only White Spaces Not Allowed"),o(""),x("Add Task")},children:[Object(j.jsx)("div",{className:"text",children:Object(j.jsx)("input",{type:"text",id:"eventInputtext",placeholder:"Enter Task",value:l,onChange:function(t){o(t.target.value)}})}),Object(j.jsx)("div",{className:"submitbtn",children:Object(j.jsx)("input",{type:"submit",id:"submitbtn",value:h})})]})}),Object(j.jsx)("div",{className:"List",children:Object(j.jsx)("ul",{id:"listUl",children:n.map((function(t,e){return Object(j.jsxs)("li",{children:[Object(j.jsx)("p",{children:t}),Object(j.jsx)("button",{className:"editbtn",onClick:function(){return function(t,e){o(t),x("Edit"),f(e)}(t,e)},children:"Edit"}),Object(j.jsx)("button",{className:"deletebtn",onClick:function(){return f(e)},children:"Delete"})]},e)}))})}),Object(j.jsx)("div",{className:"Pending-Current",children:Object(j.jsxs)("h2",{children:["Currently Pending Task : ",n.length]})})]})})}),b=function(){return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsx)(o,{})]})};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),a()}},[[16,1,2]]]);
//# sourceMappingURL=main.0898f785.chunk.js.map