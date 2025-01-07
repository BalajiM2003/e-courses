
import { BrowserRouter } from 'react-router-dom'
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

      <BrowserRouter>
        <ScrollToTop />
        <AuthContext.AuthProvider>
          <CartProvider>
            <Header />

            <Routes>

              <Route path='/e-courses/login' element={<Login />} />
              <Route path='/e-courses/signup' element={<SignUp />} />
              <Route path='/e-courses' element={<Home />} />
              <Route path='/e-courses/about' element={<About />} />
              <Route path='/e-courses/event' element={<Event />} />
              <Route path='/e-courses/contact' element={<Contact />} />
              <Route path='/e-courses/tutor/:name' element={<CompleteDetails />} />
              <Route path='/e-courses/course/:courseTitle' element={<TutorDetails />} />
              <Route path='/e-courses/search-results' element={<SearchResults />} />
              <Route path='/e-courses/profile' element={<Profile />} />
              <Route path='/e-courses/products' element={<Details />} />
              <Route path='/e-courses/cart' element={<Cart />} />
              <Route path='/e-courses/payment' element={<PaymentPage />} />
            </Routes>            <Footer />
          </CartProvider>
        </AuthContext.AuthProvider>
      </BrowserRouter>





    </>
  )
}

export default App
