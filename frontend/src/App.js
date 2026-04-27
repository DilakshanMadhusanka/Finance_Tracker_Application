import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { AppProvider } from "./context/AppContext";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Budgets from "./pages/Budgets";
import Categories from "./pages/Categories";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <AuthProvider>
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>

            <Route path="/" element={<Layout><Dashboard /></Layout>}/>
            <Route path="/transactions" element={<Layout><Transactions/></Layout>}/>
            <Route path="/budgets" element={<Layout><Budgets/></Layout>}/>
            <Route path="/categories" element={<Layout><Categories/></Layout>}/>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </AuthProvider>
  );
}

export default App;
