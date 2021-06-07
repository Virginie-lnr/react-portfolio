import Header from "./components/Header/Header";
import "./app.css"
import Home from "./Home.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Work from "./Work.jsx";
import Certifications from "./Certifications.jsx";
import Contact from "./Contact.jsx";
import {Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <body>
        <div className="glass-container">
          <Header />
          <div class="main-content">
            <div class="container">
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/my-work" component={Work} />
                <Route exact path="/certifications" component={Certifications} />
                <Route exact path="/contact" component={Contact} />
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
