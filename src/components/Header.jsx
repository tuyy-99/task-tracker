import { Moon, Sun, BarChart3 } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useTasks } from "../store/useTasks";

export default function Header() {
  const darkMode = useTasks((s) => s.darkMode);
  const setDarkMode = useTasks((s) => s.setDarkMode);
  const location = useLocation();

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
  };

  return (
    <div className="flex items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Task Tracker</h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Stay productive
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Stats button */}
        <Link to="/stats">
          <Button
            size="icon"
            variant={location.pathname === "/stats" ? "default" : "outline"}
            title="Statistics"
          >
            <BarChart3 size={18} />
          </Button>
        </Link>

        {/* Dark mode toggle */}
        <Button size="icon" variant="outline" onClick={toggleDark} title="Toggle theme">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </Button>
      </div>
    </div>
  );
}
