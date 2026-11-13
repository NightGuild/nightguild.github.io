(()=>{
  const button=document.querySelector('#menubtn');
  const nav=document.querySelector('#nav');
  if(button&&nav){
    button.addEventListener('click',()=>{
      const open=nav.classList.toggle('open');
      button.setAttribute('aria-expanded',String(open));
    });
  }

  const year=document.querySelector('#year');
  if(year)year.textContent=String(new Date().getFullYear());

  const themes=[
    {id:'blue',name:'Ocean blue',hex:'#6bb6ff',rgb:'107,182,255',contrast:'#081522'},
    {id:'red',name:'Crimson red',hex:'#ff657a',rgb:'255,101,122',contrast:'#250910'},
    {id:'green',name:'Emerald green',hex:'#48d6a0',rgb:'72,214,160',contrast:'#071b14'},
    {id:'pink',name:'Soft pink',hex:'#f47bc5',rgb:'244,123,197',contrast:'#260d20'},
    {id:'purple',name:'Violet',hex:'#aa91ff',rgb:'170,145,255',contrast:'#160f2b'},
    {id:'cyan',name:'Electric cyan',hex:'#48dce8',rgb:'72,220,232',contrast:'#071c20'},
    {id:'orange',name:'Amber',hex:'#ffb45f',rgb:'255,180,95',contrast:'#241507'},
    {id:'mono',name:'Silver',hex:'#c5d0df',rgb:'197,208,223',contrast:'#141922'}
  ];
  const storageKey='nightguild-theme';
  const root=document.documentElement;
  const saved=(()=>{try{return localStorage.getItem(storageKey)}catch(_){return null}})();
  let active=themes.find(t=>t.id===saved)||themes[0];

  const applyTheme=(theme,persist=true)=>{
    active=theme;
    root.style.setProperty('--accent',theme.hex);
    root.style.setProperty('--accent-rgb',theme.rgb);
    root.style.setProperty('--accent-contrast',theme.contrast);
    const meta=document.querySelector('meta[name="theme-color"]');
    if(meta)meta.setAttribute('content','#0e1116');
    document.querySelectorAll('.theme-option').forEach(option=>{
      option.setAttribute('aria-pressed',String(option.dataset.theme===theme.id));
    });
    const label=document.querySelector('.theme-current');
    if(label)label.textContent=theme.name;
    const dot=document.querySelector('.theme-dot');
    if(dot)dot.style.background=theme.hex;
    if(persist){try{localStorage.setItem(storageKey,theme.id)}catch(_){}}
  };

  const navTarget=document.querySelector('#nav');
  if(navTarget){
    const wrap=document.createElement('div');
    wrap.className='theme-control';
    wrap.innerHTML='<button class="theme-trigger" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Choose website color theme"><span class="theme-dot" aria-hidden="true"></span><span class="theme-current">Ocean blue</span><span class="theme-chevron" aria-hidden="true">⌄</span></button><div class="theme-menu" hidden><div class="theme-menu-title">Make it yours</div><div class="theme-options"></div><p class="theme-menu-note">Your choice is saved on this device.</p></div>';
    const trigger=wrap.querySelector('.theme-trigger');
    const menu=wrap.querySelector('.theme-menu');
    const options=wrap.querySelector('.theme-options');
    themes.forEach(theme=>{
      const option=document.createElement('button');
      option.type='button';option.className='theme-option';option.dataset.theme=theme.id;
      option.style.setProperty('--swatch',theme.hex);
      option.setAttribute('aria-pressed','false');
      option.innerHTML='<span class="theme-swatch" aria-hidden="true"></span><span></span>';
      option.lastElementChild.textContent=theme.name;
      option.addEventListener('click',()=>{applyTheme(theme);menu.hidden=true;trigger.setAttribute('aria-expanded','false');trigger.focus()});
      options.appendChild(option);
    });
    trigger.addEventListener('click',()=>{
      const opening=menu.hidden;
      menu.hidden=!opening;
      trigger.setAttribute('aria-expanded',String(opening));
    });
    document.addEventListener('click',event=>{
      if(!wrap.contains(event.target)){menu.hidden=true;trigger.setAttribute('aria-expanded','false')}
    });
    document.addEventListener('keydown',event=>{
      if(event.key==='Escape'&&!menu.hidden){menu.hidden=true;trigger.setAttribute('aria-expanded','false');trigger.focus()}
    });
    navTarget.appendChild(wrap);
  }

  applyTheme(active,false);
  if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    document.documentElement.classList.add('reveal-ready');
  }
})();