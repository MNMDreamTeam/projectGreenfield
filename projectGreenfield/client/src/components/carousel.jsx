import React from 'react';

class Carousel extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
<div> 
<div>hello</div>
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-30" src="https://www.w3schools.com/images/picture.jpg" alt="First slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-30" src="https://www.w3schools.com/images/picture.jpg" alt="Second slide"></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-30" src="https://www.w3schools.com/images/picture.jpg" alt="Third slide"></img>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<div>hello</div>
</div> 
        )
    }
}

export default Carousel;