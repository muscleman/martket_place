import React from "react";
import Header from "./Header";
import Search from "./Search";
import Filters from "./Filters";
import Content from "./Content";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Search />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
