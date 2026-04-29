import './App.css'
import logo from './assets/logo-tmp.png'

function App() {
  return (
    <main className="page">
      <div className="content">
        <div className="logo-wrap">
          <img src={logo} alt="kreirai" className="logo" />
        </div>
        <h1 className="tagline">
          <span>Kreativno.</span>
          <span>Pametno.</span>
          <span className="accent">AI.</span>
        </h1>
      </div>
    </main>
  )
}

export default App
