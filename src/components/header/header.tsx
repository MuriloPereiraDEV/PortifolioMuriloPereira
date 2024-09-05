import ButtonChangeLan from "../language/button-change-language";
import { GetTitle } from "../language/something-lan";
import ButtonTheme from "../theme/button-theme";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="w-screen h-[7%] flex items-center justify-end">
      <div className="w-[30%] h-[100%] flex items-center pl-32">
        <h1 className="border-b-2 border-black dark:border-white">
          <pre className="flex ">
            Murilo Pereira | <GetTitle />
          </pre>
        </h1>
      </div>
      <div className="w-[70%] h-[100%] flex items-center justify-end pr-32">
        <Navbar />
        <ButtonChangeLan />
        <ButtonTheme />
      </div>
    </header>
  );
}
