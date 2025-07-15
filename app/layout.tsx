import type { Metadata } from "next";
import { DM_Sans } from 'next/font/google'
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const font = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Nexus LMS",
  description: "Learn Teach with Nexus LMS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
