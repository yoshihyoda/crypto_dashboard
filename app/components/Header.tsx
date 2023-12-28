import { ModeToggle } from "./ModeToggle";
import { UserButton } from "@clerk/nextjs";

function Header() {
  return (
    <header className="flex flex-row justify-between items-center py-8 w-3/4 mx-auto">
      <div>Yoshi's Crypto Dashboard</div>
      <div className="flex flex-row items-center space-x-4">
        <ModeToggle />
        <UserButton />
      </div>
    </header>
  );
}

export default Header;
