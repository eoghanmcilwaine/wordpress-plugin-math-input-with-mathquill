import { useCallback, useState, useRef, Fragment } from '@wordpress/element';
import { useDispatch } from '@wordpress/data';
import { BlockControls, store as blockEditorStore } from '@wordpress/block-editor';
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


const MathButton = ({ icon, label, insertion, ...props }) => {
	const handlers = insertion && {
		onMouseDown: e => e.preventDefault()
	};

	return (
		<ToolbarButton
			icon={<SvgIcon id={icon} />}
			label={ __( label, 'core-block-custom-attributes' ) }
			{...props}
			{...handlers}
		/>
	);
};

MathButton.defaultProps = {
	insertion: true,
};

const BlockControlsForMath = ({ callEditorMethod, showLatex, setShowLatex }) => (
	<BlockControls group="inline">
		<ToolbarGroup>
			<MathButton
				icon="latex"
				label={showLatex ? "Hide LaTeX" : "Show LaTeX"}
				isActive={showLatex}
				insertion={false}
				onClick={() => setShowLatex(!showLatex)}
			/>
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
export default function Edit({ attributes, clientId, setAttributes }) {
	const [latex, setLatex] = useState(attributes.latex);
	const [showLatex, setShowLatex] = useState(false);
	const { removeBlocks } = useDispatch(blockEditorStore);
	const field = useRef();

	const removeThisBlock = useCallback(() => removeBlocks(clientId));

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
			<BlockControlsForMath
				callEditorMethod={callEditorMethod}
				showLatex={showLatex}
				setShowLatex={setShowLatex}
			/>
			<p {...useBlockProps({ className: showLatex ? 'is-showing-latex' : '' })}>
				<MathField
					latex={latex}
					updateLatex={updateLatex}
					updateRef={updateRef}
					removeThisBlock={removeThisBlock}
				/>
				{showLatex && <CopyableLatexString latex={latex} />}
			</p>
		</Fragment>
	);
}