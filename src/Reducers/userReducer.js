import { Start } from "@mui/icons-material"
import * as TYPES from "../Actions/ActionTypes"
import { GET_ORDER } from './../Actions/ActionTypes';



const initialState = {
    Authenticated: false,
  
    user:[],
    message:null,
    error:null,
    loading:false,
    products:[],
    cartItems:[],
    deleteMsg:null,
    orderMsg:null,
    active:true,
    order:[],
    OneProduct:[],
    qty:1,
    EggRecord:[],
    PigRecord:[],
    FishRecord:[],
    PoultryRecord:[],
}


const UserReducer = (state=initialState, action) =>{
    switch(action.type){
        case TYPES.LOADING:
            return{
                ...state,
                loading: true
            }


            // AUTHENTICATION START

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

                  // AUTHENTICATION END
  


                  // ERROR, MESSAGE, CLEAR ERROR/MESSAGE START

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
                     orderMsg:null,

       
                   };
              
              
                  case TYPES.CLEAR:
                    return {
                      ...state,
                      error: false,
                      loading: false,
                    };

                    // ERROR, MESSAGE, CLEAR ERROR/MESSAGE END








                    case TYPES.ADD_PRODUCTS:
                      return {
                        ...state,
                        error: false,
                        loading: false,
                        message:action.payload
                      };






                      // GETTING USER/PRODUCT START

                      case TYPES.GET_USER:
                        return {
                          ...state,
                          error: false,
                          loading: false,
                        user:action.payload  
                        };



                        case TYPES.GET_PRODUCT:
                          return {
                            ...state,
                            error: false,
                            loading: false,
                          products:action.payload  
                          };

                          

                        case TYPES.GET_ONE_PRODUCT:
                          return {
                            ...state,
                            error: false,
                            loading: false,
                            OneProduct:action.payload  
                          };



                        // GETTING USER/PRODUCT END
  


                          //  UPDATING PROFILE Start
                                   
                        case TYPES.UPDATE_PROFILE:
                          return {
                            ...state,
                            error: false,
                            loading: false,
                            message:action.payload
                          };

                         //  UPDATING PROFILE END





                        //  ALL CART START
                        case TYPES.ADD_TO_CART:
                          return {
                            ...state,
                            error: false,
                            loading: false,
                            message:action.payload,
                           
                            
                          };

                          case TYPES.GET_CART:
                            return {
                              ...state,
                              error: false,
                              loading: false,
                              cartItems: action.payload,
                            
                            };

                            

                            case TYPES.DELETE_CART_ITEM:
                              return {
                                ...state,
                                error: false,
                                loading: false,
                                deleteMsg:action.payload
                              };

                              

                              case TYPES.UPDATE_CART:
                                return {
                                  ...state,
                                  error: false,
                                  loading: false,
                                  message:action.payload
                                };


                                case TYPES.FINISH_ORDER:
                                  return {
                                    ...state,
                                    error: false,
                                    loading: false,
                                   // orderMsg:action.payload,
                                    cartItems:[]
                                    
                                  
                              
                                  };

                                  
                           
                                  
                                case TYPES.ACTIVE:
                                  return {
                                    ...state,
                                    error: false,
                                    loading: false,
                                    active:action.payload,
                              
                                  };



                                  case TYPES.CLEAR_CART:
                                    return {
                                      ...state,
                                      error: false,
                                      loading: false,
                                      cartItems:[]
                                    
                             
                                    };

                                    case TYPES.UPDATE_CART_ITEM:
                                      return {
                                        ...state,
                                        error: false,
                                        loading: false,
                                       // message:action.payload
                               
                                      };

                        //  ALL CART END






                        // All Order Reducer Start

                        case TYPES.CREATE_ORDER:
                          return {
                            ...state,
                            error: false,
                            loading: false,
                            orderMsg:action.payload,
                           // cartItems:[]
                          };



                        case TYPES.GET_ORDER:
                          return {
                            ...state,
                            error: false,
                            loading: false,
                           order:action.payload
                     
                          };




                        // All Order Reducer End


















                        
                                    // EVERYTHING THAT HAS TO DO WITH EGG RECORD START


                                    case TYPES.CREATE_EGG_RECORD:
                                      return{
                                        ...state,
                                        loading:false,
                                        error:false,
                                        message:action.payload
                                      }



                                      case TYPES.GET_EGG_RECORD:
                                        return{
                                          ...state,
                                          loading:false,
                                          error:false,
                                          EggRecord:action.payload
                                        }



                                          
                                        case TYPES.UPDATE_EGG_RECORD:
                                          return {
                                            ...state,
                                            error: false,
                                            loading: false,
                                            message:action.payload
                                           
                                          };
        
                                          
                                          case TYPES.DELETE_EGG_RECORD:
                                            return {
                                              ...state,
                                              error: false,
                                              loading: false,
                                              message:action.payload
                                             
                                            };


                                                  
                                          case TYPES.GET_EGG_STATISTICS:
                                            return {
                                              ...state,
                                              error: false,
                                              loading: false,
                                              EggStat:action.payload
                                             
                                            };



                                    // EVERYTHING THAT HAS TO DO WITH EGG RECORD END







                                     // EVERYTHING THAT HAS TO DO WITH Pig RECORD START


                                     case TYPES.CREATE_PIG_RECORD:
                                      return{
                                        ...state,
                                        loading:false,
                                        error:false,
                                        message:action.payload
                                      }



                                      case TYPES.GET_PIG_RECORD:
                                        return{
                                          ...state,
                                          loading:false,
                                          error:false,
                                          PigRecord:action.payload
                                        }



                                          
                                        case TYPES.UPDATE_PIG_RECORD:
                                          return {
                                            ...state,
                                            error: false,
                                            loading: false,
                                            message:action.payload
                                           
                                          };
        
                                          
                                          case TYPES.DELETE_PIG_RECORD:
                                            return {
                                              ...state,
                                              error: false,
                                              loading: false,
                                              message:action.payload
                                             
                                            };


                                  
  
  
                                    // EVERYTHING THAT HAS TO DO WITH Pig RECORD END





                                     // EVERYTHING THAT HAS TO DO WITH Poultry RECORD START


                                     case TYPES.CREATE_POULTRY_RECORD:
                                      return{
                                        ...state,
                                        loading:false,
                                        error:false,
                                        message:action.payload
                                      }



                                      case TYPES.GET_POULTRY_RECORD:
                                        return{
                                          ...state,
                                          loading:false,
                                          error:false,
                                          PoultryRecord:action.payload
                                        }



                                          
                                        case TYPES.UPDATE_POULTRY_RECORD:
                                          return {
                                            ...state,
                                            error: false,
                                            loading: false,
                                            message:action.payload
                                           
                                          };
        
                                          
                                          case TYPES.DELETE_POULTRY_RECORD:
                                            return {
                                              ...state,
                                              error: false,
                                              loading: false,
                                              message:action.payload
                                             
                                            };
  
                                    // EVERYTHING THAT HAS TO DO WITH Poultry RECORD END





                                    
                                     // EVERYTHING THAT HAS TO DO WITH FISH RECORD START


                                     case TYPES.CREATE_FISH_RECORD:
                                      return{
                                        ...state,
                                        loading:false,
                                        error:false,
                                        message:action.payload
                                      }



                                      case TYPES.GET_FISH_RECORD:
                                        return{
                                          ...state,
                                          loading:false,
                                          error:false,
                                          FishRecord:action.payload
                                        }



                                          
                                        case TYPES.UPDATE_FISH_RECORD:
                                          return {
                                            ...state,
                                            error: false,
                                            loading: false,
                                            message:action.payload
                                           
                                          };
        
                                          
                                          case TYPES.DELETE_FISH_RECORD:
                                            return {
                                              ...state,
                                              error: false,
                                              loading: false,
                                              message:action.payload
                                             
                                            };


                                                  
  
  
                                    // EVERYTHING THAT HAS TO DO WITH Fiah RECORD END










                     default:
                        return state
    }
}


export default UserReducer