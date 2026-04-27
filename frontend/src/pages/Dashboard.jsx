import { useApp } from "../context/AppContext";

export default function Dashboard() {
  const { transactions } = useApp();

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a,b)=>a+b.amount,0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a,b)=>a+b.amount,0);

  return (
    <div className="grid md:grid-cols-3 gap-6">

      <Card title="Income" value={income} color="bg-green-500"/>
      <Card title="Expense" value={expense} color="bg-red-500"/>
      <Card title="Balance" value={income - expense} color="bg-indigo-500"/>

    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div className={`p-6 rounded-2xl text-white shadow ${color}`}>
      <p className="opacity-80">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  );
}
