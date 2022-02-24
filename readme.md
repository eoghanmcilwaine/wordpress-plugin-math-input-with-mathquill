=== Direct math input with MathQuill ===  
Contributors:      eoghanmcilwaine  
Donate link:       https://www.paypal.com/donate/?business=QYT8UT3FHC3VL&no_recurring=1&currency_code=EUR  
Tags:              block, math, LaTeX, MathQuill, equation, formula  
Requires at least: 5.0
Tested up to:      5.9  
Stable tag:        0.2.3  
License:           GPL-2.0-or-later  
License URI:       https://www.gnu.org/licenses/gpl-2.0.html  
  

== Description ==

Type complex math expressions easily into your wordpress page using MathQuill (http://mathquill.com/). This plugin adds a new block editor called 'Direct math input' in the 'widgets' category.

Math expressions are saved in LaTeX format and rendered by MathQuill during pageview.

= Usage =

After installing, a new block editor called 'Direct math input' will be available. Each block contains a MathQuill instance 
where you can edit math right on your page.

When the math editor is focused, you can enter math symbols using your keyboard or via copy/paste.
See the http://mathquill.com/ homepage for a visual demonstration of how to input math. 

Some common keyboard shortcuts are as follows:

* / (forward slash)  Enter a new fraction, with focusable input areas for numerator and denominator
* ^ (caret)  Enter a new superscript, e.g. to add an exponent
* _ (underscore)  Enter a new subscript    
* ( (open parentheses)  Open parentheses (which will scale based on the height of the content inside) Other parenthesis types behave similarly, e.g. [ and {
* \ (backslash)  Start typing one of the control sequences below. When finished, press enter or space to see the resulting symbol


Control sequences - to create each symbol, type the full sequence (including the backslash) into the math editor, followed by
space or enter. (not an exhaustive list)

* \plusminus
* \times
* \alpha
* \beta
* \gamma
* \delta
* \Alpha
* \Beta
* \Gamma
* \Delta
* \summation
* \prod
* \int
* \sqrt
* \nthroot
* \lt
* \gt
* \le
* \ge
* \approx
* \doteq
* \neq
* \nless
* \ngtr
* \intersection
* \union
* \subset
* \superset
* \notsubset
* \nosuperset
* \subseteq
* \isin
* \contains
* \notcontains
* \Complex
* \Hamiltonian
* \Imaginary
* \Naturals
* \Primes
* \Rationals
* \Reals


== Frequently Asked Questions ==

= How do I start using this? =

Create a new 'Direct math input' block from the gutenberg blocks list.
Start typing math straight into your block using some of the symbols listed in the
plugin description.

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/math-input-with-mathquill` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress
3. In the gutenberg editor, add a new 'Direct math input' block and start entering math

== Screenshots ==

1. Using the "Direct math input" block to insert some equations.

== Changelog ==

= 0.2.3 =
* Change LaTeX button to show copyable LaTeX
* Fix readme formatting

= 0.2.2 =
* Add toolbar buttons for superscript and subscript
* Show an error message when the clipboard function isn't available

= 0.2.1 =
* Added a "Copy LaTeX to clipboard" toolbar button

= 0.2.0 =
* Added some toolbar buttons to create math symbols
* Added a custom icon for the block editor
* Added some usage information and FAQ

= 0.1.2 =
* Improved the plugin description
* Added a screenshot showing usage
* Added assets for banner and icon

= 0.1.1 =
* Fixed an issue preventing the math rendering with the correct font file

= 0.1.0 =
* Original MVP
