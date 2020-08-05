import React, { Component } from "react";


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataHargaBuah: [
        { nama: "Semangka", harga: 10000, berat: 1000 },
        { nama: "Anggur", harga: 40000, berat: 500 },
        { nama: "Strawberry", harga: 30000, berat: 400 },
        { nama: "Jeruk", harga: 30000, berat: 1000 },
        { nama: "Mangga", harga: 30000, berat: 500 },
      ],
      input: {
        nama: "",
        harga: "",
        berat: "",
      },
      indexForm: -1,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Function ketika terjadi perubahan pada form
  handleChange(event) {
    let input = { ...this.state.input };
    input[event.target.name] = event.target.value;
    this.setState({
      input,
    });
  }

  // Function ketika form disubmit
  handleSubmit(event) {
    event.preventDefault();

    let input = this.state.input;
    if (
      input["nama"].replace(/\s/g, "") !== "" &&
      input["harga"].toString().replace(/\s/g, "") !== "" &&
      input["berat"].toString().replace(/\s/g, "") !== ""
    ) {
      let newList = this.state.dataHargaBuah;
      let index = this.state.indexForm;
      // console.log(newList);  // mengecek list sebelum ditambah / diedit
      // console.log(index);  // mengecek index yang sedang aktif

      if (index == -1) {
        // newList = [...newList,input]; //ketika menggunakan spread, penambahan list di html tidak muncul 
        newList.push(input);
        // console.log(newList);  // mengecek list sesudah ditambah / diedit
      } else {
        newList[index] = input;
      }

      this.setState({
        daftarHargaBuah: newList,
        input: {
          nama: "",
          harga: "",
          berat: "",
        },
        indexForm: -1,
      });
    }
  }

  // Function ketika item di-edit
  handleEdit(event) {
    let index = event.target.value;
    let buah = this.state.dataHargaBuah[index];
    this.setState({
      input: {
        nama: buah.nama,
        harga: buah.harga,
        berat: buah.berat,
      },
      indexForm: index,
    });
  }

  // Function ketika item di-delete
  handleDelete(event) {
    let index = event.target.value;
    let list = this.state.dataHargaBuah;
    let deleted = list[this.state.indexForm];
    list.splice(index, 1);

    if (deleted !== undefined) {
      let newIndex = list.findIndex((el) => el === deleted);
      this.setState({
        daftarHargaBuah: list,
        indexForm: newIndex,
      });
    } else {
      this.setState({
        daftarHargaBuah: list,
      });
    }
  }

  render() {
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
            {this.state.dataHargaBuah.map((el, index) => {
              return (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {el.nama} </td>
                  <td> {el.harga} </td>
                  <td> {el.berat / 1000 + " kg"} </td>
                  <td style={{ textAlign: "center" }}>
                    <button
                      onClick={this.handleEdit}
                      value={index}
                      className="bold"
                      style={{
                        backgroundColor: "yellow",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    >
                      {" "}
                      Edit
                    </button>
                    <button
                      onClick={this.handleDelete}
                      value={index}
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
          <form onSubmit={this.handleSubmit}>
            <ul>
              <li>
                <label htmlFor="nama" className="bold">
                  {" "}
                  Nama Buah:{" "}
                </label>
                <input
                  type="text"
                  name="nama"
                  value={this.state.input.nama}
                  onChange={this.handleChange}
                  placeholder="Masukkan nama buah"
                />
              </li>
              <li>
                <label htmlFor="harga" className="bold">
                  {" "}
                  Harga Buah:{" "}
                </label>
                <input
                  type="text"
                  name="harga"
                  value={this.state.input.harga}
                  onChange={this.handleChange}
                  placeholder="Masukkan harga buah"
                />
              </li>
              <li>
                <label htmlFor="berat" className="bold">
                  {" "}
                  Jumlah:{" "}
                </label>
                <input
                  type="text"
                  name="berat"
                  value={this.state.input.berat}
                  onChange={this.handleChange}
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
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default List;
