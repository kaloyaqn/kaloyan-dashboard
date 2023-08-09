import React, { useState } from 'react';
import axios from 'axios'; // Import axios for making API requests
import FormButton from '../Buttons/FormButton';

const EditPopup = ({ rowData, onClose, onSave, }) => {
  const [editedData, setEditedData] = useState(rowData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Assuming rowData._id contains the appropriate _id value for the current row
    const id = rowData._id;
    console.log(id);
    // Make an API call to update the data
    fetch(`/api/svetnime/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        onSave(editedData); // Pass edited data to the parent component
      })
      .catch((error) => {
        console.error('Failed to update data: ', error);
      });
  };
  
  

  return (
    <div className="edit-popup">
      <h2>Редактирай продукт</h2>
      <div>
        <label>Продукт</label>
        <input
          type="text"
          name="svetnimeProduct"
          value={editedData.svetnimeProduct}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Линк към продукта</label>
        <input
          type="text"
          name="svetnimeLink"
          value={editedData.svetnimeLink}
          onChange={handleInputChange}
        />
      </div>
        <div className='flex space-between'>
        <div style={{width: "48%"}}>
        <label>Име на клиент</label>
        <input
          type="text"
          name="svetnimeClientName"
          value={editedData.svetnimeClientName}
          onChange={handleInputChange}
        />
      </div>
      <div style={{width: "48%"}}>
        <label>Номер на клиент</label>
        <input
          type="number"
          name="svetnimeClientNumber"
          value={editedData.svetnimeClientNumber}
          onChange={handleInputChange}
        />
      </div>
        </div>
     <div className='flex space-between'>
     <div style={{width: "48%"}}>
        <label>ЛА/Офис</label>
        <select
          name="svetnimeOrderShippingType"
          value={editedData.svetnimeOrderShippingType}
          onChange={handleInputChange}
        >
          <option value="ЛА">Личен адрес</option>
          <option value="Офис">Офис</option>
        </select>
      </div>
      <div style={{width: "48%"}}>
        <label>Спедиторска фирма</label>
        <select
          name="svetnimeSpeditorskaFirma"
          value={editedData.svetnimeSpeditorskaFirma}
          onChange={handleInputChange}
        >
          <option value="Спиди">Спиди</option>
          <option value="Еконт">Еконт</option>
        </select>
      </div>
     </div>
      <div>
        <label>Адрес на клиент</label>
        <input
          type="text"
          name="svetnimeClientAddress"
          value={editedData.svetnimeClientAddress}
          onChange={handleInputChange}
        />
      </div>
    <div className='flex space-between'>
    <div style={{wdith: "48%"}}>
        <label>Статус на проекта</label>
        <select
          name="svetnimeOrderStatus"
          value={editedData.svetnimeOrderStatus}
          onChange={handleInputChange}
        >
          <option value="Обработва се">Oбработва се</option>
          <option value="Обработена">Обработена</option>
        </select>
      </div>
      <div style={{wdith: "48%"}}>
        <label>Платежен статус</label>
        <select
          name="svetnimePriceStatus"
          value={editedData.svetnimePriceStatus}
          onChange={handleInputChange}
        >
          <option value="Неплатен">Неплатен</option>
          <option value="Платен">Платен</option>
        </select>
      </div>
    </div>
      <div>
        <label>Цена (без доставката)</label>
        <input
          type="double"
          name="svetnimeOrderPrice"
          value={editedData.svetnimeOrderPrice}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Бележки</label>
        <textarea
          name="svetnimeBelejki"
          value={editedData.svetnimeBelejki}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-button-group">
        <FormButton title="Готово" className="w-100" onClick={handleSave}>Save</FormButton>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditPopup;
