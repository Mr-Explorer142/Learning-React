// Dynamic Components
function Hello() {
  let name = "Tamim";
  function greeting() {
    return `Hello from ${name}!`;
  }
  return <h4 className="mt-3">Greeting : {greeting()}</h4>
}

export default Hello;