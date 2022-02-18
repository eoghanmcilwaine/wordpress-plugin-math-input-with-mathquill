import blockLogo from '../svg/block-logo.svg';
import fraction from '../svg/fraction.svg';
import squareRoot from '../svg/square-root.svg';

const CustomIcons = {
  blockLogo,
  fraction,
  squareRoot,
};

export default ({ id }) => (
  <img src={CustomIcons[id]} />
);
