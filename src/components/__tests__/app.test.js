import * as React from 'react';
import * as ReactShallowRenderer from 'react-test-renderer/shallow'
import ScrabbleContent from '../content/ScrabbleContent';


describe('ScrabbleContent', () => {

  it('renders without crashing', () => {
    const renderer = new ReactShallowRenderer();
    expect(renderer.render(
    <ScrabbleContent />
    )).toMatchSnapshot();
  });  
})
