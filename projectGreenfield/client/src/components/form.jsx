import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product: 'Current Product'
        };
    }
    
    render() {
        return (
            <form className="needs-validation" novalidate>
                <div className='col-md-5'>
                    <h2 for='reviews'>Write Your Review</h2>
                    <h6 for='reviews'>About the {this.state.product}</h6>
                    <div className='form-check' required>
                        <input className='form-check-input' type="radio" id="one star" name="drone" value="one star"></input>
                        <label className='form-check-label' for="one star">
                            1 Star Review - "Poor"
                        </label>
                        <br></br>
                        <input className='form-check-input' type="radio" id="two star" name="drone" value="two star"></input>
                        <label className='form-check-label' for="two star">
                            2 Star Review - "Fair"
                        </label>
                        <br></br>
                        <input className='form-check-input' type="radio" id="three star" name="drone" value="three star"></input>
                        <label className='form-check-label' for="three star">
                            3 Star Review - "Average"
                        </label>
                        <br></br>
                        <input className='form-check-input' type="radio" id="four star" name="drone" value="four star"></input>
                        <label className='form-check-label' for="four star">
                            4 Star Review - "Good"
                        </label>
                        <br></br>
                        <input className='form-check-input' type="radio" id="five star" name="drone" value="five star"></input>
                        <label className='form-check-label' for="five star">
                            5 Star Review - "Great"
                        </label>
                    </div>
                    <br></br>
                    <div className='form check form-check-inline' required>
                        <label for='do you recommend'>Do you recommend this product? </label>
                        <input className='form-check-input' type='radio' name='yes' id='inline radio yes' value='yes'></input>
                        <label className='form-check-label' for='yes'>yes</label>
                        <input className='form-check-input' type='radio' name='yes' id='inline radio no' value='no'></input>
                        <label className='form-check-label' for='no'>no</label>
                    </div>
                    <br></br>
                    <h5 for='characteristics'>{this.state.product}</h5>
                    <label for='size'>Size</label>
                    <div className='form check form-check-inline' required>
                        <input className='form-check-input' type='radio' name='1' id='inline radio characteristics' value='1'></input>
                        <label className='form-check-label' for='1'>1: A size too small</label>
                        <input className='form-check-input' type='radio' name='2' id='inline radio characteristics' value='2'></input>
                        <label className='form-check-label' for='2'>2: 1/2 a size too small</label>
                        <input className='form-check-input' type='radio' name='3' id='inline radio characteristics' value='3'></input>
                        <label className='form-check-label' for='3'>3: Perfect</label>
                        <input className='form-check-input' type='radio' name='4' id='inline radio characteristics' value='4'></input>
                        <label className='form-check-label' for='4'>4: 1/2 a size too big</label>
                        <input className='form-check-input' type='radio' name='5' id='inline radio characteristics' value='5'></input>
                        <label className='form-check-label' for='5'>5: A size too wide</label>
                    </div>
                    <br></br>
                    <label for='width'>Width</label>
                    <div className='form check form-check-inline' required>
                        <input className='form-check-input' type='radio' name='1' id='inline radio characteristics' value='1'></input>
                        <label className='form-check-label' for='1'>1: Too narrow</label>
                        <input className='form-check-input' type='radio' name='2' id='inline radio characteristics' value='2'></input>
                        <label className='form-check-label' for='2'>2: Slightly narrow</label>
                        <input className='form-check-input' type='radio' name='3' id='inline radio characteristics' value='3'></input>
                        <label className='form-check-label' for='3'>3: Perfect</label>
                        <input className='form-check-input' type='radio' name='4' id='inline radio characteristics' value='4'></input>
                        <label className='form-check-label' for='4'>4: Slightly wide</label>
                        <input className='form-check-input' type='radio' name='5' id='inline radio characteristics' value='5'></input>
                        <label className='form-check-label' for='5'>5: Too wide</label>
                    </div>
                    <br></br>
                    <label for='comfort'>Comfort</label>
                    <div className='form check form-check-inline' required>
                        <input className='form-check-input' type='radio' name='1' id='inline radio characteristics' value='1'></input>
                        <label className='form-check-label' for='1'>1: Uncomfortable</label>
                        <input className='form-check-input' type='radio' name='2' id='inline radio characteristics' value='2'></input>
                        <label className='form-check-label' for='2'>2: Slightly uncomfortable</label>
                        <input className='form-check-input' type='radio' name='3' id='inline radio characteristics' value='3'></input>
                        <label className='form-check-label' for='3'>3: Ok</label>
                        <input className='form-check-input' type='radio' name='4' id='inline radio characteristics' value='4'></input>
                        <label className='form-check-label' for='4'>4: Comfortable</label>
                        <input className='form-check-input' type='radio' name='5' id='inline radio characteristics' value='5'></input>
                        <label className='form-check-label' for='5'>5: Perfect</label>
                    </div>
                    <br></br>
                    <label for='quality'>Quality</label>
                    <div className='form check form-check-inline' required>
                        <input className='form-check-input' type='radio' name='1' id='inline radio characteristics' value='1'></input>
                        <label className='form-check-label' for='1'>1: Poor</label>
                        <input className='form-check-input' type='radio' name='2' id='inline radio characteristics' value='2'></input>
                        <label className='form-check-label' for='2'>2: Below average</label>
                        <input className='form-check-input' type='radio' name='3' id='inline radio characteristics' value='3'></input>
                        <label className='form-check-label' for='3'>3: What I expected</label>
                        <input className='form-check-input' type='radio' name='4' id='inline radio characteristics' value='4'></input>
                        <label className='form-check-label' for='4'>4: Pretty great</label>
                        <input className='form-check-input' type='radio' name='5' id='inline radio characteristics' value='5'></input>
                        <label className='form-check-label' for='5'>5: Perfect</label>
                    </div>
                    <br></br>
                    <label for='length'>Length</label>
                    <div className='form check form-check-inline' required>
                        <input className='form-check-input' type='radio' name='1' id='inline radio characteristics' value='1'></input>
                        <label className='form-check-label' for='1'>1: Runs short</label>
                        <input className='form-check-input' type='radio' name='2' id='inline radio characteristics' value='2'></input>
                        <label className='form-check-label' for='2'>2: Runs slightly short</label>
                        <input className='form-check-input' type='radio' name='3' id='inline radio characteristics' value='3'></input>
                        <label className='form-check-label' for='3'>3: Perfect</label>
                        <input className='form-check-input' type='radio' name='4' id='inline radio characteristics' value='4'></input>
                        <label className='form-check-label' for='4'>4: Runs slightly long</label>
                        <input className='form-check-input' type='radio' name='5' id='inline radio characteristics' value='5'></input>
                        <label className='form-check-label' for='5'>5: Runs long</label>
                    </div>
                    <br></br>
                    <label for='fit'>Fit</label>
                    <div className='form check form-check-inline' required>
                        <input className='form-check-input' type='radio' name='1' id='inline radio characteristics' value='1'></input>
                        <label className='form-check-label' for='1'>1: Runs tight</label>
                        <input className='form-check-input' type='radio' name='1' id='inline radio characteristics' value='2'></input>
                        <label className='form-check-label' for='2'>2: Runs slightly tight</label>
                        <input className='form-check-input' type='radio' name='1' id='inline radio characteristics' value='3'></input>
                        <label className='form-check-label' for='3'>3: Perfect</label>
                        <input className='form-check-input' type='radio' name='4' id='inline radio characteristics' value='4'></input>
                        <label className='form-check-label' for='4'>4: Runs slightly long</label>
                        <input className='form-check-input' type='radio' name='5' id='inline radio characteristics' value='5'></input>
                        <label className='form-check-label' for='5'>5: Runs long</label>
                    </div>
                    <br></br>
                    <br></br>
                    <label for='summary'>Review Summary</label>
                    <textarea className='form-control rounded-0' id='reviewSummary' rows='2' maxLength='60' placeholder='Example: Best purchase ever!'></textarea>
                    <br></br>
                    <label for='summary'>Review</label>
                    <textarea className='form-control rounded-0' id='review' rows='10' maxLength='1000' minLength='50' placeholder='Why did you like the product or not?' required></textarea>
                    <br></br>
                    
                </div>
            </form>
        )
    }
}

export default Form;