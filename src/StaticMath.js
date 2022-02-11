import { StaticMathField } from 'react-mathquill'
import { unwrapBlockDelims } from './utils';

const StaticMath = ({ latex }) => (
  <>
    <code className="latex-content">{ latex }</code>
    <StaticMathField>{unwrapBlockDelims(latex)}</StaticMathField>
  </>
);

export default StaticMath;