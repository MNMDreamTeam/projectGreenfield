import React from 'react';
import VerticalCarousel from './VerticalCarousel.jsx';
import ExpandedCarousel from './expandedCarousel.jsx';
import Thumbnail from './thumbnails.jsx';
import $ from 'jquery';
class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            products: [],
            currentProduct: {},
            prodId: this.props.prodId,
            currentStyle: {},
            curStyleIndex: 0,
            curSize: 'SELECT SIZE',
            curSizeNum: 1,
            curSizeNumChoice: 1,
            styles: [],
            stylePics: [],
            curPicIndex: 0,
            cart: [],
            cartNum: 0,
            loaded: false,
            expanded: false
        }
        this.changeStyle = this.changeStyle.bind(this);
        this.change = this.change.bind(this);
        this.changeNumber = this.changeNumber.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.expand = this.expand.bind(this);
        this.minimize = this.minimize.bind(this);
        this.forceRender = this.forceRender.bind(this);
    }

forceRender() {
    this.setState({loaded: false});
    this.setState({prodId: this.props.prodId})
    $.get(`http://3.134.102.30/products/${this.props.prodId}`)
    .then(obj => {
        this.setState({currentProduct: obj});
        console.log('object in force render', obj);
    })
    .then(() => {
        var ID = this.state.currentProduct.id;
        $.get(`http://3.134.102.30/products/${ID}/styles`)
        .then((styleObj) => {
            this.setState({styles: styleObj.results});
            this.setState({currentStyle: styleObj.results[0]});
            console.log('object in force render ID:', this.state.currentStyle);
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

addToCart(){
    var itemChosen = {
        productName: this.state.currentProduct.name,
        style: this.state.currentStyle.name,
        size: this.state.curSize,
        number: this.state.curSizeNumChoice
    }
    var cartCount = Number(this.state.cartNum) + Number(itemChosen.number);
    this.setState({cart: itemChosen});
    this.setState({cartNum: cartCount});
    console.log('item added to cart:', itemChosen);
    localStorage.setItem('Items in Cart', cartCount);
}

change(e){
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
    var ID = this.state.prodId;
    $.get(`http://3.134.102.30/products/${ID}/styles`)
    .then((styleObj) => {
        this.setState({styles: styleObj.results});
       // this.setState({currentStyle:});
        console.log(this.state.currentStyle.skus);
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


changeNumber(e){
    console.log(e.target.innerHTML);
    for (var key in this.state.currentStyle.skus){
        if (key === e.target.innerHTML){
            this.setState({curSizeNum : this.state.currentStyle.skus[key]});
            this.setState({curSize : key});
            console.log('current size num in state', this.state.curSizeNum)
        }
    }
}

changeNumberChoice(e){
    this.setState({curSizeNumChoice: e.target.innerHTML});
}

expand(e){
    console.log('event target onclick', e.target.src);
    var ind = 0;
    for (var i=0; i<this.state.stylePics[this.state.curStyleIndex].length; i++){
        console.log('cur style pic from state pics array', this.state.stylePics[i]);
        console.log('pic from source', e.target.src);
        if (this.state.stylePics[this.state.curStyleIndex][i] === e.target.src){
            ind = i;
        }
    }
    console.log('style index:', ind);
    this.setState({curPicIndex: ind});
    console.log('style index in state', this.state.curPicIndex);
    this.setState({expanded: true});
}

minimize(){
    this.setState({expanded: false});
}

changeStyle(e,callback){
    this.setState({loaded: false});
    var indx = this.state.curStyleIndex;
    indx = indx + 1;
    this.setState({curStyleIndex: indx});
    this.setState({curSizeNumChoice: 1});
    this.setState({curSize : 'SELECT SIZE'});
    callback(e);
}

componentDidMount(){

    var num = localStorage.getItem('Items in Cart');
    console.log('number of items in one transaction', num);
    this.setState({cartNum: Number(num)});
    
    $.get('http://3.134.102.30/products/list?count=11')
    .then(items => {
        this.setState({products: items});
    })
    .then(() => {
        this.setState({currentProduct: this.state.products[0]});
    })
    .then(() => {
        var ID = this.state.prodId;
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
    var sale = <div></div>
    var circles = <div></div>
    var numArr = []
    var dropdownArr = []
    var thumbnails = <div></div>
    {console.log('***', this.props.prodId, '***', this.state.prodId)}
    if (this.state.prodId !== this.props.prodId) {
        this.forceRender()
    }
    var cart = <div>
        <img id="cart" src="/Users/maxdorfman/Documents/hrg/projectGreenfield/projectGreenfield/shoppingCart.png"></img>
        <span class="notification-counter">0</span>
        </div>
    if (this.state.loaded === true){
        cart = <div>
        <img id="cart" src="/Users/maxdorfman/Documents/hrg/projectGreenfield/projectGreenfield/shoppingCart.png"></img>
        <span class="notification-counter">{this.state.cartNum}</span>
        </div>
        category = <p>{this.state.currentProduct.category}</p>
        name =  <h2>{this.state.currentProduct.name}</h2>
        price = <p>${this.state.currentStyle.original_price}</p>
        if (this.state.currentStyle.sale_price !== "0"){
            price = <p>${this.state.currentStyle.sale_price}</p>
            sale = <div id="sale" >Sale!</div>
        }
        styleName = this.state.currentStyle.name
        description = this.state.currentProduct.description
        slogan = this.state.currentProduct.slogan
        for (var key in this.state.currentStyle.skus){
            dropdownArr.push(<a class="dropdown-item" href="#" onClick={(e) => {this.changeNumber(e)}}>{key}</a>);
            console.log(key);
        }
        for (var x = 1; x<this.state.curSizeNum+1; x++){
            numArr.push(<a class="dropdown-item" href="#" onClick={(e) => {this.changeNumberChoice(e)}}>{x}</a>);
        }
        circles = [];
        var count = 0;
        {this.state.stylePics[this.state.curStyleIndex].map(item => {
           circles.push(<div class="circleCol" onClick={(e) => {this.changeStyle(e, this.change)}}>
               <img onClick={this.props.userClick} id="thumbnail" class="styles-thumbnail" src={this.state.stylePics[count][0]}></img>
           </div>)
           count++;
        })}
        if (this.state.expanded === true){
            infoUnderImage = <div>
                {category}
                {name}
                {price}
                <p><b>STYLE > </b>{styleName}</p>
                <div class="circleRow">
                    {circles}
                </div>
            </div>
            productInfo = undefined
            carousel = <ExpandedCarousel userClick={this.props.userClick} curPicIndex={this.state.curPicIndex} stylepics={this.state.stylePics[this.state.curStyleIndex]}/>
            close = <button onClick={this.props.userClick} id="closeButton" class="closeExpandedView" onClick={this.minimize}>X</button>
        } else {
        var close = undefined
        var infoUnderImage = <div><h5 id="slogan">{slogan}</h5>
        <p id="description">{description}</p></div>
        var productInfo = <div id="Col" class="style">
        {cart}
        <p>***** Read all reviews</p>
        {category}
        {name}
        {sale}
        {price}
            <p><b>STYLE > </b>{styleName}</p>
            <div class="circleRow">
                {circles}
            </div>
            <div class="dropdown1">
                <button onClick={this.props.userClick} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.curSize}</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                 {dropdownArr}
                </div>
            </div>
            <div class="dropdown2">
                <button  onClick={this.props.userClick} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{this.state.curSizeNumChoice}</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {numArr}
                </div>
            </div><br></br>
            <div class="dropdown3">
                <button onClick={this.props.userClick} class="btn btn-default" type="button" id="dropdownMenuButton" aria-haspopup="true" aria-expanded="false" onClick={this.addToCart}>ADD TO BAG +</button>
            </div>
            <div class="dropdown4">
                <button onClick={this.props.userClick} class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Star</button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">*</a>
                    <a class="dropdown-item" href="#">**</a>
                    <a class="dropdown-item" href="#">***</a>
                    <a class="dropdown-item" href="#">****</a>
                    <a class="dropdown-item" href="#">*****</a>
                </div>
            </div>
        </div>
        thumbnails = <Thumbnail stylepics={this.state.stylePics[this.state.curStyleIndex]}/>
        carousel = <VerticalCarousel userClick={this.props.userClick} curPicIndex={this.state.curPicIndex} expand={this.expand} stylepics={this.state.stylePics[this.state.curStyleIndex]}/>
        }
    }

    return (
        <div>
            <div class="logoBar">
            <img class="logoPic" src="./images/logo.jpg"></img>
            </div>

            <div class="Row">
                <div id="Col" class="showcase">
                    {close}
                    {thumbnails}
                    {carousel}
                    {infoUnderImage}
                </div>
                {productInfo}
            </div>
        </div>
    )
}
}

export default Home;