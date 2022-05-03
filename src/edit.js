/**
 * WordPress dependencies
 */
import { PanelBody, RangeControl } from "@wordpress/components";
import { InspectorControls, useBlockProps } from "@wordpress/block-editor";
import { __ } from "@wordpress/i18n";

export default function Edit({ attributes, setAttributes }) {
	const MIN_SPACER_HEIGHT = 0;
	const MAX_SPACER_HEIGHT = 20;
	const STEP = 0.25;
	const UNIT = "rem";

	const blockStyles = {
		"--rs-xs-height": attributes.xsHeightInRem,
		"--rs-sm-height": attributes.smHeightInRem,
		"--rs-md-height": attributes.mdHeightInRem,
		"--rs-lg-height": attributes.lgHeightInRem,
		"--rs-xl-height": attributes.xlHeightInRem,
		"--rs-xxl-height": attributes.xxlHeightInRem,
	};

	const rangeControls = [
		{
			label: __("X-Small"),
			value: attributes.xsHeight,
			onChangeFunction: (value) => {
				setAttributes({
					xsHeight: value,
					xsHeightInRem: value + UNIT,
				});
			},
		},
		{
			label: __("Small"),
			value: attributes.smHeight,
			onChangeFunction: (value) => {
				setAttributes({
					smHeight: value,
					smHeightInRem: value + UNIT,
				});
			},
		},
		{
			label: __("Medium"),
			value: attributes.mdHeight,
			onChangeFunction: (value) => {
				setAttributes({
					mdHeight: value,
					mdHeightInRem: value + UNIT,
				});
			},
		},
		{
			label: __("Large"),
			value: attributes.lgHeight,
			onChangeFunction: (value) => {
				setAttributes({
					lgHeight: value,
					lgHeightInRem: value + UNIT,
				});
			},
		},
		{
			label: __("X-Large"),
			value: attributes.xlHeight,
			onChangeFunction: (value) => {
				setAttributes({
					xlHeight: value,
					xlHeightInRem: value + UNIT,
				});
			},
		},
		{
			label: __("XX-Large"),
			value: attributes.xxlHeight,
			onChangeFunction: (value) => {
				setAttributes({
					xxlHeight: value,
					xxlHeightInRem: value + UNIT,
				});
			},
		},
	];

	return (
		<>
			<div {...useBlockProps()} style={blockStyles}></div>
			<InspectorControls>
				<PanelBody title={__("Responsive Spacer Settings")}>
					<span>
						<em>{__("All values are in REM units")}</em>
					</span>
					<br />
					<br />
					{rangeControls.map(({ label, value, onChangeFunction }) => (
						<RangeControl
							label={label}
							min={MIN_SPACER_HEIGHT}
							max={MAX_SPACER_HEIGHT}
							step={STEP}
							value={value}
							onChange={onChangeFunction}
						/>
					))}
				</PanelBody>
			</InspectorControls>
		</>
	);
}
