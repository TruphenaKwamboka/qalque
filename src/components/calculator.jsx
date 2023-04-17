import axios from "axios";
const Calculator = () => {
  const Makerequest = () => {
    axios
      .post("http://127.0.0.1:5000/arithmetic/addition/", {
        data: [3, 4, 5],
      })
      .then((response) => {
        console.log(response.data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button onClick={() => Makerequest()}>Make request</button>
    </div>
  );
};
export default Calculator;
