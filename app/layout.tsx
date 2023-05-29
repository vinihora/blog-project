import Navbar from "./components/Navbar";
import "./globals.css";
import MyProflePic from "./components/MyProflePic";

export const metadata = {
  title: "Vinicius Hora - Profile",
  description: "Created by Vinicius Hora",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800  ">
        <Navbar />
        <MyProflePic />
        {children}
      </body>
    </html>
  );
}
