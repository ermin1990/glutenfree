import App from "../App";
import About from "../components/About";
import Home from "../components/Home";
import Order from "../components/Order";
import Torta from "../components/Torta";
import Torte from "../components/Torte";
import Keksi from "../components/Keksi/Keksi";
import Veganske from "../components/Veganske/Veganske";
import Veganska from "../components/Veganske/Veganska";
import Monoporcija from "../components/Monoporcije/Monoporcija";
import Monoporcije from "../components/Monoporcije/Monoporcije";
import Keks from "../components/Keksi/Keks";
import SlatkiSto from "../components/SlatkiSto/SlatkiSto";
import SlatkiStoAll from "../components/SlatkiSto/SlatkiStoAll";


const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
                children:[
                    {
                        path:'/torte',
                        element:<Torte/>,
                    },
                    {
                        path: `/torta/:id`,
                        element: <Torta />,
                    },
                    
                    {
                        path:'/keksi',
                        element:<Keksi/>
                    },
                    
                    {
                        path: `/keks/:id`,
                        element: <Keks />,
                    },
                    {
                        path:'/veganske',
                        element:<Veganske/>
                    },
                    {
                        path: `/veganska/:id`,
                        element: <Veganska />,
                    },
                    {
                        path:'/monoporcije',
                        element:<Monoporcije/>
                    },
                    {
                        path: `/monoporcija/:id`,
                        element: <Monoporcija />,
                    }
                    ,{
                        path:'/slatkisto',
                        element:<SlatkiStoAll/>
                    },
                    {
                        path: `/slatki/:id`,
                        element: <SlatkiSto />,
                    },
                ]
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