import Head from "next/head";

interface WebpageProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  className?: string;
}

const Webpage: React.FC<WebpageProps> = ({ children, title, className, ...props }) => (
  <div className={className ?? "h-screen w-full"} {...props}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
    </Head>
    {children}
  </div>
);

export default Webpage;
