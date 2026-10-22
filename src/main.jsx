import { createRoot } from "react-dom/client";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import "./assets/style.css";

const headerElement = document.getElementById("site-header");
const footerElement = document.getElementById("site-footer");

if (!headerElement || !footerElement) {
  throw new Error(
    "The page is missing its shared header or footer mount point.",
  );
}

createRoot(headerElement).render(
  <Header activePage={headerElement.dataset.active ?? ""} />,
);
createRoot(footerElement).render(<Footer />);
