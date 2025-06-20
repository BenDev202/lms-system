import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft} from "lucide-react";
import  Link  from 'next/link'
import Image from 'next/image'
import { ReactNode } from "react";

export default function AuthLayout({children}: {children: ReactNode}) {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center">

      <Link href="/" className={buttonVariants({
        variant: 'outline',
        className: 'absolute top-4 left-4',
      })}>
        <ArrowLeft className="size-4"/>
        Back
      </Link>

    <div className="flex w-full max-w-sm flex-col gap-6">
      <Link href='/' className="flex items-center gap-2 self-center font-medium">
      <Image src='globe.svg' alt="Logo" width={32} height={32}/>
        NexusLMS.
      </Link>
      {children}
      
      <div className="text-balance text-center text-xs text-muted-foreground">
        By click continue, you agree to our <span className="hover:text-primary hover:underline">Terms of Service</span> and <span className="hover:text-primary hover:underline">Privacy Policy</span>.
      </div>
      </div>
    </div>
  )
}
