document.addEventListener('DOMContentLoaded', ()=>{
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // mobile nav
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  navToggle && navToggle.addEventListener('click', ()=>{
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    navList.style.display = open ? '' : 'flex';
  });

  // theme toggle - remembers preference in localStorage
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const darkModeKey = 'prefers-dark';
  const applyTheme = (dark)=>{
    if(dark){
      root.style.setProperty('--bg','#0f1724');
      document.body.classList.add('dark');
      themeToggle.textContent = '☀️';
    } else {
      root.style.removeProperty('--bg');
      document.body.classList.remove('dark');
      themeToggle.textContent = '🌙';
    }
  }
  const saved = localStorage.getItem(darkModeKey);
  applyTheme(saved === null ? true : saved === 'true');
  themeToggle.addEventListener('click', ()=>{
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem(darkModeKey, String(isDark));
    applyTheme(isDark);
  });

  // projects filter + search
  const grid = document.getElementById('projects-grid');
  const filterButtons = document.querySelectorAll('.project-filters button');
  const searchInput = document.getElementById('project-search');

  const applyFilter = ()=>{
    const q = searchInput.value.trim().toLowerCase();
    const active = document.querySelector('.project-filters button.active');
    const filter = active ? active.dataset.filter : 'all';
    const cards = grid.querySelectorAll('.card');
    cards.forEach(card=>{
      const title = card.querySelector('h3').textContent.toLowerCase();
      const desc = card.querySelector('p').textContent.toLowerCase();
      const type = card.dataset.type;
      const matchesFilter = (filter === 'all') || (type === filter);
      const matchesQuery = q === '' || title.includes(q) || desc.includes(q);
      card.style.display = (matchesFilter && matchesQuery) ? '' : 'none';
    })
  }
  filterButtons.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      filterButtons.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter();
    })
  });
  searchInput.addEventListener('input', applyFilter);

  // simple contact form validation + fake submit
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  form && form.addEventListener('submit', (e)=>{
    e.preventDefault();
    status.textContent = '';
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const msg = form.message.value.trim();
    if(name.length < 2){ status.textContent = 'Please enter your name.'; form.name.focus(); return; }
    if(!/^\S+@\S+\.\S+$/.test(email)){ status.textContent = 'Please enter a valid email.'; form.email.focus(); return; }
    if(msg.length < 10){ status.textContent = 'Message is too short.'; form.message.focus(); return; }

    // simulate sending
    status.textContent = 'Sending...';
    setTimeout(()=>{
      status.textContent = 'Thanks! Your message was sent (demo).';
      form.reset();
    }, 900);
  });

  // smooth scrolling for in-page links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    })
  });

});