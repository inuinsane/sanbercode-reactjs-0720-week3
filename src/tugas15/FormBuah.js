import React, { useContext, useState } from "react";
import { ContextBuah } from "./ContextBuah";
import axios from 'axios';

const FormBuah = () => {
  const [dataBuah, setDataBuah, statusForm, setStatusForm, selectedID, setSelectedID] = useContext(ContextBuah);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [weight, setWeight] = useState(0);
  const url = "http://backendexample.sanbercloud.com/api/fruits";


  const handleSubmit = (event) => {
    event.preventDefault();
    setDataBuah([...dataBuah, { name, price, weight }]);
    if (
      name.replace(/\s/g, "") !== "" &&
      price.replace(/\s/g, "") !== "" &&
      weight !== ""
    ) {
      if (statusForm === "create") {
        axios.post(url, { name, price, weight }).then((res) => {
          setDataBuah([
            ...dataBuah,
            {
              id: res.data.id,
              name: res.data.name,
              price: res.data.price,
              weight: res.data.weight,
            },
          ]);
        });
      } else if (statusForm === "edit") {
        axios
          .put(`${url}/${selectedID}`, { name, price, weight })
          .then((res) => {
            console.log(res);
            let buah = dataBuah.find((el) => el.id === selectedID);
            buah.name = name;
            buah.price = price;
            buah.weight = weight;
            setDataBuah([...dataBuah]);
          });
      }
    }
    setName("");
    setPrice(0);
    setWeight(0);
    setStatusForm('create');
    setSelectedID(null);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };

  return (
    <div className="App">
      <div className="separator"></div>
      <h2>Formulir Tambah Buah</h2>
      <div id="form">
        <form onSubmit={handleSubmit}>
          <ul>
            <li>
              <label htmlFor="nama" className="bold">
                Nama Buah:
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChangeName}
                placeholder="Masukkan nama buah"
              />
            </li>
            <li>
              <label htmlFor="harga" className="bold">
                Harga Buah:
              </label>
              <input
                type="number"
                name="price"
                value={price}
                onChange={handleChangePrice}
                placeholder="Masukkan harga buah"
              />
            </li>
            <li>
              <label htmlFor="berat" className="bold">
                Jumlah:
              </label>
              <input
                type="text"
                name="weight"
                value={weight}
                onChange={handleChangeWeight}
                placeholder="Jumlah buah (gr)"
              />
            </li>
          </ul>
          <button
            style={{
              backgroundColor: "green",
              color: "whitesmoke",
              fontSize: "15px",
              border: "none",
              padding: "5px",
              borderRadius: "5px",
            }}
            className="bold"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormBuah;
