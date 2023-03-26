import React from "react";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <h1 className="font-signature text-3xl text-amber-400">JozoJz</h1>
          </a>
          <Link
            to="contact"
            smooth={true}
            spy={true}
            // offset={-10}
            className="btn btn-sm flex items-center cursor-pointer"
          >
            <span>Work with me</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
