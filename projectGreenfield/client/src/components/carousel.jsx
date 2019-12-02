import React from 'react';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            picsLeft: ["./images/boots.jpg", "./images/shorts.jpg", "./images/jacket.jpg"],
            picsRight: ["./images/hat.jpg", "./images/jeans.jpg", "./images/shirt.jpg"],
            middle: "./images/dress.jpg",
            allPics: ["./images/boots.jpg", "./images/shorts.jpg", "./images/jacket.jpg", "./images/dress.jpg", "./images/hat.jpg", "./images/jeans.jpg", "./images/shirt.jpg"]
        }
        this.rightShift = this.rightShift.bind(this);
        this.leftShift = this.leftShift.bind(this);
    }

    

    rightShift(){
        var left = this.state.picsLeft;
        var right = this.state.picsRight;
        var mid = right.shift();
        left.push(this.state.middle);
        right.push(left.shift());
        this.setState({
            picsLeft: left,
            picsRight: right,
            middle: mid
        })
    }

    leftShift(){
        var left = this.state.picsLeft;
        var right = this.state.picsRight;
        var mid = left.pop();
        left.unshift(right.pop());
        right.unshift(this.state.middle);
        this.setState({
            picsLeft: left,
            picsRight: right,
            middle: mid
        })
    }


    render(){
        return (
<div class="Row">
{this.state.picsLeft.map(item => (
        <div class="Col">
            <img class="rightSide" src={item}></img>
        </div>
))}
<div id="carousel" class="Col"> 
<div id="carouselExampleIndicators" class="carousel slide" data-interval="false" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item">
      <img class="d-block w-100" src={this.state.allPics[0]}></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={this.state.allPics[1]}></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={this.state.allPics[2]}></img>
    </div>
    <div class="carousel-item active">
      <img class="d-block w-100" src={this.state.allPics[3]}></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={this.state.allPics[4]}></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={this.state.allPics[5]}></img>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={this.state.allPics[6]}></img>
    </div>

  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev" onClick={this.leftShift}>
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" onClick={this.rightShift}>
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div> 
{this.state.picsRight.map(item => (
        <div class="Col">
            <img class="rightSide" src={item}></img>
        </div>
))}
</div>
        )
    }
}

export default Carousel;