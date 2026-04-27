import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const { pathname } = useLocation();

  const linkClass = (path) =>
    `block px-4 py-2 rounded-lg mb-2 ${
      pathname === path
        ? "bg-indigo-600 text-white"
        : "hover:bg-gray-800"
    }`;

  return (
    <div className="w-64 bg-gray-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">💰 Finance</h2>

      <Link to="/" className={linkClass("/")}>Dashboard</Link>
      <Link to="/transactions" className={linkClass("/transactions")}>Transactions</Link>
      <Link to="/budgets" className={linkClass("/budgets")}>Budgets</Link>
      <Link to="/categories" className={linkClass("/categories")}>Categories</Link>
    </div>
  );
}