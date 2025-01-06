import About from "./Componantes/About";
import Content from "./Componantes/Content";
import Footer from "./Componantes/Footer";
import NavBar from "./Componantes/NavBar";
import Home from "./Componantes/Home";
import ErrorNotFound from "./Componantes/ErrorNotFound";
import {BrowserRouter,HashRouter,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  /*
  const showNavBar=()=>{
    if(window.location.pathname==="/navbar"){return <NavBar/>}
  }
  const showContent=()=>{
    if(window.location.pathname==="/content"){return <Content/>}
  }
  const showFooter=()=>{
    if(window.location.pathname==="/footer"){return <Footer/>}
  }
  const showAbout=()=>{
    if(window.location.pathname==="/about"){return <About/>}
  }
    */
  return (
    <div>
   <NavBar/>

   <HashRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/content" element={<Content/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/footer" element={<Footer/>}/>
      <Route path="*" element={<ErrorNotFound/>}/>

    </Routes>
   </HashRouter>
    </div>
  );
}

export default App;
