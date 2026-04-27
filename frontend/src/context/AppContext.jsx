import { createContext, useContext, useState, useEffect } from "react";
import API from "../api/axios";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchTransactions = async () => {
    const res = await API.get("/transactions");
    setTransactions(res.data.data || res.data);
  };

  const fetchBudgets = async () => {
    const res = await API.get("/budgets");
    setBudgets(res.data);
  };
  
  const fetchCategories = async () => {
    const res = await API.get("/categories");
    setCategories(res.data);
  };

  const addTransaction = async (data) => {
    await API.post("/transactions", data);
    fetchTransactions();
  };

  const addBudget = async (data) => {
    await API.post("/budgets", data);
    fetchBudgets();
  };

  const addCategory = async (data) => {
    await API.post("/categories", data);
    fetchCategories();
  };

  const deleteBudget = async (id) => {
    await API.delete(`/budgets/${id}`);
    fetchBudgets();
  };

  const deleteCategory = async (id) => {
    await API.delete(`/categories/${id}`);
    fetchCategories();
  };

  useEffect(() => {
    fetchTransactions();
    fetchBudgets();
    fetchCategories();
  }, []);

  return (
    <AppContext.Provider value={{
      transactions,
      budgets,
      categories,
      addTransaction,
      addBudget,
      addCategory,
      deleteBudget,
      deleteCategory
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);