(this["webpackJsonpgoit-react"]=this["webpackJsonpgoit-react"]||[]).push([[0],{18:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),i=n(4),s=n.n(i),o=(n(16),n(5)),r=n(6),l=n(7),d=n(11),b=n(10),u=n(3),j=n.n(u),h=n(0),O=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:j.a.section,children:[Object(h.jsx)("h2",{className:j.a.title,children:e}),n]})},v=n(8),x=n.n(v),g=function(t){var e=t.options,n=t.onLeaveFeedback;return Object(h.jsx)("div",{children:e.map((function(t){return Object(h.jsx)("button",{className:x.a.button,type:"button",onClick:n,name:t,children:t},t)}))})},p=function(t){var e=t.message;return Object(h.jsx)("p",{children:e})},f=n(9),k=n.n(f),_=function(t){var e=t.good,n=t.neutral,a=t.bad,c=t.total,i=t.positivePercentage;return Object(h.jsxs)(h.Fragment,{children:[c>0&&Object(h.jsxs)("ul",{className:k.a.statistics,children:[Object(h.jsxs)("li",{children:["Good: ",e," "]}),Object(h.jsxs)("li",{children:["Neutral: ",n," "]}),Object(h.jsxs)("li",{children:["Bad: ",a," "]}),Object(h.jsxs)("li",{children:["Total: ",c," "]}),Object(h.jsxs)("li",{children:["Positive feedback: ",i,"%"]})]}),0===c&&Object(h.jsx)(p,{message:"No feedback given"})]})},m=["good","neutral","bad"],F=function(t){Object(d.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.handleFeedbackBtn=function(e){var n=e.target.name;t.setState((function(t){return Object(o.a)({},n,t[n]+1)}))},t.handleTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t}return Object(l.a)(n,[{key:"handlePositivePercentage",value:function(){var t=this.state.good,e=this.handleTotalFeedback();return e?Math.round(t/e*100):0}},{key:"render",value:function(){var t=this.state,e=t.good,n=t.neutral,a=t.bad,c=this.handleTotalFeedback(),i=this.handlePositivePercentage();return Object(h.jsxs)("div",{children:[Object(h.jsx)(O,{title:"Please leave feedback",children:Object(h.jsx)(g,{options:m,onLeaveFeedback:this.handleFeedbackBtn})}),Object(h.jsx)(O,{title:"Statistics",children:Object(h.jsx)(_,{good:e,neutral:n,bad:a,total:c,positivePercentage:i})})]})}}]),n}(a.Component);s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))},3:function(t,e,n){t.exports={section:"Section_section__gdP1O",title:"Section_title__16Ti_"}},8:function(t,e,n){t.exports={button:"FeedbackOptions_button__39Xg1","button-active":"FeedbackOptions_button-active__3qqcp"}},9:function(t,e,n){t.exports={statistics:"Statistics_statistics__1ZEGn"}}},[[18,1,2]]]);
//# sourceMappingURL=main.e6f48ebe.chunk.js.map