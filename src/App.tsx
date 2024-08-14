import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';


function App() {

  return (
<>
      <Header/>
      <article className="container-fluid">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
        </article>
        <div className="container-fluid">
        <Footer/>
        </div>
    </> 
  )
}

export default App
