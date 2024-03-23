import "./globals.css"
import Footer from "../../components/Footer"
import Header from "../../components/Header";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata = {
  title: "Od Yapı Danışmanlık",
  description: "Od Yapı Danışmanlık LTD.ŞTİ.",
};

export default function RootLayout({ children,params:{locale} }) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={"min-h-screen bg-gray-950 font-allura"}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
