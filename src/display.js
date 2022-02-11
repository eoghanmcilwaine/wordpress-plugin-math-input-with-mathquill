import React from 'react';
import { render } from 'react-dom';
import StaticMath from './StaticMath';

jQuery(function () {
  const els = document.querySelectorAll('code.latex-content');

  for (const el of els) {
    render(<StaticMath latex={el.textContent}/>, el.parentElement);
  }
});