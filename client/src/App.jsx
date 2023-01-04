import "./App.css";

import {
  Footer,
  Loader,
  Navbar,
  Services,
  Transaction,
  Welcome,
} from "./Components";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome /> 
      </div>
      <Services />
      <Transaction />
    </div>
  );
}

export default App;
