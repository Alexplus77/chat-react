(this["webpackJsonpchat-react"]=this["webpackJsonpchat-react"]||[]).push([[0],{11:function(e,a,s){"use strict";s.r(a);var t=s(1),c=s.n(t),n=s(5),i=s.n(n),m=(s(3),s(2)),r=s(0),l=function(e){var a=e.name,s=e.text,t=e.time;return Object(r.jsxs)("li",{children:[Object(r.jsxs)("div",{className:"message-data",children:[Object(r.jsxs)("span",{className:"message-data-name",children:[" ",Object(r.jsx)(m.a,{className:"fa fa-circle online"})," ",a]}),Object(r.jsx)("span",{className:"message-data-time",children:t})]}),Object(r.jsx)("div",{className:"message my-message",children:s})]})},j=function(e){var a=e.name,s=e.text,t=e.time;return Object(r.jsxs)("li",{className:"clearfix",children:[Object(r.jsxs)("div",{className:"message-data align-right",children:[Object(r.jsxs)("span",{className:"message-data-time",children:[t," "]}),Object(r.jsxs)("span",{className:"message-data-name",children:[" ",a]})," ",Object(r.jsx)("i",{children:Object(r.jsx)(m.a,{className:"fa fa-circle me"})})]}),Object(r.jsx)("div",{className:"message other-message float-right",children:s})]})},d=function(e){var a=e.name,s=e.time,t=e.text;return Object(r.jsxs)("li",{children:[Object(r.jsxs)("div",{className:"message-data",children:[Object(r.jsxs)("span",{className:"message-data-name",children:[" ",Object(r.jsx)(m.a,{className:"fa fa-circle online"})," ",a]}),Object(r.jsx)("span",{className:"message-data-time",children:s})]}),Object(r.jsx)("div",{children:t})]})},x=function(e){var a=e.list;return Object(r.jsx)("ul",{children:a.map((function(e){var a=e.id,s=e.from,t=e.type,c=e.text,n=e.time,i=s.name;switch(t){case"message":return Object(r.jsx)(l,{id:a,name:i,text:c,time:n},a);case"response":return Object(r.jsx)(j,{id:a,name:i,text:c,time:n},a);case"typing":return Object(r.jsx)(d,{id:a,name:i,text:c,time:n},a);default:return null}}))})};var h=function(){var e=[{id:"chat-5-1090",from:{name:"\u041e\u043b\u044c\u0433\u0430"},type:"response",time:"10:10",text:"\u041f\u0440\u0438\u0432\u0435\u0442, \u0412\u0438\u043a\u0442\u043e\u0440. \u041a\u0430\u043a \u0434\u0435\u043b\u0430? \u041a\u0430\u043a \u0438\u0434\u0435\u0442 \u0440\u0430\u0431\u043e\u0442\u0430 \u043d\u0430\u0434 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u043c?"},{id:"chat-5-1091",from:{name:"\u0412\u0438\u043a\u0442\u043e\u0440"},type:"message",time:"10:12",text:"\u041f\u0440\u0438\u0432\u0435\u0442. \u0414\u0430\u0432\u0430\u0439 \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u0441\u043e\u0437\u0432\u043e\u043d\u0438\u043c\u0441\u044f. \u041f\u0440\u043e\u0435\u043a\u0442 \u043f\u0440\u0430\u043a\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0433\u043e\u0442\u043e\u0432, \u0438 \u0443 \u043c\u0435\u043d\u044f \u0435\u0441\u0442\u044c \u0447\u0442\u043e \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c."},{id:"chat-5-1092",from:{name:"\u041e\u043b\u044c\u0433\u0430"},type:"response",time:"10:14",text:"\u041d\u0435 \u0443\u0432\u0435\u0440\u0435\u043d\u0430 \u0447\u0442\u043e \u0441\u0435\u0433\u043e\u0434\u043d\u044f \u043f\u043e\u043b\u0443\u0447\u0438\u0442\u0441\u044f. \u041d\u0435 \u0432\u0441\u0435 \u0435\u0449\u0435 \u0432 \u043e\u0444\u0438\u0441\u0435. \u0414\u0430\u0432\u0430\u0439 \u0443\u0442\u043e\u0447\u043d\u044e \u0447\u0435\u0440\u0435\u0437 \u0447\u0430\u0441. \u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0438 \u043b\u0438 \u043a\u0430\u043a\u0438\u0435-\u043b\u0438\u0431\u043e \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043d\u0430 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0439 \u0441\u0442\u0430\u0434\u0438\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430?"},{id:"chat-5-1093",from:{name:"\u0412\u0438\u043a\u0442\u043e\u0440"},type:"message",time:"10:20",text:"\u041d\u0435\u0442, \u0432\u0441\u0435 \u043f\u0440\u043e\u0448\u043b\u043e \u0433\u043b\u0430\u0434\u043a\u043e. \u041e\u0447\u0435\u043d\u044c \u0445\u043e\u0447\u0443 \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0451 \u043a\u043e\u043c\u0430\u043d\u0434\u0435."},{id:"chat-5-1094",from:{name:"\u0412\u0438\u043a\u0442\u043e\u0440"},type:"typing",time:"10:31"}];return d.defaultProps={text:[Object(r.jsx)(m.a,{className:"fa fa-circle online"},1),Object(r.jsx)(m.a,{className:"fa fa-circle online"},2),Object(r.jsx)(m.a,{className:"fa fa-circle online"},3)]},e.length>0&&Object(r.jsx)("div",{className:"clearfix container",children:Object(r.jsx)("div",{className:"chat",children:Object(r.jsx)("div",{className:"chat-history",children:Object(r.jsx)(x,{list:e})})})})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(h,{})}),document.getElementById("root"))},3:function(e,a,s){}},[[11,1,2]]]);
//# sourceMappingURL=main.e56797b2.chunk.js.map