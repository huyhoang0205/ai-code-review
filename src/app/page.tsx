import { HealthCheck } from "@/components/health-check";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div>
        <h1>Welcome to AiCodeReviewer!</h1>
        <p>Start reviewing your code today!</p>
      </div>

      <div className="flex gap-4">
        <Button>
          <Link href="/login">Login</Link>
        </Button>
        <Button>
          <Link href="/login">Login</Link>
        </Button>
      </div>

      <HealthCheck />
    </div>
  );
}
