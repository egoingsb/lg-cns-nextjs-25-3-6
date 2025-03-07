export default async function Create() {
    return (
        <div>
            <h1>
                <a href="/">Web</a>
            </h1>
            <ol>
                <li>
                    <a href="/read/1">html</a>
                </li>
                <li>
                    <a href="/read/2">css</a>
                </li>
                <li>
                    <a href="/read/3">js</a>
                </li>
            </ol>
            Create
            <ul>
                <li>
                    <a href="/create">create</a>
                </li>
                <li>
                    <a href="/update/id">update</a>
                </li>
                <li>
                    <button>Delete</button>
                </li>
            </ul>
        </div>
    );
}
