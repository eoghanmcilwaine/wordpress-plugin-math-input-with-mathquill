const defaultConfig = require('@wordpress/scripts/config/webpack.config');

/**
 * Mathquill font files to not include with the build - only .woff2 is left out
 */
const excludedFontFiles = [/Symbola\.ttf/, /Symbola\.eot/, /Symbola\.svg/, /Symbola\.woff$/];

/**
 * 
 * Override default cssloader settings to filter out the unwanted font
 * files as described here:
 * https://webpack.js.org/loaders/css-loader/
 * 
 * This is done by adding an extra options.url.filter() to the
 * css-loader rules which are initially set up here:
 * https://github.com/WordPress/gutenberg/blob/c034da18/packages/scripts/config/webpack.config.js#L43-L51
 *
 */
const cssLoaderUsesIgnoringFonts = uses => {
  return (uses || []).map(use => {
    if (use.loader.includes('/css-loader/')) {
      return {
        ...use,
        options: {
          ...use.options,
          url: {
            ...use.options?.url,
            filter: function(url) {
              return !excludedFontFiles.some(font => font.test(url));
            }
          }
        }
      }
    } else {
      return use;
    }
  });
}

/**
 * 
 * Override the default wordpress webpack config, to avoid bundling
 * a large mathquill font file into index.css.
 * 
 * Mathquill's css requests a font (Symbola) in a bunch of different
 * formats including .svg, which is interpreted by the rule below as
 * requiring an inline import.
 * 
 * {
 *   test: /\.svg$/,
 *   issuer: /\.(sc|sa|c)ss$/,
 *   type: 'asset/inline',
 * },
 * https://github.com/WordPress/gutenberg/blob/c034da18f3b53ac741bedb0258dd95e050502f86/packages/scripts/config/webpack.config.js#L196-L200
 *
 * We need to override this to exclude this particular font file from
 * inline loading.
 *  
 */
const rules = (defaultConfig?.module?.rules || []).map(rule => {
    const { test, issuer, type } = rule;
    let newRule;

    if (test instanceof RegExp) {
        // Dont bundle svg font with CSS
        if (
            issuer instanceof RegExp &&
            type === 'asset/inline' &&
            test.test('.svg') &&
            issuer.test('.css')
        ) {
            newRule = {
                ...rule,
                exclude: /Symbola/
            };
        }

        if (test.test('.css')) {
          newRule = {
            ...rule,
            use: cssLoaderUsesIgnoringFonts(rule.use)
          };
        }
    } 
    return newRule || rule;
});

const myConfig = {
    ...defaultConfig,
    module: {
        ...defaultConfig.module,
        rules: [
            ...rules,
        ]
    }
};

module.exports = myConfig;
