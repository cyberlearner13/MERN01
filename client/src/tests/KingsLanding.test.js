import React from 'react';
import { shallow } from 'enzyme';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import KingsLanding from '../components/KingsLanding';

configure({ adapter: new Adapter() });

describe('KingsLanding',()=>{
  const app = shallow(<KingsLanding />);
  it('should render header',()=>{
    expect(app.find('h2').text()).toEqual('Header Portion, Currently on the Landing Page | Sign Up | Login')
  });
})
