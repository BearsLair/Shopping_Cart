function App() {
  return (
    <>
      <nav>
        <h1 className="text-6xl mb-10">BearsDen Online Store</h1>
        <div className="flex flex-row justify-between">
          <div>
            <a className="text-2xl ml-2 mr-5" href="#">
              Home
            </a>
            <a className="text-2xl mr-5" href="#">
              Items for Sale
            </a>
          </div>
          <a className="text-2xl mr-5" href="#">
            Shopping Chart
          </a>
        </div>
        <hr />
      </nav>
    </>
  );
}

export default App;
