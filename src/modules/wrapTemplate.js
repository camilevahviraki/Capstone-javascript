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
<footer>
<hr>
<p>Created by <a href="https://github.com/benshidanny11">@Daniel<a/> & <a href="https://github.com/camilevahviraki">Camile<a/></p>
</footer>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="moviename"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       <img id="imgmoviedetails"/>
       <div class="mv-details-container">
        <div id="mv-description"></div>
       </div>
      </div>
    </div>
  </div>
</div>
`;
};

export default wrapTemplate;