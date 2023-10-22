import Link from "next/link";
const Navbar = () => {
  return (
    <header className="px-10">
      <img className="h-12 w-36" src="next.svg" />
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
      </nav>
    </header>
  );
};

export default Navbar;
