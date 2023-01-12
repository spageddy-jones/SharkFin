
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {createBrowserRouter, RouterProvider, useHistory} from "react-router-dom";
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from "./loginPage";
import { AccountCreationPage } from "./AccountCreationPage";
import { ErrorPage } from "./error";
import { TimelinePage } from "./timeline";

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: "SharkFin Login"
        };
    }
    
    render(){
        return(
            <Helmet>
                <meta charset="utf-8"/>
                <meta http-equiv="A-UA-Compatible"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"/>
                <title> {this.state.title} </title>
                <link rel="stylesheet" href="styles.css"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap" rel="stylesheet" /> 
                <link href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Quicksand:wght@500&display=swap" rel="stylesheet" /> 
                <script src="https://kit.fontawesome.com/92d4bdaa4d.js" crossorigin="anonymous"></script>
            </Helmet>
        );
    }
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/createAccount",
        element: <AccountCreationPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "/error",
        element: <ErrorPage />,
        errorElement: <ErrorPage />
    },
    {
        path: "timeline",
        element: <TimelinePage />,
        errorElement: <ErrorPage />
    },
    {
        path: "*",
        element: <ErrorPage />,
        errorElement: <ErrorPage />
    }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Header />
        <RouterProvider router={router} />
    </React.StrictMode>
);

