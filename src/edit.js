import { useCallback, useState, useRef, Fragment } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';
import { unwrapBlockDelims } from './utils';

/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import MathField from './MathField';
import SvgIcon from './SvgIcon';
// import { buildFailureTestResult } from '@jest/test-result';


const MathButton = ({ icon, label, onClick, insertion }) => {
	const handlers = insertion && {
		onMouseDown: e => e.preventDefault()
	};

	return (
		<ToolbarButton
			icon={<SvgIcon id={icon} />}
			label={ __( label, 'core-block-custom-attributes' ) }
			onClick={onClick}
			{...handlers}
		/>
	);
};

MathButton.defaultProps = {
	insertion: true,
};

const CopyLatexButton = ({ latex }) => {
	const isAvailable = !!navigator.clipboard;

	return (
		<MathButton
			icon="copyLatex"
			label={isAvailable ? "Copy LaTeX math to clipboard" : 'Sorry, clipboard is only available on https:// sites, in supported browsers'}
			insertion={false}
			onClick={() => {
				if (isAvailable) {
					navigator.clipboard.writeText(unwrapBlockDelims(latex))
				}
			}}
		/>
	)
}

const BlockControlsForMath = ({ callEditorMethod, latex }) => (
	<BlockControls group="inline">
		<ToolbarGroup>
			<CopyLatexButton latex={latex} />
			<MathButton
				icon="fraction"
				label="Fraction"
				onClick={() => {
					callEditorMethod('typedText', '/');
				}}
			/>
			<MathButton
				icon="squareRoot"
				label="Square Root"
				onClick={() => {
					callEditorMethod('cmd', 'sqrt');
				}}
			/>
			<MathButton
				icon="superscript"
				label="Superscript"
				onClick={() => {
					callEditorMethod('typedText', '^');
				}}
			/>
			<MathButton
				icon="subscript"
				label="Subscript"
				onClick={() => {
					callEditorMethod('typedText', '_');
				}}
			/>
		</ToolbarGroup>
	</BlockControls>
);

const CopyableLatexString = ({ latex }) => {
	const pre = useRef();
	const selectContents = () => {
		window.getSelection().selectAllChildren(pre.current)
	};

	return (
		<pre tabIndex="0" className="copyable-latex-string" ref={pre} onClick={selectContents}>{
			unwrapBlockDelims(latex)
		}</pre>
	);
}

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const [latex, setLatex] = useState(attributes.latex);
	const field = useRef();

	const updateLatex = newLatex => {
		setLatex(newLatex);
		setAttributes({ latex: newLatex });
	};
	const updateRef = mathField => field.current = mathField;
	const callEditorMethod = useCallback((method, ...args) => {
		if (field.current) {
			field.current[method](...args);
		}
	});

	return (
		<Fragment>
			<BlockControlsForMath callEditorMethod={callEditorMethod} latex={latex} />
			<p {...useBlockProps()}>
				<MathField
					latex={latex}
					setLatex={updateLatex}
					updateRef={updateRef}
				/>
				<CopyableLatexString latex={latex} />
			</p>
		</Fragment>
	);
}