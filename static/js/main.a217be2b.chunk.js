(this["webpackJsonptraining-tests"]=this["webpackJsonptraining-tests"]||[]).push([[0],{177:function(e,t,n){e.exports=n(346)},34:function(e){e.exports=JSON.parse('[{"id":1,"question":"I don\u2019t like this table. It \u2026 very small.","options":["am","is","are","be"],"rightOptionKey":1},{"id":2,"question":"\u2026 you live in a house or in a flat?","options":["Does","Did","Do","Will"],"rightOptionKey":2},{"id":3,"question":"Our friends live abroad. But we often visit \u2026 .","options":["they","we","them","you"],"rightOptionKey":2},{"id":4,"question":"The picture hangs \u2026 the wall.","options":["in","on","to","for"],"rightOptionKey":1}]')},344:function(e,t,n){},346:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),s=n(91),c=n(56),l=n(6),u=n(87),m=n(155),h=n(350),v=n(156),p=n.n(v),b=n(34),d=n(349),g=function(e){var t=e.questionNumber,n=e.total;return o.a.createElement(d.a,{className:"site-page-header",title:"\u041f\u0440\u043e\u0432\u0435\u0440\u044c \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u044f\u0437\u044b\u043a\u0430. ".concat(t,"/").concat(n)})},f=n(168),E=n.n(f),N=n(348),O={display:"block",height:"30px",lineHeight:"30px"},w=function(e){var t=e.data,n=void 0===t?{}:t,a=e.onChange,i=e.chosenOption,r=n.question,s=n.options;return o.a.createElement("div",{className:"question-block"},o.a.createElement("div",{className:"question-block__title"},r),o.a.createElement("div",{className:"question-block__options"},o.a.createElement(N.default.Group,{onChange:a,value:i},E()(s,(function(e,t){return o.a.createElement(N.default,{style:O,key:t,value:t},e)})))))},y=n(92),q=function(e){var t=e.questionNumber,n=e.total,a=e.onChangeQuestion,i=e.onFinish;return o.a.createElement("div",{className:"navigation",onClick:a},1!==t&&o.a.createElement(c.b,{to:"".concat(t-1)},o.a.createElement(y.a,{className:"navigation__button",type:"link"},"\u041d\u0430\u0437\u0430\u0434")),t===n?o.a.createElement(c.b,{to:"/results"},o.a.createElement(y.a,{onClick:i,className:"navigation__button",type:"link"},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c")):o.a.createElement(c.b,{to:"".concat(t+1)},o.a.createElement(y.a,{className:"navigation__button",type:"link"},"\u0412\u043f\u0435\u0440\u0435\u0434")))};var k=function(e){var t=e.answers,n=e.setAnswers,i=e.questionNumber;i=+i;var r=Object(a.useState)(),c=Object(s.a)(r,2),l=c[0],v=c[1];return Object(h.a)((function(){console.log(b)})),Object(a.useEffect)((function(){v((function(){return function(e){var t=e.target.value;n((function(e){return Object(m.a)({},e,Object(u.a)({},i,t))}))}}))}),[i,n]),o.a.createElement("div",{className:"content-container"},o.a.createElement(g,{questionNumber:i,total:b.length}),o.a.createElement(w,{data:p()(b,["id",i]),onChange:l,chosenOption:t[i]}),o.a.createElement(q,{questionNumber:i,total:b.length}))},_=n(173),j=n.n(_),C=function(e){var t=e.givenAnswers,n=j()(b,(function(e,n){var a=n.id,o=n.rightOptionKey;return t[a]===o?++e:e}),0);return o.a.createElement("div",{className:"results"},"\u0422\u0435\u0441\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d. \u0412\u044b \u043e\u0442\u0432\u0435\u0442\u0438\u043b\u0438 \u0432\u0435\u0440\u043d\u043e \u043d\u0430 ",n," \u0438\u0437 ",b.length," \u0432\u043e\u043f\u0440\u043e\u0441\u043e\u0432.")};n(344),n(345);var A=function(){var e=Object(a.useState)({}),t=Object(s.a)(e,2),n=t[0],i=t[1];return o.a.createElement("div",{className:"App"},o.a.createElement(c.a,null,o.a.createElement(l.b,{path:"/"},o.a.createElement(l.a,{to:"/question/1"})),o.a.createElement(l.b,{path:"/question/:questionNumber",render:function(e){var t=e.match.params;return o.a.createElement(k,Object.assign({answers:n,setAnswers:i},t))}}),o.a.createElement(l.b,{path:"/results",render:function(){return o.a.createElement(C,{givenAnswers:n})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[177,1,2]]]);
//# sourceMappingURL=main.a217be2b.chunk.js.map