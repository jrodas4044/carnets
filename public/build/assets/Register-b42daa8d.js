import{v as T,e as g,b as a,u as s,w as v,F as V,o as h,X as U,a as t,k as S,l as k,f as x,g as y,j as A,n as I,i as P}from"./app-f2d8f2c0.js";import{A as j}from"./AuthenticationCard-7155b911.js";import{_ as F}from"./AuthenticationCardLogo-573380d7.js";import{_ as $}from"./Checkbox-2070aa62.js";import{_ as f,a as i}from"./TextInput-9f4fa8d9.js";import{_ as u}from"./InputLabel-facb6257.js";import{_ as N}from"./PrimaryButton-8aa29c9a.js";import"./_plugin-vue_export-helper-c27b6911.js";var C,D,w;C=function(m){/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var e={}.hasOwnProperty;function l(){for(var n=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var c=typeof o;if(c==="string"||c==="number")n.push(o);else if(Array.isArray(o)){if(o.length){var d=l.apply(null,o);d&&n.push(d)}}else if(c==="object")if(o.toString===Object.prototype.toString)for(var p in o)e.call(o,p)&&o[p]&&n.push(p);else n.push(o.toString())}}return n.join(" ")}m.exports?(l.default=l,m.exports=l):window.classNames=l})()},C(w={path:D,exports:{},require:function(m,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(e==null&&w.path)}},w.exports),w.exports;function q(m,e,l){var n,r,o,c,d;function p(){var _=Date.now()-c;_<e&&_>=0?n=setTimeout(p,e-_):(n=null,l||(d=m.apply(o,r),o=r=null))}e==null&&(e=100);var b=function(){o=this,r=arguments,c=Date.now();var _=l&&!n;return n||(n=setTimeout(p,e)),_&&(d=m.apply(o,r),o=r=null),d};return b.clear=function(){n&&(clearTimeout(n),n=null)},b.flush=function(){n&&(d=m.apply(o,r),o=r=null,clearTimeout(n),n=null)},b}q.debounce=q;const R=["onSubmit"],B={class:"mt-4"},E=t("div",{class:"mt-2 px-4 py-2 text-sm bg-gray-200"},[y(" Unicamente se admiten correos institucionales "),t("strong",null,"@udeoberistain.edu.gt")],-1),L={class:"mt-4"},z={class:"mt-4"},M={class:"mt-4"},O={class:"mt-4"},X={class:"mt-4"},G=t("option",{value:""},"---",-1),H=t("option",{value:"Técnico Auditor Forense e Investigador Criminal"},"Técnico Auditor Forense e Investigador Criminal",-1),J=t("option",{value:"Licenciatura en Investigación Criminal y Seguridad"},"Licenciatura en Investigación Criminal y Seguridad",-1),K=[G,H,J],Q={class:"mt-4"},W=t("option",{value:""},"---",-1),Y=t("option",{value:"1er Semestre"},"1ero ",-1),Z=t("option",{value:"2do Semestre"},"2do",-1),ee=t("option",{value:"3er Semestre"},"3ero",-1),oe=t("option",{value:"4to Semestre"},"4to",-1),se=t("option",{value:"5to Semestre"},"5to",-1),te=t("option",{value:"6to Semestre"},"6to",-1),re=t("option",{value:"7mo  Semestre"},"7mo",-1),ae=t("option",{value:"8vo Semestre"},"8vo",-1),ne=t("option",{value:"9no Semestre"},"8no.",-1),le=t("option",{value:"10mo Semestre"},"10mo",-1),ie={key:0,class:"mt-4"},ue={class:"flex items-center"},me={class:"ml-2"},de=["href"],ce=["href"],pe={class:"flex items-center justify-end mt-4"},Ve={__name:"Register",setup(m){const e=T({name:"",email:"",password:"",password_confirmation:"",carne:"",dpi:"",photo:"",carrera:"",ciclo:"",terms:!1}),l=()=>{e.post(route("register"),{onFinish:()=>e.reset("password","password_confirmation")})};return(n,r)=>(h(),g(V,null,[a(s(U),{title:"Registro"}),a(j,null,{logo:v(()=>[a(F)]),default:v(()=>[t("form",{onSubmit:P(l,["prevent"]),enctype:"multipart/form-data"},[t("div",null,[a(u,{for:"name",value:"Nombre"}),a(f,{id:"name",modelValue:s(e).name,"onUpdate:modelValue":r[0]||(r[0]=o=>s(e).name=o),type:"text",class:"mt-1 block w-full",required:"",autofocus:"",autocomplete:"name"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.name},null,8,["message"])]),t("div",B,[a(u,{for:"email",value:"Email"}),a(f,{id:"email",modelValue:s(e).email,"onUpdate:modelValue":r[1]||(r[1]=o=>s(e).email=o),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),E,a(i,{class:"mt-2",message:s(e).errors.email},null,8,["message"])]),t("div",L,[a(u,{for:"password",value:"Password"}),a(f,{id:"password",modelValue:s(e).password,"onUpdate:modelValue":r[2]||(r[2]=o=>s(e).password=o),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.password},null,8,["message"])]),t("div",z,[a(u,{for:"password_confirmation",value:"Confirm Password"}),a(f,{id:"password_confirmation",modelValue:s(e).password_confirmation,"onUpdate:modelValue":r[3]||(r[3]=o=>s(e).password_confirmation=o),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.password_confirmation},null,8,["message"])]),t("div",M,[a(u,{for:"dpi",value:"DPI"}),a(f,{id:"dpi",modelValue:s(e).dpi,"onUpdate:modelValue":r[4]||(r[4]=o=>s(e).dpi=o),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.dpi},null,8,["message"])]),t("div",O,[a(u,{for:"carne",value:"Carnet"}),a(f,{id:"carne",modelValue:s(e).carne,"onUpdate:modelValue":r[5]||(r[5]=o=>s(e).carne=o),type:"text",class:"mt-1 block w-full",required:""},null,8,["modelValue"]),a(i,{class:"mt-2",message:s(e).errors.carne},null,8,["message"])]),t("div",X,[a(u,{for:"Carrera",value:"Carrera"}),S(t("select",{id:"carrera",class:"mt-1 block w-full",required:"","onUpdate:modelValue":r[6]||(r[6]=o=>s(e).carrera=o)},K,512),[[k,s(e).carrera]]),a(i,{class:"mt-2",message:s(e).errors.carrera},null,8,["message"])]),t("div",Q,[a(u,{for:"ciclo",value:"Ciclo"}),S(t("select",{id:"ciclo",class:"mt-1 block w-full",required:"","onUpdate:modelValue":r[7]||(r[7]=o=>s(e).ciclo=o)},[W,s(e).carrera=="Técnico Auditor Forense e Investigador Criminal"?(h(),g(V,{key:0},[Y,Z,ee,oe,se,te],64)):x("",!0),s(e).carrera=="Licenciatura en Investigación Criminal y Seguridad"?(h(),g(V,{key:1},[re,ae,ne,le],64)):x("",!0)],512),[[k,s(e).ciclo]]),a(i,{class:"mt-2",message:s(e).errors.ciclo},null,8,["message"])]),n.$page.props.jetstream.hasTermsAndPrivacyPolicyFeature?(h(),g("div",ie,[a(u,{for:"terms"},{default:v(()=>[t("div",ue,[a($,{id:"terms",checked:s(e).terms,"onUpdate:checked":r[8]||(r[8]=o=>s(e).terms=o),name:"terms",required:""},null,8,["checked"]),t("div",me,[y(" I agree to the "),t("a",{target:"_blank",href:n.route("terms.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Terms of Service",8,de),y(" and "),t("a",{target:"_blank",href:n.route("policy.show"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},"Privacy Policy",8,ce)])]),a(i,{class:"mt-2",message:s(e).errors.terms},null,8,["message"])]),_:1})])):x("",!0),t("div",pe,[a(s(A),{href:n.route("login"),class:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"},null,8,["href"]),a(N,{class:I(["ml-4",{"opacity-25":s(e).processing}]),disabled:s(e).processing},{default:v(()=>[y(" Registrarse ")]),_:1},8,["class","disabled"])])],40,R)]),_:1})],64))}};export{Ve as default};