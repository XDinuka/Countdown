(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),o=n(15),a=n.n(o),j=(n(22),n(9)),i=(n(23),n(16)),r=n(2),u=n(1);function b(){var t=Object(r.f)(),e=Object(c.useState)(null),n=Object(j.a)(e,2),s=n[0],o=n[1],a=Object(c.useState)(null),i=Object(j.a)(a,2),b=i[0],h=i[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=new Date("".concat(s,",").concat(b)).getTime();t.push("https://xdinuka.github.io/Countdown/".concat(n))},children:[Object(u.jsxs)("label",{children:["Date:",Object(u.jsx)("input",{type:"date",name:"todate",required:!0,onChange:function(t){o(t.target.value)}})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:["Time:",Object(u.jsx)("input",{type:"time",name:"totime",required:!0,onChange:function(t){h(t.target.value)}})]}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"submit",value:"Start Countdown"})]})}function h(){var t=Object(r.g)().to,e=new Date(Number.parseInt(t)),n=Object(c.useState)(0),s=Object(j.a)(n,2),o=s[0],a=s[1];return Object(c.useEffect)((function(){e.getTime()>(new Date).getTime()&&setInterval((function(){var t=new Date;a(e.getTime()-t.getTime())}),1)})),o<1?Object(u.jsx)("span",{children:"Countdown expired"}):Object(u.jsx)(l,{count:o})}function l(t){var e=Math.floor(t.count/864e5),n=Math.floor(t.count/36e5)-24*e,c=Math.floor(t.count/6e4)-60*(n+24*e),o=Math.floor(t.count/1e3)-60*(c+60*(n+24*e)),a=Math.floor(t.count)-1e3*(o+60*(c+60*(n+24*e)));return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsxs)("span",{children:["days ",e]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["hours ",n]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["mins ",c]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["secs ",o]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["mils ",a]})]})}var O=function(){return Object(u.jsx)(i.a,{children:Object(u.jsxs)(r.c,{children:[Object(u.jsx)(r.a,{path:"https://xdinuka.github.io/Countdown/",children:Object(u.jsx)(b,{})}),Object(u.jsx)(r.a,{path:"https://xdinuka.github.io/Countdown/:to",children:Object(u.jsx)(h,{})})]})})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),c(t),s(t),o(t),a(t)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root")),d()}},[[30,1,2]]]);
//# sourceMappingURL=main.315265ce.chunk.js.map