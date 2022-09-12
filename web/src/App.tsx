// JSX: JavaScript + XML (HTML)
// Componentes / Prioridades

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
    )
}

function App() {
  return (
    <div>
      <Button title="Send 1"></Button>
      <Button title="Send 2"></Button>
      <Button title="Send 3"></Button>
      <Button title="Hello World"></Button>
    </div>
  )
}

export default App
