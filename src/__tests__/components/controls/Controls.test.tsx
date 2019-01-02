import * as React from 'react';
import { shallow } from 'enzyme';
import { Controls, ControlsProps } from '../../../components/controls/Controls';
import { Button } from '../../../components/shared';

const initialProps: ControlsProps = {
    clearSearch: (): void => {
       return;
    },
    isLoading: false,
};

describe('Controls', () => {

    it('renders without crashing', () => {
        // given

        // when
        const wrapper = shallow(<Controls {...initialProps}/>);

        // then
        expect(wrapper).toMatchSnapshot();
    });

    it('should have a Button', () => {
        // given
        // when
        const wrapper = shallow(<Controls {...initialProps}/>);

        // then 
        expect(wrapper.contains(<Button/>));
    });

    it('should not be loading', () => {
        // given
        // when
        const wrapper = shallow(<Controls {...initialProps}/>);
        const props = wrapper.instance().props as ControlsProps;
        // then 
        expect(props.isLoading).toBe(false);
    });
});
