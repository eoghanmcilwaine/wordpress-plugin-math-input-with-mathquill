=== Direct math input with MathQuill ===
Contributors:      eoghanmcilwaine
Donate link:       https://www.paypal.com/donate/?business=QYT8UT3FHC3VL&no_recurring=1&currency_code=EUR
Tags:              block, math, LaTeX, MathQuill, equation, formula
Tested up to:      5.9
Stable tag:        0.2.2
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

<table>
<tr>
<td>Key</td>
<td>Action</td>
</tr>
<tr>
<td>/</td>
<td>Enter a new fraction, with focusable input areas for numerator and denominator</td>
</tr>
<tr>
<td>^</td>
<td>Enter a new superscript, e.g. to add an exponent  </td>
</tr>
<tr>
<td>_</td>
<td>Enter a new subscript </td>
</tr>
<tr>
<td>(</td>
<td>Open parentheses (which will scale based on the height of the content inside) Other parenthesis types behave similarly, e.g. [ and {</td>
</tr>
<tr>
<td>\</td>
<td>Start typing one of the control sequences below. When finished, press enter or space to see the resulting symbol.</td>
</tr>
</table>


Control sequences - type these in including the backslash, followed by enter: (not an exhaustive list)

<table>
<tr>
<td>Sequence</td>
<td>Symbol</td>
<td>Description</td>
</tr>
<tr>
<td>\plusminus</td>
<td>±</td>
<td>plus-or-minus</td>
</tr>
<tr>
<td>\times</td>
<td>×</td>
<td>multiplication</td>
</tr>
<tr>
<td>\alpha</td>
<td>α</td>
<td></td>
</tr>
<tr>
<td>\beta</td>
<td>β</td>
<td></td>
</tr>
<tr>
<td>\gamma</td>
<td>γ</td>
<td></td>
</tr>
<tr>
<td>\delta</td>
<td>δ</td>
<td></td>
</tr>
<tr>
<td>⋮</td>
<td></td>
<td></td>
</tr>
<tr>
<td>\Alpha</td>
<td>Α</td>
<td></td>
</tr>
<tr>
<td>\Beta</td>
<td>Β</td>
<td></td>
</tr>
<tr>
<td>\Gamma</td>
<td>Γ</td>
<td></td>
</tr>
<tr>
<td>\Delta</td>
<td>Δ</td>
<td></td>
</tr>
<tr>
<td>⋮</td>
<td></td>
<td></td>
</tr>
<tr>
<td>\summation</td>
<td>∑</td>
<td>Summation symbol, an uppercase sigma with input areas above and below</td>
</tr>
<tr>
<td>\prod</td>
<td>∏</td>
<td>product symbol, an uppercase pi with input areas above and below (see also \coprod)</td>
</tr>
<tr>
<td>\int</td>
<td>∫</td>
<td>integral symbol, a large ∫ with input areas above and below</td>
</tr>
<tr>
<td>\sqrt</td>
<td>√</td>
<td>square root symbol, containing its own input area</td>
</tr>
<tr>
<td>\nthroot</td>
<td>√</td>
<td>nth root symbol, with input areas for n and content</td>
</tr>
<tr>
<td>\lt</td>
<td>&lt;</td>
<td></td>
</tr>
<tr>
<td>\gt</td>
<td>&gt;</td>
<td></td>
</tr>
<tr>
<td>\le</td>
<td>≤</td>
<td></td>
</tr>
<tr>
<td>\ge</td>
<td>≥</td>
<td></td>
</tr>
<tr>
<td>\approx</td>
<td>≈</td>
<td></td>
</tr>
<tr>
<td>\doteq</td>
<td>≐</td>
<td></td>
</tr>
<tr>
<td>\neq</td>
<td>≠</td>
<td></td>
</tr>
<tr>
<td>\nless</td>
<td>≮</td>
<td></td>
</tr>
<tr>
<td>\ngtr</td>
<td>≯</td>
<td></td>
</tr>
<tr>
<td>\intersection</td>
<td>∩</td>
<td></td>
</tr>
<tr>
<td>\union</td>
<td>∪</td>
<td></td>
</tr>
<tr>
<td>\subset</td>
<td>⊂</td>
<td></td>
</tr>
<tr>
<td>\superset</td>
<td>⊃</td>
<td></td>
</tr>
<tr>
<td>\notsubset</td>
<td>⊄</td>
<td></td>
</tr>
<tr>
<td>\nosuperset</td>
<td>⊅</td>
<td></td>
</tr>
<tr>
<td>\subseteq</td>
<td>⊆</td>
<td></td>
</tr>
<tr>
<td>\isin</td>
<td>∈</td>
<td></td>
</tr>
<tr>
<td>\contains</td>
<td>∋</td>
<td></td>
</tr>
<tr>
<td>\notcontains</td>
<td>∌</td>
<td></td>
</tr>
<tr>
<td>\Complex</td>
<td>ℂ</td>
<td></td>
</tr>
<tr>
<td>\Hamiltonian</td>
<td>ℍ</td>
<td></td>
</tr>
<tr>
<td>\Imaginary</td>
<td>ℑ</td>
<td></td>
</tr>
<tr>
<td>\Naturals</td>
<td>ℕ</td>
<td></td>
</tr>
<tr>
<td>\Primes</td>
<td>ℙ</td>
<td>(also \Probability, \Projective, etc.)</td>
</tr>
<tr>
<td>\Rationals</td>
<td>ℚ</td>
<td></td>
</tr>
<tr>
<td>\Reals</td>
<td>ℝ</td>
<td></td>
</tr>
</table>


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
