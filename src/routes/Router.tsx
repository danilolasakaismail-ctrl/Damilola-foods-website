import { createBrowserRouter,  } from "react-router-dom";
import HomePageLayout from "../layout/HomePageLayout";
import HomeComp from "../pages/Homepage/HompComp";
import ContactpageLayout from "../layout/ContactpageLayout";
import ContactComp from "../pages/Contactpage/ContactComp";
// import ShowCase from "../pages/Homepage/ShowCase";

export const element =createBrowserRouter([
    {
        path: "/",
        element: <HomePageLayout/>,
        children: [
        {
            index: true,
            element: <HomeComp/>
        }
    ]
    },
     {
        path: "/contact",
        element: <ContactpageLayout/>,
        children: [
            {
                index: true,
                element: <ContactComp/>
            }
        ]

    },
],)

