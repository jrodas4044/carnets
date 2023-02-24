import{v as k,e as h,b as r,u as a,w as _,F as C,o as b,X as q,a as n,g as w,f as S,j as T,n as P,i as U}from"./app-d76912d0.js";import{A as j}from"./AuthenticationCard-66907560.js";import{_ as A}from"./AuthenticationCardLogo-ac44b636.js";import{_ as $}from"./Checkbox-bfce3081.js";import{_ as f,a as u}from"./TextInput-d846938a.js";import{_ as m}from"./InputLabel-c34be7b9.js";import{_ as F}from"./PrimaryButton-37d2db8b.js";import"./_plugin-vue_export-helper-c27b6911.js";var x,I,v;x=function(i){/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var e={}.hasOwnProperty;function l(){for(var t=[],o=0;o<arguments.length;o++){var s=arguments[o];if(s){var c=typeof s;if(c==="string"||c==="number")t.push(s);else if(Array.isArray(s)){if(s.length){var d=l.apply(null,s);d&&t.push(d)}}else if(c==="object")if(s.toString===Object.prototype.toString)for(var p in s)e.call(s,p)&&s[p]&&t.push(p);else t.push(s.toString())}}return t.join(" ")}i.exports?(l.default=l,i.exports=l):window.classNames=l})()},x(v={path:I,exports:{},require:function(i,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(e==null&&v.path)}},v.exports),v.exports;function V(i,e,l){var t,o,s,c,d;function p(){var g=Date.now()-c;g<e&&g>=0?t=setTimeout(p,e-g):(t=null,l||(d=i.apply(s,o),s=o=null))}e==null&&(e=100);var y=function(){s=this,o=arguments,c=Date.now();var g=l&&!t;return t||(t=setTimeout(p,e)),g&&(d=i.apply(s,o),s=o=null),d};return y.clear=function(){t&&(clearTimeout(t),t=null)},y.flush=function(){t&&(d=i.apply(s,o),s=o=null,clearTimeout(t),t=null)},y}V.debounce=V;const N=["onSubmit"],D={class:"mt-4"},L=n("div",{class:"mt-2 px-4 py-2 text-sm bg-gray-200"},[w(" Unicamente se admiten correos institucionales "),n("strong",null,"@udeoberistain.edu.gt")],-1),R={class:"mt-4"},B={class:"mt-4"},E={class:"mt-4"},z={class:"mt-4"},J={class:"mt-4"},O=n("select",{id:"carrera",type:"text",class:"mt-1 block w-full",required:""},[n("option",{value:""},"---"),n("option",{value:"Técnico Auditor Forense e Investigador Criminal"},"Técnico Auditor Forense e Investigador Criminal"),n("option",{value:"Licenciatura en Investigación Criminal y Seguridad"},"Licenciatura en Investigación Criminal y Seguridad"),n("option",{value:"Licenciatura en Ciencias Jurídicas "},"Licenciatura en Ciencias Jurídicas ")],-1),M={key:0,class:"mt-4"},X={class:"flex items-center"},G={class:"ml-2"},H=["href"],K=["href"],Q={class:"flex items-center justify-end mt-4"},te={__name:"Register",setup(i){const e=k({name:"",email:"",password:"",password_confirmation:"",carne:"",dpi:"",photo:"",carrera:"",ciclo:"",terms:!1}),l=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(t,o)=>(b(),h(C,null,[r(a(q),{title:"Registro"}),r(j,null,{logo:_(()=>[r(A)]),default:_(()=>[n("form",{onSubmit:U(l,["prevent"]),enctype:"multipart/form-data"},[n("div",null,[r(m,{for:"name",value:"Nombre"}),r(f,{id:"name",modelValue:a(e).name,"onUpdate:modelValue":o[0]||(o[0]=s=>a(e).name=s),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),r(u,{class:"mt-2",message:a(e).errors.name},null,8,["message"])]),n("div",D,[r(m,{for:"email",value:"Email"}),r(f,{id:"email",modelValue:a(e).email,"onUpdate:modelValue":o[1]||(o[1]=s=>a(e).email=s),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),L,r(u,{class:"mt-2",message:a(e).errors.email},null,8,["message"])]),n("div",R,[r(m,{for:"password",value:"Password"}),r(f,{id:"password",modelValue:a(e).password,"onUpdate:modelValue":o[2]||(o[2]=s=>a(e).password=s),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),r(u,{class:"mt-2",message:a(e).errors.password},null,8,["message"])]),n("div",B,[r(m,{for:"password_confirmation",value:"Confirm Password"}),r(f,{id:"password_confirmation",modelValue:a(e).password_confirmation,"onUpdate:modelValue":o[3]||(o[3]=s=>a(e).password_confirmation=s),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),r(u,{class:"mt-2",message:a(e).errors.password_confirmation},null,8,["message"])]),n("div",E,[r(m,{for:"dpi",value:"DPI"}),r(f,{id:"dpi",modelValue:a(e).dpi,"onUpdate:modelValue":o[4]||(o[4]=s=>a(e).dpi=s),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),r(u,{class:"mt-2",message:a(e).errors.dpi},null,8,["message"])]),n("div",z,[r(m,{for:"carne",value:"Carnet"}),r(f,{id:"carne",modelValue:a(e).carne,"onUpdate:modelValue":o[5]||(o[5]=s=>a(e).carne=s),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),r(u,{class:"mt-2",message:a(e).errors.carne},null,8,["message"])]),n("div",J,[r(m,{for:"Carrera",value:"Carrera"}),O,r(u,{class:"mt-2",message:a(e).errors.carrera},null,8,["message"])]),t.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(b(),h("div",M,[r(m,{for:"terms"},{default:_(()=>[n("div",X,[r($,{id:"terms",checked:a(e).terms,"onUpdate:checked":o[6]||(o[6]=s=>a(e).terms=s),name:"terms",required:""},null,8,["checked"]),n("div",G,[w(" I agree to the "),n("a",{target:"_blank",href:t.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Terms of Service",8,H),w(" and "),n("a",{target:"_blank",href:t.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Privacy Policy",8,K)])]),r(u,{class:"mt-2",message:a(e).errors.terms},null,8,["message"])]),_:1})])):S("",!0),n("div",Q,[r(a(T),{href:t.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},null,8,["href"]),r(F,{class:P(["ml-4",{"opacity-25":a(e).processing}]),disabled:a(e).processing},{default:_(()=>[w(" Registrarse ")]),_:1},8,["class","disabled"])])],40,N)]),_:1})],64))}};export{te as default};
