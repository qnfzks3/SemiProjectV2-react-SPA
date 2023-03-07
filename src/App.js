import React from "react";

import Header from "./components/layout/Header";
import Main from "./components/pages/Main";
import Footer from "./components/layout/Footer";





//localhost: 3000/ -> Home
//localhost: 3000/stuff -> Stuff
//localhost: 3000/contact -> Contact



function App() {
  return (
    <div >
        <Header />
        <Main />
        <Footer />
    </div>
  );
}


export default App;
