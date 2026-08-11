const projects = [
  {id:1,title:"Pro Motion Edit",category:"motion",label:"MOTION GRAPHICS",desc:"Typography-led social edit with layered graphic movement."},
  {id:2,title:"Purple UI Concept",category:"motion",label:"MOTION GRAPHICS",desc:"Minimal interface-inspired motion design."},
  {id:3,title:"Discipline / Motivation",category:"cinematic",label:"CINEMATIC EDIT",desc:"Atmospheric visual treatment built around pacing and typography."},
  {id:4,title:"Before / After",category:"reels",label:"REELS / EDIT",desc:"Visual transformation and creator-style before/after edit."},
  {id:5,title:"Abstract Motion",category:"motion",label:"MOTION GRAPHICS",desc:"Editorial composition with shape and type animation."},
  {id:6,title:"Creator Glasses",category:"reels",label:"CREATOR CONTENT",desc:"Short-form creator edit with clean graphic framing."},
  {id:7,title:"Car Visual Edit",category:"cinematic",label:"CINEMATIC / AI",desc:"Product-style visual treatment and social storytelling."},
  {id:8,title:"Design Recreation",category:"reels",label:"RECREATION",desc:"Recreated visual composition with social-first pacing."},
  {id:9,title:"Minimal UI Story",category:"motion",label:"MOTION / TYPE",desc:"Minimal animated interface and typography study."}
];

const grid=document.getElementById("projectGrid");
const modal=document.getElementById("modal");
const modalVideo=document.getElementById("modalVideo");
const modalTitle=document.getElementById("modalTitle");
const modalCategory=document.getElementById("modalCategory");
const modalText=document.getElementById("modalText");

function render(filter="all"){
  grid.innerHTML="";
  projects.filter(p=>filter==="all"||p.category===filter).forEach(p=>{
    const card=document.createElement("article");
    card.className="project reveal show";
    card.innerHTML=`<div class="project-media"><img src="assets/thumbs/reel-${String(p.id).padStart(2,"0")}.jpg" alt="${p.title}" loading="lazy"></div>
      <div class="project-info"><h3>${p.title}</h3><p>${p.desc}</p><span class="pill">${p.label}</span></div>`;
    card.addEventListener("click",()=>openProject(p));
    grid.appendChild(card);
  });
}
function openProject(p){
  modal.classList.add("open"); modal.setAttribute("aria-hidden","false");
  modalTitle.textContent=p.title; modalText.textContent=p.desc; modalCategory.textContent=p.label;
  modalVideo.src=`assets/videos/reel-${String(p.id).padStart(2,"0")}.mp4`;
  modalVideo.play().catch(()=>{});
}
function closeModal(){
  modal.classList.remove("open"); modal.setAttribute("aria-hidden","true");
  modalVideo.pause(); modalVideo.removeAttribute("src"); modalVideo.load();
}
document.querySelectorAll(".filter").forEach(btn=>btn.addEventListener("click",()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active"); render(btn.dataset.filter);
}));
document.querySelector(".modal-close").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
document.getElementById("year").textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
render();

document.querySelector(".menu").addEventListener("click",()=>{
  const nav=document.querySelector(".nav nav");
  nav.style.display=nav.style.display==="flex"?"none":"flex";
  nav.style.position="absolute";nav.style.top="68px";nav.style.left="0";nav.style.right="0";
  nav.style.padding="20px";nav.style.background="#0b0b0e";nav.style.flexDirection="column";
});
