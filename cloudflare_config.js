  /* CONFIGURATION STARTS HERE */
  
  /* Step 1: enter your domain name like fruitionsite.com */
  /*COLIN UPDATED*/
  const MY_DOMAIN = 'blog.colinroper.com';
  
  /*
   * Step 2: enter your URL slug to page ID mapping
   * The key on the left is the slug (without the slash)
   * The value on the right is the Notion page ID
   */
  /*COLIN UPDATED*/
  const SLUG_TO_PAGE = {
    '': '6748c61e3f924cc4baffc4479b4d6b84',
    'about': '54a956ee7484475ab395d820f9f935dc',
    'subscribe': '5417dde34d404d55aeed65e01e954600',
    'contact': '904bdb0d0ce24e319049d8069e967c12',
    'glossary': '82405609b3464902bb24a00091297d14',
    'Advice-for-new-PMs-still-relevant-for-veterans-Part-2': '70987e91d0e24b37a4a74f162dfa67ba',
    'Advice-for-new-PMs-still-relevant-for-veterans-Part-1': '08b13066657c485985fa454ea2cff354',
    'Know-where-your-candidate-will-grow': 'f7a4aa310d5e49949ecb34cda9acdeff',
    'Your-strategy-won-t-work-until-you-say-no': '1af39ce4f21e461a86821228529868fc',
    'Goal-Setting-Best-Practices': '07737c1b8b4a412db793cdc88b5f3e9a',
    'Q-A-on-Relocating-to-Berlin': '63297c3f55004ac6aaa0ec6086ef19d9',
    'Goal-setting-Clarifying-terminology': 'b71f6f78bf2b4c07af1bca89637d62c5',
    'Using-Notion-as-your-Blog': '1e75c0657f34468595b25bd4f7c181e4',
    'Defining-your-startup-s-cultural-values': '1ef4a4d445c04f5681c48fea39f893f6',
    'Breaking-into-Product-Management': 'b83e297920c344c8a7a93935bd63960e',
    'Design-a-rock-solid-PM-onboarding-Part-1-Pre-game': '7c4a68e003d248f5bb28c175a613f38c',
    'Design-a-rock-solid-PM-onboarding-Part-3-Partnership': 'e9b7122e88ff4991870ea5115a16cca2',
    'Design-a-rock-solid-PM-onboarding-Part-2-The-plan': '6aaec89f9cd34062a1906d17afd259b4',
    'How-to-create-your-Product-Vision-type': 'cf095600e3314a1abeed2152aee3c863',
    'An-Open-Q-A': '8b68d9084db04e08aa14f7f9b904684e',
    'Choosing-your-key-metrics': '41b2213cda5442a1be1443b428e192af',
    'NPS-Useful-KPI-Vanity-Metric-or-Joke': '05feb13473644797813199514093ce90',
  };

  /* Step 3: enter your page title and description for SEO purposes */
  /*COLIN UPDATED*/
  const PAGE_TITLE = 'On Product, Tech, & Leadership';
  const PAGE_DESCRIPTION = 'Exceptional Product Management is a career-long journey. Some challenges are as old as time, but there are always new ideas and techniques to help us build better products. This site is shares some of things I’ve learned in my Product career which I hope will help you build something great.';
  
  /* Step 4: enter a Google Font name, you can choose from https://fonts.google.com */
  /*COLIN UPDATED*/
  const GOOGLE_FONT = 'Roboto';
  
  /* Step 5: enter any custom scripts you'd like */
  /*COLIN UPDATED*/
  const CUSTOM_SCRIPT = `
    <!-- Custom CSS styling -->
    <style>
        /* Note: All data-block-id's will need to be replaced with the relevant IDs of your own website. */
        
        /* Hide for left column on home page mobile */
        @media (max-width: 767px) {
            /* Spacer */       [data-block-id="01ce8358-c053-482b-b110-d873f957df21"] {display: none;}
            /* H. Line  */  [data-block-id="3b408e1d-f34f-43a4-92ae-7864af35e12e"] {display: none;}
            /* Spacer */    [data-block-id="af7fe48b-7778-4047-8099-f75d639e5419"] {display: none;}
            /* Glossary */ [data-block-id="82405609-b346-4902-bb24-a00091297d14"] {display: none;}
            /* Subscribe */ [data-block-id="5417dde3-4d40-4d55-aeed-65e01e954600"] {display: none;}
            /* About */     [data-block-id="54a956ee-7484-475a-b395-d820f9f935dc"] {display: none;}
            /* Contact */   [data-block-id="904bdb0d-0ce2-4e31-9049-d8069e967c12"] {display: none;}
        }

        /* Shrink footer font size */
        [data-block-id="194956fc-0819-4a32-8755-4a1f7b035420"] {font-size: 12px;}

        /* Remove mini icons in gallery view */
        .notion-selectable .notion-collection_view-block .notion-record-icon.notranslate {display: none !important;}

        /* Hide sort and filter in gallery view for desktop */
        div.notion-collection_view-block > div > div > div.notion-focusable:nth-of-type(1) {display: none !important;}

        /* Hide sort and filter submenu in gallery view */
        div.notion-scroller > div > div[role=button] {display: none !important;}
        div.notion-scroller > div[role=button]  {display: none !important;}

        /* Center-align text under photo on About page */
        [data-block-id="35e405f5-4644-40bd-8665-9ee6b43f20f2"] {text-align: center;}
    </style>
    
    /* Find your Google Analytics ID here: https://support.google.com/analytics/answer/9539598?hl=en */
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-8HMRWWFJNR"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-8HMRWWFJNR');
    </script>
  `;
  
  /* CONFIGURATION ENDS HERE */
  
  const PAGE_TO_SLUG = {};
  const slugs = [];
  const pages = [];
  Object.keys(SLUG_TO_PAGE).forEach(slug => {
    const page = SLUG_TO_PAGE[slug];
    slugs.push(slug);
    pages.push(page);
    PAGE_TO_SLUG[page] = slug;
  });
  
  addEventListener('fetch', event => {
    event.respondWith(fetchAndApply(event.request));
  });

  function generateSitemap() {
    let sitemap = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
    slugs.forEach(
      (slug) =>
        (sitemap +=
          '<url><loc>https://' + MY_DOMAIN + '/' + slug + '</loc></url>')
    );
    sitemap += '</urlset>';
    return sitemap;
  }
  
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  
  function handleOptions(request) {
    if (request.headers.get('Origin') !== null &&
      request.headers.get('Access-Control-Request-Method') !== null &&
      request.headers.get('Access-Control-Request-Headers') !== null) {
      // Handle CORS pre-flight request.
      return new Response(null, {
        headers: corsHeaders
      });
    } else {
      // Handle standard OPTIONS request.
      return new Response(null, {
        headers: {
          'Allow': 'GET, HEAD, POST, PUT, OPTIONS',
        }
      });
    }
  }
  
  async function fetchAndApply(request) {
    if (request.method === 'OPTIONS') {
      return handleOptions(request);
    }
    let url = new URL(request.url);
    url.hostname = 'www.notion.so';
    if (url.pathname === '/robots.txt') {
      return new Response('Sitemap: https://' + MY_DOMAIN + '/sitemap.xml');
    }
    if (url.pathname === '/sitemap.xml') {
      let response = new Response(generateSitemap());
      response.headers.set('content-type', 'application/xml');
      return response;
    }
    let response;
    if (url.pathname.startsWith('/app') && url.pathname.endsWith('js')) {
      response = await fetch(url.toString());
      let body = await response.text();
      response = new Response(body.replace(/www.notion.so/g, MY_DOMAIN).replace(/notion.so/g, MY_DOMAIN), response);
      response.headers.set('Content-Type', 'application/x-javascript');
      return response;
    } else if ((url.pathname.startsWith('/api'))) {
      // Forward API
      response = await fetch(url.toString(), {
        body: url.pathname.startsWith('/api/v3/getPublicPageData') ? null : request.body,
        headers: {
          'content-type': 'application/json;charset=UTF-8',
          'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36'
        },
        method: 'POST',
      });
      response = new Response(response.body, response);
      response.headers.set('Access-Control-Allow-Origin', '*');
      return response;
    } else if (slugs.indexOf(url.pathname.slice(1)) > -1) {
      const pageId = SLUG_TO_PAGE[url.pathname.slice(1)];
      return Response.redirect('https://' + MY_DOMAIN + '/' + pageId, 301);
    } else {
      response = await fetch(url.toString(), {
        body: request.body,
        headers: request.headers,
        method: request.method,
      });
      response = new Response(response.body, response);
      response.headers.delete('Content-Security-Policy');
      response.headers.delete('X-Content-Security-Policy');
    }
  
    return appendJavascript(response, SLUG_TO_PAGE);
  }
  
  class MetaRewriter {
    element(element) {
      if (PAGE_TITLE !== '') {
        if (element.getAttribute('property') === 'og:title'
          || element.getAttribute('name') === 'twitter:title') {
          element.setAttribute('content', PAGE_TITLE);
        }
        if (element.tagName === 'title') {
          element.setInnerContent(PAGE_TITLE);
        }
      }
      if (PAGE_DESCRIPTION !== '') {
        if (element.getAttribute('name') === 'description'
          || element.getAttribute('property') === 'og:description'
          || element.getAttribute('name') === 'twitter:description') {
          element.setAttribute('content', PAGE_DESCRIPTION);
        }
      }
      if (element.getAttribute('property') === 'og:url'
        || element.getAttribute('name') === 'twitter:url') {
        element.setAttribute('content', MY_DOMAIN);
      }
      if (element.getAttribute('name') === 'apple-itunes-app') {
        element.remove();
      }
    }
  }
  
  /*COLIN UPDATED to remove first display: none item so search will show*/
  class HeadRewriter {
    element(element) {
      if (GOOGLE_FONT !== '') {
        element.append(`<link href="https://fonts.googleapis.com/css?family=${GOOGLE_FONT.replace(' ', '+')}:Regular,Bold,Italic&display=swap" rel="stylesheet">
        <style>* { font-family: "${GOOGLE_FONT}" !important; }</style>`, {
          html: true
        });
      }
      element.append(`<style>

      div.notion-topbar > div > div:nth-child(4) { display: none !important; }
      div.notion-topbar > div > div:nth-child(5) { display: none !important; }
      div.notion-topbar > div > div:nth-child(6) { display: none !important; }
      div.notion-topbar-mobile > div:nth-child(3) { display: none !important; }
      div.notion-topbar-mobile > div:nth-child(4) { display: none !important; }
      div.notion-topbar > div > div:nth-child(1n).toggle-mode { display: block !important; }
      div.notion-topbar-mobile > div:nth-child(1n).toggle-mode { display: block !important; }
      </style>`, {
        html: true
      })
    }
  }
  
  class BodyRewriter {
    constructor(SLUG_TO_PAGE) {
      this.SLUG_TO_PAGE = SLUG_TO_PAGE;
    }
    element(element) {
      element.append(`<div style="display:none">Powered by <a href="http://fruitionsite.com">Fruition</a></div>
      <script>
      window.CONFIG.domainBaseUrl = 'https://${MY_DOMAIN}';
      const SLUG_TO_PAGE = ${JSON.stringify(this.SLUG_TO_PAGE)};
      const PAGE_TO_SLUG = {};
      const slugs = [];
      const pages = [];
      const el = document.createElement('div');
      let redirected = false;
      Object.keys(SLUG_TO_PAGE).forEach(slug => {
        const page = SLUG_TO_PAGE[slug];
        slugs.push(slug);
        pages.push(page);
        PAGE_TO_SLUG[page] = slug;
      });
      function getPage() {
        return location.pathname.slice(-32);
      }
      function getSlug() {
        return location.pathname.slice(1);
      }
      function updateSlug() {
        const slug = PAGE_TO_SLUG[getPage()];
        if (slug != null) {
          history.replaceState(history.state, '', '/' + slug);
        }
      }
      function onDark() {
        el.innerHTML = '<div title="Change to Light Mode" style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgb(46, 170, 220); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(12px) translateY(0px);"></div></div></div></div>';
        document.body.classList.add('dark');
        __console.environment.ThemeStore.setState({ mode: 'dark' });
      };
      function onLight() {
        el.innerHTML = '<div title="Change to Dark Mode" style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgba(135, 131, 120, 0.3); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(0px) translateY(0px);"></div></div></div></div>';
        document.body.classList.remove('dark');
        __console.environment.ThemeStore.setState({ mode: 'light' });
      }
      function toggle() {
        if (document.body.classList.contains('dark')) {
          onLight();
        } else {
          onDark();
        }
      }
      /*COLIN UPDATED to add return link which gets rid of dark mode*/
      function addDarkModeButton(device) {
        return;
        const nav = device === 'web' ? document.querySelector('.notion-topbar').firstChild : document.querySelector('.notion-topbar-mobile');
        el.className = 'toggle-mode';
        el.addEventListener('click', toggle);
        nav.appendChild(el);
        onLight();
      }
      const observer = new MutationObserver(function() {
        if (redirected) return;
        const nav = document.querySelector('.notion-topbar');
        const mobileNav = document.querySelector('.notion-topbar-mobile');
        if (nav && nav.firstChild && nav.firstChild.firstChild
          || mobileNav && mobileNav.firstChild) {
          redirected = true;
          updateSlug();
          addDarkModeButton(nav ? 'web' : 'mobile');
          const onpopstate = window.onpopstate;
          window.onpopstate = function() {
            if (slugs.includes(getSlug())) {
              const page = SLUG_TO_PAGE[getSlug()];
              if (page) {
                history.replaceState(history.state, 'bypass', '/' + page);
              }
            }
            onpopstate.apply(this, [].slice.call(arguments));
            updateSlug();
          };
        }
      });
      observer.observe(document.querySelector('#notion-app'), {
        childList: true,
        subtree: true,
      });
      const replaceState = window.history.replaceState;
      window.history.replaceState = function(state) {
        if (arguments[1] !== 'bypass' && slugs.includes(getSlug())) return;
        return replaceState.apply(window.history, arguments);
      };
      const pushState = window.history.pushState;
      window.history.pushState = function(state) {
        const dest = new URL(location.protocol + location.host + arguments[2]);
        const id = dest.pathname.slice(-32);
        if (pages.includes(id)) {
          arguments[2] = '/' + PAGE_TO_SLUG[id];
        }
        return pushState.apply(window.history, arguments);
      };
      const open = window.XMLHttpRequest.prototype.open;
      window.XMLHttpRequest.prototype.open = function() {
        arguments[1] = arguments[1].replace('${MY_DOMAIN}', 'www.notion.so');
        return open.apply(this, [].slice.call(arguments));
      };
    </script>${CUSTOM_SCRIPT}`, {
        html: true
      });
    }
  }
  
  async function appendJavascript(res, SLUG_TO_PAGE) {
    return new HTMLRewriter()
      .on('title', new MetaRewriter())
      .on('meta', new MetaRewriter())
      .on('head', new HeadRewriter())
      .on('body', new BodyRewriter(SLUG_TO_PAGE))
      .transform(res);
  }
