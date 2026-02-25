import{_ as u,g as j,s as q,a as H,b as K,t as Q,q as Z,l as F,c as J,F as X,K as Y,Q as tt,e as et,z as rt,H as at}from"./mermaid.core-Bhw2eAVF.js";import{p as it}from"./chunk-4BX2VUAB-ClzwmkkN.js";import{p as nt}from"./treemap-KMMF4GRG-BofNQ6xU.js";import{d as I}from"./arc-DRR00C3M.js";import{o as ot}from"./ordinal-DILIJJjt.js";import{a as S,t as z,n as st}from"./string-0bvjYUJm.js";import"./index-CwLxEHIJ.js";import"./purify.es-B9ZVCkUG.js";import"./mermaid-VLURNSYL-CEJ5uDAx.js";import"./LeakDetailDrilldown-S5EwLK_t.js";import"./badge-B21QIoN_.js";import"./building-2-D2UzxYnC.js";import"./skull-D9n2Keg7.js";import"./dollar-sign-knnwuppd.js";import"./qr-code-yqx3FVM9.js";import"./calendar-KiQh9jKM.js";import"./external-link-B6XHsi2X.js";import"./fingerprint-qAbcH29E.js";import"./lock-CKuzp6HC.js";import"./image-BcIeNcyE.js";import"./hash-ufX-4Hdr.js";import"./save-BqKoKgqY.js";import"./file-search-DpZ2oC3c.js";import"./chart-no-axes-column-92lwsGX2.js";import"./heart-handshake-BDYQG8vh.js";import"./star-C1AG-99L.js";import"./lightbulb-C4G8BXX-.js";import"./_baseUniq-YVIiH45t.js";import"./_basePickBy-BzFWbP3L.js";import"./clone-CHm1mI-R.js";import"./init-Dmth1JHB.js";function lt(t,r){return r<t?-1:r>t?1:r>=t?0:NaN}function ct(t){return t}function pt(){var t=ct,r=lt,m=null,x=S(0),o=S(z),l=S(0);function s(e){var i,c=(e=st(e)).length,d,y,h=0,p=new Array(c),n=new Array(c),v=+x.apply(this,arguments),w=Math.min(z,Math.max(-z,o.apply(this,arguments)-v)),f,C=Math.min(Math.abs(w)/c,l.apply(this,arguments)),$=C*(w<0?-1:1),g;for(i=0;i<c;++i)(g=n[p[i]=i]=+t(e[i],i,e))>0&&(h+=g);for(r!=null?p.sort(function(A,D){return r(n[A],n[D])}):m!=null&&p.sort(function(A,D){return m(e[A],e[D])}),i=0,y=h?(w-c*$)/h:0;i<c;++i,v=f)d=p[i],g=n[d],f=v+(g>0?g*y:0)+$,n[d]={data:e[d],index:i,value:g,startAngle:v,endAngle:f,padAngle:C};return n}return s.value=function(e){return arguments.length?(t=typeof e=="function"?e:S(+e),s):t},s.sortValues=function(e){return arguments.length?(r=e,m=null,s):r},s.sort=function(e){return arguments.length?(m=e,r=null,s):m},s.startAngle=function(e){return arguments.length?(x=typeof e=="function"?e:S(+e),s):x},s.endAngle=function(e){return arguments.length?(o=typeof e=="function"?e:S(+e),s):o},s.padAngle=function(e){return arguments.length?(l=typeof e=="function"?e:S(+e),s):l},s}var ut=at.pie,G={sections:new Map,showData:!1},T=G.sections,N=G.showData,dt=structuredClone(ut),gt=u(()=>structuredClone(dt),"getConfig"),mt=u(()=>{T=new Map,N=G.showData,rt()},"clear"),ft=u(({label:t,value:r})=>{if(r<0)throw new Error(`"${t}" has invalid value: ${r}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);T.has(t)||(T.set(t,r),F.debug(`added new section: ${t}, with value: ${r}`))},"addSection"),ht=u(()=>T,"getSections"),vt=u(t=>{N=t},"setShowData"),St=u(()=>N,"getShowData"),L={getConfig:gt,clear:mt,setDiagramTitle:Z,getDiagramTitle:Q,setAccTitle:K,getAccTitle:H,setAccDescription:q,getAccDescription:j,addSection:ft,getSections:ht,setShowData:vt,getShowData:St},xt=u((t,r)=>{it(t,r),r.setShowData(t.showData),t.sections.map(r.addSection)},"populateDb"),yt={parse:u(async t=>{const r=await nt("pie",t);F.debug(r),xt(r,L)},"parse")},wt=u(t=>`
  .pieCircle{
    stroke: ${t.pieStrokeColor};
    stroke-width : ${t.pieStrokeWidth};
    opacity : ${t.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${t.pieOuterStrokeColor};
    stroke-width: ${t.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${t.pieTitleTextSize};
    fill: ${t.pieTitleTextColor};
    font-family: ${t.fontFamily};
  }
  .slice {
    font-family: ${t.fontFamily};
    fill: ${t.pieSectionTextColor};
    font-size:${t.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${t.pieLegendTextColor};
    font-family: ${t.fontFamily};
    font-size: ${t.pieLegendTextSize};
  }
`,"getStyles"),At=wt,Dt=u(t=>{const r=[...t.values()].reduce((o,l)=>o+l,0),m=[...t.entries()].map(([o,l])=>({label:o,value:l})).filter(o=>o.value/r*100>=1).sort((o,l)=>l.value-o.value);return pt().value(o=>o.value)(m)},"createPieArcs"),Ct=u((t,r,m,x)=>{F.debug(`rendering pie chart
`+t);const o=x.db,l=J(),s=X(o.getConfig(),l.pie),e=40,i=18,c=4,d=450,y=d,h=Y(r),p=h.append("g");p.attr("transform","translate("+y/2+","+d/2+")");const{themeVariables:n}=l;let[v]=tt(n.pieOuterStrokeWidth);v??=2;const w=s.textPosition,f=Math.min(y,d)/2-e,C=I().innerRadius(0).outerRadius(f),$=I().innerRadius(f*w).outerRadius(f*w);p.append("circle").attr("cx",0).attr("cy",0).attr("r",f+v/2).attr("class","pieOuterCircle");const g=o.getSections(),A=Dt(g),D=[n.pie1,n.pie2,n.pie3,n.pie4,n.pie5,n.pie6,n.pie7,n.pie8,n.pie9,n.pie10,n.pie11,n.pie12];let b=0;g.forEach(a=>{b+=a});const W=A.filter(a=>(a.data.value/b*100).toFixed(0)!=="0"),E=ot(D);p.selectAll("mySlices").data(W).enter().append("path").attr("d",C).attr("fill",a=>E(a.data.label)).attr("class","pieCircle"),p.selectAll("mySlices").data(W).enter().append("text").text(a=>(a.data.value/b*100).toFixed(0)+"%").attr("transform",a=>"translate("+$.centroid(a)+")").style("text-anchor","middle").attr("class","slice"),p.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const O=[...g.entries()].map(([a,M])=>({label:a,value:M})),k=p.selectAll(".legend").data(O).enter().append("g").attr("class","legend").attr("transform",(a,M)=>{const R=i+c,B=R*O.length/2,V=12*i,U=M*R-B;return"translate("+V+","+U+")"});k.append("rect").attr("width",i).attr("height",i).style("fill",a=>E(a.label)).style("stroke",a=>E(a.label)),k.append("text").attr("x",i+c).attr("y",i-c).text(a=>o.getShowData()?`${a.label} [${a.value}]`:a.label);const _=Math.max(...k.selectAll("text").nodes().map(a=>a?.getBoundingClientRect().width??0)),P=y+e+i+c+_;h.attr("viewBox",`0 0 ${P} ${d}`),et(h,d,P,s.useMaxWidth)},"draw"),$t={draw:Ct},ae={parser:yt,db:L,renderer:$t,styles:At};export{ae as diagram};
