import { BrowserRouter, Route, Routes } from "react-router-dom";
import { render } from "react-dom";
// import { react } from "react";
// const render = require('react-dom/render');
import Landing from "./components/landing";

// <BrowserRouter>
//     <Routes>
//         <Route exact path="/" element={<Landing />} />
//     </Routes>
// </BrowserRouter>

const MyApp = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Landing />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

// const MyApp = () => {
//     return (
//         <div className="App">
//             <h1>kyle gendy</h1>
//         </div>
//     );
// };
  
render(<MyApp />, document.getElementById("mainDiv"));