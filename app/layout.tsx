import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import './globals.css';

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Want to know more about me",
  icons: {
    icon: "/assets/cube.png", // favicon icon (should be in /public)
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <html lang="en">
          <head>
            <link
              href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.0.0/remixicon.min.css"
              rel="stylesheet"
            />
            {/* ...other meta tags... */}
            {/* Do not add a <link rel='icon'> here, let Next.js handle it via metadata */}
          </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
