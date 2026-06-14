import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Layout.css";

interface LayoutProps {
  body: React.ReactNode;
}

const Layout = ({ body }: LayoutProps) => {
  return (
    <div className="app-container">
      <header className="app-header">
        <Navbar />
      </header>

      <main className="content">
        {body}
      </main>

      <footer className="app-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;