"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[538],{538:function(n,t,e){e.r(t),e.d(t,{default:function(){return y}});var r,a,c,u=e(885),i=e(791),o=e(739),s=e(168),p=e(444),f=e(731),l=p.ZP.ul(r||(r=(0,s.Z)(["\n  list-style: none;\n"]))),h=p.ZP.li(a||(a=(0,s.Z)(["\n  &:not(:last-child) {\n    margin-bottom: 10px;\n  }\n"]))),d=(0,p.ZP)(f.rU)(c||(c=(0,s.Z)(["\n  color: black;\n  &:hover {\n    color: pink;\n  }\n"]))),v=e(184);function m(n){var t=n.movies,e={backLocation:(0,o.TH)()};return(0,v.jsx)(l,{children:t.map((function(n){return(0,v.jsx)(h,{children:(0,v.jsx)(d,{to:"/movies/".concat(n.id),state:e,children:n.name})},n.id)}))})}var k=e(690);function y(){var n=(0,i.useState)([]),t=(0,u.Z)(n,2),e=t[0],r=t[1];return(0,i.useEffect)((function(){k.Hg().then((function(n){var t=n.results.map((function(n){var t=n.name,e=n.title;return{name:null!==t&&void 0!==t?t:e,id:n.id}}));r(t)}))}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("h1",{children:"Trending today"}),e&&(0,v.jsx)(m,{movies:e})]})}},690:function(n,t,e){e.d(t,{Hg:function(){return o},M1:function(){return l},Ph:function(){return m},TP:function(){return p},tx:function(){return d}});var r=e(861),a=e(757),c=e.n(a),u=e(44);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="71232cc02b0a0eb890148f92fc2f7287";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/all/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=538.eb7c1394.chunk.js.map