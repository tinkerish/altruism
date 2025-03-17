import { createRoot } from "react-dom/client";
import "./index.css";
import { ProtectedPage } from "./pages/ProtectedPage.jsx";
import "regenerator-runtime/runtime";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage.jsx";
import MyMemePageComponent from "./pages/Meme.jsx";
import AddMemePageComponent from "./pages/AddMeme.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import MemeDetails from "./components/Memes/MemeDetails.jsx";
import ErrorPage from "./pages/Error.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<ProtectedPage />}>
        <Route index element={<HomePage />} />
        <Route path="my-event" element={<MyMemePageComponent />} />
        <Route path="add-event" element={<AddMemePageComponent />} />
        <Route path="event/:id" element={<MemeDetails />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </>
  )
);
createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
);
