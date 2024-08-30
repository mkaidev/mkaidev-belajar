"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

import { Button } from "../ui/button";
import { SearchInput } from "./SearchInput";

const NavbarRoutes = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
  const isSearchPage = pathname === "/search";

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {isSearchPage && (
        <div className="hidden md:block">
          <SearchInput />
        </div>
      )}
      <div className="flex gap-2 ml-auto">
        {isTeacherPage || isPlayerPage ? (
          <Link href="/">
            <Button size="sm" variant={"ghost"}>
              <LogOut className="h-4 w-4 mr-2 " />
              Exit
            </Button>
          </Link>
        ) : (
          <Link href="/teacher/courses">
            <Button size="sm" variant={"ghost"}>
              Teacher Mode
            </Button>
          </Link>
        )}

        <UserButton afterSignOutUrl="/" />
      </div>
    </>
  );
};

export default NavbarRoutes;
