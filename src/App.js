function App() {
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(<button>{i}</button>);
    }
    return digits;
  };
  return (
    <div className="App">
      <div className="calculator">
        <div className="display"></div>
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>-</button>
          <button>+</button>
          <button>DEL</button>
        </div>
        <div className="digits">
        {createDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button> 
        </div>
      </div>
    </div>
  );
}

export default App;

// import Calculator from "./components/calculator";
// const App = () => {
//   return (
//     <div className="App">
//       <Calculator />
//     </div>
//   );
// };
// export default App;
