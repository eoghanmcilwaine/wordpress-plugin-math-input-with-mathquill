/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';
import '@edtr-io/mathquill/build/mathquill.css';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';
import SvgIcon from './SvgIcon';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType('math-input-with-mathquill/direct-math-input', {
	example: {
		attributes: {
			mode: 'preview',
			latex: '\\[\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}\\]'
		},
	},

	icon: <SvgIcon id="blockLogo" />,

	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
