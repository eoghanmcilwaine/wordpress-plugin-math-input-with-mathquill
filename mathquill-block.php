<?php
/**
 * Plugin Name:       Math input with MathQuill
 * Description:       Type math expressions directly into your page with MathQuill/LaTeX.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Eoghan McIlwaine  <mcilwaine@gmail.com>
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       direct-math-input
 *
 * @package           math-input-with-mathquill
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_mathquill_block_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_mathquill_block_block_init' );


/**
 * Register the JS/styles to render math on the page in display (non-editor) mode.
 */
function create_block_mathquill_block_enqueue_script()
{   
    wp_enqueue_script( 'mathquill_block_display_script', plugin_dir_url( __FILE__ ) . '/build/display.js' );
}
add_action('wp_enqueue_scripts', 'create_block_mathquill_block_enqueue_script');


function create_block_mathquill_block_enqueue_style()
{   
    wp_enqueue_style(
      'mathquill_block_display_style',
      plugin_dir_url( __FILE__ ) . '/build/display.css',
      array( 'wp-editor' )
    );
}
add_action('enqueue_block_assets', 'create_block_mathquill_block_enqueue_style');
