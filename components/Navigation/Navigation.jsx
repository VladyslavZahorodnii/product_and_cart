import Link from "next/link";

export default function Navigation() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/"><img src="/logo.png" alt="watch logo"/></Link>
                </li>
                <li>
                    <Link href="/catalog">Catalog</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
}
