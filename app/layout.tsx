import { GeistSans } from "geist/font/sans";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

// Add the necessary module and type declarations for Metadata
import { Metadata } from "next";


  export const metadata: Metadata = {
    metadataBase: new URL('https://uni-cat.vercel.app/'),
    title: {
      default: "UniCat",
      template: "%s | uni-cat.vercel.app",
    },
    description: "UniCat | UNICAT is a user-friendly application aimed at simplifying the college selection process for students. It provides a platform where students can catalog their college choices along with essential information such as placement statistics, club offerings, gender ratio, and expenditure on college services. This application aims to empower students with the necessary insights to make informed decisions about their academic future.",
    openGraph: {
      title: "UniCat",
      description: "UniCat | UNICAT is a user-friendly application aimed at simplifying the college selection process for students. It provides a platform where students can catalog their college choices along with essential information such as placement statistics, club offerings, gender ratio, and expenditure on college services. This application aims to empower students with the necessary insights to make informed decisions about their academic future.",
      url: "https://uni-cat.vercel.app/",
      siteName: "uni-cat.vercel.app",
      images: [
        {
          url: "https://res.cloudinary.com/dfyrk32ua/image/upload/v1710646282/Frame_2_6_rc6ajq.png",
          width: 500,
          height: 500,
          alt: 'Image',
        },
      ],
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      shortcut: "/favicon.png",
    },
  };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
