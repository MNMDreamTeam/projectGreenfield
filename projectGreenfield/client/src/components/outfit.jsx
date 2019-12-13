/*
   TODO: Clean this up a bit. Load from localStorage and maybe get rid of state. Or maybe leave it?
*/

import React from 'react';
import OutfitCard from './outfitCard.jsx';
import Alert from './alert.jsx';

class Outfit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            outfitList: []
        }
        this.addToOutfit = this.addToOutfit.bind(this);
        this.removeFromOutfit = this.removeFromOutfit.bind(this);
    }

    componentDidMount() {
        let outfit = Object.values(localStorage).map(JSON.parse); // sick!!!
        this.setState({
            outfitList: [...outfit]
        })
    }

    addToOutfit(e) {
        if (!this.state.outfitList.find(({ styleId }) => styleId === this.props.currentStyle.style_id)) {

            let product = fetch(`http://3.134.102.30/products/${this.props.product}`).then(res => res.json());
            let cardInfo = {};

            Promise.all([product])
                .then((data) => {
                    cardInfo.styleId = this.props.currentStyle.style_id;
                    cardInfo.name = data[0].name;
                    cardInfo.cat = data[0].category;
                    cardInfo.styleName = this.props.currentStyle.name;
                    cardInfo.sale_price = this.props.currentStyle.sale_price;
                    cardInfo.original_price = this.props.currentStyle.original_price;
                    cardInfo.pic = this.props.currentStyle.photos[0].url;
                })
                .then(() => {
                    localStorage.setItem(JSON.stringify(cardInfo.styleId), JSON.stringify(cardInfo));
                    this.componentDidMount();
                })
        } else {
            // notify the user someother way than this alert garbage
            alert('All the other kids')
        }
    }

    removeFromOutfit(e) {
        localStorage.removeItem(e.info.styleId);
        this.setState({
            outfitList: this.state.outfitList.filter(el => {
                return el.styleId !== e.info.styleId;
            })
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h4><em><u>Your Outfit(s):</u></em></h4>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="card-group d-flex flex-nowrap">
                                <div className="card text-center" style={{ width: 14 + 'rem', height: 31 + 'rem' }}>
                                    <div className="card-body"></div>
                                    <div className="card-body text-dark">
                                        <button className="btn btn-floating" type="button" onClick={this.addToOutfit}><h1>+</h1></button>
                                        <h5 className="card-title text-center">Add to Your Outfit</h5>
                                    </div>
                                </div>

                                <div className="card-group d-flex flex-nowrap overflow-auto">
                                    {(this.state.outfitList.length)
                                        ? this.state.outfitList.map((el, i) => {
                                            return <OutfitCard info={el} key={i} removeFromOutfit={this.removeFromOutfit} />
                                        })
                                        : <div></div>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Outfit;