import { preToCodeBlock } from 'mdx-utils';
import React from 'react';
import { Provider } from 'react-redux';
import { MDXProvider } from '@mdx-js/tag';
import { Code } from './src/components/code';

import createStore from './src/state/store';

const store = createStore();

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <Code {...props} />;
    } else {
      return <pre {...preProps} />;
    }
  },
};

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => (
  <Provider store={store}>
    <MDXProvider components={components}>{element}</MDXProvider>
  </Provider>
);
