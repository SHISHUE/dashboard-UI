import HomePage from "./components/pages/HomePage";
import Sidebar from "./components/pages/Sidebar";
import Navbar from "./components/utils/Navbar";

const App = () => {
  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 bg-zinc-900 text-white hide-scrollbar shadow-black">
        <Sidebar />
      </div>
      
      {/* Main content */}
      <div className="w-full md:w-3/4 flex flex-col">
        <Navbar />
        <div className="flex-grow overflow-auto overflow-x-hidden">
          <HomePage />
        </div>
      </div>
    </div>
  );
}

export default App;
