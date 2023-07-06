import { useState } from "react"
import './App.css'

function App() {
  const [url, setUrl] = useState()
  const [shortendUrl, setShortendUrl] = useState('');
  return (
    <div className="app">
      <div className="shortener">
        <h2>LinkTrim: Your Shortcut to sharing.</h2>
        {/* input field */}
        <form>
          <input
            placeholder="Enter URL to shorten"
            value={url}
            onChange={(e) => setDefaultResultOrder(e.target.value)}
          />
          <button>shorten</button>
        </form>
      </div>
    </div>
  );
}

export default App