/**
 * WordPress dependencies
 */
import { PanelBody, RangeControl } from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
	// const blockProps = useBlockProps();

	const MIN_SPACER_HEIGHT = 0.25;
	const MAX_SPACER_HEIGHT = 20;

	const updateHeight = (value) => {
		setAttributes({
			height: value,
			heightInRem: value + "rem",
		});
	};

	return (
		<>
			<div {...useBlockProps()}></div>
			<InspectorControls>
				<PanelBody title={__("Responsive Spacer settings")}>
					<RangeControl
						label={__("Height in REM")}
						min={MIN_SPACER_HEIGHT}
						max={Math.max(MAX_SPACER_HEIGHT, attributes.height)}
						value={attributes.height}
						onChange={updateHeight}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
