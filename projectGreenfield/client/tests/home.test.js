import React from 'react';
import {mount, shallow} from 'enzyme';
import Home from '../src/components/home.jsx';
import VerticalCarousel from '../src/components/verticalCarousel';
import Related from '../src/components/related.jsx';
import Outfit from '../src/components/outfit.jsx';
import Reviews from '../src/components/reviews.jsx';
import StarRatings from '../../react-star-ratings';



const clickFn = jest.fn();
describe('Home', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Home/>);
    expect(component).toMatchSnapshot();
  });
  it('should render carousel pictures correctly with given product id', () => {
    const id = 1;
    const component = shallow(<Home prodId={id} />);
    expect(component).toMatchSnapshot();
  });
});

describe('Main Carousel', () => {
  test('render a carousel with a current picture index and an array of picture Urls', () => {
    const pics = ["../dist/images/boots.jpg", "../dist/images/shorts.jpg", "../dist/images/jacket.jpg"];
    const wrapper = shallow(
        <VerticalCarousel curPicIndex={4} stylepics={pics}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Related Products component', () => {
  test('render pictures of related products from one product id', () => {
    const id = 1;
    const wrapper = shallow(
        <Related id={id}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Outfits', () => {
  test('render a carousel with a current picture index and an array of picture Urls', () => {
    const style = {name: 'someName', price: '100', photos: ["../dist/images/boots.jpg", "../dist/images/shorts.jpg", "../dist/images/jacket.jpg"]};
    const id = 2
    const wrapper = shallow(
        <Outfit currentStyle ={style} product={id}/>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Reviews', () => {
  test('render a carousel with a current picture index and an array of picture Urls', () => {
    const wrapper = shallow(
        <Reviews />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Star Ratings', () => {
  test('render a carousel with a current picture index and an array of picture Urls', () => {
    const dimension = '15px';
    const spacing = '10px';
    const starColor = 'rgb(189, 153, 57)';
    const number = 5;
    const rating = 4;
    const wrapper = shallow(
      <StarRatings starDimension={dimension} starSpacing={spacing} starRatedColor={starColor} numberOfStars={number} rating={rating} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});



  // test('render Markdown in preview mode', () => {
  //   const wrapper = shallow(
  //       <MarkdownEditor value="*Hello* Jest!" />
  //   );

  //   expect(wrapper).toMatchSnapshot();

  //   wrapper.find('[name="toggle-preview"]').simulate('click');

  //   expect(wrapper).toMatchSnapshot();
  // });


// describe('VerticalCarousel', () => {
//   it('button click should add item to bag', () => {
//     const component = shallow(<Home onClick={clickFn} />);
//     component
//       .find('button#dropdownMenuButton')
//       .simulate('click');
//     expect(clickFn).toHaveBeenCalled();
//   });
// });