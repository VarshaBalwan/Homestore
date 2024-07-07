import React from 'react'
import './App.css'
import Home from './components/Home'
import Profile from './components/Profile'
import ForgotPassword from './components/ForgotPassword'
import UpdateEmailOrPassword from './components/UpdateEmailOrPassword'
import Payment from './components/Payment'
import Orders from './components/Orders'
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom"
import {AuthProvider} from './contexts/AuthContext'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import ProtectedRoutes from './Restrictions/ProtectedRoutes'
import UserProtectedRoutes from './Restrictions/UserProtectedRoutes'
import PaymentRoutes from './Restrictions/PaymentRoutes'
import ProductPage from './components/ProductPage'
import UpdateProfile from './components/UpdateProfile'
import OuterLogin from './components/OuterLogin'

const promise = loadStripe('pk_test_51KuGEeSEOYzUzHy5uuMF1Vlu2Dxb1uFPnOaYaySitglH6OOXxuRdsFXO7zQRT6ttRL74bdVYBaotkqG4e1E8R20A00ULewrFRa')

function App() {

  return ( 
      // creating multiple routes
      <BrowserRouter>
        <AuthProvider>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/review-page' element={<ProductPage />} />

            {/* routes protected under certain conditions */}
            <Route element={<UserProtectedRoutes />}>
                <Route path='/login' element={<OuterLogin />}/>
                <Route path='/forgot-password' element={<ForgotPassword />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
                <Route path='/profile' element={<Profile />} />
                <Route path='/update-profile' element={<UpdateProfile />} />
                <Route path='update-emailOrPassword' element={<UpdateEmailOrPassword />} />
                <Route path='/orders' element={<Orders />} />
            </Route>

            <Route element={<PaymentRoutes />}>
                <Route path='/payment'element={    
                    <Elements stripe={promise}>
                        <Payment />
                    </Elements>
                } />
            </Route>
            
        </Routes>
        </AuthProvider>
      </BrowserRouter>
  )
}

export default App;
