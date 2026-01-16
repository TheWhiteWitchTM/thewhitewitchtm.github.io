import type { Metadata } from "next";
import "./globals.css";
import {ThemeProvider} from "@/witchy/theme-provider";
import AsideRight from "@/app/aside-right";
import AsideLeft from "@/app/aside-left";
import {Header} from "@/app/header";
import {Footerr} from "@/app/footerr";


export const metadata: Metadata = {
  title: "🧙‍♀️𝕿𝖍𝖊 𝖂𝖍𝖎𝖙𝖊 𝖂𝖎𝖙𝖈𝖍™✨",
  description: "🧙‍♀️𝕿𝖍𝖊 𝖂𝖍𝖎𝖙𝖊 𝖂𝖎𝖙𝖈𝖍™✨",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
	<html lang="en" suppressHydrationWarning>
    <body className="min-h-screen li bg-gray-200 dark:bg-gray-700 antialiased">
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange>
      <div className="flex w-w-full min-h-screen flex-col">
	      <Header/>
	      <div className="flex-grow">
		      <div className={"grid grid-cols-[auto_1fr_auto]"}>
			      <div>
				      <AsideLeft/>
			      </div>
			      <main className="mx-auto max-w-[400px] px-4 sm:px-6 lg:px-8 overflow-y-auto">
				      <article className="prose prose-slate lg:prose-lg mx-auto">
					      {children}
				      </article>
			      </main>
			      <div className={"mr-1"}>
				      <AsideRight/>
			      </div>
		      </div>
	      </div>
	      <Footerr/>
      </div>
    </ThemeProvider>
    </body>
    </html>
  );
}