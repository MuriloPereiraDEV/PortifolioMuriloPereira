import ButtonChangeLan from "../language/button-change-language";
import ButtonTheme from "../theme/button-theme";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="w-screen h-[7%] flex items-center justify-end">
      <Navbar />
      <ButtonChangeLan />
      <ButtonTheme />
    </header>
  );
}
