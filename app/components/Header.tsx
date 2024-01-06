import Image from "next/image";
import Icon from "@/public/icon.png";
import { Rubik_Glitch } from "next/font/google";
import { ModeToggle } from "./ModeToggle";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const rubik_glitch = Rubik_Glitch({
  weight: ["400"],
  subsets: ["cyrillic"],
});

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white dark:bg-[#020816]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:pt-8">
        <Link href="/">
          <div className="flex cursor-pointer flex-row items-center justify-center">
            <Image src={Icon} height={60} width={60} alt="logo" />
            <div
              className={`text-2xl font-extrabold md:text-3xl ${rubik_glitch.className}`}
            >
              Crypto Pulse
            </div>
          </div>
        </Link>
        <div className="flex flex-row items-center space-x-4">
          <ModeToggle />
          <UserButton />
        </div>
      </div>
    </header>
  );
}
//
export default Header;
