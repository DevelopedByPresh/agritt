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


// GETTING USER START
export const UserGotten = (data)=>({type:TYPES.GET_USER, payload:data});


// GETING USER END








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
    axios.post(`http://localhost:5000/user/register`, data,)
      .then((response) => {
        dispatch(UserCreated(response?.data?.message));
 
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
        
      });
  };


  export const LoginUser = (data) => (dispatch) => {
    dispatch(isLoading());
    axios.post(`http://localhost:5000/user/login`, data,)
      .then((response) => {
        dispatch(LoggedIn(response?.data?.message));
        sessionStorage.setItem('user', JSON.stringify(response?.data?.data))
        sessionStorage.setItem('userToken', response?.data?.token)
        console.log(response)
  
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
        
      });
  };

  // AUTHENTICATION END







  // ADDING PRODUCTS START


  export const AddPoultryProduct = (data) => (dispatch) => {
    dispatch(isLoading());


    const UserToken = sessionStorage.getItem('userToken');
    

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${UserToken}`,
    };
  
    axios.post(` http://localhost:5000/poultry/add`, data, {headers : authorization})
      .then((response) => {
        dispatch(ProductsAdded(response?.data?.message));
   

      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
        
      });
  };



  export const AddCatFishProduct = (data) => (dispatch) => {
    dispatch(isLoading());

    const UserToken = sessionStorage.getItem('userToken');
    

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${UserToken}`,
    };

    axios.post(`http://localhost:5000/catFish/add`, data, {headers : authorization})
      .then((response) => {
        dispatch(ProductsAdded(response?.data?.message));
   
        console.log(response);
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
        
      });
  };


  export const AddPigProduct = (data) => (dispatch) => {
    dispatch(isLoading());

    
    const UserToken = sessionStorage.getItem('userToken');
    

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${UserToken}`,
    };


    axios.post(`http://localhost:5000/pig/add`, data, {headers : authorization})
      .then((response) => {
        dispatch(ProductsAdded(response?.data?.message));
   
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
        
      });
  };


  
  export const AddEggProduct = (data) => (dispatch) => {
    dispatch(isLoading());

    
    
    const UserToken = sessionStorage.getItem('userToken');
    

    const authorization = {
      "Content-Type": "application/json",
       Authorization: `Bearer ${UserToken}`,
    };

    axios.post(`http://localhost:5000/egg/add`, data, {headers : authorization})
      .then((response) => {
        dispatch(ProductsAdded(response?.data?.message));
   
      })
      .catch((error) => {
        dispatch(Error(error?.response?.data?.error))
        
      });
  };

// ADDING PRODUCTS END




// GETTING USER START


export const GetUser = () => (dispatch) => {
  dispatch(isLoading());
  const UserToken = sessionStorage.getItem('userToken');
  const user = JSON.parse(sessionStorage.getItem('user'))
  const id = user?._id

  const authorization = {
    "Content-Type": "application/json",
     Authorization: `Bearer ${UserToken}`,
  };

  axios.get(`http://localhost:5000/user/get/${id}`, { headers: authorization })
    .then((response) => {
      dispatch(UserGotten(response?.data?.data));
      sessionStorage.setItem('UpdateUser', JSON.stringify(response?.data?.data))
  
   

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.error))

      
    });
};





// GETTING USER END




// UPDATING PROFILE START




export const UpdateProfile = (profile) => (dispatch) => {
  const UserToken = sessionStorage.getItem('userToken');
  const user = JSON.parse(sessionStorage.getItem('user'))
  const id = user?._id


 

  const authorization = {
    "Content-Type": "application/json",
     Authorization: `Bearer ${UserToken}`,
  };



  dispatch(isLoading());
  axios.patch(`http://localhost:5000/user/update-profile/${id}`, profile,  {headers:authorization})
    .then((response) => {
      dispatch(ProfileUpdated(response?.data?.message));
      dispatch(GetUser());
   

    })
    .catch((error) => {
      dispatch(Error(error?.response?.data?.error))

      
    });
};



// UPDATING PROFILE END
  

  