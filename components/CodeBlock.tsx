import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialOceanic } from "react-syntax-highlighter/dist/cjs/styles/prism";

type CodeBlockProps = {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const CodeBlock: React.FC<CodeBlockProps> = ({ node, inline = false, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || "");
  
  if (!inline && match) {
    return (
      <SyntaxHighlighter style={materialOceanic} language={match[1]} PreTag="div">
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    );
  }

  return (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

export default CodeBlock;