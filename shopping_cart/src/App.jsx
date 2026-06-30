import "./App.css";

function App() {
  return (
    <>
      <nav>
        <h1>BearsDen Online Store</h1>
        <div className="nav-links-div">
          <div>
            <a className="store-link" href="#">
              Home
            </a>
            <a className="store-link" href="#">
              Items for Sale
            </a>
          </div>
          <a className="store-link" href="#">
            Shopping Chart
          </a>
        </div>
        <hr />
      </nav>
    </>
  );
}

export default App;
