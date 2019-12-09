import React from 'react';

class Outfit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            outfit: []
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h4><em><u>Your Outfit(s):</u></em></h4>
                    <div className="card text-center" style={{ width: 14 + 'rem', height: 31 + 'rem' }}>
                        <div className="card-body"></div>
                        <div className="card-body text-dark">
                            <button id="addToOutfit" className="btn btn-floating" type="button"><h1>+</h1></button>
                            <h5 className="card-title text-center">Add to Your Outfit</h5>
                        </div>
                    </div>
                    {/* Carousel and outfitCard stuff here */}
                </div>
            </div>
        )
    }
}

export default Outfit;