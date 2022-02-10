import { MATH_DELIMITERS_BLOCK } from './constants';

const [START, END] = MATH_DELIMITERS_BLOCK;


export const wrapBlockDelims = latex => `${START}${latex}${END}`;

export const unwrapBlockDelims = input => {
  if (!input.startsWith(START) || !input.endsWith(END)) {
    throw new Error(`Expected LaTeX string to be wrapped inside delimiters ${START} and ${END}`);
  }
  return input.slice(START.length, -END.length);
};