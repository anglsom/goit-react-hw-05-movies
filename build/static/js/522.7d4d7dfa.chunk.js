"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[522],{522:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r=e(885),a=e(739),u=e(791),c=e(690);var i,o,s=e(168),p=e(444),f=p.ZP.ul(i||(i=(0,s.Z)(["\n  list-style: none;\n  max-width: 1000px;\n"]))),h=p.ZP.span(o||(o=(0,s.Z)(["\n  font-weight: 700;\n"]))),l=e(184);function d(n){var t=n.reviews;return(0,l.jsx)(f,{children:t.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,l.jsxs)("li",{children:[(0,l.jsx)(h,{children:"Author: "}),(0,l.jsx)("span",{children:e}),(0,l.jsx)("p",{children:r})]},t)}))})}function v(){var n=function(){var n=(0,a.UO)().movieId,t=(0,u.useState)([]),e=(0,r.Z)(t,2),i=e[0],o=e[1];return(0,u.useEffect)((function(){c.tx(n).then((function(n){var t=n.results.map((function(n){return{id:n.id,author:n.author,content:n.content}}));o(t)}))}),[n]),i}();return(0,l.jsx)(l.Fragment,{children:0===n.length?(0,l.jsx)("p",{children:"We don`t have any reviews for this movie"}):(0,l.jsx)(d,{reviews:n})})}},690:function(n,t,e){e.d(t,{Hg:function(){return o},M1:function(){return h},Ph:function(){return x},TP:function(){return p},tx:function(){return d}});var r=e(861),a=e(757),u=e.n(a),c=e(44);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="71232cc02b0a0eb890148f92fc2f7287";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=522.7d4d7dfa.chunk.js.map