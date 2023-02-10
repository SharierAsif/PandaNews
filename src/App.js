import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import News from "../src/Component/News"
import React from "react";



function App() {


  return (

    <div className="App dark:text-indigo-500 bg-white dark:bg-slate-900">
      
      <Navbar />
      {/* navbar */}
      <Routes>
        <Route path="/" element={ <News category={"general"}/> } />
        <Route path="/business" element={ <News category={"business"}/> } />
        <Route path="/entertainment" element={ <News category={"entertainment"}/> } />
        <Route path="/health" element={ <News category={"health"}/> } />
        <Route path="/science" element={ <News category={"science"}/> } />
        <Route path="/technology" element={ <News category={"technology"}/> } />
        <Route path="/sports" element={ <News category={"sports"}/> } />
      </Routes>
      {/* navbar routes */}

    </div>

  );
}

export default App;
