import content from "./components/content";
import Tabbed from "./components/Tabbed";

export default function App() {
  return (
    <div>
      <Tabbed content={content} />
    </div>
  );
}
