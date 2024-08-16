import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/index.js";
import ErrorPage from "./pages/ErrorPage.jsx";
import { ExerciseContextProvider } from "./services/ExerciseContext.jsx";
import { YoutubeContextProvider } from "./services/YoutubeContext.jsx";
import { ThemeProvider } from "@emotion/react";
import theme from "./components/Home/style.js";
import Spinner from "./utils/Spinner.jsx";
import ShimmerDetail from "./utils/ShimmerDetail.jsx";

const HomePageLazy = React.lazy(() => import("./pages/HomePage.jsx"));
const ExercisePageLazy = React.lazy(() => import("./pages/ExercisePage.jsx"));

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<Spinner addCss="py-56" />}>
              <HomePageLazy />
            </Suspense>
          ),
        },
        {
          path: "/:id",
          element: (
            <Suspense fallback={<ShimmerDetail addCss="py-20" />}>
              <ExercisePageLazy />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ExerciseContextProvider>
          <YoutubeContextProvider>
            <RouterProvider router={route} />
          </YoutubeContextProvider>
        </ExerciseContextProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
