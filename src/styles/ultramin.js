// @flow
// Original: https://github.com/damienstanton/ultramin
// Converted automatically using ./tools/themeFromVsCode

/*:: import type { PrismTheme } from '../src/types' */

var theme /*: PrismTheme */ = {
  plain: {
    color: '#282a2e',
    backgroundColor: '#ffffff',
  },
  styles: [
    {
      types: ['comment', 'prolog'],
      style: {
        color: '#969896',
      },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#183691',
      },
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#393A34',
      },
    },
    {
      types: ['string', 'number', 'builtin', 'variable', 'url', 'symbol', 'boolean', 'constant', 'property'],
      style: {
        color: '#005cc5',
      },
    },
    {
      types: ['atrule', 'keyword', 'attr-name'],
      style: {
        color: '#d73a49',
      },
    },
    {
      types: ['function', 'deleted', 'attr-name'],
      style: {
        color: '#6f42c1',
      },
    },
    {
      types: ['tag', 'selector'],
      style: {
        color: '#00009f',
      },
    },
  ],
};

module.exports = theme;
