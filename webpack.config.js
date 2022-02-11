const defaultConfig = require('@wordpress/scripts/config/webpack.config');

/**
 * Mathquill font files to not include with the build - only .woff2 is left out
 */
const excludedFontFiles = [/Symbola\.ttf/, /Symbola\.eot/, /Symbola\.svg/, /Symbola\.woff$/];



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

        // Exclude other versions of font file
        // if (
        //     type === 'asset/resource' &&
        //     test.test('.ttf')
        // ) {
        //     newRule = {
        //         ...rule,
        //         exclude: excludedFontFiles
        //     };
        // }

        if (test.test('.css')) {
          const newUses = (rule.use || []).map(use => {
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

          newRule = {
            ...rule,
            use: newUses
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

//console.log(myConfig);

module.exports = myConfig;
