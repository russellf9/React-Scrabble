import * as React from "react";
import { Button } from "../shared";

export interface ControlsProps {
  clearSearch: Function;
  isLoading: boolean;
}

export const Controls: React.FC<ControlsProps> = ({
  isLoading,
  clearSearch,
}): JSX.Element => (
  <div>
    <Button
      disabled={isLoading}
      onClick={() => clearSearch()}
      style={{ marginLeft: 10 }}
      value="Clear"
    >
      Clear
    </Button>
  </div>
);
