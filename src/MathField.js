import React, { useMemo } from 'react'
import { addStyles, EditableMathField } from 'react-mathquill'
import { unwrapBlockDelims, wrapBlockDelims } from './utils';

// inserts the required css to the <head> block.
// you can skip this, if you want to do that by yourself.
addStyles();

const MathField = ({ latex, setLatex }) => {
  const content = useMemo(() => unwrapBlockDelims(latex), [latex]);

  return (
    <EditableMathField
      latex={content}
      onChange={(mathField) => {
        setLatex(wrapBlockDelims(mathField.latex()))
      }}
    />
  )
}

export default MathField;