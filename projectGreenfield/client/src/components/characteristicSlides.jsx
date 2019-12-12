import React from 'react';
import ReactDOM from 'react-dom';

class CharacteristicSlides extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    getCharacteristicMeanings(array) {
        
        for (let i = 0; i < array.length; i++){
            let meaningsArr = [];
            if (array[i].hasOwnProperty('size', 'width', 'length', 'fit')){
                meaningsArr.push('Too small', 'Too large');
                return meaningsArr;
            }
            else if (array[i].hasOwnProperty('comfort', 'quality')){
                meaningsArr.push('Poor', 'Perfect');
                return meaningsArr;
            }
        }
    }

    render() {
        return (
            <div>
                {this.props.characteristics.map(character => {
                    // console.log(character);
                    return (<div>
                        <label>{Object.keys(character)}</label>
                        <br></br>
                        <b>{console.log(this.getCharacteristicMeanings(this.props.characteristics))}</b><input class='sliders' type="range" min='0' max='5' value={Object.values(character)} data-slider-enabled="false" step='0.1'></input><b></b>
                    </div>)
                })} 
            </div>
        )
    }
}

export default CharacteristicSlides;