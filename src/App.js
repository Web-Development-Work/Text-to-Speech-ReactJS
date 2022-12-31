import './App.css';
import {Helmet} from "react-helmet";

function App() {
  return (
    <>
      <div class="wrapper">
        <header>Text To Speech</header>
        <form action="#">
          <div class="row">
            <label>Enter Text</label>
            <textarea></textarea>
          </div>
          <div class="row">
            <label>Select Voice</label>
            <div class="outer">
              <select ></select>
            </div>
          </div>
          <button>Convert To Speech</button>
        </form>

      </div>
      <Helmet>
        <script type="text/javascript" src="./script.js"></script>
      </Helmet>
    </>
  );
}

export default App;
