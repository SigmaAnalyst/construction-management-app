
export const metadata = {
  title: "Construction Management App",
  description: "Prototype UI demo",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
