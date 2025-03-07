"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export function Counter() {
    const params = useParams<{ id: string }>();
    if (params.id === undefined) {
        return null;
    }
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
