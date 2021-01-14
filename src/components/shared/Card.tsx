import * as React from "react";
import styled from "../style/styled-components";

const Wrapper = styled.div`
 margin: 10px;
 border 1px solid black;
 max-width: 600px;
 min-width: 500px;
 padding: 40px;
 border-radius: 20px;
`;

interface MyProps {}

export const Card: React.FC<MyProps> = (props) => {
  return <Wrapper>{props.children}</Wrapper>;
};
