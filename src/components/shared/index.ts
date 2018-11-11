import styled from 'styled-components';
import { colors, fonts, fontWeights } from '../../themes';

export interface ButtonPrimaryProps {
    background?: string;
    borderColor?: string;
    borderSize?: number;
    borderRadius?: number;
    color?: string;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
}

const Button = styled.button<ButtonPrimaryProps>`
    background: ${colors.darkBlue};
    border-radius: 4px;
    border: 1px solid ${colors.darkBlue};
    color: white;
    font-family: ${fonts.hind}
    font-size: 1em;
    font-weight: ${fontWeights.semiBold}
    margin: 0.5em 1em;
    padding 0.5em 1em;
    text-transform: uppercase;
`;

export { Button };
