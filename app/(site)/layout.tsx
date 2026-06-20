import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import IntroSplash from "@/components/IntroSplash";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <IntroSplash />
      <SmoothScrollProvider>
        <Navbar />
        {children}
        <Footer />
      </SmoothScrollProvider>
    </>
  );
}
