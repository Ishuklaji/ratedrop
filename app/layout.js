import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

export const metadata = {
  title: "Rate Drop",
  description: "A simple price tracking app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Toaster richColors />
      </body>
    </html>
  );
}
