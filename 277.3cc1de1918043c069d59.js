"use strict";(self.webpackChunkmy_3d_portfolio=self.webpackChunkmy_3d_portfolio||[]).push([[277],{8277:(e,a,t)=>{t.r(a),t.d(a,{default:()=>p});var n=t(6540),l=t(2145),o=t(8437),s=t(2056);const m=()=>{const{scene:e,cameras:a}=(0,l.p)("./assets/BMW.glb"),{set:t,camera:m}=(0,s.D)();return(0,n.useEffect)((()=>{a.length>0?(m.position.copy(a[0].position),m.fov=a[0].fov,m.near=a[0].near,m.far=a[0].far,m.updateProjectionMatrix(),t({camera:m}),console.log("🚀 Using GLB Camera for BMW:",m)):(m.position.set(4,3,6),m.lookAt(0,0,0),console.log("⚠️ No GLB Camera found! Using fallback."))}),[a,t,m]),n.createElement(n.Fragment,null,n.createElement("primitive",{object:e}),n.createElement(o.N,{enableZoom:!0}))},r=()=>{const{scene:e,cameras:a,lights:t,environment:m}=(0,l.p)("./assets/Bike.glb"),{set:r,camera:i,gl:c}=(0,s.D)();return(0,n.useEffect)((()=>{a.length>0?(r({camera:a[0]}),console.log("🚀 Using GLB Camera for Bike:",{fov:a[0].fov,position:a[0].position.toArray(),near:a[0].near,far:a[0].far})):(i.position.set(3,2,5),i.lookAt(0,0,0),console.log("⚠️ No GLB Camera found! Using fallback camera:",{fov:i.fov,position:i.position.toArray(),near:i.near,far:i.far})),e.traverse((a=>{a.isLight&&((a.isPointLight||a.isSpotLight||a.isDirectionalLight)&&(a.intensity=1.5,console.log("💡 Adjusted light intensity: ".concat(a.intensity))),e.add(a))})),m&&(e.environment=m,c.setEnvironmentMap(e.environment),console.log("🌍 Environment Map Applied from GLB!"))}),[a,r,i,e,t,m,c]),n.createElement(n.Fragment,null,n.createElement("primitive",{object:e}),n.createElement(o.N,{enableZoom:!0}))},i=e=>{let{modelName:a}=e;return n.createElement(n.Fragment,null,"bmw"===a&&n.createElement(m,null),"bike"===a&&n.createElement(r,null))};var c=t(3560);const d=[{name:"BMW Car",thumbnail:"./assets/BMW_thumbnail.png",modelName:"bmw",metadata:"Modeled in Blender | 2024"},{name:"Sport Bike",thumbnail:"./assets/Bike_thumbnail.png",modelName:"bike",metadata:"Modeled in Blender | 2023"},{name:"Spaceship",thumbnail:"./assets/spaceship_thumbnail.png",modelName:"spaceship",metadata:"Modeled in Blender | 2023"}],p=()=>{const[e,a]=(0,n.useState)(null),t=()=>{a(null)};return n.createElement("div",{className:"models-section"},n.createElement("h2",{className:"section-title"},"3D Models Showcase"),n.createElement("div",{className:"models-grid"},d.map(((e,t)=>n.createElement("div",{key:t,className:"model-card",onClick:()=>(e=>{a(e)})(e)},n.createElement("img",{src:e.thumbnail,alt:e.name,className:"thumbnail"}),n.createElement("div",{className:"overlay"},n.createElement("h3",null,e.name),n.createElement("p",null,e.metadata)))))),e&&n.createElement(n.Fragment,null,n.createElement("div",{className:"popup-overlay",onClick:t}),n.createElement("div",{className:"model-popup"},n.createElement("button",{className:"close-btn",onClick:t},"✖"),n.createElement("div",{className:"canvas-box"},n.createElement(n.Suspense,{fallback:n.createElement("div",null,"Loading 3D Model...")},n.createElement(c.Hl,{camera:{position:[0,1,5]}},n.createElement(i,{modelName:e.modelName})))))))}}}]);
//# sourceMappingURL=277.3cc1de1918043c069d59.js.map