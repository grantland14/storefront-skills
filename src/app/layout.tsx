import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Storefront Skills — Claude Skills for eCommerce Founders",
  description:
    "14 Claude Skills designed to help eCommerce founders drive better results using AI.",
  openGraph: {
    title: "Storefront Skills — Claude Skills for eCommerce Founders",
    description:
      "14 Claude Skills designed to help eCommerce founders drive better results using AI.",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Storefront Skills — Claude Skills for eCommerce Founders",
    description:
      "14 Claude Skills designed to help eCommerce founders drive better results using AI.",
    images: ["/og-image.jpg"],
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Karla:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
