import  Landing  from "./components/Landing"
import Benefits from "./components/Benefits";
import Certifications from "./components/Certifications";
import FAQ from "./components/FAQ"
export default function Home() {
  return (
    <div dir="rtl" className="flex flex-col flex-1 items-center justify-center bg-zinc-50 ">
      <Landing />
      <Benefits />
      <Certifications />      
      <FAQ />
      <div className="flex w-full gap-4 items-center justify-center">
       <p>پشتیبانی</p>
       <p>۰۹۹۱۸۷۰۳۰۲۱</p>
      </div>
    </div>
  );
}


