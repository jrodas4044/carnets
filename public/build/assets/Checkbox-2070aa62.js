import{m as u,k as l,p as r,u as d,o as p,e as i,q as k}from"./app-f2d8f2c0.js";const h=["value"],f={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:String,default:null}},emits:["update:checked"],setup(t,{emit:s}){const c=t,e=u({get(){return c.checked},set(o){s("update:checked",o)}});return(o,a)=>l((p(),i("input",{"onUpdate:modelValue":a[0]||(a[0]=n=>k(e)?e.value=n:null),type:"checkbox",value:t.value,class:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500"},null,8,h)),[[r,d(e)]])}};export{f as _};