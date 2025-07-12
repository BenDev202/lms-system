"use client"

import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client" // import the auth client
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export default function Home() {
  const router = useRouter();
  const { data: session } = authClient.useSession();

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/")
          toast.success("Signed out successfully")
        },
      },
    });
  }
 
  return (
    <div>
      <ModeToggle />

      {session ? <div>
        <p>
        {session.user.name}
      </p>
      <Button onClick={signOut}>Logout</Button>
      </div> : <Button>Login</Button>}
    </div>
  );
}
