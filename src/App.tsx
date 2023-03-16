import Main from "./components/Main";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div id="page-top" className="flex h-[100vh]   flex-col xs:flex-row ">
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
