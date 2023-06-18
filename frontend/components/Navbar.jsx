import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <Link className="text-2xl btn btn-blue" href='/'>Home</Link>
            <Link className="text-2xl btn btn-blue" href=''>Contact</Link>
            <Link className="text-2xl btn btn-blue" href=''>About</Link>
        </>
    )
}
