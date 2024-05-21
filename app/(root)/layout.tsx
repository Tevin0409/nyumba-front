import Image from "next/image";

import SideBar from "@/components/Sidebar";
import MobileNavbar from "@/components/MobileNavbar";
import Navbar from "@/components/common/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="pb-16 md:pt-28 pt-24">
      <Navbar />
      {children}
    </main>
  );
}
