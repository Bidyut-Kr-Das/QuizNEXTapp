import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center gap-4 flex-col">
      <h1> Home Page</h1>
      {/* <button onClick={() => alert("hello next js")}>LOl</button> */}
      <Link href="/about">Go to about page&lt;-Link</Link>
      <Link href="/login">Go to login page&lt;-Link</Link>
    </main>
  );
}
