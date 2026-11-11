'use strict';
(function(){const buttons=[...document.querySelectorAll('[data-page]')],pages=[...document.querySelectorAll('[data-guide-page]')];function show(key){pages.forEach(p=>p.hidden=p.dataset.guidePage!==key);buttons.forEach(b=>b.classList.toggle('active',b.dataset.page===key));window.scrollTo({top:0,behavior:'smooth'});history.replaceState(null,'','#'+key)}buttons.forEach(b=>b.addEventListener('click',()=>show(b.dataset.page)));const initial=location.hash.slice(1);show(pages.some(p=>p.dataset.guidePage===initial)?initial:'overview');const lb=document.querySelector('#lightbox'),lbImg=document.querySelector('#lightboxImage'),cap=document.querySelector('#lightboxCaption');function open(img){lbImg.src=img.src;lbImg.alt=img.alt;cap.textContent=img.dataset.caption||img.alt;lb.hidden=false;document.body.style.overflow='hidden';document.querySelector('#lightboxClose').focus()}function close(){lb.hidden=true;lbImg.src='';document.body.style.overflow=''}document.querySelectorAll('.terminal-shot').forEach(img=>{img.addEventListener('click',()=>open(img));img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(img)}})});document.querySelector('#lightboxClose').addEventListener('click',close);lb.addEventListener('click',e=>{if(e.target===lb)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!lb.hidden)close()})})();


// Contextual sidebar navigation added by the sidebar-only fork.
(function(){
  function pageKey(){return location.hash.slice(1).split('/')[0]||'overview'}
  document.querySelectorAll('.context-toc a').forEach(function(a){
    a.addEventListener('click',function(e){
      var raw=a.getAttribute('href').slice(1).split('/');
      var page=raw[0], id=raw[1];
      if(page===pageKey() && id){
        e.preventDefault();
        var target=document.getElementById(id);
        if(target){target.scrollIntoView({behavior:'smooth',block:'start'});history.replaceState(null,'','#'+page+'/'+id)}
      }
    });
  });
  window.addEventListener('hashchange',function(){
    var raw=location.hash.slice(1).split('/');
    if(raw[1]) setTimeout(function(){document.getElementById(raw[1])?.scrollIntoView({behavior:'smooth',block:'start'})},40);
  });
})();
