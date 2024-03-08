import Image from "next/image";
import { NavbarDemo } from "./components/navbar";
import Upload from "./components/upload";

export default function Home() {
  return (
    <>
      <NavbarDemo/>
      <div className="p-10">
      <Upload/>
      </div>
      
    </>
  );
}
