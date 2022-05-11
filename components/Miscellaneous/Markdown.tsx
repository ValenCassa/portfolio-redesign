import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import rehypeRaw from "rehype-raw";


const CodeBlock = {
    code({node, inline, className, children, ...props}: any) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
          <SyntaxHighlighter
            // eslint-disable-next-line react/no-children-prop
            children={String(children).replace(/\n$/, '')}
            style={atomDark}
            language={match[1]}
            PreTag="div"
            {...props}
          />
        ) : (
          <code className={className} {...props}>
            {children}
          </code>
        )
      }
}


const Markdown = ({ value }: { value: string }) => {

    return (
        <div className="markdown">
            <ReactMarkdown 
                // eslint-disable-next-line react/no-children-prop
                children={value}
                components={CodeBlock}
                skipHtml={false}
                rehypePlugins={[rehypeRaw]}
                
            />
        </div>
    )
}

export default Markdown