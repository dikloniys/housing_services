/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as styled from "./TableMain.style";
import { ReactComponent as Hote } from "../../../svg/Icon-Counters (2).svg";
import { ReactComponent as Water } from "../../../svg/water.svg";
import { ReactComponent as Trashcan } from "../../../svg/Icon.svg";
import { store } from "../../../store/store";
import { areasStore, AreaType } from "../../../store/date";

export const TableMain = () => {
    const { meters, fetchMeters } = store;
    const [areasData, setAreasData] = useState<Record<number, AreaType>>({});

    useEffect(() => {
        fetchMeters();
    }, [fetchMeters]);

    useEffect(() => {
        async function fetchAreas() {
            const areaIds = meters.map((meter) => meter.area.id);
            const areaPromises = areaIds.map((id) => areasStore.fetchArea(id));
            const areaResults = await Promise.all(areaPromises);
            const newAreasData = areaResults.reduce((acc, cur) => {
                if (cur !== null) {
                    acc[cur.id] = cur;
                }
                return acc;
            }, {});
            setAreasData(newAreasData);
        }

        fetchAreas();
    }, [meters]);

    const deleteMeter = async (meterId: number) => {
        try {
            await axios.delete(`http://showroom.eis24.me/api/v4/test/meters/${meterId}/`);
            fetchMeters();
        }
        catch (error) {
            console.error("Error deleting meter:", error);
        }
    };

    return (
        <>
            {meters.map((meter, index) => (
                <styled.Container key={`${meter.id}-Table`}>
                    <styled.TableItemWrapper>
                        <styled.TableItem>
                            <styled.TableNum>
                                {index + 1}
                            </styled.TableNum>
                        </styled.TableItem>
                        <styled.TableItem>
                            <styled.ItemType>
                                {meter._type[0] === "HotWaterAreaMeter"
                                    ? <Hote />
                                    : <Water />}
                            </styled.ItemType>
                            <styled.ItemTypeText>
                                {meter._type[0] === "HotWaterAreaMeter" ? "ГВС" : meter._type[0] === "ColdWaterAreaMeter" ? "ХВС" : "lheujt"}
                            </styled.ItemTypeText>
                        </styled.TableItem>
                        <styled.TableItem>
                            <styled.ItemDate>
                                {new Date(meter.installation_date).toLocaleDateString("ru-RU", {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit"
                                }).replace(/\./g, "/")}
                            </styled.ItemDate>
                        </styled.TableItem>
                        <styled.TableItem>
                            <styled.ItemAutomatic>
                                {meter.is_automatic === false ? "Нет" : "Да"}
                            </styled.ItemAutomatic>
                        </styled.TableItem>
                        <styled.TableItem>
                            <styled.ItemValues>
                                {meter.initial_values}
                            </styled.ItemValues>
                        </styled.TableItem>
                        <styled.TableItem>
                            <styled.ItemAddress>
                                {areasData[meter.area.id] &&
                `${areasData[meter.area.id]?.house?.address}, ${
                    areasData[meter.area.id]?.str_number_full
                }`}
                            </styled.ItemAddress>
                        </styled.TableItem>
                        <styled.TableItem>
                            <styled.ItemDescription>
                                {meter.description}
                            </styled.ItemDescription>
                            <styled.Trashcan onClick={() => deleteMeter(meter.id)}>
                                <Trashcan />
                            </styled.Trashcan>
                        </styled.TableItem>
                    </styled.TableItemWrapper>
                </styled.Container>
            ))}
        </>
    );
};
