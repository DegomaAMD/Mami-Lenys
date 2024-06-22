import { BrowserRouter, Route, Navigate, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <RoutesWithTransitions/>
    </BrowserRouter>
    </>
  );
}

function RoutesWithTransitions(){
  const location = useLocation();
  return(
    <TransitionGroup>
      <CSSTransition key={location.key} timeout={300} classNames="fade">
        <Routes>
          <Route exact path="/" element={<Navigate to="/Home"/>}/>
          <Route exact path="/Home" element={<Home/>}/>
          <Route exact path="/About" element={<About/>}/>
          <Route exact path="/Shop" element={<Shop/>}/>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default App;
