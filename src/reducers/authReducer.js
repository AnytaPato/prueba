import { types } from "../types/type";

export const authReducer = (state = {}, action) => {
    switch (action.types) {
        case types.login:
            return {
                name: "Ana",
                id: "123 ",
            };

        case types.logout:
            return {};

        default:
            return state;

    }
};