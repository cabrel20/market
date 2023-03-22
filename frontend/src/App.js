import React from 'react'
import { Routes,Route} from 'react-router-dom'
import { LoginPage,HomePage,SignupPage,BestSellingPage,ProductPage,EventPage,FAQPage } from './pages'

function App() {
  return (
    <React.Fragment>
       <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<SignupPage/>}/>
        <Route path='/products' element={<ProductPage/>}/>
        <Route path='/best-selling' element={<BestSellingPage/>}/>
        <Route path='/events' element={<EventPage/>}/>
        <Route path='/FAQ' element={<FAQPage/>}/>
       </Routes>
    </React.Fragment>
  )
}

export default App
