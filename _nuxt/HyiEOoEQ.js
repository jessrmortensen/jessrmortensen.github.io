import{o as l,c,a as n,n as m,d,b as g,w as p,u as i,e as u,F as h,p as x,q as f,t as _}from"./BkAKTRAj.js";import{g as w}from"./D8zO4V_q.js";import{r as y}from"./1g4H0yE0.js";function k(a,o){return l(),c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[n("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"})])}function b(a,o){const t=[],e=new Set;if(o>a.length)throw new Error("Count cannot be greater than the array length.");for(;t.length<o;){const s=Math.floor(Math.random()*a.length);e.has(s)||(e.add(s),t.push(a[s]))}return t}function R(){return b(y,3)}const v={class:"mx-auto max-w-xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"},I={class:"mt-4 text-base text-gray-500"},B={class:"mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"},C=["src","alt"],F={class:"mt-4 text-base font-semibold text-gray-900"},P=m({__name:"index",setup(a){const o=R();return(t,e)=>{const s=u;return l(),c("main",v,[e[2]||(e[2]=n("h2",{class:"text-2xl font-bold tracking-tight text-gray-900"},"Find a Recipe",-1)),n("p",I,[e[1]||(e[1]=d(" Find a tasty, affordable, WIC-friendly recipe. ")),g(s,{to:"/recipes",class:"inline-flex items-center underline decoration-gray-500"},{default:p(()=>[e[0]||(e[0]=d(" See All Recipes ")),g(i(k),{class:"size-6 ml-1"})]),_:1})]),n("div",B,[(l(!0),c(h,null,x(i(o),r=>(l(),f(s,{key:r.id,to:`/recipe/${r.id}`,class:"group block"},{default:p(()=>[n("img",{src:("getRecipeImagePath"in t?t.getRecipeImagePath:i(w))(r),alt:r.title,class:"aspect-[3/2] w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-[5/6] shadow-md"},null,8,C),n("h3",F,_(r.title),1)]),_:2},1032,["to"]))),128))])])}}});export{P as default};
