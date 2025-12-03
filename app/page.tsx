import Badge from "@/components/badge";
import Header from "@/components/header";
import Navigation from "@/components/navigation";

import { FlaskConicalIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <div className="flex flex-col gap-4">
        <Header/>
        <hr className="border"></hr>
        <Navigation/>
      </div>
      <div className="flex flex-col gap-3 max-w-120">
        <Badge Icon={FlaskConicalIcon} Text="Experimental"/>
        <h1 className="text-3xl font-medium">A <Semibold text="versatile"/> and <Semibold text="professional"/> bug tracker</h1>
        <p>A <Semibold text="highly customizable"/>, yet <Semibold text="professional"/> bug tracker for organizations and for personal projects. Created as an <Semibold text="experiment"/> by Quntem Labs.</p>
      </div>
    </div>
  );
}

function Semibold({ text }: { text: string }) {
  return (
    <span className="font-semibold text-(--accent)">{text}</span>
  )
}