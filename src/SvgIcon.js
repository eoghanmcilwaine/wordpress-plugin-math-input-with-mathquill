import blockLogo from '../assets/block-logo.svg';
import fraction from '../assets/fraction.svg';
import squareRoot from '../assets/square-root.svg';

const CustomIcons = {
  blockLogo,
  fraction,
  squareRoot,
};

export default ({ id }) => (
  <img src={CustomIcons[id]} />
);
