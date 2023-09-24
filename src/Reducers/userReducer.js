import * as TYPES from "../Actions/ActionTypes"



const initialState = {
    Authenticated: false,
    user:[],
    message:null,
    error:null,
    loading:false,
}


const UserReducer = (state=initialState, action) =>{
    switch(action.type){
        case TYPES.LOADING:
            return{
                ...state,
                loading: true
            }

        case TYPES.CREATE_USER:
            return{
                ...state,
                message: action.payload,
                error:null,
                loading:false
            }

            case TYPES.LOGIN:
                return{
                    ...state,
                    loading:false,
                    error:null,
                    message: action.payload,
                    Authenticated:true

                }


                case TYPES.LOGOUT:
                  return{
                      ...state,
                      loading:false,
                      error:null,
                      message: null,
                      Authenticated:false
  
                  }
  


                case TYPES.ERROR:
                    return {
                      ...state,
                      error: action.payload,
                      loading: false,
                      message: null,
                    };

                      case TYPES.CLEARMESSAGE:
      return {
        ...state,

        loading: false,
        message: null,
       
      };
              
              
                  case TYPES.CLEAR:
                    return {
                      ...state,
                      error: false,
                      loading: false,
                    };


                    case TYPES.ADD_PRODUCTS:
                      return {
                        ...state,
                        error: false,
                        loading: false,
                        message:action.payload
                      };



                      case TYPES.GET_USER:
                        return {
                          ...state,
                          error: false,
                          loading: false,
                        user:action.payload  
                        };


                        case TYPES.UPDATE_PROFILE:
                          return {
                            ...state,
                            error: false,
                            loading: false,
                            message:action.payload
                          };




                     default:
                        return state
    }
}


export default UserReducer