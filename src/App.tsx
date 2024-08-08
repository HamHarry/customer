import { useState } from "react";
import "./App.css";
import data from "./data/mockUpData";
import { MockUp } from "./model/mockUp";
import HomePage from "./HomePage";

const App = () => {
  const [mockUpData, setMockUpData] = useState<MockUp[]>(data);

  return (
    <div>
      <HomePage mockUpData={mockUpData[0]} />
    </div>
  );
};

export default App;
