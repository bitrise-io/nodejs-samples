import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "Sample Next.js application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
