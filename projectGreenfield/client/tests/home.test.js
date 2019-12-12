import React from 'react';
import {mount, shallow} from 'enzyme';
import Home from '../src/components/home.jsx';
import VerticalCarousel from '../src/components/verticalCarousel';



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

describe('VerticalCarousel', () => {
  function Fixture() {
    return (
      <VerticalCarousel/>
    );
  }
  
  const wrapper = mount(<Fixture />); // mount/render/shallow when applicable
  
  expect(wrapper.find(<VerticalCarousel/>)).toExist();
  expect(wrapper.find('ul')).not.toExist();

})

// describe('VerticalCarousel', () => {
//   it('button click should add item to bag', () => {
//     const component = shallow(<Home onClick={clickFn} />);
//     component
//       .find('button#dropdownMenuButton')
//       .simulate('click');
//     expect(clickFn).toHaveBeenCalled();
//   });
// });