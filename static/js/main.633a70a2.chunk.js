(this.webpackJsonpowner=this.webpackJsonpowner||[]).push([[0],{478:function(e,t,a){},527:function(e,t,a){},528:function(e,t,a){},547:function(e,t,a){},743:function(e,t,a){},744:function(e,t,a){},745:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(23),i=a.n(s),o=(a(527),a(19)),r=(a(528),a(112)),j=a.n(r),l=(a(547),a(777)),b=a(784),m=a(781),d=a(505),h=a(506),O=a(208),u=a(206),x=a(504),f=a(503),g=a(327),p=a.n(g),v=a(7);var N=function(e){var t=e.name,a=e.info,n=e.wifeInfo,s=e.saving,i=e.huyoList,r=e.payList,j=e.incomeList,g=function(e,t,a,c,n,s,i,o,r,j,l){var b=0;if(Number(j)+Number(l)>65)return[{tedori:12*Number(i)}];Number(j)+Number(l)<60?(b=Number(j)+Number(l)<Number(c)?e*Math.pow(Number(a),Math.floor(Number(l)/5)):e*Math.pow(Number(a),Math.floor((Number(c)-Number(j))/5)))>s&&0!==s&&"0"!==s&&(b=s):b=t;var m,d,h,O=0,u=0,x=0,f=0,g=0,p=0;O=b<162.5?1*b-55:b>=162.5&&b<180?.6*b-10:b>=180&&b<360?.7*b-8:b>=360&&b<660?.8*b-44:b>=660&&b<850?.9*b-110:1*b-195,u=b<=2400?48:b>2400&&b<=2450?32:b>2450&&b<=2500?16:0,0!==o.length&&o.forEach((function(e){e.self===r&&("wife"===e.type?x+=38:"child"===e.type?(console.log("\u3053\u306e\u304a\u5b50\u3055\u3093\u306f\u3053\u306e\u6642".concat(Number(e.childAge)+l,"\u6b73\u3067\u3059")),Number(e.childAge)+l>=16&&Number(e.childAge)+l<=18?f+=38:Number(e.childAge)+l>=19&&Number(e.childAge)+l<=22&&(f+=63)):"other"===e.type?g+=38*Number(e.numberOfHuyo):"senior1"===e.type?g+=58*Number(e.numberOfHuyo):g+=48*Number(e.numberOfHuyo))}));var v=0,N=0,y=0;y=(h=O-(p=b<=399?10:b>=400&&b<=499?50:b>=500&&b<=599?60:b>=600&&b<=699?70:b>=700&&b<=799?80:b>=800&&b<=899?90:b>=900&&b<=999?100:b>=1e3&&b<=1099?110:b>=1100&&b<=1199?115:b>=1200&&b<=1299?120:b>=1300&&b<=1399?130:b>=1400&&b<=1499?135:b>=1500&&b<=1599?140:145)-5-(d=u+x+(m=f+g)))<195?.05*h*1.021:h>=195&&h<330?1.021*(.1*h-9.75):h>=330&&h<695?1.021*(.2*h-42.75):h>=695&&h<900?1.021*(.23*h-63.6):h>=900&&h<1800?1.021*(.33*h-153.6):h>=1800&&h<4e3?1.021*(.4*h-279.6):1.021*(.45*h-479.6);var I=.1*(O-(p+3.5+(v=0!==x?33:0)+(N=0!==u?u-5:0))),S=b-p-((y=Math.round(10*y)/10)+(I=Math.round(10*I)/10));return b<=103&&(S=b),[{taxIncome:Number(b),kyuyoIncome:O,tedori:S},{kisoKojo:u,huyoKojoSum2:d,shakaiHoken:p,kazeiIncome:h},{shakaiHoken:p,seimeiHoken:5,jisinKojo:0,wifeKojo:x,huyoKojoSum1:m,kisoKojo:u},{shakaiHoken:p,seimeiHokenJ:3.5,jisinKojoJ:0,wifeKojoJ:v,kisoKojoJ:N}]};function N(e,t,a){return"every"===e?1:"before"===e?a<=t?1:0:"after"===e?a>=t?1:0:a===t?1:0}var y=!1,I=[],S=[],A=[{name:0,saving:0}],w=Object(c.useState)(),k=Object(o.a)(w,2),M=k[0],H=k[1],F=Object(c.useState)(),L=Object(o.a)(F,2),C=L[0],K=L[1],J=Object(c.useState)(),E=Object(o.a)(J,2),W=E[0],D=E[1],_=Object(c.useState)(),P=Object(o.a)(_,2),T=P[0],q=P[1],B=[],z=Object(c.useState)(),U=Object(o.a)(z,2),G=U[0],Q=U[1],R=Object(c.useState)([]),V=Object(o.a)(R,2),X=V[0],Y=V[1],Z=[],$=function(e,t){for(var a=0,c=0,n=e.length;c<n;c++)a+=Number(e[c].charge)*N(e[c].type2,Number(e[c].count),t);return a};return Object(c.useEffect)((function(){Y([]);var e=$(r,Number(a.age)+0),t=Number(g(a.taxIncome,a.taxIncome60,a.rate,a.maxAge1,a.maxAge2,a.afterIncome,a.pension,i,0,a.age,0)[0].tedori)+Number(g(n.taxIncome,n.taxIncome60,n.rate,n.maxAge1,n.maxAge2,n.afterIncome,n.pension,i,1,n.age,0)[0].tedori)+$(j,Number(a.age)+0),c=t-e;I.push({name:a.age+"\u6b73",saving:Math.floor(Number(s)+c),income:Math.floor(t)}),B.push({year:"0\u5e74",age:Number(a.age)+0+"\u6b73",wage:Number(n.age)+0+"\u6b73",self:Math.floor(g(a.taxIncome,a.taxIncome60,a.rate,a.maxAge1,a.maxAge2,a.afterIncome,a.pension,i,0,a.age,0)[0].tedori),wife:Math.floor(g(n.taxIncome,n.taxIncome60,n.rate,n.maxAge1,n.maxAge2,n.afterIncome,n.pension,i,1,n.age,0)[0].tedori),income:Math.floor(t),outcome:Math.floor(e),expenses:Math.floor(c),saving:Math.floor(I[0].saving)});for(var o=1;o<96-a.age;o++)e=$(r,Number(a.age)+o),c=(t=Number(g(a.taxIncome,a.taxIncome60,a.rate,a.maxAge1,a.maxAge2,a.afterIncome,a.pension,i,0,a.age,o)[0].tedori)+Number(g(n.taxIncome,n.taxIncome60,n.rate,n.maxAge1,n.maxAge2,n.afterIncome,n.pension,i,1,n.age,o)[0].tedori)+$(j,Number(a.age)+o))-e,I.push({name:Number(a.age)+o+"\u6b73",saving:Math.floor(c+Number(I[o-1].saving)),income:Math.floor(t)}),c+Number(I[o-1].saving)<0&&(A.push({name:Number(a.age)+o+"\u6b73",saving:I[o].saving}),y=!0),B.push({year:o+"\u5e74",age:Number(a.age)+o+"\u6b73",wage:Number(n.age)+o+"\u6b73",self:Math.floor(g(a.taxIncome,a.taxIncome60,a.rate,a.maxAge1,a.maxAge2,a.afterIncome,a.pension,i,0,a.age,o)[0].tedori),wife:Math.floor(g(n.taxIncome,n.taxIncome60,n.rate,n.maxAge1,n.maxAge2,n.afterIncome,n.pension,i,1,n.age,o)[0].tedori),income:Math.floor(t),outcome:Math.floor(e),expenses:Math.floor(c),saving:Math.floor(I[o].saving)});y?A[0]=A[1]:A.push({name:0,saving:0});for(var l=0;l<I.length;l++)S.push({"\u5e74\u9f62":I[l].name,"\u8caf\u84c4":I[l].saving,"\u53ce\u5165":I[l].income});for(var b=1;b<I.length;b++)I[b-1].saving>0&&I[b].saving<0&&Z.push(Number(a.age)+b);Y(Z),D(S),H(A[1].name),K(A[A.length-1].saving),q(B),Q(B[B.length-1].saving)}),[]),Object(v.jsxs)("div",{className:"tr-contents",children:[Object(v.jsx)("div",{style:{width:"100%"},children:Object(v.jsx)(l.a,{width:"100%",height:300,children:Object(v.jsxs)(b.a,{data:W,children:[Object(v.jsx)(m.a,{strokeDasharray:"3 3"}),Object(v.jsx)(d.a,{dataKey:"\u5e74\u9f62"}),Object(v.jsx)(h.a,{}),Object(v.jsx)(h.a,{}),Object(v.jsx)(O.a,{}),Object(v.jsx)(u.a,{}),Object(v.jsx)(x.a,{dataKey:"\u8caf\u84c4",fill:"#FFA500"}),Object(v.jsx)(f.a,{type:"monotone",dataKey:"\u53ce\u5165",fill:"#82ca9d",stroke:"#82ca9d"})]})})}),Object(v.jsx)("div",{className:"tr-txt",children:0!==M?Object(v.jsxs)(v.Fragment,{children:[X.map((function(e,t){return Object(v.jsxs)("p",{children:["\u8caf\u84c4\u304c\u30de\u30a4\u30ca\u30b9\u306b\u306a\u308b\u306e\u306f : ",e,"\u6b73"]},t)})),Object(v.jsx)("br",{}),"95\u6b73\u307e\u3067\u306e\u30de\u30a4\u30ca\u30b9\u7d2f\u8a08\u984d : ",Math.floor(C),"\u4e07\u5186"]}):Object(v.jsxs)(v.Fragment,{children:["95\u6b73\u306e\u6642\u306e\u8caf\u84c4 : ",G,"\u4e07\u5186"]})}),Object(v.jsx)(p.a,{title:"\u8cc7\u7523\u63a8\u79fb",columns:[{title:"\u5e74\u5ea6",field:"year"},{title:"".concat(t," \u69d8 \u5e74\u9f62"),field:"age"},{title:"\u914d\u5076\u8005\u69d8 \u5e74\u9f62",field:"wage"},{title:"".concat(t," \u69d8\u53ce\u5165"),field:"self"},{title:"\u914d\u5076\u8005\u69d8\u53ce\u5165",field:"wife"},{title:"\u53ce\u5165\u5408\u8a08",field:"income"},{title:"\u652f\u51fa\u5408\u8a08",field:"outcome"},{title:"\u53ce\u652f",field:"expenses"},{title:"\u7d2f\u8a08\u8caf\u84c4\u984d",field:"saving"}],data:T,options:{grouping:!1,search:!1,padding:"dense",paging:!1,draggable:!1,sorting:!1}})]})},y=Object(c.memo)((function(e){var t=e.name,a=e.userId,n=e.age,s=e.taxIncome,i=e.taxIncome60,r=e.rate,l=e.maxAge1,b=e.maxAge2,m=e.afterIncome,d=e.pension,h=e.hasWife,O=e.saving,u=e.backHome,x=Object(c.useState)("info"),f=Object(o.a)(x,2),g=f[0],p=f[1],y=Object(c.useState)({name:t,age:n,taxIncome:s,taxIncome60:i,rate:r,maxAge1:l,maxAge2:b,afterIncome:m,pension:d}),I=Object(o.a)(y,1)[0],S=Object(c.useState)({age:0,taxIncome:0,taxIncome60:0,rate:1,maxAge1:0,maxAge2:0,afterIncome:0,pension:0}),A=Object(o.a)(S,2),w=A[0],k=(A[1],Object(c.useState)([])),M=Object(o.a)(k,2),H=M[0],F=M[1],L=Object(c.useState)([]),C=Object(o.a)(L,2),K=C[0],J=C[1],E=Object(c.useState)([]),W=Object(o.a)(E,2),D=W[0],_=W[1];Object(c.useEffect)((function(){console.log(a),console.log(h),1===h&&j.a.get("https://modest-itoman-5891.lolipop.io/getWifeInfo/".concat(a)).then((function(e){console.log(e.data)})),j.a.get("https://modest-itoman-5891.lolipop.io/getHuyoList/".concat(a)).then((function(e){F(e.data),console.log(e.data)})),j.a.get("https://modest-itoman-5891.lolipop.io/getPayList/".concat(a)).then((function(e){J(e.data),console.log(e.data)})),j.a.get("https://modest-itoman-5891.lolipop.io/getIncomeList/".concat(a)).then((function(e){_(e.data),console.log(e.data)}))}),[h,a]);var P;return P="info"===g?Object(v.jsxs)("div",{className:"page-wrapper info-contents",children:[Object(v.jsx)("h3",{children:"\u672c\u4eba\u60c5\u5831"}),Object(v.jsxs)("p",{children:["\u304a\u540d\u524d:",t]}),Object(v.jsxs)("p",{children:["\u5e74\u9f62:",n,"\u6b73"]}),Object(v.jsxs)("p",{children:["\u5e74\u53ce:",s,"\u4e07\u5186"]}),Object(v.jsxs)("p",{children:["60~65\u6b73\u306e\u5e74\u53ce:",i,"\u4e07\u5186"]}),Object(v.jsxs)("p",{children:["\u6607\u7d66\u7387:",r]}),Object(v.jsxs)("p",{children:["\u6700\u5927\u6607\u7d66\u5e74\u9f62:",l]}),Object(v.jsxs)("p",{children:["\u6700\u5927\u5e74\u53ce\u5e74\u9f62:",b]}),Object(v.jsxs)("p",{children:["\u6700\u5927\u5e74\u53ce\u5e74\u9f62\u5f8c\u306e\u5e74\u53ce:",m]}),Object(v.jsxs)("p",{children:["\u5e74\u91d1:",d,"\u4e07\u5186"]}),Object(v.jsxs)("p",{children:["\u8caf\u91d1\u6b8b\u9ad8:",O,"\u4e07\u5186"]}),Object(v.jsx)("h3",{children:"\u914d\u5076\u8005\u60c5\u5831"}),1===h?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("p",{children:["\u5e74\u9f62:",w.age,"\u6b73"]}),Object(v.jsxs)("p",{children:["\u5e74\u53ce:",w.taxIncome,"\u4e07\u5186"]}),Object(v.jsxs)("p",{children:["60~65\u6b73\u306e\u5e74\u53ce:",w.taxIncome60,"\u4e07\u5186"]}),Object(v.jsxs)("p",{children:["\u6607\u7d66\u7387:",w.rate]}),Object(v.jsxs)("p",{children:["\u6700\u5927\u6607\u7d66\u5e74\u9f62:",w.maxAge1]}),Object(v.jsxs)("p",{children:["\u6700\u5927\u5e74\u53ce\u5e74\u9f62:",w.maxAge2]}),Object(v.jsxs)("p",{children:["\u6700\u5927\u5e74\u53ce\u5e74\u9f62\u5f8c\u306e\u5e74\u53ce:",w.afterIncome]}),Object(v.jsxs)("p",{children:["\u5e74\u91d1:",w.pension,"\u4e07\u5186"]})]}):Object(v.jsx)("p",{children:"\u914d\u5076\u8005\uff1a\u306a\u3057"}),Object(v.jsx)("h3",{children:"\u6276\u990a\u60c5\u5831"}),H.map((function(e,t){return"child"===e.type?Object(v.jsxs)("div",{children:[Object(v.jsxs)("label",{children:["\u7a2e\u985e:~22\u6b73\u6276\u990a/\u5e74\u9f62",e.childAge,"\u6b73/\u63a7\u9664\u5bfe\u8c61\u8005:",0===e.self?Object(v.jsx)("span",{children:"\u672c\u4eba"}):Object(v.jsx)("span",{children:"\u914d\u5076\u8005"})]}),Object(v.jsx)("br",{})]},t):"wife"===e.type?Object(v.jsxs)("div",{children:[Object(v.jsxs)("label",{children:["\u7a2e\u985e:\u914d\u5076\u8005/\u4eba\u6570:1/\u63a7\u9664\u5bfe\u8c61\u8005:",0===e.self?Object(v.jsx)("span",{children:"\u672c\u4eba"}):Object(v.jsx)("span",{children:"\u914d\u5076\u8005"})]}),Object(v.jsx)("br",{})]},t):"other"===e.type?Object(v.jsxs)("div",{children:[Object(v.jsxs)("label",{children:["\u7a2e\u985e:\u305d\u306e\u4ed6\u6276\u990a/\u4eba\u6570:",e.numberOfHuyo,"/\u63a7\u9664\u5bfe\u8c61\u8005:",0===e.self?Object(v.jsx)("span",{children:"\u672c\u4eba"}):Object(v.jsx)("span",{children:"\u914d\u5076\u8005"})]}),Object(v.jsx)("br",{})]},t):"senior1"===e.type?Object(v.jsxs)("div",{children:[Object(v.jsxs)("label",{children:["\u7a2e\u985e:\u8001\u4eba\u540c\u5c45/\u4eba\u6570:",e.numberOfHuyo,"/\u63a7\u9664\u5bfe\u8c61\u8005:",0===e.self?Object(v.jsx)("span",{children:"\u672c\u4eba"}):Object(v.jsx)("span",{children:"\u914d\u5076\u8005"})]}),Object(v.jsx)("br",{})]},t):Object(v.jsxs)("div",{children:[Object(v.jsxs)("label",{children:["\u7a2e\u985e:\u8001\u4eba\u5225\u5c45/\u4eba\u6570:",e.numberOfHuyo,"/\u63a7\u9664\u5bfe\u8c61\u8005:",0===e.self?Object(v.jsx)("span",{children:"\u672c\u4eba"}):Object(v.jsx)("span",{children:"\u914d\u5076\u8005"})]},t),Object(v.jsx)("br",{})]},t)})),Object(v.jsx)("h3",{children:"\u652f\u51fa\u60c5\u5831"}),K.map((function(e,t){var a;return"house"===e.type?"\u4f4f\u5b85\u30ed\u30fc\u30f3\u3001\u5bb6\u8cc3":"car"===e.type?"\u8eca\uff08\u30ed\u30fc\u30f3\uff09":"nomal"===e.type?"\u4e00\u822c\u652f\u51fa":"sisanTax"===e.type?"\u56fa\u5b9a\u8cc7\u7523\u7a0e":"seimeiHoken"===e.type?"\u751f\u547d\u4fdd\u967a":"study"===e.type?"\u5b66\u8cbb\u306a\u3069":"other"===e.type?"\u305d\u306e\u4ed6\u306e\u652f\u51fa":"living"===e.type?"65\u6b73\u307e\u3067\u306e\u6708\u3005\u306e\u751f\u6d3b\u8cbb":"65\u6b73\u4ee5\u964d\u306e\u6708\u3005\u306e\u751f\u6d3b\u8cbb",a="every"===e.type2?"\u6bce\u5e74":"before"===e.type2?"\u307e\u3067\u6bce\u5e74":"after"===e.type2?"\u304b\u3089\u6bce\u5e74":"\u306e\u6642\u306b1\u56de\u9650\u308a",Object(v.jsxs)("div",{children:["every"===e.type2?Object(v.jsxs)("label",{children:["\u671f\u9593 : ",a]}):Object(v.jsxs)("label",{children:["\u671f\u9593 : ",e.count,"\u6b73",a]}),Object(v.jsx)("br",{})]},t)})),Object(v.jsx)("h3",{children:"\u305d\u306e\u4ed6\u53ce\u5165\u60c5\u5831"}),D.map((function(e,t){var a;return"retire"===e.type?"\u9000\u8077\u91d1\uff08\u4e07\u5186\uff09":"other"===e.type?"\u305d\u306e\u4ed6\u53ce\u5165\uff08\u4e07\u5186\uff09":"yachin"===e.type?"\u5bb6\u8cc3\u53ce\u5165\uff08\u4e07\u5186\uff09":"nenkin"===e.type?"\u500b\u4eba\u5e74\u91d1\uff08\u4e07\u5186\uff09":"nenkinW"===e.type?"\u500b\u4eba\u5e74\u91d1\u914d\u5076\u8005\uff08\u4e07\u5186\uff09":"\u305d\u306e\u4ed6\uff08\u4e07\u5186\uff09",a="every"===e.type2?"\u6bce\u5e74":"before"===e.type2?"\u307e\u3067\u6bce\u5e74":"after"===e.type2?"\u304b\u3089\u6bce\u5e74":"\u306e\u6642\u306b1\u56de\u9650\u308a",Object(v.jsxs)("div",{children:["every"===e.type2?Object(v.jsxs)("label",{children:["\u671f\u9593 : ",a]}):Object(v.jsxs)("label",{children:["\u671f\u9593 : ",e.count,"\u6b73",a]}),Object(v.jsx)("br",{})]},t)})),Object(v.jsx)("br",{})]}):Object(v.jsx)(N,{name:t,info:I,wifeInfo:w,saving:O,huyoList:H,payList:K,incomeList:D}),Object(v.jsxs)("div",{className:"info-wrapper",children:[Object(v.jsxs)("h1",{className:"info-title",children:[t,"\u3055\u3093\u306e\u60c5\u5831"]}),P,Object(v.jsx)("div",{className:"button-wrapper",children:"info"===g?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{onClick:u,children:Object(v.jsx)("i",{class:"fas fa-caret-square-left"})}),Object(v.jsx)("button",{onClick:function(){p("transition")},children:"\u63a8\u79fb\u30da\u30fc\u30b8\u3092\u898b\u308b"})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{onClick:function(){p("info")},children:Object(v.jsx)("i",{class:"fas fa-caret-square-left"})}),Object(v.jsx)("div",{onClick:u,children:Object(v.jsx)("i",{class:"fas fa-home"})})]})})]})}));a(743),a(478);var I=function(){var e,t=Object(c.useState)("home"),a=Object(o.a)(t,2),n=a[0],s=a[1],i=Object(c.useState)([]),r=Object(o.a)(i,2),l=r[0],b=r[1],m=Object(c.useState)(""),d=Object(o.a)(m,2),h=d[0],O=d[1],u=Object(c.useState)(""),x=Object(o.a)(u,2),f=x[0],g=x[1],p=Object(c.useState)(0),N=Object(o.a)(p,2),I=N[0],S=N[1],A=Object(c.useState)(0),w=Object(o.a)(A,2),k=w[0],M=w[1],H=Object(c.useState)(0),F=Object(o.a)(H,2),L=F[0],C=F[1],K=Object(c.useState)(1),J=Object(o.a)(K,2),E=J[0],W=J[1],D=Object(c.useState)(0),_=Object(o.a)(D,2),P=_[0],T=_[1],q=Object(c.useState)(0),B=Object(o.a)(q,2),z=B[0],U=B[1],G=Object(c.useState)(0),Q=Object(o.a)(G,2),R=Q[0],V=Q[1],X=Object(c.useState)(0),Y=Object(o.a)(X,2),Z=Y[0],$=Y[1],ee=Object(c.useState)(0),te=Object(o.a)(ee,2),ae=te[0],ce=te[1],ne=Object(c.useState)(0),se=Object(o.a)(ne,2),ie=se[0],oe=se[1];return Object(c.useEffect)((function(){j.a.get("https://modest-itoman-5891.lolipop.io/getUserInfo").then((function(e){b(e.data),console.log(e.data)}))}),[]),"home"===n?e=Object(v.jsxs)("div",{className:"home-wrapper",children:[Object(v.jsx)("h2",{className:"home-title",children:"\u30a2\u30d7\u30ea\u5229\u7528\u8005\u4e00\u89a7"}),Object(v.jsxs)("table",{className:"home-table",children:[Object(v.jsxs)("tr",{className:"table-header",children:[Object(v.jsx)("th",{children:"\u304a\u540d\u524d"}),Object(v.jsx)("th",{children:"\u5e74\u53ce"}),Object(v.jsx)("th",{children:"\u914d\u5076\u8005\u306e\u6709\u7121"}),Object(v.jsx)("th",{children:"\u3054\u5229\u7528\u65e5\u4ed8"})]}),l.map((function(e,t){return Object(v.jsxs)("tr",{className:"table-row",onClick:function(){!function(e,t,a,c,n,i,o,r,j,l,b,m){O(e),g(t),S(a),M(c),C(n),W(i),T(o),U(r),V(j),$(l),ce(b),oe(m),s("userInfo")}(e.name,e.userId,e.age,e.taxIncome,e.taxIncome60,e.rate,e.maxAge1,e.maxAge2,e.afterIncome,e.pension,e.hasWife,e.saving)},children:[Object(v.jsxs)("td",{className:"table-data",children:[e.name," \u69d8"]}),Object(v.jsx)("td",{className:"table-data",children:e.taxIncome}),1===e.hasWife?Object(v.jsx)("td",{className:"table-data",children:"\u3042\u308a"}):Object(v.jsx)("td",{className:"table-data",children:"\u306a\u3057"}),Object(v.jsx)("td",{className:"table-data",children:e.temp_date})]},t)}))]})]}):"userInfo"===n&&(e=Object(v.jsx)(y,{name:h,userId:f,age:I,taxIncome:k,taxIncome60:L,pension:Z,rate:E,maxAge1:P,maxAge2:z,afterIncome:R,hasWife:ae,saving:ie,backHome:function(){O(""),g(""),S(0),M(0),C(0),$(0),ce(0),oe(0),s("home")}})),Object(v.jsx)(v.Fragment,{children:e})};a(744);var S=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(""),i=Object(o.a)(s,2),r=i[0],l=i[1],b=Object(c.useState)(""),m=Object(o.a)(b,2),d=m[0],h=m[1],O=Object(c.useState)(!1),u=Object(o.a)(O,2),x=u[0],f=u[1],g=Object(c.useState)(!1),p=Object(o.a)(g,2),N=p[0],y=p[1];return Object(c.useEffect)((function(){var e=localStorage.getItem("loggedData");null!==JSON.parse(e)&&n(!0)}),[]),Object(v.jsx)("div",{className:"App",children:a?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"header",children:[Object(v.jsx)("h1",{className:"title",children:"\u7ba1\u7406\u8005\u30da\u30fc\u30b8"}),Object(v.jsx)("button",{className:"log-out",onClick:function(){n(!1),localStorage.removeItem("loggedData")},children:Object(v.jsx)("i",{class:"fas fa-sign-out-alt",children:" \u30ed\u30b0\u30a2\u30a6\u30c8"})})]}),Object(v.jsx)(I,{})]}):Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"header",children:Object(v.jsx)("h1",{className:"title",children:"\u7ba1\u7406\u8005\u30da\u30fc\u30b8"})}),x?Object(v.jsx)("p",{children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059"}):null,N?Object(v.jsx)("p",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u9593\u9055\u3063\u3066\u3044\u307e\u3059"}):null,Object(v.jsxs)("div",{className:"input-wrapper",children:[Object(v.jsxs)("div",{class:"cp_iptxt",children:[Object(v.jsx)("input",{class:"ef",type:"email",placeholder:"",value:r,onChange:function(e){l(e.target.value)}}),Object(v.jsx)("label",{children:"\u30e1\u30fc\u30eb"}),Object(v.jsx)("span",{class:"focus_line"})]}),Object(v.jsxs)("div",{className:"cp_iptxt",children:[Object(v.jsx)("input",{className:"ef",type:"password",placeholder:"",value:d,onChange:function(e){h(e.target.value)}}),Object(v.jsx)("label",{children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(v.jsx)("span",{className:"focus_line"})]})]}),Object(v.jsxs)("button",{onClick:function(){j.a.post("https://modest-itoman-5891.lolipop.io/login",{email:r,password:d}).then((function(e){if(console.log(e.data),e.data.isLoggedIn){n(!0);var t={isLoggedIn:!0};[].push(t);var a=JSON.stringify(t);window.localStorage.setItem("loggedData",a)}else"email"===e.data.errorMsg?f(!0):y(!0)}))},children:["\u30ed\u30b0\u30a4\u30f3",Object(v.jsx)("i",{class:"fas fa-sign-in-alt"})]})]})})},A=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,923)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),s(e),i(e)}))};i.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(S,{})}),document.getElementById("root")),A()}},[[745,1,2]]]);
//# sourceMappingURL=main.633a70a2.chunk.js.map