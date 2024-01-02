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
    <header className="sticky top-0 z-10 mx-auto flex w-full items-center justify-between bg-white px-4 py-2 md:pt-8 xl:w-3/4 dark:bg-[#020816]">
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
    </header>
  );
}
//
export default Header;
