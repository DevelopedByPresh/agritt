import * as TYPES from "../Actions/ActionTypes"
import axios from "axios"


// AUTHECTICATION START 

export const UserCreated = (data)=>({type:TYPES.CREATE_USER, payload:data});
export const LoggedIn = (data)=>({type:TYPES.LOGIN, payload:data});
export const LoggedOut = ()=>({type:TYPES.LOGOUT,});

// AUTHECTICATION END



export const ProductsAdded = (data)=>({type:TYPES.ADD_PRODUCTS,payload:data});



// UPDATING PROFILE START
export const ProfileUpdated = (data)=>({type:TYPES.UPDATE_PROFILE,payload:data});


// UPDATING PROFILE END


// GETTING USER START, PRODUCTS
export const UserGotten = (data)=>({type:TYPES.GET_USER, payload:data});
export const ProductsGotten = (data)=>({type:TYPES.GET_PRODUCT, payload:data});
export const SingleProductGotten = (data)=>({type:TYPES.GET_ONE_PRODUCT, payload:data});


// GETING USER END



// ALL CART ACTION START

export const ItemAdded = (data)=>({type:TYPES.ADD_TO_CART, payload:data});
export const CartGotten = (data)=>({type:TYPES.GET_CART, payload:data});
export const CartItemDeleted = (data)=>({type:TYPES.DELETE_CART_ITEM, payload:data});
export const CartUpdated = (data)=>({type:TYPES.UPDATE_CART_ITEM, payload:data});
export const OrderSubmitted = (data)=>({type:TYPES.FINISH_ORDER, payload:data});
export const ClearCart = (data)=>({type:TYPES.CLEAR_CART, payload:data});
export const Active = (data)=>({type:TYPES.ACTIVE, payload:data});



// ALL CART ACTION END


// All ORDER ACTION START
export const OrderGotten=(data)=>({type:TYPES.GET_ORDER, payload:data})
export const OrderCreated=(data)=>({type:TYPES.CREATE_ORDER, payload:data})
 
// All ORDER ACTION START






// EVERYTHING THAT HAS TO DO WITH EGG RECORD START
export const EggRecord = (data)=>({type:TYPES.CREATE_EGG_RECORD, payload:data});
export const EggRecordGotten = (data)=>({type:TYPES.GET_EGG_RECORD, payload:data});


// EVERYTHING THAT HAS TO DO WITH EGG RECORD END




// EVERYTHING THAT HAS TO DO WITH EGG RECORD START
export const PigRecord = (data)=>({type:TYPES.CREATE_PIG_RECORD, payload:data});
export const PigRecordGotten = (data)=>({type:TYPES.GET_PIG_RECORD, payload:data});

// EVERYTHING THAT HAS TO DO WITH EGG RECORD END




// EVERYTHING THAT HAS TO DO WITH POULTRY RECORD START
export const PoultryRecord = (data)=>({type:TYPES.CREATE_POULTRY_RECORD, payload:data});
export const PoultryRecordGotten = (data)=>({type:TYPES.GET_POULTRY_RECORD, payload:data});

// EVERYTHING THAT HAS TO DO WITH POULTRY RECORD END





// EVERYTHING THAT HAS TO DO WITH FISH RECORD START
export const FishRecord = (data)=>({type:TYPES.CREATE_FISH_RECORD, payload:data});
export const FishRecordGotten = (data)=>({type:TYPES.GET_FISH_RECORD, payload:data});

// EVERYTHING THAT HAS TO DO WITH FISH RECORD END






// LOADING, MESSAGES, CLEAR MESSAGE AND ERROR START

export const isLoading = () => ({ type: TYPES.LOADING });
export const Error = (error) => ({ type: TYPES.ERROR, payload: error });

export const ClearError = () => (dispatch) => {
    dispatch({ type: TYPES.CLEAR });
  };
  export const ClearMessage = () => (dispatch) => {
    dispatch({ type: TYPES.CLEARMESSAGE });
  };

  // LOADING, MESSAGES, CLEAR MESSAGE AND ERROR END




  // AUTHENTICATION START


export const CreateUsers = (data) => (dispatch) => {
    dispatch(isLoading());
    axios.post(`${process.env.REACT_APP_API}/user/register`, data,)
      .then((response) => {
        dispatch(UserCreated(response?.data?.message));
     
 
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
     
        
      });
  };


  export const LoginUser = (data) => (dispatch) => {
    dispatch(isLoading());
    axios.post(`${process.env.REACT_APP_API}/user/login`, data,)
      .then((response) => {
        dispatch(LoggedIn(response?.data?.message));
        sessionStorage.setItem('user', JSON.stringify(response?.data?.data))
        sessionStorage.setItem('userToken', response?.data?.data?.accessToken)

     
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
        
      });
  };

  // AUTHENTICATION END







  // ADDING PRODUCTS START


  export const AddProducts = (data) => (dispatch) => {
    dispatch(isLoading());


    const UserToken = sessionStorage.getItem('userToken');
    

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${UserToken}`,
    };
  
    axios.post(`${process.env.REACT_APP_API}/product/add`, data, {headers : authorization})
      .then((response) => {
        dispatch(ProductsAdded(response?.data?.message));
   

      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
        
      });
  };





// ADDING PRODUCTS END




// GETTING USER, PRODUCTS START




  
export const GetProducts = () => (dispatch) => {
 // dispatch(isLoading());
  const UserToken = sessionStorage.getItem('userToken');
 const category = sessionStorage.getItem('category')


  const authorization = {
    "Content-Type": "application/json",
     Authorization: ` Bearer ${UserToken}`,
  };

  axios.get(`${process.env.REACT_APP_API}/product/getAll/?category=${category}`,  { headers: authorization })
    .then((response) => {
      dispatch(ProductsGotten(response?.data?.data));
    

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.message))
  


      
    });
};




  
export const GetOneProduct = () => (dispatch) => {
//  dispatch(isLoading());
  const UserToken = sessionStorage.getItem('userToken');
  const singleProduct = JSON.parse(sessionStorage.getItem('singleProduct'))
  const id  = sessionStorage.getItem('singleProdId')

  const authorization = {
    "Content-Type": "application/json",
     Authorization: ` Bearer ${UserToken}`,
  };

  axios.get(`${process.env.REACT_APP_API}/product/get/${id}`,  { headers: authorization })
    .then((response) => {
      dispatch(SingleProductGotten(response?.data?.data));
    

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.message))


      
    });
};












export const GetUser = () => (dispatch) => {
 // dispatch(isLoading());
  const UserToken = sessionStorage.getItem('userToken');
  const user = JSON.parse(sessionStorage.getItem('user'))
  const id = user?.id

  const authorization = {
    "Content-Type": "application/json",
     Authorization: `Bearer ${UserToken}`,
  };

  axios.get(`${process.env.REACT_APP_API}/user/get/${id}`, { headers: authorization })
    .then((response) => {
      dispatch(UserGotten(response?.data?.data));
      sessionStorage.setItem('UpdateUser', JSON.stringify(response?.data?.data))
  
   

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.error))

      
    });
};





// GETTING USER, PRODUCTS END




// UPDATING PROFILE START




export const UpdateProfile = (profile) => (dispatch) => {
  const UserToken = sessionStorage.getItem('userToken');
  const user = JSON.parse(sessionStorage.getItem('user'))
  const id = user?.id


 

  const authorization = {
    "Content-Type": "application/json",
     Authorization: `Bearer ${UserToken}`,
  };



  dispatch(isLoading());
  axios.patch(`${process.env.REACT_APP_API}/user/update-profile/${id}`, profile,  {headers:authorization})
    .then((response) => {
      dispatch(ProfileUpdated(response?.data?.message));
      dispatch(GetUser());
   

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.error))

      
    });
};



// UPDATING PROFILE END
  

  





// ALL CART ACTIONS START













export const AddToCart = (data) => (dispatch) => {
 
  const UserToken = sessionStorage.getItem('userToken');


  const authorization = {
    "Content-Type": "application/json",
     Authorization: `Bearer ${UserToken}`,
  };

  dispatch(isLoading());

  axios.post(`${process.env.REACT_APP_API}/cart/add`, data, { headers: authorization })
    .then((response) => {
      dispatch(ItemAdded(response?.data?.message));

      

      dispatch(GetCart());
     // dispatch(GetOneProduct());
      sessionStorage.setItem('cartID',response?.data?.data?._id)
  
      
    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.message))
  


      
    });
};



export const GetCart = () => (dispatch) => {
  // dispatch(isLoading());
   const UserToken = sessionStorage.getItem('userToken');

   const user = JSON.parse(sessionStorage.getItem('user'))
   const userId = user?.id
 

   const authorization = {
     "Content-Type": "application/json",
      Authorization: `Bearer ${UserToken}`,
   };
 
   axios.get(`${process.env.REACT_APP_API}/cart/${userId}?active=true`,  { headers: authorization })
     .then((response) => {
       dispatch(CartGotten(response?.data?.data?.cartItems));
    
  
 
     })
     .catch((error) => {
       dispatch(Error(error?.response?.data?.error))
 
       
     });
 };





export const DeleteCartItem = () => (dispatch) => {
 // dispatch(isLoading());
  const UserToken = sessionStorage.getItem('userToken');
  const user = JSON.parse(sessionStorage.getItem('user'))

  const id = sessionStorage.getItem("cartID")

 const productId = sessionStorage.getItem('deleteCartItemId')



  const authorization = {
    "Content-Type": "application/json",
     Authorization: `Bearer ${UserToken}`,
  };

  axios.delete(`${process.env.REACT_APP_API}/cart/remove/${id}?productId=${productId}`,  { headers: authorization })
    .then((response) => {
      dispatch(CartItemDeleted(response?.data?.message));
 
     
      dispatch(GetCart());
    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.error))
   

      
    });
};











export const UpdateCart = (data) => (dispatch) => {
 // dispatch(isLoading());
  const UserToken = sessionStorage.getItem('userToken');
  const id = sessionStorage.getItem("cartID")


  const authorization = {
    "Content-Type": "application/json",
     Authorization: `Bearer ${UserToken}`,
  };

  axios.patch(`${process.env.REACT_APP_API}/cart/updateItem/${id}`, data, { headers: authorization })
    .then((response) => {
      dispatch(CartUpdated(response?.data?.message));

      dispatch(GetCart());
    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.error))
   

      
    });
};










export const FinishOrder = (data) => (dispatch) => {
 dispatch(isLoading());
  const UserToken = sessionStorage.getItem('userToken');
  const id = sessionStorage.getItem("cartID")


  const authorization = {
    "Content-Type": "application/json",
     Authorization: `Bearer ${UserToken}`,
  };

  axios.patch(`${process.env.REACT_APP_API}/cart/${id}`, data, { headers: authorization })
    .then((response) => {
      dispatch(OrderSubmitted(response?.data?.message));
      dispatch(GetCart());
      dispatch(GetProducts());
   



  
    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.message))

     

      
    });
};


// ALL CART ACTIONS END









export const CreateOrder = (data) => (dispatch) => {
   dispatch(isLoading());
   const UserToken = sessionStorage.getItem('userToken');


 

   const authorization = {
     "Content-Type": "application/json",
      Authorization: `Bearer ${UserToken}`,
   };
 
   axios.post(`${process.env.REACT_APP_API}/order/add`, data, { headers: authorization })
     .then((response) => {
       dispatch(OrderCreated(response?.data?.message));
       dispatch(GetProducts());
      
   
 
     })
     .catch((error) => {
       dispatch(Error(error?.response?.data?.error))

 
       
     });
 };



export const GetOrder = () => (dispatch) => {
  // dispatch(isLoading());
   const UserToken = sessionStorage.getItem('userToken');

   const user = JSON.parse(sessionStorage.getItem('user'))
   const id = user?.id
 

   const authorization = {
     "Content-Type": "application/json",
      Authorization: `Bearer ${UserToken}`,
   };
 
   axios.get(`${process.env.REACT_APP_API}/order/user/?id=${id}`,  { headers: authorization })
     .then((response) => {
       dispatch(OrderGotten(response?.data?.data));
     
  
 
     })
     .catch((error) => {
       dispatch(Error(error?.response?.data?.error))

      
 
       
     });
 };





// ALL ORDER ACTIONS START





































  
  // EVERYTHING THAT HAS TO DO WITH PIG RECORD START



  export const CreatePigRecord = (data) => (dispatch) => {
    dispatch(isLoading());
    const UserToken = sessionStorage.getItem('userToken');

   const authorization = {
     "Content-Type": "application/json",
      Authorization: ` Bearer ${UserToken}`,
   }

  
    axios.post(`${process.env.REACT_APP_API}/pig/`, data, { headers: authorization })
      .then((response) => {
        dispatch(PigRecord(response?.data?.message));
        dispatch(GetPigRecord());
   
   
   
    
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
    
   
 
  
        
      });
  };
 




  export const GetPigRecord = () => (dispatch) => {
  // dispatch(isLoading());
  const UserToken = sessionStorage.getItem('userToken');


  const authorization = {
    "Content-Type": "application/json",
     Authorization: ` Bearer ${UserToken}`,
  }

 
   axios.get(`${process.env.REACT_APP_API}/pig`,  { headers: authorization })
     .then((response) => {
       dispatch(PigRecordGotten(response?.data?.data));
     
    
  
   
 
     })
     .catch((error) => {
       dispatch(Error(error?.response?.data?.error))
     

 
       
     });
 };



  // EVERYTHING THAT HAS TO DO WITH PIG RECORD END




  
  // EVERYTHING THAT HAS TO DO WITH POULTRY RECORD START



  export const CreatePoultryRecord = (data) => (dispatch) => {
    dispatch(isLoading());
    const UserToken = sessionStorage.getItem('userToken');

   const authorization = {
     "Content-Type": "application/json",
      Authorization: ` Bearer ${UserToken}`,
   }

  
    axios.post(`${process.env.REACT_APP_API}/poultry/`, data, { headers: authorization })
      .then((response) => {
        dispatch(PoultryRecord(response?.data?.message));
        dispatch(GetPoultryRecord());
   
   
   
    
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
    
   
 
  
        
      });
  };
 




  export const GetPoultryRecord = () => (dispatch) => {
  // dispatch(isLoading());
  const UserToken = sessionStorage.getItem('userToken');


  const authorization = {
    "Content-Type": "application/json",
     Authorization: ` Bearer ${UserToken}`,
  }

 
   axios.get(`${process.env.REACT_APP_API}/poultry`,  { headers: authorization })
     .then((response) => {
       dispatch(PoultryRecordGotten(response?.data?.data));
     
    
  
   
 
     })
     .catch((error) => {
       dispatch(Error(error?.response?.data?.error))
     

 
       
     });
 };












  // EVERYTHING THAT HAS TO DO WITH POULTRY RECORD END












  
  
  // EVERYTHING THAT HAS TO DO WITH fish RECORD START



  export const CreateFishRecord = (data) => (dispatch) => {
    dispatch(isLoading());
    const UserToken = sessionStorage.getItem('userToken');

   const authorization = {
     "Content-Type": "application/json",
      Authorization: ` Bearer ${UserToken}`,
   }

  
    axios.post(`${process.env.REACT_APP_API}/fish/`, data, { headers: authorization })
      .then((response) => {
        dispatch(FishRecord(response?.data?.message));
        dispatch(GetFishRecord());
   
   
   
    
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
    
   
 
  
        
      });
  };
 




  export const GetFishRecord = () => (dispatch) => {
  // dispatch(isLoading());
  const UserToken = sessionStorage.getItem('userToken');


  const authorization = {
    "Content-Type": "application/json",
     Authorization: ` Bearer ${UserToken}`,
  }

 
   axios.get(`${process.env.REACT_APP_API}/fish`,  { headers: authorization })
     .then((response) => {
       dispatch(FishRecordGotten(response?.data?.data));
     
    
  
   
 
     })
     .catch((error) => {
       dispatch(Error(error?.response?.data?.error))
     

 
       
     });
 };









  // EVERYTHING THAT HAS TO DO WITH Fish RECORD END




















  

  // EVERYTHING THAT HAS TO DO WITH EGG RECORD START



  export const CreateEggRecord = (data) => (dispatch) => {
    dispatch(isLoading());
    const UserToken = sessionStorage.getItem('userToken');

   const authorization = {
     "Content-Type": "application/json",
      Authorization: ` Bearer ${UserToken}`,
   }

  
    axios.post(`${process.env.REACT_APP_API}/egg/`, data, { headers: authorization })
      .then((response) => {
        dispatch(EggRecord(response?.data?.message));
        dispatch(GetEggRecord());
   
   
   
    
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.message))
    
    
   
 
  
        
      });
  };
 




  export const GetEggRecord = () => (dispatch) => {
  // dispatch(isLoading());
  const UserToken = sessionStorage.getItem('userToken');


  const authorization = {
    "Content-Type": "application/json",
     Authorization: ` Bearer ${UserToken}`,
  }

 
   axios.get(`${process.env.REACT_APP_API}/egg`,  { headers: authorization })
     .then((response) => {
       dispatch(EggRecordGotten(response?.data?.data));
     
    
  
   
 
     })
     .catch((error) => {
       dispatch(Error(error?.response?.data?.error))
     

 
       
     });
 };












      










  // EVERYTHING THAT HAS TO DO WITH EGG RECORD end