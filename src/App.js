import React from "react";
// import components
import Header from "./components/Header.js";
import Main from "./components/Main.js";

const App = () => {
    return(
        <div id="container">
            <Header />
            <Main />
            <footer>Footer</footer>
        </div>
    );
};

export default App;