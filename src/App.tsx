import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';


function App() {

  return (
<div className='App-container'>
      <Header/>
      <article className="content-wrapper container-fluid">
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
        {/* <div className='content-wrapper container-fluid'>
      <div className="inner-content form-content">
        <div className="leftcolumn">
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div className="fakeimg" style={{ height: '200px' }}>Image</div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco.
            </p>
          </div>
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div className="fakeimg" style={{ height: '200px' }}>Image</div>
            <p>Some text..</p>
            <p>
              Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco.
            </p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h2>About Me</h2>
            <div className="fakeimg" style={{ height: '100px' }}>Image</div>
            <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          </div>
          <div className="card">
            <h3>Popular Post</h3>
            <div className="fakeimg"><p>Image</p></div>
            <div className="fakeimg"><p>Image</p></div>
            <div className="fakeimg"><p>Image</p></div>
          </div>
          <div className="card">
            <h3>Follow Me</h3>
            <p>Some text..</p>
          </div>
        </div>
      </div>
      </div> */}
       <Footer/>
        </article>

      {/* <Footer/> */}
    </div> 
  )
}

export default App
