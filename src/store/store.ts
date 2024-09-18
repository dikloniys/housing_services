import axios from "axios";
import { types } from "mobx-state-tree";

interface MetersStoreType {
    meters: any;
    setMeters(data: any): void;
    fetchMeters(): Promise<void>;
}

const MetersStore = types
    .model({
        meters: types.frozen()
    })
    .actions((self: MetersStoreType) => ({
        setMeters(data) {
        // eslint-disable-next-line no-param-reassign
            self.meters = data;
        },

        async fetchMeters() {
            try {
                const response = await axios.get("http://showroom.eis24.me/api/v4/test/meters/", {
                    params: {
                        limit: 20,
                        offset: 0
                    }
                });
                const result = response.data.results;

                self.setMeters(result);
            }
            catch (error) {
                console.error("Ошибка при получении данных:", error);
            }
        }

    }));

export const store: MetersStoreType = MetersStore.create({ meters: [] });
