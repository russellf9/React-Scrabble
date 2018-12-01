import * as React from 'react';
import { shallow } from 'enzyme';
import { ContentProps, ScrabbleContent } from '../../../components/content/ScrabbleContent';

describe('ScrabbleContent', () => {

  const props: ContentProps = {
    search: '',
  };

  it('renders without crashing', () => {
    const wrapper = shallow(<ScrabbleContent {...props}/>);
    expect(wrapper).toMatchSnapshot();
  });  
});
