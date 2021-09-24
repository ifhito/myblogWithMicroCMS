import React from "react"

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {materialOceanic} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {
  CodeComponent,
  ReactMarkdownNames,
} from 'react-markdown/lib/ast-to-react';

const CodeBlock: CodeComponent | ReactMarkdownNames = ({
    inline,
    className,
    children
  }) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <div id="code-style">
        <SyntaxHighlighter style={materialOceanic} language={match[1]} PreTag="div">
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
        <style jsx>{`
          #code-style {
            font-size: 1.6rem;
            width: 100%;
          }
          @media (max-width: 767px){
            #code-style {
              width: calc(40rem + ((1vw - 4rem) * 2.1429));
            }
          }
          
          `}</style>
      </div>
    ) : (
      <code className={className}>
        {children}
      </code>
    )
}

export default CodeBlock