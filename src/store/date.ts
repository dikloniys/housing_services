import axios from "axios";
import { types, flow } from "mobx-state-tree";

export interface AreaType {
    id: number;
    house: {
        address: string;
    };
    str_number_full: string;
}

export interface AreasStoreType {
    areas: Record<number, AreaType>;
    fetchArea: (id: number) => Promise<AreaType | null>;
}

const AreasStore = types
    .model({
        areas: types.optional(types.map(types.frozen<AreaType>()), {})
    })
    .actions((self) => ({
        setArea(id, data) {
            self.areas.set(id, data);
        }
    }))
    .actions((self) => ({
        fetchArea: flow(function* (id: number) {
            const key = `area_${id}`;
            const data = self.areas.get(id);

            if (data) {
                return data;
            }
            try {
                const response = yield axios.get(`http://showroom.eis24.me/api/v4/test/areas/${id}`);
                const result = response.data;

                self.setArea(id, result);
                return result;
            }
            catch (error) {
                console.error(`Error fetching area ${id}: ${error.message}`);
                return null;
            }
        })
    }));

export const areasStore = AreasStore.create({ areas: {} });

export const AreasStoreModel = types.optional(types.late(() => AreasStore), {});
