import App from "../App";
import About from "../components/About";
import Home from "../components/Home";
import Torta from "../components/Torta";


const routes = [
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: `/torte/:id`,
                element: <Torta />,
            },
            {
                path: `/about`,
                element: <About />,
            },
        ]
    },
    
]

export default routes