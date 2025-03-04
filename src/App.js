import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header class="header">
        <div class="container d-flex flex-column align-items-center">
          <img class="header__avatar" src="./images/avatar.png" alt="avatar"></img>
          <h1 class="header__title">Name</h1>
          <hr class="divider--light"></hr>
          <p class="header__slogan">Slogan</p>
        </div>
      </header>

      <article class="image__layout py-3 py-sm-5">
        <div class="container">
          <h1 class="text-center">IMAGES</h1>
          <hr class="divider--dark"></hr>
            <div class="row">
              <div class="image mt-4 col-sm-6 col-lg-3">
                <a href="" class="image__link">
                  <img src="images/img1.jpg" alt="" class="image__style"></img>
                </a>
                <p class="image_title">Place 1</p>
              </div>
              <div class="image mt-4 col-sm-6 col-lg-3">
                <a href="" class="image__link">
                  <img src="images/img2.jpg" alt="" class="image__style"></img>
                </a>
                <p class="image_title">Place 2</p>
              </div>
              <div class="image mt-4 col-sm-6 col-lg-3">
                <a href="" class="image__link">
                  <img src="images/img3.jpg" alt="" class="image__style"></img>
                </a>
                <p class="image_title">Place 3</p>
              </div>
              <div class="image mt-4 col-sm-6 col-lg-3">
                <a href="" class="image__link">
                  <img src="images/img4.jpg" alt="" class="image__style"></img>
                </a>
                <p class="image_title">Place 4</p>
              </div>
              <div class="image mt-4 col-sm-6 col-lg-3">
                <a href="" class="image__link">
                  <img src="images/img5.jpg" alt="" class="image__style"></img>
                </a>
                <p class="image_title">Place 5</p>
              </div>
              <div class="image mt-4 col-sm-6 col-lg-3">
                <a href="" class="image__link">
                  <img src="images/img6.jpg" alt="" class="image__style"></img>
                </a>
                <p class="image_title">Place 6</p>
              </div>
              <div class="image mt-4 col-sm-6 col-lg-3">
                <a href="" class="image__link">
                  <img src="images/img7.jpg" alt="" class="image__style"></img>
                </a>
                <p class="image_title">Place 7</p>
              </div>
              <div class="image mt-4 col-sm-6 col-lg-3">
                <a href="" class="image__link">
                  <img src="images/img8.jpg" alt="" class="image__style"></img>
                </a>
                <p class="image_title">Place 8</p>
              </div>
            </div>
        </div>
      </article>
      <article class="description__layout py-4 py-sm-5">
        <div class="container d-flex flex-column align-items-center">
          <h1>DESCRIPTIONS</h1>
          <hr class="divider--light"></hr>
          <p class="text-justify description__content py-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium laborum
            corrupti ut iure aliquam. Quod, perferendis. Libero tempore iste, animi sint numquam illum quasi laboriosam
            unde pariatur quidem! Suscipit consequatur nihil dolor impedit temporibus ad cum, voluptatum odit ratione
            ullam
            eligendi amet beatae aliquid eaque nesciunt optio nobis ducimus itaque. Voluptatibus aspernatur assumenda
            quod
            quo error consequuntur, vero iusto reprehenderit repellat maiores, sapiente dolores voluptates minima. Alias
            dolore assumenda fuga quae repellat voluptatum quo, saepe exercitationem perspiciatis reiciendis modi
            tempora.
            Recusandae explicabo iusto corporis nam numquam dignissimos, necessitatibus, iure non culpa repellat
            repudiandae temporibus! Saepe excepturi tempore iusto eos sit!</p>
        </div>
      </article>

      <footer class="footer">
        <div class="footer__above py-5">
          <div class="container">
            <div class="row my-3">
              <h5 class="footer__description col-lg-8">
                臺北市和平東路二段134號，國立臺北教育大學 數位科技設計學系
              </h5>
              <ul class="footer__list col-lg-4">
                <li class="footer__item"><a href="" class="footer__link"><i class="fab fa-facebook-f"></i></a></li>
                <li class="footer__item"><a href="" class="footer__link"><i class="fab fa-google-plus-g"></i></a></li>
                <li class="footer__item"><a href="" class="footer__link"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer__below">
          <div class="container">
            <h6>
              &copy; Copyright All rights reserved.
            </h6>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
