import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="bg-gray-900 text-white bg-transparent flex justify-between px-[4rem] py-[1rem] w-full"
      style={{ zIndex: "10", position: "fixed" }}
    >
      <div>Logo</div>
      <div className="font-medium space-x-4 fontFamily">
        <Link href="/#hero" className="hover-nav-link ">
          Home
        </Link>
        <Link href="/services" className="hover-nav-link">
          Our Services
        </Link>
        <Link href="/specialties" className="hover-nav-link">
          Our Specialties
        </Link>
        <Link href="/pricing" className="hover-nav-link">
          Pricing
        </Link>
        <Link href="/about" className="hover-nav-link">
          About Us
        </Link>
      </div>
    </nav>
  );
}
