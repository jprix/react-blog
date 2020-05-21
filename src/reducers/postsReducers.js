//never call apis or reachout of a reducer.  keep a reducer PURE
// do net set state in  a reducer. no state.anything....
//filters are great for reducer logic
//a;ways want to return brand new arrays and objects.  {...oBjectName is how you overwrite to a new
// to omit values use lodash npm and omit out

// if(action.type === 'FETCH_POSTS'){
//      return action.payload
// }


export default (state = [], action) => {
     switch (action.type) {
          case 'FETCH_POSTS':
               return action.payload
          default:
               return state
     }
     //if no match above return normal state
     //return state;

};
