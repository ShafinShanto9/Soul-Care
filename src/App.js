import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Appointment from './Pages/Appointment/Appointment';
import Contact from './Pages/Contact/Contact';
import Footer from './Pages/Home/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import MenuBar from './Pages/Home/MenuBar/MenuBar';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import TopMenu from './Pages/Home/TopMenu/TopMenu';
import Login from './Pages/Login/Login/Login';
import Registration from './Pages/Login/Login/Registration/Registration';
import PrivetRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <TopMenu></TopMenu>
      <MenuBar></MenuBar>
      <Switch>
        <Route exact path ='/'>
            <Home></Home>
        </Route>
        <Route path = '/home'>
            <Home></Home>
        </Route>
        <Route path ='/login'>
          <Login></Login>
        </Route>
        <PrivetRoute path ='/service/:serviceID'>
          <ServiceDetails></ServiceDetails>
        </PrivetRoute>
        <Route path ='/signup'>
          <Registration></Registration>
        </Route>
        <PrivetRoute path ='/appointment'>
          <Appointment></Appointment>
        </PrivetRoute>
        <Route path ='/contact'>
          <Contact></Contact>
        </Route>
        <Route path ='*'>
          <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
