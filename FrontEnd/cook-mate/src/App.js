import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";

import React from "react";
import RecentRecipes from "./Components/RecentRecipes/RecentRecipes";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Layout from "./Components/Layout/Layout";
import AddRecipes from "./Components/AddRecipes/AddRecipes";
import RecipesDetails from "./Components/RecipesDetails/RecipesDetails";
import { globalStore } from "./Redux/store";
import { Provider } from "react-redux";
import Guard from "./Components/Guard/Guard";
import Profile from "./Components/Profile/Profile";
import UpdateMeal from "./Components/Profile/UpdateMeal";
import { QueryClient, QueryClientProvider } from "react-query";
import ChangePassword from "./Components/ChangePassword/ChangePassword";

export default function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: "/login", element: <Login /> },
        { path: "/profile", element: <Guard><Profile/></Guard> },
        { path: "/recentRecipes", element: <Guard><RecentRecipes /></Guard> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        { path: "/addRecipes", element:<Guard><AddRecipes/></Guard>  },
        { path: "/updateMeal/:_id", element:<Guard><UpdateMeal/></Guard>  },
        { path: "/changePassword", element:<Guard><ChangePassword/></Guard>},
        { path: "/recipesDetails/:_id", element:<Guard><RecipesDetails/></Guard>  },
    ],
    },
  ]);
const queryClient = new QueryClient();
  return (
      <QueryClientProvider client={queryClient }>
    <Provider store={globalStore}>

    <RouterProvider router={routers}>
    </RouterProvider>
    </Provider>
      </QueryClientProvider>
  );
}
