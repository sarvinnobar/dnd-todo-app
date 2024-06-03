import TaskProvider from "./contexts/TaskProvider";
import DoneProvider from "./contexts/DoneProvider";
import Container from "./Component/container/Container";

export default function App() {
  return (
    <div>
      <TaskProvider>
        <DoneProvider>
          <Container />
        </DoneProvider>
      </TaskProvider>
    </div>
  );
}
