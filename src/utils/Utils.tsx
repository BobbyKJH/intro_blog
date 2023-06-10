"use client"

import { usePathname } from "next/navigation";

export const pathName = ( pathname: string ) => {
 const path = usePathname();

 if(pathname === "/"){
  return path === "/"
 }

 return path.includes(pathname);
}