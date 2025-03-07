type ReadProps = {
    params: Promise<{
        id: string;
    }>;
};
export default async function Read(props: ReadProps) {
    const params = await props.params;
    const id = params.id;
    const resp = await fetch(`http://localhost:9999/topics/${id}`);
    const data = await resp.json();
    return (
        <div>
            <h2>{data.title}</h2>
            {data.body}
        </div>
    );
}
