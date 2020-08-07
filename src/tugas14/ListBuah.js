import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ListBuah() {
  const [dataBuah, setDataBuah] = useState(null);
  const [inputName, setInputName] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [inputWeight, setInputWeight] = useState('');
  const [selectedId, setSelectedId] = useState(0);
  const [statusForm, setStatusForm] = useState('create');
  const url = 'http://backendexample.sanbercloud.com/api/fruits';




  useEffect(() => {
    if (dataBuah === null) {
      axios.get(url)
        .then(res => {
          setDataBuah(res.data.map(el => { return { id: el.id, name: el.name, price: el.price, weight: el.weight } }))
        })
    }
  }, [dataBuah]);

  const handleEdit = (event) => {
    let idBuah = event.target.value;
    let buah = dataBuah.find(x => x.id == idBuah);
    console.log(buah);
    setStatusForm('edit');
    setSelectedId(buah.id);
    setInputName(buah.name);
    setInputPrice(buah.price);
    setInputWeight(buah.weight);
  }


  const handleDelete = (event) => {
    let idBuah = parseInt(event.target.value)

    let newDataBuah = dataBuah.filter(el => el.id != idBuah);
    axios.delete(`${url}/${idBuah}`)
    .then(res => {
      console.log(res)
    })
          
    setDataBuah([...newDataBuah])
  }

  const handleChange = (event) => {
    if (event.target.name === 'name') {
      setInputName(event.target.value);
    } if (event.target.name === 'price') {
      setInputPrice(event.target.value);
    } if (event.target.name === 'weight') {
      setInputWeight(event.target.value);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let name = inputName;
    let price = inputPrice;
    let weight = inputWeight;
    if (name.replace(/\s/g, "") !== "" && price.replace(/\s/g, "") !== "" && weight !== "") {
      if (statusForm === 'create') {
        axios.post(url, { name, price, weight })
          .then(res => {
            setDataBuah([...dataBuah, { id: res.data.id, name: res.data.name, price: res.data.price, weight: res.data.weight }])
          })
      } else if(statusForm === 'edit') {
        axios.put(`${url}/${selectedId}`, { name, price, weight })
          .then(res => {
            console.log(res);
            let buah = dataBuah.find(el => el.id === selectedId)
            buah.name = name;
            buah.price = price;
            buah.weight = weight;
            setDataBuah([...dataBuah]);
          })
      }
      let newData = dataBuah;
      console.log(newData);
    }
    console.log(event.target.value)
  }




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
          {dataBuah !== null && dataBuah.map((item, index) => {
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
                value={inputName}
                onChange={handleChange}
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
                value={inputPrice}
                onChange={handleChange}
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
                value={inputWeight}
                onChange={handleChange}
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
  )
}



export default ListBuah;