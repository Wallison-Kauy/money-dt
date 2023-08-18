import { ReactNode, Suspense } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
// import { Toaster } from "@/components/ui/toaster"
// import dynamic from "next/dynamic";

// const DynamicToaster = dynamic(() => import("@/components/ui/toaster"), {
//   loading: () => <p>Loading...</p>,
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Money DT",
  description: "Gerenciador de transações pessoal",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      {/* <Toaster /> */}
       {/* <Suspense fallback={<div>Loading...</div>}>
        <DynamicToaster />
      </Suspense>  */}
    </html>
  );
}
