import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            product: 'Current Product',
            charLeft: 50,
            pictures: []
        };
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        let input = event.target.value;
        if (input.length < 50){
            this.setState({
                charLeft: 50 - input.length
            })
        } else {
            this.setState({
                charLeft: 'Minimum Reached'
            })
        }
    }

    addPicture(event) {
        event.preventDefault();
        let count = this.state.pictures.length;
        let val = document.getElementById('photos').value;
        console.log(val);
        if (count <= 5){
            this.setState({
                pictures: this.state.pictures.concat(val)
            })
            console.log(this.state.pictures);
        }
    }
    
    render() {
        return (
            <form className="needs-validation" noValidate>
                <div className='col-md-8 border border-info rounded'>
                    <h2>Write Your Review</h2>
                    <div className='form-check border border-info rounded' required>
                        <h6 for='reviews'>About the {this.state.product}</h6>
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
                    <div className='form check form-check-inline border border-info rounded' required>
                        <label for='do you recommend'>Do you recommend this product? </label>
                        <input className='form-check-input' type='radio' name='yes' id='inline radio yes' value='yes'></input>
                        <label className='form-check-label' for='yes'>yes</label>
                        <input className='form-check-input' type='radio' name='yes' id='inline radio no' value='no'></input>
                        <label className='form-check-label' for='no'>no</label>
                    </div>
                    <br></br>
                    <br></br>
                    <div className='border border-info rounded'>
                        <h5 for='characteristics'>{this.state.product}</h5>
                        <label for='size'>Size</label>
                        <div className='form check form-check-inline' required>
                            <input className='form-check-input' type='radio' name='size' id='inline radio characteristics' value='1'></input>
                            <label className='form-check-label form-control-sm' for='1'>1: A size too small</label>
                            <input className='form-check-input' type='radio' name='size' id='inline radio characteristics' value='2'></input>
                            <label className='form-check-label form-control-sm' for='2'>2: 1/2 a size too small</label>
                            <input className='form-check-input' type='radio' name='size' id='inline radio characteristics' value='3'></input>
                            <label className='form-check-label form-control-sm' for='3'>3: Perfect</label>
                            <input className='form-check-input' type='radio' name='size' id='inline radio characteristics' value='4'></input>
                            <label className='form-check-label form-control-sm' for='4'>4: 1/2 a size too big</label>
                            <input className='form-check-input' type='radio' name='size' id='inline radio characteristics' value='5'></input>
                            <label className='form-check-label form-control-sm' for='5'>5: A size too wide</label>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                        <label for='width'>Width</label>
                        <br></br>
                        <div className='form check form-check-inline' required>
                            <input className='form-check-input' type='radio' name='width' id='inline radio characteristics' value='1'></input>
                            <label className='form-check-label form-control-sm' for='1' >1: Too narrow</label>
                            <input className='form-check-input' type='radio' name='width' id='inline radio characteristics' value='2'></input>
                            <label className='form-check-label form-control-sm' for='2'>2: Slightly narrow</label>
                            <input className='form-check-input' type='radio' name='width' id='inline radio characteristics' value='3'></input>
                            <label className='form-check-label form-control-sm' for='3'>3: Perfect</label>
                            <input className='form-check-input' type='radio' name='width' id='inline radio characteristics' value='4'></input>
                            <label className='form-check-label form-control-sm' for='4'>4: Slightly wide</label>
                            <input className='form-check-input' type='radio' name='width' id='inline radio characteristics' value='5'></input>
                            <label className='form-check-label form-control-sm' for='5'>5: Too wide</label>
                        </div>
                        <br></br>
                        <br></br>
                        <label for='comfort'>Comfort</label>
                        <div className='form check form-check-inline' required>
                            <input className='form-check-input' type='radio' name='comfort' id='inline radio characteristics' value='1'></input>
                            <label className='form-check-label form-control-sm' for='1'>1: Uncomfortable</label>
                            <input className='form-check-input' type='radio' name='comfort' id='inline radio characteristics' value='2'></input>
                            <label className='form-check-label form-control-sm' for='2'>2: Slightly uncomfortable</label>
                            <input className='form-check-input' type='radio' name='comfort' id='inline radio characteristics' value='3'></input>
                            <label className='form-check-label form-control-sm' for='3'>3: Ok</label>
                            <input className='form-check-input' type='radio' name='comfort' id='inline radio characteristics' value='4'></input>
                            <label className='form-check-label form-control-sm' for='4'>4: Comfortable</label>
                            <input className='form-check-input' type='radio' name='comfort' id='inline radio characteristics' value='5'></input>
                            <label className='form-check-label form-control-sm' for='5'>5: Perfect</label>
                        </div>
                        <br></br>
                        <br></br>
                        <label for='quality'>Quality</label>
                        <br></br>
                        <div className='form check form-check-inline' required>
                            <input className='form-check-input' type='radio' name='quality' id='inline radio characteristics' value='1'></input>
                            <label className='form-check-label form-control-sm' for='1'>1: Poor</label>
                            <input className='form-check-input' type='radio' name='quality' id='inline radio characteristics' value='2'></input>
                            <label className='form-check-label form-control-sm' for='2'>2: Below average</label>
                            <input className='form-check-input' type='radio' name='quality' id='inline radio characteristics' value='3'></input>
                            <label className='form-check-label form-control-sm' for='3'>3: What I expected</label>
                            <input className='form-check-input' type='radio' name='quality' id='inline radio characteristics' value='4'></input>
                            <label className='form-check-label form-control-sm' for='4'>4: Pretty great</label>
                            <input className='form-check-input' type='radio' name='quality' id='inline radio characteristics' value='5'></input>
                            <label className='form-check-label form-control-sm' for='5'>5: Perfect</label>
                        </div>
                        <br></br>
                        <br></br>
                        <label for='length'>Length</label>
                        <div className='form check form-check-inline' required>
                            <input className='form-check-input' type='radio' name='length' id='inline radio characteristics' value='1'></input>
                            <label className='form-check-label form-control-sm' for='1'>1: Runs short</label>
                            <input className='form-check-input' type='radio' name='length' id='inline radio characteristics' value='2'></input>
                            <label className='form-check-label form-control-sm' for='2'>2: Runs slightly short</label>
                            <input className='form-check-input' type='radio' name='length' id='inline radio characteristics' value='3'></input>
                            <label className='form-check-label form-control-sm' for='3'>3: Perfect</label>
                            <input className='form-check-input' type='radio' name='length' id='inline radio characteristics' value='4'></input>
                            <label className='form-check-label form-control-sm' for='4'>4: Runs slightly long</label>
                            <input className='form-check-input' type='radio' name='length' id='inline radio characteristics' value='5'></input>
                            <label className='form-check-label form-control-sm' for='5'>5: Runs long</label>
                        </div>
                        <br></br>
                        <br></br>
                        <label for='fit'>Fit</label>
                        <br></br>
                        <div className='form check form-check-inline' required>
                            <input className='form-check-input' type='radio' name='fit' id='inline radio characteristics' value='1'></input>
                            <label className='form-check-label form-control-sm' for='1'>1: Runs tight</label>
                            <input className='form-check-input' type='radio' name='fit' id='inline radio characteristics' value='2'></input>
                            <label className='form-check-label form-control-sm' for='2'>2: Runs slightly tight</label>
                            <input className='form-check-input' type='radio' name='fit' id='inline radio characteristics' value='3'></input>
                            <label className='form-check-label form-control-sm' for='3'>3: Perfect</label>
                            <input className='form-check-input' type='radio' name='fit' id='inline radio characteristics' value='4'></input>
                            <label className='form-check-label form-control-sm' for='4'>4: Runs slightly long</label>
                            <input className='form-check-input' type='radio' name='fit' id='inline radio characteristics' value='5'></input>
                            <label className='form-check-label form-control-sm' for='5'>5: Runs long</label>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className='border border-info rounded'>
                        <label for='summary'>Review Summary</label>
                        <textarea className='form-control rounded-0' id='reviewSummary' rows='2' maxLength='60' placeholder='Example: Best purchase ever!'></textarea>
                    </div>
                    <br></br>
                    <div className='border border-info rounded'>
                        <label for='summary'>Review</label>
                        <textarea className='form-control rounded-0' id='review' rows='10' maxLength='1000' minLength='50' placeholder='Why did you like the product or not?' onChange={this.handleChange.bind(this)} required></textarea>
                        <label>Minimum required characters left: {this.state.charLeft}</label>
                    </div>
                    <br></br>
                    <div className='border border-info rounded'>
                        <label>Upload your photos</label>
                        <br></br>
                        <textarea className='form-control rounded-0' id='photos' rows='1' placeholder='www.example-url.com'></textarea>
                        <button type='button' className="btn btn-secondary" onClick={this.addPicture.bind(this)}>Add photo</button>
                        {/* Look at react forms file input */}
                    </div>
                    <br></br>
                    <br></br>
                    <div className='border border-info rounded'>
                        <label>What is your nickname?</label>
                        <br></br>
                        <textarea className='form-control rounded-0' id='nickname' rows='1' maxLength='60' placeholder='Example: jackson11!' required></textarea>
                        <label className='form-control-sm'>For privacy reasons, do not use your full name or email address</label>
                    </div>
                    <br></br>
                    <div className='border border-info rounded'>
                        <label>Your email</label>
                        <br></br>
                        <input type="email" className="form-control" maxLength='60' placeholder='Example: jackson11@email.com' required></input>
                        <label className='form-control-sm'>For authentication reasons, you will not be emailed</label>
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit Review</button>
                    <br></br>
                </div>
            </form>
        )
    }
}

export default Form;