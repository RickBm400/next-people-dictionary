import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "People Dictionary",
  description: "Created by RickBm20",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
