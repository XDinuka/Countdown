(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(0),s=n.n(c),a=n(15),j=n.n(a),o=(n(22),n(9)),r=(n(23),n(16)),i=n(2),u=n(1);function b(){var t=Object(i.f)(),e=Object(c.useState)(null),n=Object(o.a)(e,2),s=n[0],a=n[1],j=Object(c.useState)(null),r=Object(o.a)(j,2),b=r[0],l=r[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=new Date("".concat(s,",").concat(b)).getTime();t.push("/".concat(n))},children:[Object(u.jsxs)("label",{children:["Date:",Object(u.jsx)("input",{type:"date",name:"todate",required:!0,onChange:function(t){a(t.target.value)}})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:["Time:",Object(u.jsx)("input",{type:"time",name:"totime",required:!0,onChange:function(t){l(t.target.value)}})]}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"submit",value:"Start Countdown"})]})}function l(){var t=Object(i.g)().to,e=new Date(Number.parseInt(t)),n=Object(c.useState)(0),s=Object(o.a)(n,2),a=s[0],j=s[1];return Object(c.useEffect)((function(){e.getTime()>(new Date).getTime()&&setInterval((function(){var t=new Date;j(e.getTime()-t.getTime())}),1)})),a<1?Object(u.jsx)("span",{children:"Countdown expired"}):Object(u.jsx)(O,{count:a})}function O(t){var e=Math.floor(t.count/864e5),n=Math.floor(t.count/36e5)-24*e,c=Math.floor(t.count/6e4)-60*(n+24*e),a=Math.floor(t.count/1e3)-60*(c+60*(n+24*e)),j=Math.floor(t.count)-1e3*(a+60*(c+60*(n+24*e)));return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsxs)("span",{children:["days ",e]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["hours ",n]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["mins ",c]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["secs ",a]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["mils ",j]})]})}var h=function(){return Object(u.jsx)(r.a,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"https://xdinuka.github.io/Countdown/",children:Object(u.jsx)(b,{})}),Object(u.jsx)(i.a,{path:"https://xdinuka.github.io/Countdown/:to",children:Object(u.jsx)(l,{})})]})})},d=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,a=e.getLCP,j=e.getTTFB;n(t),c(t),s(t),a(t),j(t)}))};j.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),d()}},[[30,1,2]]]);
//# sourceMappingURL=main.146e3806.chunk.js.map