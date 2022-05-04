/**
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./style.scss";
import "./editor.scss";

/**
 * Internal dependencies
 */
import Edit from "./edit";
import save from "./save";

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/#registering-a-block
 */
registerBlockType("cjsb/responsive-spacer", {
	/**
	 * Used to construct a preview for the block to be shown in the block inserter.
	 */
	example: {
		attributes: {
			message: "Responsive Spacer",
		},
	},
	/**
	 * @see ./edit.js
	 */
	edit: Edit,
	/**
	 * @see ./save.js
	 */
	save,
});
