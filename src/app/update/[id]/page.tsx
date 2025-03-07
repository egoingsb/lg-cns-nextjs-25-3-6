"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update() {
    const params = useParams<{ id: string }>();
    const id = params.id;
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    useEffect(() => {
        fetch(`http://localhost:9999/topics/${id}`)
            .then((resp) => resp.json())
            .then((result) => {
                console.log(result);
                setTitle(result.title);
                setBody(result.body);
            });
    }, [id]);
    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const title = form._title.value;
        const body = form._body.value;
        const resp = await fetch(`http://localhost:9999/topics/${id}`, {
            method: "PUT",
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
                    <input
                        type="text"
                        name="_title"
                        placeholder="title"
                        value={title}
                        onChange={(evt) => setTitle(evt.target.value)}
                    />
                </p>
                <p>
                    <textarea
                        name="_body"
                        placeholder="body"
                        value={body}
                        onChange={(evt) => setBody(evt.target.value)}
                    ></textarea>
                </p>
                <p>
                    <input type="submit" value="update" />
                </p>
            </form>
        </div>
    );
}
