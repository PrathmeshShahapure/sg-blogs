import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Blogs - Security Platform Blogs | StackGuard",
  description: "Read StackGuard blogs on cloud security, identity protection, compliance, and security platform plans. Practical insights, best practices, and expert guidance",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} font-poppins antialiased`}
      >
        <div className="fixed z-50 top-0 left-0 bg-white w-full border-b border-gray-200">
          <Navbar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
