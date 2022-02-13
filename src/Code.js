import React from "react";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";
import { default as styles } from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";

SyntaxHighlighter.registerLanguage("jsx", jsx);

styles['pre[class*="language-"]'].margin = "0";

const Code = ({ code, language = "jsx" }) => {
  if (typeof code !== "string") return;
  return (
    <div style={{ fontSize: "inherit" }}>
      <SyntaxHighlighter language={language} style={styles}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
