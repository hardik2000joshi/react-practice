export default function TablePage() {
    const title = "Welcome to react world";
    return (
        <div>
            <h1>
                Hello Developers {title}
            </h1>

            <label htmlFor="search">
                Search: 
            </label>
            <input id="search" type="text"  className="border p-2 rounded-lg w-full"/>
        </div>
    )
}