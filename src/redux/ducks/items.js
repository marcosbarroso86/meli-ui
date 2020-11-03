const initialState = {
    items : [] ,
    itemDetail : {}
}

// tipo de acción
export const types = {
    FETCH_ITEMS_SUCCESS: 'FETCH_ITEMS_SUCCESS',
    FETCH_ITEM_DETAIL_SUCCESS: 'FETCH_ITEM_DETAIL_SUCCESS'
}

// reducer
const reducer = (state = initialState, action)  => {
  switch (action.type) {
    case types.FETCH_ITEMS_SUCCESS:
        return { ...state , items : [...action.payload ] }
    case types.FETCH_ITEM_DETAIL_SUCCESS:
        return { ...state , itemDetail: {...action.payload} }
    default:
        return state;
  }
}

export default reducer;

//creador de acciones
export const getItems = (searchText) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${searchText}`)
            dispatch({
                type : types.FETCH_ITEMS_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}


export const getItemById = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`https://api.mercadolibre.com/items/${id}`)
            dispatch({
                type : types.FETCH_ITEMS_SUCCESS,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}


