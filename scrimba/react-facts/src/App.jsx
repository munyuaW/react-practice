import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
  return (
    // use fragment wrapper to avoid inserting unnecessary DOM nodes
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
