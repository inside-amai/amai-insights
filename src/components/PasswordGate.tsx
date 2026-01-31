import { useState, ReactNode } from "react";
import { Link } from "react-router-dom";
import { Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const SHARED_PASSWORD = "amai-internal-7392";

interface PasswordGateProps {
  children: ReactNode;
  storageKey: string;
  title?: string;
  subtitle?: string;
}

export const PasswordGate = ({
  children,
  storageKey,
  title = "Protected Page",
  subtitle = "This content is restricted.",
}: PasswordGateProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem(storageKey) === "authenticated";
  });
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SHARED_PASSWORD) {
      sessionStorage.setItem(storageKey, "authenticated");
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="relative bg-black border border-white/10 rounded-2xl p-8 shadow-2xl">
          {/* Subtle grid pattern */}
          <div 
            className="absolute inset-0 rounded-2xl opacity-5 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '20px 20px'
            }}
          />
          
          <div className="relative z-10">
            {/* Lock Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                <Lock className="w-8 h-8 text-white/60" />
              </div>
            </div>

            {/* Title & Subtitle */}
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-white mb-2">{title}</h1>
              <p className="text-white/60 text-sm">{subtitle}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-white/80 text-sm">
                  Access Code
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  placeholder="Enter access code"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-white/30"
                  autoComplete="off"
                />
                {error && (
                  <p className="text-red-400 text-sm">Invalid access code</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-white/90 font-medium"
              >
                ACCESS CONTENT
              </Button>
            </form>

            {/* Return to Home */}
            <div className="mt-6 text-center">
              <Link
                to="/"
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                ← Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
