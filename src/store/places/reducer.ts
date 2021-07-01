import { PlacesActions } from './types';

export interface PlacesProps {
    query?: string;
    hits?: Array<string>;
}

const initialState : PlacesProps = {
    query: ''
};

const placesReducer = (state = initialState, action: any) => {
    switch(action.type) {
      case PlacesActions.SetQuery:
        return {
            ...state, query: 
            action.payload
        };
      default:
        return state;
    }
  }
  
  export default placesReducer;