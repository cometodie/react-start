const initialState = [
    { name: 'Orange', cost: '2.5' },
    { name: 'Bananas', cost: '3' },
    { name: 'Apple', cost: '2' }   
];

const products = (state = initialState, action) => { 
    if(action.type === 'ADD_PRODUCT') {
        return [
            ...state,
            action.payload
        ]
    }
    return state; 
}

export default products;