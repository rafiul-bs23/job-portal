'use client'
import {Sheet, SheetContent, SheetTrigger} from "../ui/sheet"
import {Button} from "../ui/button"
import {AlignJustify} from 'lucide-react'
import Link from "next/link";


function Header() {
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Feed",
      path: "/feed",
      show: true,
    },
    {
      label: "Login",
      path: "/sign-in",
      show: true,
    },
    {
      label: "Register",
      path: "/sign-up",
      show: true,
    },
    {
      label: "Activity",
      path: "/activity",
      show: true,
    },
    {
      label: "Companies",
      path: "/companies",
      show: true,
    },
    {
      label: "Jobs",
      path: "/jobs",
      show: true,
    },
    {
      label: "Membership",
      path: "/membership",
      show: true,
    },
    {
      label: "Account",
      path: "/account",
      show: true,
    },
  ];
  return (
    <header className="flex h-16 w-full shrink-0 items-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <AlignJustify className="h-6 w-6"/>
            <span className="sr-only">Toggle Navigation Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="bg-amber-50">
          <Link className="mr-6 hidden lg:flex" href={"#"}>
            <h3>JOBSCO</h3>
          </Link>
          <div className="grid gap-2 py-6">
            {menuItems.map((menuItem) =>
              menuItem.show ? (
                <Link href={menuItem.path} className="flex w-full items-center py-2 text-lg font-semibold">
                  {menuItem.label}
                </Link>
              ) : null
            )}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}

export default Header