import { ExplorerButton } from "./ExplorerButton";
import Hello from "./Hello";

function App() {
  return <div>
    <h1 className="text-primary">Hello to React-World!</h1>
    <ExplorerButton></ExplorerButton>
    <Hello></Hello>
    {/* Making it reusable */}
    <Hello></Hello>
    <Hello></Hello>

  </div>
}

export default App;