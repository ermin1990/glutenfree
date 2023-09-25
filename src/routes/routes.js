import App from "../App";
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
        ]
    },
    {
        path: `/torte/:id`,
        element: <Torta />,
    },
]

export default routes