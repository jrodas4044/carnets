import{e as a,a as e,t as s,g as o,b as i,x as l,o as c}from"./app-f37387b7.js";const d={class:"flex h-screen justify-center items-center"},u={id:"print",class:"w-auto mx-auto shadow-2xl"},_=e("div",{class:"mt-6"},[e("div",{class:"w-full items-center justify-items-center text-center"},[e("img",{src:"/head.png",alt:"UDEO",width:"400",style:{margin:"auto"}})])],-1),h={class:"p-6 lg:p-8 bg-white border-b border-gray-200 flex items-center justify-center"},m={class:""},p=["src"],f={class:"ml-4"},g={class:"mt-2 text-l font-medium text-blue-900 uppercase font-semibold"},b={class:"text-left text-sm"},v=e("strong",null,"Carné: ",-1),y=e("br",null,null,-1),x=e("strong",null,"DPI: ",-1),O=e("br",null,null,-1),w=e("strong",null,"Carrera:",-1),C=e("br",null,null,-1),B={class:"ml-4"},j={__name:"Carne",props:{user:Array},setup(t){return(r,D)=>{const n=l("QRCodeVue3");return c(),a("div",d,[e("div",u,[_,e("div",h,[e("div",m,[e("img",{src:t.user.profile_photo_url,class:"h-32 w-32 rounded-full object-cover"},null,8,p)]),e("div",f,[e("h2",g,s(t.user.name),1),e("span",b,[v,o(" "+s(t.user.carne)+" ",1),y,x,o(" "+s(t.user.dpi)+" ",1),O,w,o(" "+s(t.user.carrera)+" ",1),C])]),e("div",B,[i(n,{width:150,height:150,value:`http://estudiantes.udeoberistain.edu.gt/validate/${r.$page.props.auth.user.carne}`,qrOptions:{typeNumber:0,mode:"Byte",errorCorrectionLevel:"H"},imageOptions:{hideBackgroundDots:!0,imageSize:.4,margin:0},dotsOptions:{type:"dots",color:"#26249a",gradient:{type:"linear",rotation:0,colorStops:[{offset:0,color:"#26249a"},{offset:1,color:"#ff6600"}]}},margin:"10",backgroundOptions:{color:"#ffffff"},cornersSquareOptions:{type:"dot",color:"#000000"},cornersDotOptions:{type:void 0,color:"#000000"}},null,8,["value","imageOptions"])])])])])}}};export{j as default};
