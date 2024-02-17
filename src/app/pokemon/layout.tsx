import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokemon List",
  description: "Pokemon list page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{background: 'gray'}}>
      {children}
    </div>
  );
}
