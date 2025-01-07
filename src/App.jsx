
import { BrowserRouter, HashRouter } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import ScrollToTop from './ScrollToTop';
import AuthContext from './AuthContext'
import { Footer } from './Components/Footer';
import { CartProvider } from './CartContext';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { SignUp } from './Pages/SignUp';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Event } from './Pages/Event';
import TutorDetails from './Pages/TutorDetails';
import { CompleteDetails } from './Pages/CompleteDetails';
import SearchResults from './Pages/SearchResult';
import { Cart } from './Cart';
import { Profile } from './Pages/Profile';
import { Details } from './Pages/Details';
import PaymentPage from './Pages/PaymentPage';
function App() {


  return (
    <>

      <HashRouter basename='/e-courses'>
        <ScrollToTop />
        <AuthContext.AuthProvider>
          <CartProvider>
            <Header />

            <Routes>

              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/home' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/event' element={<Event />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/tutor/:name' element={<CompleteDetails />} />
              <Route path='/course/:courseTitle' element={<TutorDetails />} />
              <Route path='/search-results' element={<SearchResults />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/products' element={<Details />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/payment' element={<PaymentPage />} />
            </Routes>            <Footer />
          </CartProvider>
        </AuthContext.AuthProvider>
      </HashRouter>





    </>
  )
}

export default App
