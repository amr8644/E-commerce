import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { Button } from "@/components/ui/button"
import MainLayout from "./layout/MainLayout.tsx"
import HomePage from "./pages/HomePage.tsx"

export default function App() {
   const router = createBrowserRouter(
     createRoutesFromElements(
       <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />
       </Route>
     )
   );

   return <RouterProvider router={router} />;
 };
