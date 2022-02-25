import { useMemo } from '@wordpress/element';
import { EditableMathField } from 'react-mathquill'
import { unwrapBlockDelims, wrapBlockDelims } from './utils';

const MathField = ({ latex, setLatex, updateRef, removeThisBlock }) => {
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
        setLatex(wrapBlockDelims(mathField.latex()))
      }}
      mathquillDidMount={updateRef}
    />
  )
}

export default MathField;