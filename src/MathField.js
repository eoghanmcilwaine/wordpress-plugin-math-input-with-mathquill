import { useMemo } from '@wordpress/element';
import { EditableMathField } from 'react-mathquill'
import { unwrapBlockDelims, wrapBlockDelims } from './utils';

const MathField = ({ latex, updateLatex, updateRef, removeThisBlock }) => {
  const content = useMemo(() => unwrapBlockDelims(latex), [latex]);

  const config = useMemo(() => ({
    handlers: {
      deleteOutOf: () => {
        if (content === '') removeThisBlock();
      },
    },
  }), [content, removeThisBlock]);

  return (
    <EditableMathField
      latex={content}
      config={config}
      onChange={(mathField) => {
        updateLatex(wrapBlockDelims(mathField.latex()))
      }}
      mathquillDidMount={updateRef}
    />
  )
}

export default MathField;