import * as React from "react";
import { Scrabble } from "./components/scrabble/Scrabble";
import styled from "styled-components";

const AppWrapper = styled.div`
  text-align: center;
`;

export interface AppProps {
  complete: boolean;
  errorMessage: string;
  lastWord: string;
  placeholder: string;
  result: number;
  search: string;
}

export const App: React.FC<{}> = (): JSX.Element => (
  <AppWrapper>
    <Scrabble />
  </AppWrapper>
);
