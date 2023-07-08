import React from "react";
// import components
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import Button from "./components/Button.js";

const App = () => {
    return(
        <div id="container">
            <Button />
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default App;