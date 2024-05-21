"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/navigation";

import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import Menu from "@/components/Menu";
import Modal from "@/components/common/modals/Modal";
import { menuItems } from "@/constants";
import { logout } from "@/lib/actions/user.actions";
import Link from "next/link";
import { useAppStore } from "../../../store/store";

interface UserMenuProps {
  user?: boolean;
}

const UserMenu: React.FC<UserMenuProps> = ({ user }) => {
  const router = useRouter();

  const redirect = (url: string) => {
    router.push(url);
  };

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <Modal>
          {/* <Modal.Trigger name={user ? "share" : "Login"}> */}
          {/* <Modal.Trigger name={"share"}> */}
          <Link href={"/listings/create"}>
            <button
              type="button"
              className="hidden md:block text-sm font-bold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer text-[#585858]"
            >
              Digi your home
            </button>
          </Link>
          {/* </Modal.Trigger> */}
          <Menu>
            <Menu.Toggle id="user-menu">
              <button
                type="button"
                className=" p-4 md:py-1 md:px-2 border-[1px]   border-neutral-200  flex  flex-row  items-center   gap-3   rounded-full   cursor-pointer   hover:shadow-md   transition duration-300"
              >
                <AiOutlineMenu />
                <div className="hidden md:block">
                  <Avatar src={""} />
                </div>
              </button>
            </Menu.Toggle>
            <Menu.List className="shadow-[0_0_36px_4px_rgba(0,0,0,0.075)] rounded-xl bg-white text-sm">
              {user ? (
                <>
                  {menuItems.map((item) => (
                    <MenuItem
                      label={item.label}
                      onClick={() => redirect(item.path)}
                      key={item.label}
                    />
                  ))}

                  <MenuItem
                    onClick={() => redirect("/listings/create")}
                    label="Share your home"
                  />
                  <hr />
                  <MenuItem label="Log out" onClick={() => logout()} />
                </>
              ) : (
                <>
                  <MenuItem
                    onClick={() => redirect("/sign-in")}
                    label="Log in"
                  />

                  <MenuItem
                    onClick={() => redirect("/sign-up")}
                    label="Sign up"
                  />
                </>
              )}
            </Menu.List>
          </Menu>
        </Modal>
      </div>
    </div>
  );
};

export default UserMenu;
