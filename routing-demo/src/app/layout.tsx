import { Metadata } from "next";
import { ErrorWrapper } from "./error-wrapper";

export const metadata: Metadata = {
  title: {
    default: "Next.js Tutorial - Codevolution", // to be used if a page don't have title metadata
    template: "%s | Codevolution", // to be used in a multipage application (eg. Blog | Codevolution) i.e the child page.tx has "Blog" title
    absolute: "", // Overrides the parent title
  },
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>Header</p>
        </header>
        <ErrorWrapper>{children}</ErrorWrapper>
        <footer
          style={{
            backgroundColor: "ghostwhite",
            padding: "1rem",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
