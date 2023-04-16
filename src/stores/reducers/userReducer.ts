
interface IDefaultState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface IAction {
    type: string;
    payload?: any;
}


const defaultState: IDefaultState = {
    users: [],
    loading: false,
    error: null
}


export const userReducer = (state = defaultState, action: any): IDefaultState => {
    switch (action.type) {



        default:
            return state
    }
}