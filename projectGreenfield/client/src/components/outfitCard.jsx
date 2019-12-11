import React from 'react';
import StarRatings from '../../../react-star-ratings';

const OutfitCard = (props) => {
  return (
    <div className="row">
      <div className="col-sm-4">
        <div className="card" style={{ width: 14 + 'rem', height: 31 + 'rem' }}>
          <img src={props.info.pic} className="card-img-top" style={{ height: 17 + 'rem' }}></img>
          <button className="btn btn-floating" type="button" style={{ position: 'absolute', top: .312 + 'rem', right: .312 + 'rem' }} onClick={props.removeFromOutfit.bind(this, props)}><b>&#10754;</b></button>
          <div className="card-body flex-fill">
            <p className="card-subtitle mb-2 text-muted border-bottom text-right"><small><em>{props.info.cat}</em></small></p>
            <p className="card-text text-left"><b>{props.info.name}</b> - <small><em>{props.info.styleName}</em></small></p>
            {props.info.sale_price > 0 &&
              <div>
                <p className="card-text text-left text-danger"><small>${props.info.sale_price}</small></p>
                <p className="card-text text-left"><small><s>${props.info.original_price}</s></small></p>
              </div>
            }
            {props.info.sale_price <= 0 &&
              <p className="card-text text-left"><small>${props.info.original_price}</small></p>
            }
            <StarRatings starDimension={'15px'} starSpacing={'10px'} starRatedColor={'rgb(189, 153, 57)'} numberOfStars={5} rating={props.info.rating} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OutfitCard;