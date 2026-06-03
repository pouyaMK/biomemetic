import  Landing  from "./components/Landing"
import Benefits from "./components/Benefits";
import Structure from "./components/Structure"
export default function Home() {
  return (
    <div dir="rtl" className="flex flex-col flex-1 items-center justify-center bg-zinc-50 ">
      <Landing />
      <Benefits />
      <Structure />
      
    </div>
  );
}
