/**
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps } from "@wordpress/block-editor";

/**
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @param {Object} props            Properties passed to the function.
 * @param {Object} props.attributes Available block attributes.
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	const blockStyles = {
		"--rs-xs-height": attributes.xsHeightInRem,
		"--rs-sm-height": attributes.smHeightInRem,
		"--rs-md-height": attributes.mdHeightInRem,
		"--rs-lg-height": attributes.lgHeightInRem,
		"--rs-xl-height": attributes.xlHeightInRem,
		"--rs-xxl-height": attributes.xxlHeightInRem,
	};

	return (
		<div
			{...useBlockProps.save({
				style: blockStyles,
				"aria-hidden": true,
			})}
		/>
	);
}
