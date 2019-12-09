import React from 'react';
import StarRatings from '../../../react-star-ratings';

const RelatedCards = (props) => {
    return (
        <div className="row">
            <div className="col-sm-4">
                <div className="card" style={{ width: 14 + 'rem', height: 31 + 'rem' }}>
                    <img src={props.info.pic} className="card-img-top" style={{ height: 17 + 'rem' }}></img>
                    <div className="card-body flex-fill">
                        <p className="card-subtitle mb-2 text-muted border-bottom text-right"><small><em>{props.info.cat}</em></small></p>
                        <p className="card-text text-left"><b>{props.info.name}</b></p>
                        {props.info.salePrice > 0 &&
                            <p className="card-text text-left text-danger"><small>{props.info.salePrice}</small></p>
                        }
                        {props.info.salePrice <= 0 &&
                            <p className="card-text text-left"><small>${props.info.price}</small></p>
                        }
                        <StarRatings starDimension={'15px'} starSpacing={'10px'} starRatedColor={'rgb(189, 153, 57)'} numberOfStars={5} rating={props.info.rating} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedCards;