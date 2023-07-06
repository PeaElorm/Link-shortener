import { useState } from "react"
import {CopyToClipboard} from 'react-copy-to-clipboard'
import './App.css'

function App() {
  const [url, setUrl] = useState()
  const [shortendUrl, setShortendUrl] = useState('');

  const shortenUrl = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${url}`
      )
      const data = await response.json()
      setShortendUrl(data.result.full_short_link);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div className="app">
      <div className="shortener">
        <h2>LinkTrim: Your Shortcut to sharing.</h2>
        {/* input field */}
        <form onSubmit={shortenUrl}>
          <input
            placeholder="Enter URL to shorten"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button>shorten</button>
        </form>

        {/* section to view shortened URLS */}
        {shortendUrl &&
          <div className="shortener__viewShot">
            {shortendUrl}
            <CopyToClipboard text={shortendUrl}>
              <button onClick={() => alert ("URL copied to clipboard")}>copy</button>
            </CopyToClipboard>
            </div>
        }
      </div>
    </div>
      
  );
}

export default App