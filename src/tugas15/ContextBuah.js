import React, { useState, createContext } from "react";

export const ContextBuah = createContext();


export const DataBuahProvider = props => {
    const [dataBuah, setDataBuah] = useState(null);
    const [statusForm, setStatusForm] = useState('create');

    return (
        <ContextBuah.Provider value={[dataBuah, setDataBuah, statusForm, setStatusForm]}>
            {props.children}
        </ContextBuah.Provider>
    );
};