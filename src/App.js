import Header from "./components/Header/Header";
import "./app.css"
import Home from "./Home.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import Work from "./Work.jsx";
import Certifications from "./Certifications.jsx";
import Contact from "./Contact.jsx";
import {Route} from 'react-router-dom';

function App() {
  return (
      <body>
        <div className="glass-container">
          <Header />
          <div className="main-content">
            <div className="container">
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
  );
}

export default App;
