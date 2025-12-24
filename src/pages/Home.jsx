import Header from "../components/Header";
import TaskInput from "../components/TaskInput";
import TaskList from "../components/TaskList";
import ProgressBar from "../components/ProgressBar";

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center px-4 py-8">
      <div className="w-full max-w-2xl space-y-6">
        <Header />
        <ProgressBar />
        <TaskInput />
        <TaskList />
      </div>
    </main>
  );
}
