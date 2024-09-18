import React, { useEffect } from "react";
import * as styled from "./App.style";
import { Title } from "./Components/Title";
import { Table } from "./Components/Table";
import { GlobalStyle } from "./style/theme";
import { store } from "./store/store";

const App = () => {
    useEffect(() => {
        const fetchData = async () => {
            await store.fetchMeters();
        };
        fetchData();
    }, []);

    return (
        <styled.Container>
            <GlobalStyle />
            <Title />
            <Table />
        </styled.Container>
    );
};

export default App;
