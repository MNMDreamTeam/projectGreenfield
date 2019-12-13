import React from 'react';
import ReactDOM from 'react-dom';

class CharacteristicSlides extends React.Component {
    constructor(props) {
        super(props);
    }

    getCharacteristicMeanings(array) {
        let meaningsArr = [];

        if (array[0] === ('Size')){
            meaningsArr.push('Too small', 'Too large');
            
        }
        if (array.includes('Width')){
            meaningsArr.push('Too small', 'Too large');
            
        }
        if (array.includes('Length')){
            meaningsArr.push('Too small', 'Too large');
            
        }
        if (array.includes('Fit')){
            meaningsArr.push('Too small', 'Too large');
            
        }
        if (array.includes('Comfort')){
            meaningsArr.push('Poor', 'Perfect');
            
        }
        if (array[0] === ('Quality')){
            meaningsArr.push('Poor', 'Perfect');
            
        }
        return meaningsArr;
    }

    render() {
        return (
            <div>
                {this.props.characteristics.map(character => {
                    return (<div>
                        <small class='characteristics'>{Object.keys(character)}</small>
                        <br></br>
                        <small><small>{this.getCharacteristicMeanings(Object.keys(character))[0]} &nbsp;</small></small><input class='slider' type="range" min='0' max='5' value={Object.values(character)} data-slider-enabled="false" step='0.1'></input><small><small>&nbsp; {this.getCharacteristicMeanings(Object.keys(character))[1]}</small></small>
                        <br></br>
                    </div>)
                })} 
            </div>
        )
    }
}

export default CharacteristicSlides;