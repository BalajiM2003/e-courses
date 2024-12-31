
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header'
import { Routers } from './Routers'
import ScrollToTop from './ScrollToTop';
import AuthContext from './AuthContext'
import { Footer } from './Components/Footer';
import { CartProvider } from './CartContext';

function App() {


  return (
    <>

      <BrowserRouter>
        <ScrollToTop />
        <AuthContext.AuthProvider>
          <CartProvider>
            <Header />
            <Routers />
            <Footer />
          </CartProvider>
        </AuthContext.AuthProvider>
      </BrowserRouter>





    </>
  )
}

export default App
