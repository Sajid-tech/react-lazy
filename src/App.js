import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Header from './components/Header';
// import About from "./components/About";
// import Contact from "./components/Contact";
import Banner from "./components/Banner";
import { Suspense, lazy } from "react";

const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))

function App() {
  return (
    <Router >
      <Header />

      <Routes>
        <Route exact path="/about" element={<Suspense fallback={"loading...."}><About /></Suspense>} />
        <Route exact path="/contact" element={<Suspense fallback={"loading ...."} ><Contact /></Suspense>} />
        <Route exact path="/" element={<Banner />} />
      </Routes>
    </Router>
  );
}

export default App;
