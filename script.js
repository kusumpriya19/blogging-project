const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  siteNav.classList.toggle('open', !isOpen);
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open menu');
    siteNav.classList.remove('open');
  });
});

const slides = [
  { src: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=2400&q=85', alt: 'Mount Fuji rising above a peaceful Japanese landscape', place: 'FUJI, JAPAN' },
  { src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=2400&q=85', alt: 'A quiet Kyoto street framed by traditional wooden buildings', place: 'KYOTO, JAPAN' },
  { src: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=2400&q=85', alt: 'Tokyo lights after dark', place: 'TOKYO, JAPAN' },
];
const heroImage = document.querySelector('.hero-image');
const heroCaption = document.querySelector('.hero-caption span:last-child');
const heroDots = [...document.querySelectorAll('.hero-dot')];
let activeSlide = 0;
let slideTimer;

function showSlide(index) {
  activeSlide = index;
  heroImage.classList.add('changing');
  window.setTimeout(() => {
    heroImage.src = slides[index].src;
    heroImage.alt = slides[index].alt;
    heroCaption.textContent = slides[index].place;
    heroImage.classList.remove('changing');
  }, 250);
  heroDots.forEach((dot, dotIndex) => {
    dot.classList.toggle('active', dotIndex === index);
    dot.setAttribute('aria-pressed', String(dotIndex === index));
  });
}

function restartSlideTimer() {
  window.clearInterval(slideTimer);
  slideTimer = window.setInterval(() => showSlide((activeSlide + 1) % slides.length), 4000);
}

heroDots.forEach((dot, index) => dot.addEventListener('click', () => {
  showSlide(index);
  restartSlideTimer();
}));

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) restartSlideTimer();

const articles = {
  'article-first-trip-to-japan': {
    category: 'TRIP PLANNING', title: 'Your first trip to Japan, made easy',
    image: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1800&q=85',
    alt: 'Mount Fuji rising above a peaceful landscape', read: '8 MIN READ',
    intro: 'Planning a first visit can feel like a lot of decisions at once. Start with a few days in each place, choose a comfortable pace, and leave room for the unexpected.',
    sections: [['How long should you go?', 'Ten to fourteen days gives many first-time visitors time for Tokyo and Kyoto with one or two stops in between. With a week, choose fewer bases and enjoy them properly instead of trying to cross the whole country.'], ['Build an easy first route', 'Tokyo and Kyoto make a natural start, with a stop such as Hakone, Kanazawa or Osaka depending on your interests. Check travel times before booking stays and avoid changing hotels every night.'], ['Book the important pieces first', 'Secure accommodation and any timed experiences that matter to you, especially around popular travel periods. Keep daily plans light and group nearby sights together.'], ['Make room for the small moments', 'A neighbourhood walk, a quiet garden or a meal you found by chance can become the highlight. The best itinerary is one that gives those moments somewhere to fit.']],
  },
  'article-japan-in-spring': {
    category: 'SEASONS', title: 'Japan in spring: more than cherry blossoms',
    image: 'https://images.unsplash.com/photo-1522383225653-ed111181a951?auto=format&fit=crop&w=1800&q=85',
    alt: 'Cherry blossoms in spring', read: '6 MIN READ',
    intro: 'Spring in Japan is a feeling as much as a season. Blossoms are part of it, but the best days leave room for the quieter details too.',
    sections: [['Look beyond peak bloom', 'The blossom front moves north over several weeks, and local parks, riversides and temple gardens each have their own brief moment. Keep your plans flexible and check local forecasts as your dates get closer.'], ['Make space between the big stops', 'A morning walk, a neighbourhood bakery and an unhurried train ride can be every bit as memorable as the famous viewing spots. Travel early for popular places, then give the afternoon back to yourself.'], ['Pack for changeable days', 'Spring weather can shift quickly. Bring a light layer and a compact umbrella, and book accommodation with convenient transport if you are travelling during a busy holiday week.']],
  },
  'article-slow-kyoto': {
    category: 'ITINERARIES', title: 'The art of doing less in Kyoto',
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1800&q=85',
    alt: 'Traditional pagoda among Kyoto rooftops', read: '9 MIN READ',
    intro: 'Kyoto rewards the traveller who leaves a little space in the day. Choose one neighbourhood, start early, and let the small discoveries set the pace.',
    sections: [['Choose one area at a time', 'Rather than crossing the city between every stop, spend a morning around one temple district or a full afternoon along the river. You will spend less time in transit and notice more along the way.'], ['Start early, pause at midday', 'The first quiet hour can transform a popular walk. Later, take a longer lunch or return to your stay before heading out again in the softer evening light.'], ['Leave one thing unplanned', 'Keep a blank space in your itinerary for the lane that catches your eye, the tea shop you did not expect, or simply a rest. That open time often becomes the story you bring home.']],
  },
  'article-ryokan-stay': {
    category: 'STAYS', title: 'A night in a ryokan: what to expect',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1800&q=85',
    alt: 'A warm, quiet interior in Japan', read: '5 MIN READ',
    intro: 'A ryokan stay is a chance to slow down and enjoy Japanese hospitality. Knowing a few small customs ahead of time makes the experience feel easy from the moment you arrive.',
    sections: [['Arrive with time to settle in', 'Many traditional inns serve dinner at a set time. Check the arrival details before booking, and message the property if your train may be delayed.'], ['Follow the host’s lead', 'Staff will usually explain where to leave shoes, how to wear the yukata, and how the bath works. A simple greeting and a little patience go a long way.'], ['Enjoy the rhythm of the stay', 'A seasonal meal, a soak and a quiet night are the point. Put the itinerary away for the evening and let the inn set the pace.']],
  },
};

function articleMarkup(article, slug) {
  return `<article class="article-page">
    <a class="back-link" href="/japan">← Back to Japan</a>
    <p class="eyebrow">${article.category} &nbsp;·&nbsp; ${article.read}</p>
    <h1>${article.title}</h1>
    <img class="article-cover" src="${article.image}" alt="${article.alt}">
    <p class="article-lede">${article.intro}</p>
    <div class="article-body">${article.sections.map(([heading, copy]) => `<section><h2>${heading}</h2><p>${copy}</p></section>`).join('')}</div>
    <a class="text-link" href="/japan">More Japan travel guides <span>↗</span></a>
  </article>`;
}

function pageMarkup(path) {
  if (path === '/about') return `<section class="route-page about-page"><p class="eyebrow">THE STORY BEHIND THE WANDERERS BLOG</p><h1>Travel with<br><em>your eyes open.</em></h1><p class="route-lede">The Wanderers Blog is a growing collection of thoughtful travel notes for curious people who would rather feel a place than rush through a checklist.</p><img class="route-cover" src="https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?auto=format&fit=crop&w=1800&q=85" alt="Mount Fuji rising above a peaceful landscape"><div class="article-body"><section><h2>A slower way to see more</h2><p>We make practical guides for planning trips with room to wander: where to go, how to get around, when to visit and the small details that make a journey easier.</p></section><section><h2>Starting in Japan</h2><p>Japan is our first chapter. We are building destination guides and personal field notes for cities, islands and the quiet places in between.</p></section></div><a class="button button-dark" href="/japan">Explore Japan <span>↗</span></a></section>`;
  if (path === '/japan') return `<section class="route-page japan-page"><p class="eyebrow">DESTINATION GUIDE · EAST ASIA</p><h1>Japan, at your<br><em>own pace.</em></h1><p class="route-lede">Start with the big cities, follow the coastline, or take the train somewhere quieter. Find a first idea for your trip below.</p><img class="route-cover" src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1800&q=85" alt="A quiet Kyoto street"><div class="route-destinations"><a id="tokyo" href="/japan#tokyo"><span>01</span><h2>Tokyo</h2><p>Neighbourhoods, food and a city that keeps unfolding.</p></a><a id="kyoto" href="/japan#kyoto"><span>02</span><h2>Kyoto</h2><p>Temple mornings, old lanes and time to slow down.</p></a><a id="hokkaido" href="/japan#hokkaido"><span>03</span><h2>Hokkaido</h2><p>Wide skies, mountain air and a different pace.</p></a><a id="okinawa" href="/japan#okinawa"><span>04</span><h2>Okinawa</h2><p>Island life, clear water and subtropical days.</p></a></div><div class="article-body"><h2>Japan travel stories</h2><ul class="article-list">${Object.entries(articles).map(([slug, article]) => `<li><a href="/japan/${slug}">${article.title}<span>↗</span></a></li>`).join('')}</ul></div></section>`;
  const slug = path.split('/').filter(Boolean).pop();
  if (articles[slug]) return articleMarkup(articles[slug], slug);
  return `<section class="route-page"><p class="eyebrow">PAGE NOT FOUND</p><h1>Looks like this<br><em>path wanders.</em></h1><p class="route-lede">We couldn’t find that page. Head back to the homepage or browse our Japan guides.</p><a class="button button-dark" href="/japan">Explore Japan <span>↗</span></a></section>`;
}

function renderRoute() {
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  const path = currentPath === '/index.html' ? '/' : currentPath;
  if (path === '/') {
    document.querySelector('main').hidden = false;
    document.querySelectorAll('main > section').forEach((section) => section.hidden = false);
    document.querySelectorAll('main > section.route-page, main > article.article-page').forEach((page) => page.remove());
    document.title = 'The Wanderers Blog — Japan travel, your way';
    return;
  }
  const main = document.querySelector('main');
  main.querySelectorAll(':scope > section, :scope > article').forEach((section) => section.hidden = true);
  let page = main.querySelector(':scope > .route-page, :scope > .article-page');
  if (!page) {
    page = document.createElement('section');
    main.append(page);
  }
  page.className = path.startsWith('/japan/article-') ? 'article-page' : 'route-page';
  page.innerHTML = pageMarkup(path);
  page.hidden = false;
  document.title = path === '/about' ? 'About — The Wanderers Blog' : path === '/japan' ? 'Japan travel guides — The Wanderers Blog' : `${articles[path.split('/').pop()]?.title || 'Page not found'} — The Wanderers Blog`;
  window.scrollTo(0, 0);
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (!link || link.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin || !['/', '/about', '/japan'].some((path) => url.pathname === path || url.pathname.startsWith('/japan/article-'))) return;
  event.preventDefault();
  history.pushState({}, '', `${url.pathname}${url.hash}`);
  renderRoute();
  if (url.hash) document.getElementById(url.hash.slice(1))?.scrollIntoView();
});
window.addEventListener('popstate', renderRoute);
renderRoute();

const newsletter = document.querySelector('.newsletter-form');
if (newsletter) newsletter.addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelector('.form-success').hidden = false;
  document.querySelector('.form-note').hidden = true;
  event.currentTarget.reset();
});
