=== Direct math input with MathQuill ===
Contributors:      eoghanmcilwaine
Donate link:       https://www.paypal.com/donate/?business=QYT8UT3FHC3VL&no_recurring=1&currency_code=EUR
Tags:              block, math, LaTeX, MathQuill, equation, formula
Tested up to:      5.9
Stable tag:        0.1.2
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html


== Description ==

Type complex math expressions easily into your wordpress page using MathQuill (http://mathquill.com/). This plugin adds a new block editor called 'Direct math input' in the 'widgets' category.

Math expressions are saved in LaTeX format and rendered by MathQuill during pageview.

== Usage ==

After installing, a new block editor called 'Direct math input' will be available. Each block contains a MathQuill instance 
where you can edit math right on your page.

When the math editor is focused, you can enter math symbols using your keyboard or via copy/paste.
See the http://mathquill.com/ homepage for a visual demonstration of how to input math. 

Some common keyboard shortcuts are as follows:
/                enter a new fraction, with focusable input areas for numerator and denominator.
^                enter a new superscript, e.g. to add an exponent
_                enter a new subscript
(                open parentheses (which will scale based on the height of the content inside) Other parenthesis types behave similarly, e.g. [ and {
\                backslash allows you to start typing one of the escape sequences below. When finished, press enter or space to see the resulting symbol.

Escape sequences - type these in including the backslash, followed by enter: (not an exhaustive list)

\plusminus       plus-or-minus symbol, ±
\times           multiplication symbol, ×
\divides         division symbol, ÷

\alpha           α                 \Alpha           Α
\beta            β                 \Beta            Β
\gamma           γ                 \Gamma           Γ
\delta           δ                 \Delta           Δ
…etc.                              …etc.

\summation       summation symbol, a large ∑ with  input areas above and below
\prod            product symbol, a large ∏ with input areas above and below (see also \coprod)
\int             integral symbol, a large ∫ with input areas above and below
\sqrt            square root symbol, containing its own input area
\nthroot         nth root symbol, with input areas for n and content

\lt              <
\gt              >
\le              ≤
\ge              ≥
\approx          ≈
\doteq           ≐
\neq             ≠
\nless           ≮
\ngtr            ≯
…etc.

\intersection    ∩
\union           ∪
\subset          ⊂
\superset        ⊃
\notsubset       ⊄
\nosuperset      ⊅
\subseteq        ⊆
\isin            ∈
\contains        ∋
\notcontains     ∌
…etc.

\Complex         ℂ
\Hamiltonian     ℍ
\Imaginary       ℑ
\Naturals        ℕ
\Primes          ℙ (also \Probability, \Projective, etc.)
\Rationals       ℚ
\Reals           ℝ
…etc.


== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/math-input-with-mathquill` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress
3. In the gutenberg editor, add a new 'Direct math input' block and start entering math

== Screenshots ==

1. The "Direct math input" block in the blocks list, and a sample equation in the editor.

== Changelog ==

= 0.1.2 =
* Improved the plugin description
* Added a screenshot showing usage
* Added assets for banner and icon

= 0.1.1 =
* Fixed an issue preventing the math rendering with the correct font file

= 0.1.0 =
* Original MVP
