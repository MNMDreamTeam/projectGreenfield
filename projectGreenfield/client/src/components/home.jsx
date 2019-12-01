import React from 'react';
import VerticalCarousel from './VerticalCarousel.jsx';
class Home extends React.Component {
    constructor(props){
        super(props);
    }


render(){
    return (
        <div>
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
                </div> 
            </div>
        </div>
    )
}
}

export default Home;