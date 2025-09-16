import { useState } from "react";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <pre className="position-relative bg-light p-3 rounded">
      <button
        className="btn btn-sm btn-warning position-absolute top-0 end-0 m-2"
        onClick={copyToClipboard}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <code>{code}</code>
    </pre>
  );
};

export default CodeBlock;
