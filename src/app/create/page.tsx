"use client";
import { useRouter } from "next/navigation";
export default function Create() {
    const router = useRouter();
    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const title = form._title.value;
        const body = form._body.value;
        const resp = await fetch(`http://localhost:9999/topics`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                body,
            }),
        });
        const result = await resp.json();
        const lastCreatedId = result.id;
        router.push(`/read/${lastCreatedId}`);
        router.refresh();
    };
    return (
        <div>
            <h2>Create</h2>
            <form onSubmit={submitHandler}>
                <p>
                    <input type="text" name="_title" placeholder="title" />
                </p>
                <p>
                    <textarea name="_body" placeholder="body"></textarea>
                </p>
                <p>
                    <input type="submit" value="create" />
                </p>
            </form>
        </div>
    );
}
