import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import {materialOceanic} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import {
  CodeComponent,
  ReactMarkdownNames,
} from 'react-markdown/lib/ast-to-react';
import styles from './CodeBlock.module.css';

const CodeBlock: CodeComponent | ReactMarkdownNames = ({
    inline,
    className,
    children
  }) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <div className={styles.codeBlock}>
        <SyntaxHighlighter style={materialOceanic} language={match[1]} PreTag="div">
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      </div>
    ) : (
      <code className={className}>
        {children}
      </code>
    )
}

export default CodeBlock