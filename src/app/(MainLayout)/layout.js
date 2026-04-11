import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto min-h-[calc(100vh-200px)]">
        {children}
      </div>
      <Footer />
    </>
  );
}
