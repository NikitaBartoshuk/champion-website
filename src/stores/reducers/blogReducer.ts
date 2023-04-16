
interface IBlogs {
    id: null | string;
    title: string;
    description: string;
}

interface IBlogReducerState {blogs: any, isError: boolean}

export const defaultState: any = {
    blogs: {
        items: [],
        isError: false,
    }
}


export const blogReducer = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case "GET_BLOGS":
            return {
                ...state,
                blogs : {
                    ...state.blogs,
                    items: action.payload
                }
            }

        case "ERROR":
            return {
                ...state,
                blogs : {
                    ...state.blogs,
                    isError: action.payload
                }
            }


        default:
            return state
    }
}