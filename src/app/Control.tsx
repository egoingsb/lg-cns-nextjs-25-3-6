import Link from "next/link";

export function Counter() {
    return (
        <>
            <li>
                <Link href="/create">create</Link>
            </li>
            <li>
                <Link href="/update/id">update</Link>
            </li>
            <li>
                <button>Delete</button>
            </li>
        </>
    );
}
