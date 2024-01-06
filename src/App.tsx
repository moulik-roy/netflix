import './App.css';
import Banner from './components/Banner/Banner';
import Genre from './components/Genre/Genre';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Genre title="NETFLIX Originals" focus />
      <Genre title="Top Rated" />
      <Genre title="Action" />
      <Genre title="Comedy" />
      <Genre title="Romance" />
      <Genre title="Horror" />
      <Genre title="Documentaries" />
    </div>
  )
}

export default App
