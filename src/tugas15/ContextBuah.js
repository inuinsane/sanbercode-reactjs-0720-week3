import React, { useState, createContext } from "react";

export const ContextBuah = createContext();


export const DataBuahProvider = props => {
    const [dataBuah, setDataBuah] = useState(null);
    const [statusForm, setStatusForm] = useState('create');
    const [selectedID, setSelectedID] = useState(null);

    return (
        <ContextBuah.Provider value={[dataBuah, setDataBuah, statusForm, setStatusForm, selectedID, setSelectedID]}>
            {props.children}
        </ContextBuah.Provider>
    );
};