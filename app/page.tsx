import TabPage from "./tab/page"
import MapPage from "./maps/page"
import TablePage from "./table"
import UserCard from "./components/userCard"
import Count from "./hooks"
import Counter from "./components/Counter"
import UseState from "./components/useState"
import UseEffect from "./useEffect"
function Home() {
  return (
    <div>
        <div>
            Hello World from React JS World
        </div>
        <TabPage />
        <MapPage />
        <br />
        <TablePage />
        <Count />
        <UserCard  name="React JS" description="React JS is a library of javascript" value={12 + 12}/>
        <UserCard name="Javascript" description="Javascript is a programming language" value={10*8}/>
        <UserCard name="CSS" description="CSS used for cascading style sheet used for styling of web pages" value={20/2}/>
        <br />
        <br />
        <br />
        <div>
            <div>
                <div>
            <Counter />
            </div>
            </div>
        </div>
        <div>
            <UseState />
        </div>

        <div>
            <UseEffect />
        </div>
        </div>
    )
}
export default Home;