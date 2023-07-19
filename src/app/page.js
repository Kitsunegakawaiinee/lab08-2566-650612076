import { Footer } from "../../com/Footer";
import { Task } from "../../com/Task";
import { TaskInput } from "../../com/TaskInput";
import { Header } from "../../com/Header";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />
      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>

      {/* //footer section */}
      <Footer year="2023" fullname="Korawit Piboon" studentId="650612076" />
    </div>
  );
}