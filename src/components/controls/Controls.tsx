import * as React from "react";
import { Button } from "../shared";
import styled from "../style/styled-components";
export interface ControlsProps {
  clearSearch: Function;
  isLoading: boolean;
}

const Wrapper = styled.div`
  margin-top: 20px;
`;
export const Controls: React.FC<ControlsProps> = ({
  isLoading,
  clearSearch,
}): JSX.Element => (
  <Wrapper>
    <Button
      disabled={isLoading}
      onClick={() => clearSearch()}
      style={{ marginLeft: 10 }}
      value="Clear"
    >
      Clear
    </Button>
  </Wrapper>
);
