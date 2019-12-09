import React from 'react';

class ExpandedCarousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            allPics: this.props.stylepics,
            curPicIndex: this.props.curPicIndex
        }
       
    }

    renderIndicators(){
        var indicators = [];
        for (var i=1; i<this.state.allPics.length; i++){
            indicators.push(<li data-target="#carouselExampleIndicators" data-slide-to={i}></li>);
        }
        return indicators;
    }
   
    renderLoop(){
        var innerPics = [];
        for (var i=0; i<this.state.allPics.length; i++){
            if (i !== this.state.curPicIndex){
                innerPics.push(<div  id="expanded"class="carousel-item">
            <img  class="d-block w-100" src={this.state.allPics[i]}></img>
          </div>);
            }
        }
        return innerPics;
    }

    render(){
        return (
<div>
<div id="carouselExampleIndicators" class="carousel slide" data-interval="false" data-ride="carousel">
<ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    {this.renderIndicators()}
  </ol>
  <div  class="carousel-inner" >
    <div  id="expanded" class="carousel-item active">
      <img   class="d-block w-100" src={this.state.allPics[this.state.curPicIndex]}></img>
    </div>
    {this.renderLoop()}
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
</div>
        )
    }
}

export default ExpandedCarousel;