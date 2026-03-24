import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        <Sidebar />
        
        <div style={{minHeight:"80vh", padding:"20px"}}>
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}