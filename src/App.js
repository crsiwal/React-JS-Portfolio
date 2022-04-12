import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Preloader from "./components/Widget/Pre";
import Navbar from "./components/Widget/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Widget/Footer";
import Resume from "./components/Resume/Resume";
import PageNotFound from "./components/Pages/PageNotFound";
import ScrollToTop from "./components/Widget/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/style.css";

export default function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/project" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/resume" component={Resume} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}
