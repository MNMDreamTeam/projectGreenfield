import React from 'react';

class VerticalCarousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            picsTop: ["./images/boots.jpg", "./images/shorts.jpg", "./images/jacket.jpg"],
            picsBottom: ["./images/hat.jpg", "./images/jeans.jpg", "./images/shirt.jpg"],
            middle: "./images/dress.jpg",
            allPics: ["./images/boots.jpg", "./images/shorts.jpg", "./images/jacket.jpg", "./images/dress.jpg", "./images/hat.jpg", "./images/jeans.jpg", "./images/shirt.jpg"]
        }
        this.rightShift = this.rightShift.bind(this);
        this.leftShift = this.leftShift.bind(this);
    }

    rightShift(){
        var left = this.state.picsTop;
        var right = this.state.picsBottom;
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
        var left = this.state.picsTop;
        var right = this.state.picsBottom;
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
<div>
{this.state.picsTop.map(item => (
        <div class="Row2">
            <img class="rightSide2" src={item}></img>
        </div>
))}
    <div class="Row2">
            <img class="rightSide2" src={this.state.middle}></img>
    </div>
{this.state.picsBottom.map(item => (
        <div class="Row2">
            <img class="rightSide2" src={item}></img>
        </div>
))}
<div id="carousel2" class="Row2"> 
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

</div>
        )
    }
}

export default VerticalCarousel;