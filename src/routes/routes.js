import App from "../App";
import About from "../components/About";
import Home from "../components/Home";
import Info from "../components/Info";
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
import Dekoracije from "../components/Dekoracije/Dekoracije";
import Dekoracija from "../components/Dekoracije/Dekoracija";
import HowToCut from "../components/HowToCut/HowToCut";
import Macaronsi from "../components/Macaronsi/Macaronsi";
import Macaron from "../components/Macaronsi/Macaron";



const routes = [
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
                children: [
                    {
                        path: '/torte',
                        element: <Torte />,
                    },
                    {
                        path: `/torta/:id`,
                        element: <Torta />,
                    },

                    {
                        path: '/dekoracije',
                        element: <Dekoracije />,
                    },
                    {
                        path: `/dekoracija/:id`,
                        element: <Dekoracija />,
                    },

                    {
                        path: '/keksi',
                        element: <Keksi />
                    },

                    {
                        path: `/keks/:id`,
                        element: <Keks />,
                    },
                    {
                        path: '/veganske',
                        element: <Veganske />
                    },
                    {
                        path: `/veganska/:id`,
                        element: <Veganska />,
                    },
                    {
                        path: '/monoporcije',
                        element: <Monoporcije />
                    },
                    {
                        path: `/monoporcija/:id`,
                        element: <Monoporcija />,
                    },

                    {
                        path: '/macaronsi',
                        element: <Macaronsi />
                    },
                    {
                        path: `/macaronsi/:id`,
                        element: <Macaron />,
                    }

                    ,
                    {
                        path: '/slatkisto',
                        element: <SlatkiStoAll />
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
                path: `/howtocut`,
                element: <HowToCut />,
            },
            {
                path: `/info`,
                element: <Info />,
            },
        ]
    },

]

export default routes