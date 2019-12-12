import React from 'react';
import {shallow} from 'enzyme';
import Home from '../src/components/home.jsx';
import VerticalCarousel from '../src/components/verticalCarousel';




describe('Home', () => {
  it('should render correctly with no props', () => {
    const component = shallow(<Home/>);
    
    expect(component).toMatchSnapshot();
  });
  // it('should render banner text correctly with given strings', () => {
  //   const id = 1;
  //   const component = shallow(<Home prodId={id} />);
  //   expect(component).toMatchSnapshot();
  // });
});
