
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2">
      <Sun 
        size={18} 
        className={`transition-all ${
          theme === 'light' 
            ? 'text-portfolio-blue opacity-100' 
            : 'text-muted-foreground opacity-50'
        }`} 
      />
      <Switch
        checked={theme === "dark"}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-portfolio-blue data-[state=unchecked]:bg-portfolio-purple"
      />
      <Moon 
        size={18} 
        className={`transition-all ${
          theme === 'dark' 
            ? 'text-portfolio-purple opacity-100' 
            : 'text-muted-foreground opacity-50'
        }`} 
      />
    </div>
  );
};
