(this["webpackJsonpexpense-tracer"]=this["webpackJsonpexpense-tracer"]||[]).push([[0],{13:function(e,c,t){},17:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t.n(n),a=t(6),r=t.n(a),l=t(8),o=t(4),d=(t(13),t(0));var i=function(e){var c=e.parentCallback,t=Object(n.useState)(""),s=Object(o.a)(t,2),a=s[0],r=s[1],l=Object(n.useState)(""),i=Object(o.a)(l,2),j=i[0],b=i[1];return Object(d.jsx)("div",{children:Object(d.jsxs)("form",{onSubmit:function(e){return function(e){e.preventDefault(),""!==a&&""!==j&&c({desc:a,amount:j}),r(""),b("")}(e)},children:[Object(d.jsx)("h3",{className:"h6 font-color-app mt-3",children:"Add Transaction"}),Object(d.jsx)("div",{className:" mb-3 card-width",children:Object(d.jsx)("input",{type:"text",className:"form-control",placeholder:"Description",value:a,onChange:function(e){return r(e.target.value)}})}),Object(d.jsx)("div",{className:"mb-3 d-flex flex-row card-width",children:Object(d.jsx)("input",{type:"number",className:"form-control",placeholder:"Amount",value:j,onChange:function(e){return b(e.target.value)}})}),Object(d.jsx)("div",{className:"card-width",children:Object(d.jsx)("button",{type:"submit",className:"btn text-white col-12 col-sm-12",style:{backgroundColor:"#445187"},children:"Add Transaction"})})]})})},j=t(7);var b=function(e){var c,t=e.currentBalance;return console.log(t.income),c=parseInt(t.income)+parseInt(t.expense),console.log(c),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"h6 font-color-app",children:"Balance Sheet"}),Object(d.jsx)("div",{className:"card bg-white shadow-sm border-0 card-width",children:Object(d.jsxs)("div",{className:"card-body py-1 text-center d-flex flex-row justify-content-between",children:[Object(d.jsx)("div",{className:"card-title fw-bolder h6 font-color-app d-flex align-items-center",children:"Balance"}),Object(d.jsx)("div",{className:'"h5 fw-bolder d-flex align-items-center" '.concat(c>=0?"text-success":"text-danger"),children:c>=0?"$"+c:"-$"+Math.abs(c)})]})})]})};var h=function(e){var c,t=e.transaction,n=0,s=0,a=Object(j.a)(t);try{for(a.s();!(c=a.n()).done;){var r=c.value;r.amount>0?n=+n+ +r.amount:(s=parseInt(s)+parseInt(r.amount),console.log(s))}}catch(o){a.e(o)}finally{a.f()}var l={income:n,expense:s};return Object(d.jsxs)("div",{children:[Object(d.jsx)(b,{currentBalance:l}),Object(d.jsx)("div",{className:"card shadow-sm bg-white mt-2 border-0 card-width",children:Object(d.jsxs)("div",{className:"card-body py-1 text-center d-flex flex-row justify-content-between",children:[Object(d.jsxs)("div",{className:"fw-bolder h6 text-success",children:[Object(d.jsxs)("div",{children:["$",n>0?n:"0"]}),Object(d.jsx)("div",{className:"font-color-app",children:"Income"})]}),Object(d.jsx)("div",{className:"bg-info",style:{width:"1px"}}),Object(d.jsxs)("div",{className:"h6 fw-bolder text-danger",children:[Object(d.jsx)("div",{children:0===s?"0":"-$"+Math.abs(s)}),Object(d.jsx)("div",{className:"font-color-app",children:"Expense"})]})]})})]})};var m=function(e){var c=e.transaction;return Object(d.jsxs)("div",{className:"mt-3",children:[Object(d.jsx)("div",{className:"h6 font-color-app",children:c.length>0?"Transaction History":""}),Object(d.jsx)("ul",{className:"list-group card-width",children:c.map((function(e,c){return Object(d.jsxs)("li",{className:"list-group-item bg-light mb-2\n                            d-flex flex-row justify-content-between border-0\n                             border-end border-5 shadow-sm ".concat(e.amount>0?"border-success":"border-danger"),children:[Object(d.jsx)("div",{className:"fw-bolder font-color-app",children:e.desc}),Object(d.jsx)("div",{children:e.amount})]},c)}))})]})};var x=function(){var e=Object(n.useState)([]),c=Object(o.a)(e,2),t=c[0],s=c[1];return Object(d.jsx)("div",{className:"container my-3",children:Object(d.jsxs)("div",{className:"container-app",children:[Object(d.jsx)("h1",{className:"text-center h3 font-color-app fw-bold",children:"EXPENSE TRACER  "}),Object(d.jsxs)("div",{className:"row mt-3",children:[Object(d.jsxs)("div",{className:"col-lg-6 col-md-6",children:[Object(d.jsx)(h,{transaction:t}),Object(d.jsx)(i,{parentCallback:function(e){s([].concat(Object(l.a)(t),[{desc:e.desc,amount:e.amount}])),t=[{desc:e.desc,amount:e.amount}],console.log(t)}})]}),Object(d.jsx)("div",{className:"col-lg-6 col-md-6",children:Object(d.jsx)(m,{transaction:t})})]})]})})};t(15),t(16);r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.d9a80e3f.chunk.js.map