import React, { Suspense } from "react";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import { getSession } from "@/lib/actions/user.actions";
import { useAppStore } from "@/store/store";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = async () => {
  const session = await getSession();
  console.log("ss", session);

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-10 ">
      <nav className="py-3 border-b-[1px]">
        <div className="flex main-container flex-row justify-between items-center gap-3 md:gap-0">
          <Logo />
          <Suspense fallback={<></>}></Suspense>
          <UserMenu user={session.isLoggedIn} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
