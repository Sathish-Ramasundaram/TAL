import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="page">
      <Header />

      <main className="content">
        <ErrorBoundary>
          <Dashboard />
        </ErrorBoundary>
      </main>


      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>

    </div>
  );
}

export default App;
