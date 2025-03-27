import { Icons } from "@/components/icons";
import { siteConfig } from "@/lib/config";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto py-16 sm:px-10 px-5 pb-0">
        <a
          href="/"
          title={siteConfig.name}
          className="relative mr-6 flex items-center space-x-2"
        >
          <Icons.logo customLogo="/logos/incasso-prompt-logo.png" className="w-auto h-[40px]" />
        </a>

        <div className="max-w-6xl mx-auto border-t py-2 grid md:grid-cols-2 h-full justify-between w-full grid-cols-1 gap-1 mt-8">
          <span className="text-sm tracking-tight text-foreground">
            Copyright © {new Date().getFullYear()}{" "}
            <Link href="/" className="cursor-pointer">
              {siteConfig.name}
            </Link>{" "}
          </span>
          <ul className="flex justify-start md:justify-end text-sm tracking-tight text-foreground space-x-4">
            <li>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="text-primary hover:bg-primary/10 transition-colors rounded-full p-2 inline-flex items-center justify-center">
                <FaLinkedin className="h-5 w-5" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
