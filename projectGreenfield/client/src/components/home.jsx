import React from 'react';
import VerticalCarousel from './VerticalCarousel.jsx';
import $ from 'jquery';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            currentProduct: {},
            currentStyle: {},
            curStyleIndex: 0,
            styles: [],
            stylePics: [],
            loaded: false
        }
        this.changeStyle = this.changeStyle.bind(this);
        this.change = this.change.bind(this);
    }


change(e,ind){
    console.log('event target', e.target.src);
    var searchUrl = e.target.src;
    console.log('styles', this.state.styles);
    var style = '';
    for (var i in this.state.styles){
        for (var j in this.state.styles[i].photos){ 
            if (this.state.styles[i].photos[j].url === searchUrl){
                console.log('match', this.state.styles[i].photos[j].url);
                style = this.state.styles[i];
                this.setState({curStyleIndex: i});
                console.log('style index', this.state.curStyleIndex);
                console.log('new style in state', style);
                this.setState({currentStyle: style});
            }
        }
    }
    console.log(this.state.curStyleIndex);
    var styleNumber = ind;
    var ID = this.state.currentProduct.id;
    $.get(`http://3.134.102.30/products/${ID}/styles`)
    .then((styleObj) => {
        this.setState({styles: styleObj.results});
       // this.setState({currentStyle:});
        console.log(this.state.currentStyle);
    })
    .then(() => {
        var pics = [];
        for (var i=0; i<this.state.styles.length; i++){
            var style = this.state.styles[i];
            var stylepics = [];
            for (var j=0; j<style.photos.length; j++){ 
                stylepics.push(style.photos[j].url);
            }
            pics.push(stylepics);
        }
        this.setState({stylePics: pics});
    })
    .then(() => {
        this.setState({loaded: true});
    })
}
   
changeStyle(e,callback){
    this.setState({loaded: false});
    var indx = this.state.curStyleIndex;
    indx = indx + 1;
    this.setState({curStyleIndex: indx});
    callback(e,indx);
}

componentDidMount(){
    $.get('http://3.134.102.30/products/list?count=11')
    .then(items => {
        this.setState({products: items});
    })
    .then(() => {
        this.setState({currentProduct: this.state.products[0]});
    })
    .then(() => {
        var ID = this.state.currentProduct.id;
        $.get(`http://3.134.102.30/products/${ID}/styles`)
        .then((styleObj) => {
            this.setState({styles: styleObj.results});
            this.setState({currentStyle: styleObj.results[0]});
        })
        .then(() => {
            var pics = [];
            for (var i=0; i<this.state.styles.length; i++){
                var style = this.state.styles[i];
                var stylepics = [];
                for (var j=0; j<style.photos.length; j++){ 
                    stylepics.push(style.photos[j].url);
                }
                pics.push(stylepics);
            }
            this.setState({stylePics: pics});
        })
        .then(() => {
            console.log(this.state.stylePics);
            this.setState({loaded: true});
        })
    })
}

render(){

    var carousel = <div></div>
    var category = <p></p>
    var name =  <h2></h2>
    var price = <p></p>
    var styleName = ""
    var description = ""
    var slogan = ""
    var circles = <div></div>
    if (this.state.loaded === true){
        carousel = <VerticalCarousel stylepics={this.state.stylePics[this.state.curStyleIndex]}/>
        category = <p>{this.state.currentProduct.category}</p>
        name =  <h2>{this.state.currentProduct.name}</h2>
        price = <p>${this.state.currentStyle.original_price}</p>
        styleName = this.state.currentStyle.name
        description = this.state.currentProduct.description
        slogan = this.state.currentProduct.slogan
        circles = [];
        var count = 0;
        {this.state.stylePics[this.state.curStyleIndex].map(item => {
           circles.push(<div class="circleCol" onClick={(e) => {this.changeStyle(e, this.change)}}>
               <img id="thumbnail" src={this.state.stylePics[count][0]}></img>
           </div>)
           count++;
        })}
    } 

    return (
        <div>
            <div class="logoBar">
            <img class="logoPic" src="./images/logo.jpg"></img>
            </div>
            
            <div class="Row">
                <div id="Col" class="showcase">
                    {carousel}
                    <h5 id="slogan">{slogan}</h5>
                    <p id="description">{description}</p>  
                </div> 
                <div id="Col" class="style">
                <p>***** Read all reviews</p>
                {category}
                {name}
                {price}
                    <p><b>STYLE > </b>{styleName}</p>
                    <div class="circleRow">
                        {circles} 
                    </div> 
                    <div class="dropdown1">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">SELECT SIZE</button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Small</a>
                            <a class="dropdown-item" href="#">Medium</a>
                            <a class="dropdown-item" href="#">Large</a>
                            <a class="dropdown-item" href="#">XL</a>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">1</button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">1</a>
                            <a class="dropdown-item" href="#">2</a>
                            <a class="dropdown-item" href="#">3</a>
                            <a class="dropdown-item" href="#">4</a>
                            <a class="dropdown-item" href="#">5</a>
                            <a class="dropdown-item" href="#">6</a>
                            <a class="dropdown-item" href="#">7</a>
                            <a class="dropdown-item" href="#">8</a>
                            <a class="dropdown-item" href="#">9</a>
                            <a class="dropdown-item" href="#">10</a>
                        </div>
                    </div><br></br>
                    <div class="dropdown3">
                        <button class="btn btn-default" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false">ADD TO BAG +</button>
                    </div>
                    <div class="dropdown4">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Star</button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">*</a>
                            <a class="dropdown-item" href="#">**</a>
                            <a class="dropdown-item" href="#">***</a>
                            <a class="dropdown-item" href="#">****</a>
                            <a class="dropdown-item" href="#">*****</a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
}

export default Home;