import{a as c}from"./scheduler.PB1Abxot.js";function d(t){const n=t-1;return n*n*n+1}function q(t){return--t*t*t*t*t+1}function O(t,{delay:n=0,duration:a=400,easing:u=d,x:e=0,y:i=0,opacity:f=0}={}){const o=getComputedStyle(t),s=+o.opacity,y=o.transform==="none"?"":o.transform,l=s*(1-f),[m,p]=c(e),[$,x]=c(i);return{delay:n,duration:a,easing:u,css:(r,_)=>`
			transform: ${y} translate(${(1-r)*m}${p}, ${(1-r)*$}${x});
			opacity: ${s-l*_}`}}export{d as c,O as f,q};
