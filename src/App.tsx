import "./App.css";
import { Header } from "./components/header.tsx";
import { Button } from "./components/button.tsx";
import { CirclePlusIcon } from "./components/icon";

function App() {
  return (
    <>
      <Header />
      <Button variant="primary">
        <CirclePlusIcon /> I Know This
      </Button>
    </>
  );
}

export default App;
