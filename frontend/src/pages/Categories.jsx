import { useApp } from "../context/AppContext";
import { useState } from "react";

export default function Categories() {
  const { categories, addCategory } = useApp();

  const [form,setForm]=useState({name:"",type:"expense"});

  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">Categories</h2>

      <div className="bg-white p-6 rounded-2xl shadow mb-6 flex gap-3">
        <input className="p-3 border rounded-lg"
          placeholder="Name"
          onChange={e=>setForm({...form,name:e.target.value})}/>

        <select className="p-3 border rounded-lg"
          onChange={e=>setForm({...form,type:e.target.value})}>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button
          onClick={()=>addCategory(form)}
          className="bg-indigo-600 text-white px-4 rounded-lg">
          Add
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow">
        {categories.map(c=>(
          <div key={c._id}
            className="flex justify-between p-4 border-b">

            <span>{c.name}</span>
            <span className="text-gray-500">{c.type}</span>

          </div>
        ))}
      </div>

    </div>
  );
}