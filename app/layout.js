import  {Happy_Monkey}  from "next/font/google";
import "./globals.css";
import LogoAnimation from "./components/LogoAnimation";
import { Menu } from "./components/(2ndMenu)/Menu";
const spaceGrotesk = Happy_Monkey({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "Animaniacs",
  description: "Motion",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-gradient-to-b from-black bg-no-repeat h-screen overflow-x-hidden`}>
        
      <div className="flex w-full justify-end">
        <Menu />
        {/* <span className="flex lg:hidden">
          <MobileNav />
        </span>
        <span className="hidden lg:flex">
          <NavMenu />
        </span> */}
      </div> 
      <div className="flex w-full md:justify-end">
        <LogoAnimation />
      </div>{children}
      </body>
    </html>
  );
}
