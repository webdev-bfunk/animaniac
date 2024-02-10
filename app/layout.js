import  {Happy_Monkey}  from "next/font/google";
import "./globals.css";


const spaceGrotesk = Happy_Monkey({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Animaniacs",
  description: "Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-gradient-to-b from-black bg-no-repeat h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
