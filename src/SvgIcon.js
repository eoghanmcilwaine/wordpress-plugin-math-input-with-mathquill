import blockLogo from '../svg/block-logo.svg';
import fraction from '../svg/fraction.svg';
import squareRoot from '../svg/square-root.svg';
import copyLatex from '../svg/copy-latex.svg';
import latex from '../svg/latex.svg';
import superscript from '../svg/superscript.svg';
import subscript from '../svg/subscript.svg';

const CustomIcons = {
  blockLogo,
  fraction,
  squareRoot,
  copyLatex,
  latex,
  superscript,
  subscript,
};

export default ({ id }) => (
  <img src={CustomIcons[id]} />
);
