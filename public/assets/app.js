(()=> {
 const menu=document.querySelector('[data-menu-toggle]'),nav=document.querySelector('[data-site-nav]');
 if(menu&&nav)menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));});
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 const header=document.querySelector('.site-header'),progress=document.createElement('div');progress.className='page-progress';progress.setAttribute('aria-hidden','true');document.body.append(progress);
 let ticking=false;const updateScroll=()=>{const max=document.documentElement.scrollHeight-window.innerHeight;progress.style.transform='scaleX('+(max>0?window.scrollY/max:0)+')';header?.classList.toggle('is-scrolled',window.scrollY>12);ticking=false;};
 window.addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(updateScroll);ticking=true;}},{passive:true});updateScroll();
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const fine=window.matchMedia('(pointer:fine)').matches;
 const cards=document.querySelectorAll('.feature-card,.doc-link');
 if(!reduce&&fine)cards.forEach(card=>card.addEventListener('pointermove',event=>{const r=card.getBoundingClientRect();card.style.setProperty('--mx',((event.clientX-r.left)/r.width*100)+'%');card.style.setProperty('--my',((event.clientY-r.top)/r.height*100)+'%');}));
 const targets=document.querySelectorAll('.hero-copy,.hero-visual,.section-head,.feature-card,.interlude-copy,.interlude-mark,.interlude-aside,.callout-banner,.doc-content>*,.sidebar');
 targets.forEach((el,i)=>{el.classList.add('reveal');if(el.classList.contains('feature-card'))el.style.transitionDelay=(i%3)*65+'ms';});
 if(reduce||!('IntersectionObserver'in window))targets.forEach(el=>el.classList.add('is-visible'));
 else{const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.08,rootMargin:'0px 0px -35px 0px'});targets.forEach(el=>observer.observe(el));}
 const panel=document.querySelector('.hero-panel'),visual=document.querySelector('.hero-visual');
 if(panel&&visual&&!reduce&&fine){
  visual.addEventListener('pointermove',event=>{const r=visual.getBoundingClientRect(),x=(event.clientX-r.left)/r.width-.5,y=(event.clientY-r.top)/r.height-.5;panel.style.transform='perspective(1000px) rotateX('+(-y*5).toFixed(2)+'deg) rotateY('+(x*7).toFixed(2)+'deg) rotate(1deg)';});
  visual.addEventListener('pointerleave',()=>{panel.style.transform='rotate(2.5deg)';});
 }
})();