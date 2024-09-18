import styled from "styled-components";

export const Container = styled.div`
    border: 1px solid rgba(240, 243, 247, 1);
    border-radius: 0 0 12px 12px;
`;
export const TitleTableWrapper = styled.div`
    display: grid;
    grid-template-columns: 3.41% 8.52% 11.36% 9.09% 10.37% 30.54% 26.7%;
    grid-template-rows: 32px;
    background: rgba(240, 243, 247, 1);
    border: 1px solid rgba(240, 243, 247, 1);
    border-radius: 12px 12px 0 0;
`;
export const TitleTable = styled.div`
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    color: rgba(105, 113, 128, 1);
    display: flex;
    align-items: center;
    margin-left: 12px;
`;
export const TableWrapper = styled.div`
    max-height: calc(100vh - 163px) ;
    overflow-y: auto; 
    width: 100%;
`;
export const Bottom = styled.div`
    border-radius: 0px 0px 8px 8px;
    border: 1px solid rgba(240, 243, 247, 1);
    height: 48px;
    width: 100%;
`;
