"use client"

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client" // import the auth client


export default function Home() {
  const { data: session } = authClient.useSession() 

  return (
    <div>
      <ModeToggle />

      {session ? <p>
        {session.user.name}
      </p> : <Button>Login</Button>}
    </div>
  );
}
