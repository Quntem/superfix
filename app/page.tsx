import Header from "@/components/header";
import Navigation from "@/components/navigation";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Header/>
      <hr className="border"></hr>
      <Navigation/>
      <h1 className="text-3xl font-medium">A <Semibold text="versatile"></Semibold> and <Semibold text="professional"></Semibold> bug tracker</h1>
    </div>
  );
}

function Semibold({ text }: { text: string }) {
  return (
    <span className="font-semibold">{text}</span>
  )
}