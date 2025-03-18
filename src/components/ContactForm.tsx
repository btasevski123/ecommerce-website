import React from "react";

const InfoContactForm = () => {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold border-b pb-2 mb-4">Информации</h2>
      <div className="grid grid-cols-2 gap-4">
        <input type="text" placeholder="Име" className="p-2 border rounded w-full" />
        <input type="text" placeholder="Презиме" className="p-2 border rounded w-full" />
        <input type="text" placeholder="Адреса" className="p-2 border rounded w-full" />
        <input type="text" placeholder="Компанија" className="p-2 border rounded w-full" />
        <input type="text" placeholder="Поштенски код" className="p-2 border rounded w-full" />
        <input type="text" placeholder="Град" className="p-2 border rounded w-full" />
        <select className="p-2 border rounded w-full">
          <option>Држава</option>
          <option>Македонија</option>
          <option>Србија</option>
          <option>Црна Гора</option>
        </select>
        <input type="text" placeholder="Општина" className="p-2 border rounded w-full" />
      </div>
      
      <h2 className="text-lg font-semibold border-b pb-2 mt-6 mb-4">Контакт</h2>
      <div className="grid grid-cols-2 gap-4">
        <input type="email" placeholder="Email" className="p-2 border rounded w-full" />
        <input type="text" placeholder="Телефонски број" className="p-2 border rounded w-full" />
      </div>
    </div>
  );
};

export default InfoContactForm;
