import NavBar from "./components/NavBar/NavBar";
import Contacts from "./components/contacts/contacts";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
<NavBar/>
<Intro/>
<Skills/>
<Works/>
< Contacts/>
<Footer/>
    </div>
  );
}

export default App;
