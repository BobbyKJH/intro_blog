"use client"
import { usePathname } from "next/navigation";

/** path에 따른 style 변경을 위한 utils 함수 */
export const pathName = ( pathname: string ) => {
 const path = usePathname();

 if(pathname === "/") return path === "/"
 
 if(pathname === "/notice") return path === "/notice"
 
 return path.includes(pathname);
}