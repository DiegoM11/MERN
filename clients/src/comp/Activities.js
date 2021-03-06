import React from 'react';
import sfamilia from '../img/sfamilia.jpg';
import casagaudi from '../img/casagaudi.jpg';
import mercado from '../img/mercado.jpg'


class Carousel extends React.Component {
    render() {
      return (
<div id="demo" class="carousel slide" data-ride="carousel">
<ul class="carousel-indicators">
  <li data-target="#demo" data-slide-to="0" class="active"></li>
  <li data-target="#demo" data-slide-to="1"></li>
  <li data-target="#demo" data-slide-to="2"></li>
</ul>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img src={sfamilia} alt="sfamilia" width="500" height="300" />
  </div>
  <div class="carousel-item">
    <img src={casagaudi} alt="casagaudi" width="500" height="300" />
  </div>
  <div class="carousel-item">
    <img src={mercado} alt="mercado" width="500" height="300" />
  </div>
</div>
<a class="carousel-control-prev" href="#demo" data-slide="prev">
  <span class="carousel-control-prev-icon"></span>
</a>
<a class="carousel-control-next" href="#demo" data-slide="next">
  <span class="carousel-control-next-icon"></span>
</a>
</div>
      );
    }
  }
  
export default Carousel;