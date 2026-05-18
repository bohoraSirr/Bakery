import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Featured from './components/Featured/Featured'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <Featured />
      </main>
      <Footer />
    </div>
  )
}

export default App
