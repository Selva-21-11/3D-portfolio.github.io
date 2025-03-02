"use strict";(self.webpackChunkmy_3d_portfolio=self.webpackChunkmy_3d_portfolio||[]).push([[277],{8277:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var n=a(6540),l=a(4589),o=a(3560),r=a(2145),s=a(8437),i=a(2056);const m=()=>{const{scene:e,cameras:t}=(0,r.p)("./assets/BMW.glb"),{set:a,camera:l}=(0,i.D)();return(0,n.useEffect)((()=>{t.length>0?(l.position.copy(t[0].position),l.fov=t[0].fov,l.near=t[0].near,l.far=t[0].far,l.updateProjectionMatrix(),a({camera:l}),console.log("🚀 Using GLB Camera for BMW:",l)):(l.position.set(4,3,6),l.lookAt(0,0,0),console.log("⚠️ No GLB Camera found! Using fallback."))}),[t,a,l]),n.createElement(n.Fragment,null,n.createElement("primitive",{object:e}),n.createElement(s.N,{enableZoom:!0}))},c=()=>{const{scene:e,cameras:t,lights:a,environment:l}=(0,r.p)("./assets/Bike.glb"),{set:o,camera:m,gl:c}=(0,i.D)();return(0,n.useEffect)((()=>{t.length>0?(o({camera:t[0]}),console.log("🚀 Using GLB Camera for Bike:",{fov:t[0].fov,position:t[0].position.toArray(),near:t[0].near,far:t[0].far})):(m.position.set(3,2,5),m.lookAt(0,0,0),console.log("⚠️ No GLB Camera found! Using fallback camera:",{fov:m.fov,position:m.position.toArray(),near:m.near,far:m.far})),e.traverse((t=>{t.isLight&&((t.isPointLight||t.isSpotLight||t.isDirectionalLight)&&(t.intensity=1.5,console.log("💡 Adjusted light intensity: ".concat(t.intensity))),e.add(t))})),l&&(e.environment=l,c.setEnvironmentMap(e.environment),console.log("🌍 Environment Map Applied from GLB!"))}),[t,o,m,e,a,l,c]),n.createElement(n.Fragment,null,n.createElement("primitive",{object:e}),n.createElement(s.N,{enableZoom:!0}))},d=e=>{let{modelName:t}=e;return n.createElement(n.Fragment,null,"bmw"===t&&n.createElement(m,null),"bike"===t&&n.createElement(c,null))};var p=a(5880);const u=[{name:"BMW Car",thumbnail:"./assets/BMW_thumbnail.png",modelName:"bmw",metadata:"Modeled in Blender | 2024"},{name:"Sport Bike",thumbnail:"./assets/Bike_thumbnail.png",modelName:"bike",metadata:"Modeled in Blender | 2023"},{name:"Sport Bike",thumbnail:"./assets/Bike_thumbnail.png",modelName:"bike",metadata:"Modeled in Blender | 2023"}],f=()=>{const[e,t]=(0,n.useState)(null),[a,r]=(0,n.useState)(0),s=(0,n.useRef)(null),i={centerMode:!0,centerPadding:"0px",slidesToShow:1,infinite:!0,speed:500,arrows:!0,focusOnSelect:!0,beforeChange:(e,t)=>r(t)};(0,n.useEffect)((()=>{e&&s.current&&p.Ay.fromTo(s.current,{opacity:0,scale:.8},{opacity:1,scale:1,duration:.5,ease:"power2.out"})}),[e]);const m=()=>{p.Ay.to(s.current,{opacity:0,scale:.8,duration:.4,ease:"power2.in",onComplete:()=>t(null)})};return n.createElement("div",{className:"models-section"},n.createElement("h2",{className:"section-title"},"3D Models Showcase"),n.createElement(l.A,i,u.map(((e,l)=>n.createElement("div",{key:l,className:"model-card ".concat(l===a?"centered":""),onClick:()=>(e=>{e===a&&t(u[e])})(l)},n.createElement("img",{src:e.thumbnail,alt:e.name,className:"thumbnail"}),n.createElement("div",{className:"model-info"},n.createElement("h3",null,e.name),n.createElement("p",null,e.metadata)))))),n.createElement("div",{className:"popup-overlay",style:{display:e?"block":"none"},onClick:m}),n.createElement("div",{className:"model-popup",ref:s,style:{display:e?"flex":"none"}},n.createElement("button",{className:"close-btn",onClick:m},"✖"),n.createElement("div",{className:"canvas-box"},n.createElement(n.Suspense,{fallback:n.createElement("div",null,"Loading 3D Model...")},n.createElement(o.Hl,{camera:{position:[0,1,5]}},e&&n.createElement(d,{modelName:e.modelName}))))))}}}]);
//# sourceMappingURL=277.58ad914c197d42c22a27.js.map