import styled from "styled-components";

export const Container = styled.div`
`;
export const TableItem = styled.div`
    margin-left: 12px;
    display: flex;
    align-items: center;
    gap: 8px;
`;
export const ItemType = styled.div`
`;
export const ItemTypeText = styled.div`
`;
export const Trashcan = styled.div`
    background-color: rgba(254, 227, 227, 1);
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 40px;
    height: 40px;
    right: 12px;
    top: 6px;
    display: none;
    cursor: pointer;
    & path {
        fill: rgba(197, 48, 48, 1);
    }

    &:hover path {
        fill: rgba(155, 44, 44, 1);
    }
    &:hover {
        background-color: rgba(254, 215, 215, 1);
    }
`;
export const TableItemWrapper = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 3.41% 8.52% 11.36% 9.09% 10.37% 30.54% 26.7%;
    grid-template-rows: 52px;
    border-bottom: 1px solid #E0E5EB;
    &:hover {
        background: rgba(247, 248, 249, 1);
    }
    &:hover ${Trashcan} {
        display: flex;
    }
`;
