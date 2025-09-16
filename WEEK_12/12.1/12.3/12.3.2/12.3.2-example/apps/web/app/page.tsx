import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Signup } from "@repo/ui/Signup";

 export default function Page(){
  return(
    <>
    <Signup></Signup>
    </>
  )
 }