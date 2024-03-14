import Header from './components/common/Header' 
import Footer from './components/common/Footer'
import Flight from './components/Flight'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
function App() {
  return (
    <main>
         <Header/>
         <Flight flightNo="1" imgSrc='/src/assets/images/1-200x200.jpg' ticketAble={true} />
         <Flight flightNo="2" imgSrc='/src/assets/images/2-200x200.jpg' ticketAble={true } />
         <Flight flightNo="3" imgSrc='/src/assets/images/3-200x200.jpg' ticketAble={false} />
         <Flight flightNo="4" imgSrc='/src/assets/images/4-200x200.jpg' ticketAble={false} />
         <Flight flightNo="5" imgSrc='/src/assets/images/5-200x200.jpg' ticketAble={true} />
         <Flight/>
         <Footer/>
    </main>
  )
}

export default App
