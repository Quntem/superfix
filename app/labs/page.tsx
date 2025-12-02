import Header from "@/components/header";
import Navigation from "@/components/navigation";

export default function Labs() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Header/>
      <hr className="border"></hr>
      <Navigation/>
    </div>
  );
}