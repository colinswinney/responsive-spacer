<?php
/**
 * Plugin Name:       Responsive Spacer
 * Description:       "A responsive alternative to the native Spacer block",
 * Version:           1.0.0
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Author:            Colin Swinney
 * Text Domain:       responsive-spacer
 */

/**
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_responsive_spacer_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_responsive_spacer_init' );