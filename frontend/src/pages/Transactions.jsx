import { useApp } from "../context/AppContext";
import { useState } from "react";

export default function Transactions() {
  const { transactions, addTransaction } = useApp();

  const [form, setForm] = useState({
    title:"", amount:"", category:"", type:"expense"
  });

  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">Transactions</h2>

      {/* Form */}
      <div className="bg-white p-6 rounded-2xl shadow mb-6 grid md:grid-cols-5 gap-3">

        <input className="p-3 border rounded-lg"
          placeholder="Title"
          onChange={e=>setForm({...form,title:e.target.value})}/>

        <input className="p-3 border rounded-lg"
          placeholder="Amount"
          onChange={e=>setForm({...form,amount:e.target.value})}/>

        <input className="p-3 border rounded-lg"
          placeholder="Category"
          onChange={e=>setForm({...form,category:e.target.value})}/>

        <select className="p-3 border rounded-lg"
          onChange={e=>setForm({...form,type:e.target.value})}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button
          onClick={()=>addTransaction(form)}
          className="bg-indigo-600 text-white rounded-lg">
          Add
        </button>

      </div>

      {/* List */}
      <div className="bg-white rounded-2xl shadow">
        {transactions.map(t => (
          <div key={t._id}
            className="flex justify-between p-4 border-b">

            <span>{t.title}</span>
            <span className={t.type==="expense"?"text-red-500":"text-green-500"}>
              {t.amount}
            </span>

          </div>
        ))}
      </div>

    </div>
  );
}
