(this.webpackJsonpweedcompare=this.webpackJsonpweedcompare||[]).push([[0],{32:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(16),i=c.n(s),r=(c(43),c(11)),o=(c(44),c(32),c(33),c(58)),l=c(54),j=c(57),d=c(55),b=c(56),A=c(61),h=c(60),m=c(59),x=(c.p,c(1)),O=function(e){var t=e.dataProdcuts,c=Object(n.useState)("Mario"),a=Object(r.a)(c,2);a[0],a[1];Object(n.useEffect)((function(){}));return Object(x.jsxs)(l.a,{className:"d-block mt-3 mb-3",children:[Object(x.jsx)(d.a,{className:"border ",children:Object(x.jsx)(b.a,{children:Object(x.jsxs)(A.a,{children:[Object(x.jsx)(A.a.Item,{href:"#",children:"Home"}),Object(x.jsx)(A.a.Item,{href:"https://getbootstrap.com/docs/4.0/components/breadcrumb/",children:"Library"}),Object(x.jsx)(A.a.Item,{active:!0,children:"Data"})]})})}),Object(x.jsxs)(d.a,{className:"bg-light",children:[Object(x.jsx)(b.a,{xs:3,className:"p-0",children:Object(x.jsxs)(h.a,{defaultActiveKey:"#link1",children:[Object(x.jsx)(h.a.Item,{action:!0,href:"#link1",children:"All Categories"}),Object(x.jsx)(h.a.Item,{action:!0,href:"#link2",children:"Flower"}),Object(x.jsx)(h.a.Item,{action:!0,href:"#link3",children:"Concentrates"}),Object(x.jsx)(h.a.Item,{action:!0,href:"#link4",children:"Edibles"}),Object(x.jsx)(h.a.Item,{action:!0,href:"#link5",children:"Vape"}),Object(x.jsx)(h.a.Item,{action:!0,href:"#link6",children:"CBD"})]})}),Object(x.jsx)(b.a,{className:"prodgrid p-1",children:Object(x.jsx)(d.a,{xs:1,md:3,className:"g-4 p-1",children:t.map((function(e){return Object(x.jsx)(b.a,{children:Object(x.jsxs)(m.a,{children:[Object(x.jsx)(m.a.Img,{width:"200",height:"300",variant:"top",src:e.imgsrc}),Object(x.jsxs)(m.a.Body,{children:[Object(x.jsx)(m.a.Title,{children:e.nom}),Object(x.jsx)(m.a.Text,{children:e.type}),Object(x.jsxs)(d.a,{children:[Object(x.jsx)("p",{className:"text-muted",children:e.prix}),Object(x.jsx)("a",{class:"btn btn-primary",href:e.lien,role:"button",target:"_blank",children:"See product"})]})]})]})},e.lien)}))})})]})]})};var g=function(){var e=Object(n.useState)(null),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),i=Object(r.a)(s,2),d=i[0],b=i[1],A=Object(n.useState)(null),h=Object(r.a)(A,2),m=h[0],g=h[1];return Object(n.useEffect)((function(){fetch("https://rationalmd.pythonanywhere.com/hello").then((function(e){return e.json()})).then((function(e){a(JSON.parse(e))}))}),[]),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(o.a,{bg:"dark",variant:"dark",children:Object(x.jsxs)(l.a,{fluid:!0,children:[Object(x.jsxs)(o.a.Brand,{href:"#home",className:"titre",children:[Object(x.jsx)("img",{alt:"",src:"data:image/png;base64,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",width:"50",height:"50",className:"d-inline-block align-top ",style:{marginRight:"5%"}})," ","WeedCompare"]}),Object(x.jsxs)(j.a,{title:"Browse categories",id:"basic-nav-dropdown ",style:{marginLeft:"10%",marginRight:"2%"},children:[Object(x.jsx)(j.a.Item,{href:"#prods",children:"Flower"}),Object(x.jsx)(j.a.Item,{href:"#action/3.2",children:"Concentrates"}),Object(x.jsx)(j.a.Item,{href:"#action/3.3",children:"Edibles"}),Object(x.jsx)(j.a.Item,{href:"#action/3.4",children:"Vape"}),Object(x.jsx)(j.a.Item,{href:"#action/3.5",children:"CBD"}),Object(x.jsx)(j.a.Divider,{}),Object(x.jsx)(j.a.Item,{href:"#action/3.6",children:"Contact us"})]}),Object(x.jsxs)("form",{className:"d-flex",onSubmit:function(e){e.preventDefault(),fetch("https://rationalmd.pythonanywhere.com/hello",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(m)}).then((function(){b(!0),fetch("https://rationalmd.pythonanywhere.com/hello").then((function(e){return e.json()})).then((function(e){console.log(JSON.parse(e)),a(JSON.parse(e)),b(!1)}))}))},children:[Object(x.jsx)("input",{onChange:function(e){g(e.target.value)},className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(x.jsx)("button",{className:"btn btn-outline-success my-2 my-sm-0",children:"Search"})]})]})}),Object(x.jsx)("header",{className:"",children:Object(x.jsx)("div",{className:".container-fluid bg-overlay",children:Object(x.jsxs)("section",{className:"fog",children:[Object(x.jsx)("div",{className:"absolute-bg"}),Object(x.jsxs)("div",{style:{zIndex:"22",width:"100%",height:"30%",opacity:"60%",color:"black",marginTop:"2%"},className:"position-absolute bottom-0 start-50 translate-middle-x text-center",children:[Object(x.jsx)("h2",{style:{opacity:"100",padding:"2%",paddingBottom:"0"},children:"Who are we ?"}),Object(x.jsx)("p",{children:"___________________"}),Object(x.jsx)("p",{children:"FIND THE T helps you to search for cannabis products to find what works best for you"})]}),Object(x.jsxs)("div",{className:"fog-container",children:[Object(x.jsx)("div",{className:"fog-img fog-img-first"}),Object(x.jsx)("div",{className:"fog-img fog-img-second"})]}),Object(x.jsxs)("div",{style:{justifyContent:"center",alignItems:"center"},className:"title",children:[Object(x.jsxs)("h1",{children:["Welcome to ",Object(x.jsx)("br",{})]}),Object(x.jsx)("h1",{style:{fontFamily:"StruckBase"},children:"WeedCompare"})]})]})})}),d&&Object(x.jsx)("div",{children:"loading..."}),!d&&c&&Object(x.jsx)(O,{id:"#prods",dataProdcuts:c}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"sex"})})]})},u=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,62)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(g,{})}),document.getElementById("root")),u()}},[[49,1,2]]]);
//# sourceMappingURL=main.ddc142f9.chunk.js.map