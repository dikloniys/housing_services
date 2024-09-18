import React from "react";
import * as styled from "./Table.style";
import { TableMain } from "./TableMain";

export const Table = () => (
    <styled.Container>
        <styled.TitleTableWrapper>
            <styled.TitleTable>
                №
            </styled.TitleTable>
            <styled.TitleTable>
                Тип
            </styled.TitleTable>
            <styled.TitleTable>
                Дата установки
            </styled.TitleTable>
            <styled.TitleTable>
                Автоматический
            </styled.TitleTable>
            <styled.TitleTable>
                Текущие показания
            </styled.TitleTable>
            <styled.TitleTable>
                Адрес
            </styled.TitleTable>
            <styled.TitleTable>
                Примечание
            </styled.TitleTable>
        </styled.TitleTableWrapper>
        <styled.TableWrapper>
            <TableMain />
        </styled.TableWrapper>
        <styled.Bottom />
    </styled.Container>
);
