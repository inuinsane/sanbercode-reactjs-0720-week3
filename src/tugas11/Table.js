import React, { Component } from 'react';

let buah = [
    {nama: "Semangka", harga: 10000, berat: "1 kg"},
    {nama: "Anggur", harga: 40000, berat: "0.5 kg"},
    {nama: "Strawberry", harga: 30000, berat: "0.4 kg"},
    {nama: "Jeruk", harga: 30000, berat: "1 kg"},
    {nama: "Mangga", harga: 30000, berat: "0.5 kg"},
];

class Table extends Component {
    render() {
        return (
            <table className="App table">
                <thead className="thead">
                    <tr>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Berat</th>
                    </tr>
                </thead>
                <tbody className="tbody">
                    {buah.map(item => {
                        return (
                            <tr>
                                <td>{item.nama}</td>
                                <td>{item.harga}</td>
                                <td>{item.berat}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}


export default Table;