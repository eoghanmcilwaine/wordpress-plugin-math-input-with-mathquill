import { useMemo } from '@wordpress/element';
import { EditableMathField } from 'react-mathquill'
import { unwrapBlockDelims, wrapBlockDelims } from './utils';

const MathField = ({ latex, setLatex, updateRef }) => {
  const content = useMemo(() => unwrapBlockDelims(latex), [latex]);

  return (
    <EditableMathField
      latex={content}
      onChange={(mathField) => {
        setLatex(wrapBlockDelims(mathField.latex()))
      }}
      mathquillDidMount={updateRef}
    />
  )
}

export default MathField;