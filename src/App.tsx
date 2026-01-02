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
import { Progress } from "./components/progress-bar.tsx";
import { Input } from "./components/input.tsx";
import { Textarea } from "@/components/textarea.tsx";
import { Tabs } from "@/components/tabs.tsx";

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

      <div className="p-4">
        <Progress />
      </div>

      <div className="p-4">
        <Input
          label="Question"
          placeholder="e.g., What is the capital of France?"
          id="input-demo"
        />
      </div>

      <div className="p-4">
        <Textarea label="Title" id="textarea-demo" />
      </div>

      <div className="p-4">
        <Tabs
          items={[
            {
              value: "overview",
              label: "Overview",
              content: <div>Overview!</div>,
            },
            {
              value: "projects",
              label: "Projects",
              content: <div>Projects!</div>,
            },
            {
              value: "account",
              label: "Account",
              content: <div>Account!</div>,
            },
          ]}
        />
      </div>
    </>
  );
}

export default App;
