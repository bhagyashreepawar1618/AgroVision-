import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import Dashboard from "./components/Dashboard.jsx";
import WeatherForecast from "./components/Features/WeatherForecast.jsx";
import Subscription from "./components/Subscription.jsx";
import DiseasePrediction from "./components/Features/DiseasePrediction.jsx";
import IrrigationPlanner from "./components/Features/IrrigationPlanner.jsx";
import CropHistory from "./components/Features/CropHistory.jsx";
import AiChatbot from "./components/Features/AiChatbot.jsx";
import UserProfile from "./components/UserProfile.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // Home route
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "forgot_password",
        element: <ForgotPassword />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "weather_forecast",
        element: <WeatherForecast />,
      },
      {
        path: "subscription",
        element: <Subscription />,
      },
      {
        path: "disease_prediction",
        element: <DiseasePrediction />,
      },
      {
        path: "irrigation_planner",
        element: <IrrigationPlanner />,
      },
      {
        path: "crop_history",
        element: <CropHistory />,
      },
      {
        path: "ai_chatbot",
        element: <AiChatbot />,
      },
      {
        path: "user_profile",
        element: <UserProfile />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={route} />,
);
