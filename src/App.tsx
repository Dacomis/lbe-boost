import { LBEBoost } from "./LBEBoost";

function App() {
  return (
    <div
      className="bg-cover h-screen w-screen"
      style={{
        backgroundImage: `url(${require("./images/layered-waves-2lg.png")})`,
      }}
    >
      <LBEBoost />
    </div>
  );
}

export default App;
