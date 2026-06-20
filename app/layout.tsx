import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Սիմոն և Սուսաննա",
  description: "Սիմոն և Սուսաննա",
  openGraph: {
    title: "Սիմոնի և Սուսաննայի հարսանեկան հրավիրատոմս",
    description: "Հարսանեկան հրավիրատոմս",
    url: "https://simon-susanna.netlify.app",
    siteName: "Սիմոն և Սուսաննա",
    images: [
      {
        url: "https://simon-susanna.netlify.app/img3.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ whiteSpace: "pre-line" }}
      className="bgC"
      >
        {children}
      </body>
    </html>
  );
}
