import App from "../App";
import About from "../components/About";
import Home from "../components/Home";
import Cupcakes from "../components/Cupcakes";
import Order from "../components/Order";
import Torta from "../components/Torta";
import Torte from "../components/Torte";


const routes = [
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
                children:[
                    {
                        path:'/torte',
                        element:<Torte/>,
                    }
                    ,
                    {
                        path:'/cupcakes',
                        element:<Cupcakes/>
                    },
                ]
            },
            {
                path: `/torta/:id`,
                element: <Torta />,
            },
            {
                path: `/about`,
                element: <About />,
            },
            {
                path: `/order`,
                element: <Order />,
            },
        ]
    },
    
]

export default routes