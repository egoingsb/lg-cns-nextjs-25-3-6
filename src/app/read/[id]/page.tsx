type ReadProps = {
    params: Promise<{
        id: string;
    }>;
};
export default async function Read(props: ReadProps) {
    const params = await props.params;
    return <>Read! {params.id}</>;
}
