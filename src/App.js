import React, {useState} from 'react';
import './styles/App.css';

function App() {
  const [value, setValue] = useState("Текст в инпуте");

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div>Javascript - язык программирования.</div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>

      <div className="post">
        <div className="post__content">
          <strong>2. Java</strong>
          <div>Java - ООП язык программирования общего назначения.</div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>

      <div className="post">
        <div className="post__content">
          <strong>3. PHP</strong>
          <div>PHP - скриптовый серверный язык программирования.</div>
        </div>
        <div className="post__btns">
          <button>Удалить</button>
        </div>
      </div>
    </div>
  )
}

export default App;