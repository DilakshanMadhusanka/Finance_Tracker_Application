import { useApp } from "../context/AppContext";
import { useState } from "react";

export default function Budgets() {
  const { budgets, addBudget } = useApp();

  const [form,setForm]=useState({category:"",amount:"",month:""});

  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">Budgets</h2>

      <div className="bg-white p-6 rounded-2xl shadow mb-6 flex gap-3">
        <input className="p-3 border rounded-lg"
          placeholder="Category"
          onChange={e=>setForm({...form,category:e.target.value})}/>
        <input className="p-3 border rounded-lg"
          placeholder="Amount"
          onChange={e=>setForm({...form,amount:e.target.value})}/>
        <input className="p-3 border rounded-lg"
          placeholder="Month"
          onChange={e=>setForm({...form,month:e.target.value})}/>
        <button
          onClick={()=>addBudget(form)}
          className="bg-indigo-600 text-white px-4 rounded-lg">
          Add
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {budgets.map(b=>(
          <div key={b._id} className="bg-white p-5 rounded-2xl shadow">

            <h3 className="font-bold">{b.category}</h3>
            <p>{b.amount}</p>

            <div className="bg-gray-200 h-2 rounded mt-3">
              <div className="bg-green-500 h-2 w-1/2 rounded"></div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}