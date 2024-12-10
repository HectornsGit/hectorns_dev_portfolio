import "../styles/globals.css";

export const metadata = {
  title: "Héctor Novoa Segade",
  description: "Héctor Novoa Segade's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" bg-[--cblack]">{children}</body>
    </html>
  );
}
