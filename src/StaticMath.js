import { addStyles, StaticMathField } from 'react-mathquill'
import { unwrapBlockDelims } from './utils';

// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles();

const StaticMath = ({ latex }) => (
  <>
    <code className="latex-content">{ latex }</code>
    <StaticMathField>{unwrapBlockDelims(latex)}</StaticMathField>
  </>
);

export default StaticMath;