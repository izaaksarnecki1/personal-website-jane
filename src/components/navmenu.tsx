"use state";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export function NavMenu() {
  const handleButtonClick = (href: string) => {
    window.location.href = href;
  };

  return (
    <div className="flex gap-3">
      <Button variant="outline" onClick={() => handleButtonClick("/projects")}>
        <div className="flex justify-between hover:underline decoration-1 underline-offset-2 w-auto">
          Prosjekter
        </div>
      </Button>
      <Button variant="outline" onClick={() => handleButtonClick("/tools")}>
        <div className="flex justify-between hover:underline decoration-1 underline-offset-2 w-auto">
          Verktøy
        </div>
      </Button>
      <Button variant="outline" onClick={() => handleButtonClick("/games")}>
        <div className="flex justify-between hover:underline decoration-1 underline-offset-2 w-auto">
          Spill
        </div>
      </Button>
    </div>
  );
}

interface DropDownNavMenuProps {
  onClose: () => void;
}

export function DropDownNavMenu({ onClose }: DropDownNavMenuProps) {
  return (
    <nav className="absolute right-0">
      <div className="flex flex-col gap-2 p-2 mt-2 bg-card rounded-b">
        <Button variant="outline" onClick={onClose}>
          <Link
            className="flex justify-between hover:underline decoration-1 underline-offset-2 w-auto"
            href="/projects"
          >
            Prosjekter
          </Link>
        </Button>
        <Button variant="outline">
          <Link
            className="flex justify-between hover:underline decoration-1 underline-offset-2 w-auto"
            href="/tools"
          >
            Verktøy
          </Link>
        </Button>
        <Button variant="outline" onClick={onClose}>
          <Link
            className="flex justify-between hover:underline decoration-1 underline-offset-2 w-auto"
            href="/games"
          >
            Spill
          </Link>
        </Button>
      </div>
    </nav>
  );
}

export function NavBurger() {
  const [burger, setBurger] = useState(false);

  const toggleBurger = () => {
    setBurger(!burger);
  };

  return (
    <div>
      <Button size="icon" variant="outline" onClick={toggleBurger}>
        <Menu />
      </Button>
      {burger ? <DropDownNavMenu onClose={toggleBurger} /> : null}
    </div>
  );
}
