import "./App.css";
import { Header } from "./components/header.tsx";
import { Button } from "./components/button.tsx";
import {
  AngleLeftIcon,
  AngleRightIcon,
  CirclePlusIcon,
  UndoAltIcon,
} from "./components/icon";
import { Checkbox } from "./components/checkbox.tsx";

function App() {
  return (
    <>
      <Header />

      <div className="p-4">
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">
            <CirclePlusIcon /> I Know This
          </Button>

          <Button variant="secondary">
            <UndoAltIcon /> Button
          </Button>

          <Button variant="border">
            <AngleLeftIcon />
            Button
            <AngleRightIcon />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <Checkbox label="Servus" />
      </div>
    </>
  );
}

export default App;
