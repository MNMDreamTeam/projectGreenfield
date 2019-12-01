import React from 'react';
import VerticalCarousel from './VerticalCarousel.jsx';
class Home extends React.Component {
    constructor(props){
        super(props);
    }


render(){
    return (
        <div>
            <div class="logoBar"></div>
            
            <div class="Row">
                <div id="Col" class="showcase">
                    <VerticalCarousel/>
                </div> 
                <div id="Col" class="style">
                <p>***** Read all reviews</p>
                <p>CATEGORY</p>
                <h2>Expanded Product Name</h2>
                <p>$49.00</p>
                <p><b>STYLE > </b>SELECTED STYLE</p>
                    <div class="circleRow">
                        <div class="circleCol"></div>
                        <div class="circleCol"></div>                       
                        <div class="circleCol"></div>
                        <div class="circleCol"></div>                    
                    </div>
                    <div class="circleRow">
                        <div class="circleCol"></div>
                        <div class="circleCol"></div>                       
                        <div class="circleCol"></div>
                        <div class="circleCol"></div> 
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