document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener("click", (e)=>{
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if(!el) return;
    e.preventDefault();
    el.scrollIntoView({behavior:"smooth", block:"start"});
    history.replaceState(null, "", id);
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const topBtn = document.getElementById("scrollTopBtn");
if(topBtn){
  topBtn.addEventListener("click", ()=> window.scrollTo({top:0, behavior:"smooth"}));
}
