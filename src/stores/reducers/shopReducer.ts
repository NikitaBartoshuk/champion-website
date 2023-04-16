
interface IShops {
    id: null | string;
    title: string;
    description: string;
}

interface IShopReducerState {shops: any, isError: boolean}

export const defaultState: any = {
    shops: {
        items: [],
        isError: false,
    }
}



export const shopReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case "GET_SHOPS":
            return {
                ...state,
                shops : {
                    ...state.shops,
                    items: action.payload
                }
            }

        case "ERROR":
            return {
                ...state,
                shops : {
                    ...state.shops,
                    isError: action.payload
                }
            }


        default:
            return state
    }
}