import React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import styled from 'styled-components';
import theme from '../../styles/ultramin';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const CodeWrapper = styled.div`
  border: 1px solid #ddd;
  padding: 0.5rem 1rem;
  font-size: 12px;
  margin-bottom: 1rem;
  overflow-y: auto;
`;

export const Code = ({ codeString, language, ...props }) => {
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  } else {
    return (
      <CodeWrapper>
      <Highlight {...defaultProps} code={codeString} language={language} theme={theme}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => <span {...getTokenProps({ token, key })} />)}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      </CodeWrapper>
    );
  }
};
