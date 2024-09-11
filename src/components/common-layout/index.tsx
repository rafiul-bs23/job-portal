import * as React from "react";
import Header from "@/components/header";

interface CommonLayoutProps {
  children: React.ReactNode;
}

function CommonLayout({children}: CommonLayoutProps) {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
      {/*Header Component*/}
      <Header/>

      {/*Main Component*/}
      <main>{children}</main>
    </div>
  )
}

export default CommonLayout