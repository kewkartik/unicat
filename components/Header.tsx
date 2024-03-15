import NextLogo from "./NextLogo";
import SupabaseLogo from "./SupabaseLogo";

export default function Header() {
  return (
    <div className="flex flex-col gap-2 items-center">
      <h1 className="sr-only">UniCat</h1>
      <p className="text-[60px] lg:text-[92px] pt-20 font-bold !leading-tight mx-auto max-w-7xl text-center">
        College Deets Redefined {" "}
      </p>
      <h2 className="text-center text-xl md:text-4xl font-bold text-black">
        we know what you actually want to see :)
    </h2>
    <p className="text-center text-base md:text-lg font-normal text-neutral-700 max-w-md mt-2 mx-auto">
      pookie
    </p>
    </div>
  );
}
