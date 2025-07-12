import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { redirect } from 'next/navigation';
import { headers } from "next/headers";

export default async function Home() {
  "use server"
  const session = await auth.api.getSession({
        headers: await headers(),
    });

    if(session) {
        return redirect("/")
    }
  return (
    <div>
      <ModeToggle />

      {session ? <p>
        {sessionStorage.user.name}
      </p> : <Button>Logout</Button>}
    </div>
  );
}
