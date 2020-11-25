(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n(7),s=n.n(a),i=(n(14),n(3)),o=n(8),j=n(4),u=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return Object(j.a)(Object(j.a)({},e),{},{transactions:e.transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANSACTION":return Object(j.a)(Object(j.a)({},e),{},{transactions:[t.payload].concat(Object(o.a)(e.transactions))});default:return e}},l={transactions:[]},d=Object(r.createContext)(l),b=function(e){var t=e.children,n=Object(r.useReducer)(u,l),a=Object(i.a)(n,2),s=a[0],o=a[1];return Object(c.jsx)(d.Provider,{value:{transactions:s.transactions,deleteTransaction:function(e){o({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){o({type:"ADD_TRANSACTION",payload:e})}},children:t})};var x=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(0),o=Object(i.a)(s,2),j=o[0],u=o[1],l=Object(r.useContext)(d).addTransaction;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"Add new transaction"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Math.floor(1e7*Math.random()),text:n,amount:+j};l(t)},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{htmlFor:"text",children:"Text"}),Object(c.jsx)("input",{type:"text",required:!0,value:n,onChange:function(e){return a(e.target.value)},placeholder:"Enter text..."})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(c.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(c.jsx)("input",{type:"number",value:j,onChange:function(e){return u(e.target.value)},placeholder:"Enter amount..."})]}),Object(c.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};var O=function(){var e=Object(r.useContext)(d).transactions.map((function(e){return e.amount})).reduce((function(e,t){return e+t}),0).toFixed(2);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{children:"Your Balance"}),Object(c.jsxs)("h1",{children:["$",e]})]})};var h=function(){return Object(c.jsx)("h2",{children:"Expense Tracker"})};var m=function(){var e=Object(r.useContext)(d).transactions.map((function(e){return e.amount})),t=e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0).toFixed(2),n=(-1*e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)).toFixed(2);return Object(c.jsxs)("div",{class:"inc-exp-container",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Income"}),Object(c.jsxs)("p",{className:"money plus",children:["+$",t]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Expense"}),Object(c.jsxs)("p",{className:"money minus",children:["-$",n]})]})]})},f=function(e){var t=e.transaction,n=Object(r.useContext)(d).deleteTransaction,a=t.amount<0?"-":"+";return Object(c.jsxs)("li",{className:t.amount<0?"minus":"plus",children:[t.text,Object(c.jsxs)("span",{children:[a,"$ ",Math.abs(t.amount)]}),Object(c.jsx)("button",{onClick:function(){return n(t.id)},className:"delete-btn",children:"x"})]})};var p=function(){var e=Object(r.useContext)(d).transactions;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:"History"}),Object(c.jsx)("ul",{className:"list",children:e.map((function(e){return Object(c.jsx)(f,{transaction:e},e.id)}))})]})};var v=function(){return Object(c.jsxs)(b,{children:[Object(c.jsx)(h,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(O,{}),Object(c.jsx)(m,{}),Object(c.jsx)(p,{}),Object(c.jsx)(x,{})]})]})};s.a.render(Object(c.jsx)(v,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.6f245ddb.chunk.js.map