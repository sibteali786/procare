import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="bg-black/30 text-white flex justify-between items-center px-[4rem] py-[1rem] w-full "
      style={{ zIndex: "10", position: "fixed" }}
    >
      <Image
        src="/4.png"
        alt="company logo"
        width={80}
        height={80}
        className=""
      />
      <div className=" space-x-4 fontFamily [&:not(:hover)>a]:opacity-100 [&>a]:transition-opacity">
        <Link
          href="/#hero"
          className="hover-nav-link [&:not(:hover)]:opacity-50"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="hover-nav-link [&:not(:hover)]:opacity-50"
        >
          Our Services
        </Link>
        <Link
          href="/specialties"
          className="hover-nav-link [&:not(:hover)]:opacity-50"
        >
          Our Specialties
        </Link>
        <Link
          href="/pricing"
          className="hover-nav-link [&:not(:hover)]:opacity-50"
        >
          Pricing
        </Link>
        <Link
          href="/about"
          className="hover-nav-link [&:not(:hover)]:opacity-50"
        >
          About Us
        </Link>
      </div>
    </nav>
  );
}
