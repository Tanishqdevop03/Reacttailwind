

import './App.css';

function App() {
  return(
    <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-slate-500 flex-col gap-10">
      <div className="bg-slate-600">Increment $$ Decrement</div>
      <div>
        <button className="bg-black">
          -
        </button>
        <div>
          0
        </div>
        <button>
          +
        </button>
      </div>
      <button>
        Reset
      </button>
    </div>
  );
}

export default App;
