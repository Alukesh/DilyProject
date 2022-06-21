import {createSlice} from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: 'user',
    initialState: {
        user: {
            email: ''
        }
    },
    reducers: {
        findUser: (state, action) => {
            state.user = action.payload.user
        },

        logOutUser: (state) => {
            state.user = {
                email: ''
            }
        },
        addFavouriteUser: (state,action) => {
            state.user = {
                ...action.payload.user, favourites: {...action.payload.favourites}
            }
        }
    }
});
export default userReducer.reducer
export const {findUser, logOutUser, addFavouriteUser} = userReducer.actions;