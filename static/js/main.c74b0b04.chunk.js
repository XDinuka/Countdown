(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(0),o=n.n(c),s=n(15),a=n.n(s),j=(n(22),n(9)),r=(n(23),n(16)),u=n(2),i=n(1);function b(){console.log("Home");var t=Object(u.f)(),e=Object(c.useState)(null),n=Object(j.a)(e,2),o=n[0],s=n[1],a=Object(c.useState)(null),r=Object(j.a)(a,2),b=r[0],l=r[1];return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=new Date("".concat(o,",").concat(b)).getTime();t.push("https://xdinuka.github.io/Countdown/to/".concat(n))},children:[Object(i.jsxs)("label",{children:["Date:",Object(i.jsx)("input",{type:"date",name:"todate",required:!0,onChange:function(t){s(t.target.value)}})]}),Object(i.jsx)("br",{}),Object(i.jsxs)("label",{children:["Time:",Object(i.jsx)("input",{type:"time",name:"totime",required:!0,onChange:function(t){l(t.target.value)}})]}),Object(i.jsx)("br",{}),Object(i.jsx)("input",{type:"submit",value:"Start Countdown"})]})}function l(){console.log("CounterPage");var t=Object(u.g)().to,e=new Date(Number.parseInt(t)),n=Object(c.useState)(0),o=Object(j.a)(n,2),s=o[0],a=o[1];return Object(c.useEffect)((function(){e.getTime()>(new Date).getTime()&&setInterval((function(){var t=new Date;a(e.getTime()-t.getTime())}),1)})),s<1?Object(i.jsx)("span",{children:"Countdown expired"}):Object(i.jsx)(h,{count:s})}function h(t){console.log("Counter");var e=Math.floor(t.count/864e5),n=Math.floor(t.count/36e5)-24*e,c=Math.floor(t.count/6e4)-60*(n+24*e),s=Math.floor(t.count/1e3)-60*(c+60*(n+24*e)),a=Math.floor(t.count)-1e3*(s+60*(c+60*(n+24*e)));return Object(i.jsxs)(o.a.Fragment,{children:[Object(i.jsxs)("span",{children:["days ",e]}),Object(i.jsx)("br",{}),Object(i.jsxs)("span",{children:["hours ",n]}),Object(i.jsx)("br",{}),Object(i.jsxs)("span",{children:["mins ",c]}),Object(i.jsx)("br",{}),Object(i.jsxs)("span",{children:["secs ",s]}),Object(i.jsx)("br",{}),Object(i.jsxs)("span",{children:["mils ",a]})]})}var O=function(){return Object(i.jsx)(r.a,{children:Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{path:"https://xdinuka.github.io/Countdown/",children:Object(i.jsx)(b,{})}),Object(i.jsx)(u.a,{path:"https://xdinuka.github.io/Countdown/to/:to",children:Object(i.jsx)(l,{})})]})})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),s(t),a(t)}))};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(O,{})}),document.getElementById("root")),d()}},[[30,1,2]]]);
//# sourceMappingURL=main.c74b0b04.chunk.js.map