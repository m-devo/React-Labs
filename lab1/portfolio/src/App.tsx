import { Fragment } from 'react/jsx-runtime';
import Header from './components/Header/Header';
import Bio from './components/Bio/Bio';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import './App.css'

const App = () =>{
  return (
    <Fragment>
      <Header/>
      <Bio/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </Fragment>
  )
}

export default App