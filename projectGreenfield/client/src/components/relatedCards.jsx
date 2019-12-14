import React from 'react';
import StarRatings from '../../../react-star-ratings';

const RelatedCards = (props) => {
    return (
        <div className="row">
            <div className="col-sm-4">
                <div className="card" style={{ width: 14 + 'rem', height: 31 + 'rem' }}>
                    <a href="#" className="stretched-link" style={{ position: 'absolute', width: 13 + 'rem', height: 27 + 'rem', marginTop: 22 + '%' }} onClick={props.handleRelatedCard.bind(this, props)} />
                    {(props.info.pic === null)
                        ? <img src='../../images/back4.png' className="card-img-top" style={{ height: 17 + 'rem' }}></img>
                        : <img src={props.info.pic} className="card-img-top" style={{ height: 17 + 'rem' }}></img>}
                    <button className="btn btn-floating" type="button" style={{ position: 'absolute', top: .312 + 'rem', right: .312 + 'rem' }} onClick={props.modalClick.bind(this, props)}><b>&#9734;</b></button>
                    <div className="card-body flex-fill">
                        <p className="card-subtitle mb-2 text-muted border-bottom text-right"><small><em>{props.info.cat}</em></small></p>
                        <p className="card-text text-left"><b>{props.info.name}</b></p>
                        {props.info.salePrice > 0 &&
                            <div>
                                <p className="card-text text-left text-danger"><small>${props.info.salePrice}</small></p>
                                <p className="card-text text-left"><small><s>${props.info.price}</s></small></p>
                            </div>
                        }
                        {props.info.salePrice <= 0 &&
                            <p className="card-text text-left"><small>${props.info.price}</small></p>
                        }
                        {props.info.rating > 0 &&
                            <StarRatings starDimension={'15px'} starSpacing={'10px'} starRatedColor={'rgb(189, 153, 57)'} numberOfStars={5} rating={props.info.rating} />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RelatedCards;