(this.webpackJsonpcountdown=this.webpackJsonpcountdown||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),j=n(15),a=n.n(j),r=(n(22),n(9)),o=(n(23),n(16)),i=n(2),u=n(1);function b(){var e=Object(i.f)(),t=Object(c.useState)(null),n=Object(r.a)(t,2),s=n[0],j=n[1],a=Object(c.useState)(null),o=Object(r.a)(a,2),b=o[0],l=o[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=new Date("".concat(s,",").concat(b)).getTime();e.push("/".concat(n))},children:[Object(u.jsxs)("label",{children:["Date:",Object(u.jsx)("input",{type:"date",name:"todate",required:!0,onChange:function(e){j(e.target.value)}})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("label",{children:["Time:",Object(u.jsx)("input",{type:"time",name:"totime",required:!0,onChange:function(e){l(e.target.value)}})]}),Object(u.jsx)("br",{}),Object(u.jsx)("input",{type:"submit",value:"Start Countdown"})]})}function l(){var e=Object(i.g)().to,t=new Date(Number.parseInt(e)),n=Object(c.useState)(0),s=Object(r.a)(n,2),j=s[0],a=s[1];return Object(c.useEffect)((function(){t.getTime()>(new Date).getTime()&&setInterval((function(){var e=new Date;a(t.getTime()-e.getTime())}),1)})),j<1?Object(u.jsx)("span",{children:"Countdown expired"}):Object(u.jsx)(O,{count:j})}function O(e){var t=Math.floor(e.count/864e5),n=Math.floor(e.count/36e5)-24*t,c=Math.floor(e.count/6e4)-60*(n+24*t),j=Math.floor(e.count/1e3)-60*(c+60*(n+24*t)),a=Math.floor(e.count)-1e3*(j+60*(c+60*(n+24*t)));return Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsxs)("span",{children:["days ",t]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["hours ",n]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["mins ",c]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["secs ",j]}),Object(u.jsx)("br",{}),Object(u.jsxs)("span",{children:["mils ",a]})]})}var h=function(){return Object(u.jsx)(o.a,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:"/",children:Object(u.jsx)(b,{})}),Object(u.jsx)(i.a,{path:"/:to",children:Object(u.jsx)(l,{})})]})})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,j=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),j(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),d()}},[[30,1,2]]]);
//# sourceMappingURL=main.fc93ab85.chunk.js.map