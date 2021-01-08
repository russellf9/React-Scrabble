import * as React from "react";
import "./App.css";
import { Scrabble } from "./components/scrabble/Scrabble";

export interface AppProps {
  complete: boolean;
  errorMessage: string;
  lastWord: string;
  placeholder: string;
  result: number;
  search: string;
}

export const App: React.FC<{}> = (): JSX.Element => (
  <div className="App">
    <Scrabble />
  </div>
);
