import { TypeKeys } from "../actions/actionTypes";

export interface Word {
  word: string;
}

export interface OnChange {
  type: TypeKeys.ON_CHANGE;
  word: Word;
}

