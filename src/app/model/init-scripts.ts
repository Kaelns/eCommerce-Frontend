// * Define global if it's undefined
window.global ||= window;

//  * React-Scan
if (import.meta.env.DEV) {
  const script = document.createElement('script');
  script.src = 'https://unpkg.com/react-scan/dist/auto.global.js';
  document.head.appendChild(script);
}
