import{e as a,b as c,u as o,a as e,c as u,w as n,f as d,F as f,g as s,o as t,X as g,j as i}from"./app-e376d752.js";const h={class:"relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter bg-gray-900 selection:bg-red-500 selection:text-white"},m=e("div",{class:"max-w-7xl mx-auto p-6 lg:p-8"},[e("div",{class:"flex justify-center"},[e("h1",{class:"text-center text-white text-2xl"},[s(" UdeO Beristain "),e("br"),s(" Facultad de Ciencias Forenses e Investigación Criminal ")])])],-1),x={key:0,class:"p-6"},_={key:1,class:"flex justify-center"},y={__name:"Welcome",props:{canLogin:Boolean,canRegister:Boolean,laravelVersion:String,phpVersion:String},setup(l){return(r,v)=>(t(),a(f,null,[c(o(g),{title:"UDEO BERISTAIN"}),e("div",h,[e("div",null,[m,l.canLogin?(t(),a("div",x,[r.$page.props.auth.user?(t(),u(o(i),{key:0,href:r.route("dashboard"),class:"font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:n(()=>[s("Dashboard")]),_:1},8,["href"])):(t(),a("div",_,[c(o(i),{href:r.route("login"),class:"bg-blue-500 p-4 text-white font-semibold hover:text-gray-900 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:n(()=>[s(" Ingresar ")]),_:1},8,["href"]),l.canRegister?(t(),u(o(i),{key:0,href:r.route("register"),class:"bg-green-500 ml-4 p-4 text-white font-semibold hover:text-gray-900 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"},{default:n(()=>[s("Registrarse")]),_:1},8,["href"])):d("",!0)]))])):d("",!0)])])],64))}};export{y as default};