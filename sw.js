/**
 * ⚡ Arpit | sw.js — Ethical Hacking MiniBook Service Worker (v1)
 * Offline Precaching & Instant Offline Access
 */

const CACHE_NAME = 'eh-minibook-v1';
const ASSETS = [
  './',
  './index.html',
  './quick-learn.html',
  './last-minute.html',
  './activities.html',
  './progress.html',
  './mcq-test.html',
  './exams/mcq-test.html',
  './chapters/ch01-fundamentals-ethics.html',
  './chapters/ch02-network-system-security.html',
  './chapters/ch03-web-application-security.html',
  './chapters/ch04-advanced-cybersecurity.html',
  './chapters/ch05-practical-lab-workbook.html',
  './assets/js/quiz-data.js',
  './assets/css/main.css',
  './assets/css/components.css',
  './assets/css/animations.css',
  './assets/css/timer.css',
  './assets/css/chapters.css',
  './assets/js/state.js',
  './assets/js/core.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return Promise.allSettled(
        ASSETS.map(url => cache.add(url).catch(err => console.warn('SW cache miss:', url, err)))
      );
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    fetch(event.request)
      .then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => caches.match(event.request).then(cached => cached || caches.match('./index.html')))
  );
});
