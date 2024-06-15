import Dashboard from "./components/Dashboard/Dashboard.tsx";
import Authentication from "./components/UserAuthentication/Authentication.tsx";
import PrivateRoute from "./lib/PrivateRoute.tsx";
import NotFound from "./components/NotFound/NotFound.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Authentication />} exact/>
      <Route path="*" element={<NotFound />} />
      <Route element={<PrivateRoute />}>
        <Route element={<Dashboard />} path="/dashboard" />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
