import * as React from 'react';
import { shallow } from 'enzyme';
import { ContentProps, ScrabbleContent } from '../../../components/content/ScrabbleContent';
import { Wrapper } from '../../../components/content/ScrabbleContent';

describe('ScrabbleContent', () => {

  const props: ContentProps = {
    search: '',
  };

  it('renders without crashing', () => {
    // given
    const wrapper = shallow(<ScrabbleContent {...props}/>);

    // then 
    expect(wrapper).toMatchSnapshot();
  }); 
  
  it('should have a Wrapper', () => {
    // given
    const wrapper = shallow(<ScrabbleContent {...props}/>);

    // then 
    expect(wrapper.contains(<Wrapper />));
  });
});
