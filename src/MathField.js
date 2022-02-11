import React, { useMemo } from 'react'
import { EditableMathField } from 'react-mathquill'
import { unwrapBlockDelims, wrapBlockDelims } from './utils';

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