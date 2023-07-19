import Header from './main/Header';
import { GlobalStyle } from './GlobalStyle';
import Middle from './main/Middle';
import Section from './main/Section';
import Login from './Login/Login'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Register from './Register/Register';
import Forgot from './Forgot/Forgot';
import Bag from './Bag/Bag';
import Productsection from './components/Productsection/Productsection';
import Check from './components/Checkout/Check';
import Information from './components/Information/Information';
import Admin from './components/Admin/Admin';
import Showdetails from './components/Showdetails/Showdetails';
import List from './components/List/List';
import Shipping from './components/Shipping/Shipping';
import Payment from './components/Payment/Payment';
import Ordergenerate from './components/Ordergenerate/Ordergenerate';
import Paytest from './components/Razor/Paytest';

const App = () => {

  return (
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/"
              element={
                <div>
                      <GlobalStyle />
                      <Header />
                      <Middle />
                      <Section />
                </div>
              }
            />
            <Route path="/login"
              element={
                <div>
                      <GlobalStyle />
                      <Header />
                      <Login/>
                      <Section />
                </div>
              }/>
              <Route path="/register"
                element={
                  <div>
                      <GlobalStyle />
                      <Header />
                      <Register/>
                      <Section/>
                  </div>
                }/>
                <Route path="/forgot"
                element={
                  <div>
                      <GlobalStyle />
                      <Header />
                      <Forgot/>
                      <Section/>
                  </div>
                }/>
                <Route path="/bag"
                element={
                  <div>
                      <GlobalStyle />
                      <Header />
                      <Bag/>
                      <Section/>
                  </div>
                }/>
                <Route path="/product/:id"
                element={
                  <div>
                      <GlobalStyle />
                      <Header />
                      <Productsection/>
                      <Section/>
                  </div>
                }/>
                <Route path="/check"
                element={
                  <div>
                      <GlobalStyle />
                      <Header />
                      <Check/>
                      <Section/>
                  </div>
                }/>
                <Route path="/admin"
                element={
                  <div>
                      <GlobalStyle />
                      <Header />
                      <Admin/>
                      <Section/>
                  </div>
                }/>
                <Route path="/info/:total"
                element={
                  <div>
                      <Information/>
                  </div>
                }/>
                <Route path="/show"
                element={
                  <div>
                      <GlobalStyle />
                      <Header />
                      <Showdetails/>
                      <Section/>
                  </div>
                }/>
                <Route path='/list'
                element={
                  <div>
                    <GlobalStyle />
                      <Header />
                      <List/>
                      <Section/>
                  </div>
                }/>
                <Route path='/ship'
                element={
                  <div>
                    <GlobalStyle />
                      <Shipping/>
                  </div>
                }/>
                <Route path='/payment'
                element={
                  <div>
                    <GlobalStyle />
                    <Payment/>
                  </div>
                }/>
                <Route path='/ordergenerate'
                element={
                  <div>
                    <Ordergenerate/>
                  </div>
                }/>
                <Route path='/paytest'
                element={
                  <div>
                    <Paytest/>
                  </div>
                }/>
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App;

