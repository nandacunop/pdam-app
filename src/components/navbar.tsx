"use client";
import * as React from "react";
import { Navbar } from "flowbite-react";
import Link from "next/link";

export default function DefaultNavbar() {
  return (
    <Navbar fluid className="sticky top-0 z-50">
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/pdam_logo.png" className="mr-3 h-6 sm:h-9" alt="PDAM Logo" />
        <div className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          <h1 className="text-xl lg:text-2xl">PDAM TIRTA ANTOKAN</h1>
          <h2 className="hidden lg:block text-sm font-normal">KAB. AGAM</h2>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
