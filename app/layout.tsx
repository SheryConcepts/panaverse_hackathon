import "@/styles/globals.css";
import { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "react-hot-toast";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Provider from "@/components/context/redux-provider";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <ClerkProvider>
            <Provider>
              <body
                className={cn(
                  "min-h-screen bg-background font-sans antialiased",
                  fontSans.className
                )}
              >
                <ThemeProvider
                  attribute="class"
                  defaultTheme="light"
                  enableSystem
                >
                  <Toaster />
                  <div className="container relative flex min-h-screen flex-col px-10 lg:px-14">
                    {
                      // @ts-ignore
                      <Navbar />
                    }
                    <div className="flex-1">{children}</div>
                    <Footer />
                  </div>
                  <TailwindIndicator />
                </ThemeProvider>
              </body>
            </Provider>
        </ClerkProvider>
      </html>
    </>
  );
}
