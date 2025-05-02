import "./globals.css";
import {Outfit} from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "./provider";
import { Toaster } from "@/components/ui/sonner";


const outfit=Outfit({subsets:['latin']});
//language should be here

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={outfit.className}
      >
        <Provider>
          {children}
        </Provider>
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
