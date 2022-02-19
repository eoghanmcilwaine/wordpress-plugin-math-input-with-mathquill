import blockLogo from '../svg/block-logo.svg';
import fraction from '../svg/fraction.svg';
import squareRoot from '../svg/square-root.svg';
import copyLatex from '../svg/copy-latex.svg';

const CustomIcons = {
  blockLogo,
  fraction,
  squareRoot,
  copyLatex,
};

export default ({ id }) => (
  <img src={CustomIcons[id]} />
);
