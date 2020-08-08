import React, { useContext, useEffect, useState } from "react";
import { ContextBuah } from "./ContextBuah";
import axios from "axios";

const ListDataBuah = () => {
  const [dataBuah, setDataBuah, statusForm, setStatusForm, selectedID, setSeletedID] = useContext(ContextBuah);
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const url = "http://backendexample.sanbercloud.com/api/fruits";

  useEffect(() => {
    if (dataBuah === null) {
      axios.get(url).then((res) => {
        setDataBuah(
          res.data.map((el) => {
            return {
              id: el.id,
              name: el.name,
              price: el.price,
              weight: el.weight,
            };
          })
        );
      });
    }
  }, [dataBuah]);

  const handleEdit = (event) => {
    let idBuah = event.target.value;
    let buah = dataBuah.find((buah) => buah.id === parseInt(idBuah));
    setSeletedID(buah.id);
    setName(buah.name);
    setPrice(buah.price);
    setWeight(buah.weight);
    
    
  };

  const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value);

    let newDataBuah = dataBuah.filter((el) => el.id !== idBuah);
    axios.delete(`${url}/${idBuah}`).then((res) => {
      console.log(res);
    });

    setDataBuah([...newDataBuah]);
  };
  

  return (
    <div
      className="table"
      style={{ border: "none", textAlign: "center", alignItems: "center" }}
    >
      <h2>Tabel Buah</h2>
      <div className="separator"></div>
      <table style={{ margin: "auto" }}>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {dataBuah !== null &&
            dataBuah.map((item, index) => {
              return (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {item.name} </td>
                  <td> {item.price} </td>
                  <td> {item.weight / 1000 + " kg"} </td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      onClick={handleEdit}
                      value={item.id}
                      className="bold"
                      style={{
                        backgroundColor: "yellow",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={handleDelete}
                      value={item.id}
                      className="bold"
                      style={{
                        backgroundColor: "red",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ListDataBuah;
