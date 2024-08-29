import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <ul className="flex h-[100%] items-center justify-end">
      <li>
        <Button variant="link">
          <Link
            href="https://www.linkedin.com/in/murilopereiraa"
            target="_blank"
          >
            LinkedIn
          </Link>
        </Button>
      </li>
      <li>
        <Button variant="link">
          <Link href="https://github.com/MuriloPereiraDEV" target="_blank">
            GitHub
          </Link>
        </Button>
      </li>
    </ul>
  );
}
