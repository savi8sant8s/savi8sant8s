const wallpaper = [
    './images/wallpaper.jpg',
    './images/wallpaper-2.jpg',
];
let currentWallpaperIndex = 0;

const apps = [
   {
       name: 'Quadro Tático de Futsal',
       src: './images/quadro-tatico-futsal.webp',
       action: () => window.open('https://play.google.com/store/apps/details?id=com.prancheta.quadrotaticodefutsal', '_blank')
   },
   {
       name: 'Quadro Tático de Esportes',
       src: './images/quadro-tatico-esportes.webp',
       action: () => window.open('https://play.google.com/store/apps/details?id=com.prancheta.quadrotaticodeesportes', '_blank')
   },
   {
       name: 'Tabela de Futebol',
       src: './images/tabela-futebol-app.webp',
       action: () => window.open('https://play.google.com/store/apps/details?id=com.prancheta.tabeladefutebol', '_blank')
   },
   {
       name: 'Finança Fácil',
       src: './images/financa-facil.webp',
       action: () => window.open('https://play.google.com/store/apps/details?id=com.prancheta.financafacil', '_blank')
   },
   {
       name: 'Tabela de Futebol',
       src: './images/tabela-futebol.png',
       action: () => window.open('https://soccer-table.vercel.app', '_blank')
   },
   {
       name: 'ESW Livros',
       src: './images/esw-livros.png',
       action: () => window.open('https://eswlivros.vercel.app', '_blank')
   },
   {
       name: 'Mapa do Brasil Pontilhado',
       src: './images/mapa-brasil-pontilhado.png',
       action: () => window.open('https://savi8sant8s.github.io/mapa-brasil-pontilhado/', '_blank')
   },
   {
       src: './images/bbt.png',
       name: 'Bingo Bongo Testing',
       action: () => window.open('https://bbtesting.app', '_blank')
   },
   {
       name: 'Linkedin',
       src: './images/linkedin.png',
       action: () => window.open('https://www.linkedin.com/in/savi8sant8s/', '_blank')
   },
   {
       name: 'Github',
       src: './images/github.png',
       action: () => window.open('https://www.github.com/savi8sant8s', '_blank')
   },
   {
       name: 'Rotacionar',
       src: './images/rotate.svg',
       action: () => { 
           const phoneIsRotated = document.querySelector('.phone').style.transform === 'rotate(-90deg)';
           const apps = document.querySelectorAll('.app');
           if (phoneIsRotated) {
               document.querySelector('.phone').style.transform = 'rotate(0deg)';
               for (const app of apps) {
                   app.style.transform = 'rotate(0deg)';
               }
               return;
           }
           const phoneElement = document.querySelector('.phone');
           phoneElement.style.transform = 'rotate(-90deg)';
           for (const app of apps) {
               app.style.transform = 'rotate(90deg)';
           }
       },
   },
    {
       name: 'Wallpaper',
       src: './images/wallpaper.svg',
       action: () => { 
           const phoneElement = document.querySelector('.phone');
           currentWallpaperIndex = currentWallpaperIndex === wallpaper.length - 1 ? 0 : currentWallpaperIndex + 1;
           phoneElement.style.backgroundImage = `url(${wallpaper[currentWallpaperIndex]})`;
       },
   },
]
const screenElement = document.querySelector('.screen');

for (const app of apps) {
   const divElement = document.createElement('div');
   divElement.className = 'app-container';
   
   const appElement = document.createElement('img');
   appElement.className = 'app';
   appElement.src = app.src;
   appElement.alt = app.name;

   appElement.addEventListener('click', app.action);
   
   divElement.appendChild(appElement);

   const nameElement = document.createElement('span');
   nameElement.innerText = app.name.length > 10 ? app.name.substring(0, 10) + '...' : app.name;
   nameElement.className = 'app-name';
   divElement.appendChild(nameElement);

   screenElement.appendChild(divElement);
}

function openProject(){
   window.open('https://www.github.com/savi8sant8s/savi8sant8s', '_blank')
}