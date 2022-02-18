import { useState, Fragment } from '@wordpress/element';
import { BlockControls } from '@wordpress/block-editor';
import {
	ToolbarGroup,
	ToolbarButton,
} from '@wordpress/components';

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


// const FractionIcon = () => <SvgIcon id="fraction" />;

const BlockControlsForMath = () => (
	<BlockControls group="inline">
		<ToolbarGroup>
			<ToolbarButton
				icon={<SvgIcon id="fraction" />}
				label={ __( 'Custom Button', 'core-block-custom-attributes' ) }
				onClick={ () => {
						console.log('clicked button');
				}}
			/>
			<ToolbarButton
				icon={<SvgIcon id="squareRoot" />}
				label={ __( 'Custom Button', 'core-block-custom-attributes' ) }
				onClick={ () => {
						console.log('clicked button 2');
				}}
			/>
		</ToolbarGroup>
	</BlockControls>
);

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

	const updateLatex = newLatex => {
		setLatex(newLatex);
		setAttributes({ latex: newLatex });
	};

	return (
		<Fragment>
			<BlockControlsForMath />
			<p {...useBlockProps()}>
				<MathField latex={latex} setLatex={updateLatex} />
			</p>
		</Fragment>
	);
}