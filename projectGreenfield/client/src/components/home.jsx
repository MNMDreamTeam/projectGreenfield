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
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div class="dropdown2">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">1</button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div><br></br>
                    <div class="dropdown3">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ADD TO BAG</button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                    <div class="dropdown4">
                        <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Star</button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
}

export default Home;