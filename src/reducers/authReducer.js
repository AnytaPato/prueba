import { type } from "../types/type";

export const authReducer= (state, action)=>{
    switch(action.type){
        case type.loguin:
            return {
                name: "Ana",
                id: "123 "
            };
        case type.logout:
            return {};

        default:
            return state;

    }
}