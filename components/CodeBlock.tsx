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
        <SyntaxHighlighter style={materialOceanic} language={match[1]} PreTag="div">
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    ) : (
      <code className={className}>
        {children}
      </code>
    )
}

export default CodeBlock