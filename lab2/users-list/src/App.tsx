import { Fragment } from 'react/jsx-runtime';
import Header from './components/Header/Header';
import UsersList from './components/UsersList/UsersList';
import './App.css'

const App = () =>{
  return (
    <Fragment>
      <Header/>
      <UsersList/>
    </Fragment>
  )
}

export default App