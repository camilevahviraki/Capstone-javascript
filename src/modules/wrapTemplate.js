import logo from '../icons/kindpng_1495172.png';

const wrapTemplate = () => {
  document.body.innerHTML = `
<header>
<nav>
    <img src="${logo}" alt="" id="logo">
    <div class="buttonsNav">
      <button id="movies-page">Movies</button>
      <button id="serie-page">Series</button>
      <button id="type-page">Genres</button> 
    </div>    
</nav>
</header>
<main id="main">
</main>
`;
};

export default wrapTemplate;
