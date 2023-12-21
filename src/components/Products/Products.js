

import  React,{useState, useEffect} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import {Link, useNavigate} from 'react-router-dom'
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import AddIcon from '@mui/icons-material/Add';
// import Fab from '@mui/material/Fab';
// import CardContent from '@mui/material/CardContent';
import Badge from '@mui/material/Badge';
// import ApprovalIcon from '@mui/icons-material/Approval';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import InputLabel from '@mui/material/InputLabel';
// import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';
// import InputAdornment from '@mui/material/InputAdornment';
// import FormControl, { useFormControl } from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogActions from '@mui/material/DialogActions';


import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from "@mui/icons-material/Search";

import { useSelector, useDispatch } from 'react-redux'
import { ClearError, ClearMessage, GetUser, GetProducts, AddToCart, GetCart, DeleteCartItem, UpdateCart, FinishOrder,CreateOrder, GetOneProduct, LoggedOut} from "../../Actions/Actions"
// import Select from '@mui/material/Select';

import "./Products.css"
import Drawer from '@mui/material/Drawer';
// import { create } from '@mui/material/styles/createTransitions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';


// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail'

import { jwtDecode } from "jwt-decode"
















const Products = ()=>{




  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = sessionStorage.getItem('userToken')

  useEffect(()=>{
    document.body.style.zoom = "70%";
    dispatch(GetUser())
   // dispatch(ClearError())
    dispatch(GetProducts())
    dispatch(GetCart())
    dispatch(GetOneProduct())
  },[])



  useEffect(() => {
    let timerRef = null;

    if(token){


  
    const decoded = jwtDecode(token);
  
    const expiryTime = (new Date(decoded.exp * 1000)).getTime();
    const currentTime = (new Date()).getTime();
  
    const timeout = expiryTime - currentTime;
    const onExpire = () => {
      dispatch(LoggedOut());
      sessionStorage.clear() 

       navigate('/');
    };
  
    if (timeout > 0) {
      // token not expired, set future timeout to log out and redirect
      timerRef = setTimeout(onExpire, timeout);
    } else {
      // token expired, log out and redirect
      onExpire();
    }
  
    // Clear any running timers on component unmount or token state change
    return () => {
      clearTimeout(timerRef);
    };

  }




  }, [dispatch, navigate, token]);





const message = useSelector((state)=>state?.user?.message)
const OrderMessage = useSelector((state)=>state?.user?.orderMsg)
const error = useSelector((state)=>state?.user?.error)
const loading = useSelector((state)=>state?.user?.loading)
const AllProducts = useSelector((state)=>state?.user?.products)
const cartItem = useSelector((state)=>state?.user?.cartItems)
const activeCart = useSelector((state)=>state?.user?.active)
const OneProduct = useSelector((state)=>state?.user?.OneProduct)
sessionStorage.setItem('initialQty', OneProduct?.quantity)
const OneProductQty = sessionStorage.getItem('initialQty')








const [state, setState] =useState({
  top: false,
  left: false,
  bottom: false,
  right: false,
});


const pages = ['About Us', 'Contact Us'];
const settings = [ 'Logout', 'Reset Password','Profile', 'Dashboard',];
const [anchorElNav, setAnchorElNav] = useState(null);
const [anchorElUser, setAnchorElUser] = useState(null);
// const [selectedProduct, setSelectedProduct] = useState();
const [querry, setQuerry] = useState('')
 const User = JSON.parse(sessionStorage.getItem('user'))
 const UserInfo = JSON.parse(sessionStorage.getItem('UpdateUser'))
 const id = sessionStorage.getItem("cartID")
 const [qtyError, setQtyError] = useState('')
 const [cartQtyError, setCartQtyError] = useState('')
 const [report, setReport] = useState('');
 sessionStorage.setItem('category', report)
 const category = sessionStorage.getItem('category')



 const none = 0





 



 const [number, setNumber] = useState(1)
 const [qty, setQty] = useState(1)
 const [updateProduct, setUpdateProduct] = useState({})



 const [creatingOrder, setCreatingOrder] = useState({
  user:'',
  cartId: "",
 })

 const {user, cartId}  = creatingOrder
 creatingOrder.user = User?.id
 creatingOrder.cartId = id




 const [data, setData] = useState({
  active:false
 })

 const {active} = data


// const CreatingOrder = ()=>{
//  const user =   User?.id
//   const cartId  = id
//   const dat = {user, cartId}
//   dispatch(CreateOrder)

// }

setTimeout(()=>{
  sessionStorage.removeItem(category)
},1000)




const AllProduct = ()=>{
  sessionStorage.setItem('category', '')
  dispatch(GetProducts())
  setQtyError('')

}




const PoultryProduct = (Poultry)=>{
  setReport('Poultry')
  sessionStorage.setItem('category', Poultry)
  dispatch(GetProducts())
  setQtyError('')

}


const PigProduct = (Pig)=>{
  setReport('Pig')
  sessionStorage.setItem('category', Pig)
  dispatch(GetProducts())
  setQtyError('')

}


const EggProduct = (Egg)=>{
  setReport('Egg')
  sessionStorage.setItem('category', Egg)
  dispatch(GetProducts())

}


const CatFishProduct = (CatFish)=>{
  setReport('CatFish')
  sessionStorage.setItem('category', CatFish)
  dispatch(GetProducts())
  setQtyError('')

}


const CowProduct = (Cow)=>{
  setReport('Cow')

  sessionStorage.setItem('category', Cow)
  dispatch(GetProducts())
  setQtyError('')

}





const CucumberProduct = (Cucumber)=>{
  setReport('Cucumber')

  sessionStorage.setItem('category', Cucumber)
  dispatch(GetProducts())
  setQtyError('')

}


const ManureProduct = (manure)=>{
  setReport('manure')

  sessionStorage.setItem('category', manure)
  dispatch(GetProducts())
  setQtyError('')

}


const PlantainProduct = (plantain)=>{
  setReport('Plantain')
 
  sessionStorage.setItem('category', plantain)
  dispatch(GetProducts())
  setQtyError('')

}


const FeedProduct = (feed)=>{
  setReport('feed')

  sessionStorage.setItem('category', feed)
  dispatch(GetProducts())
  setQtyError('')

}





 const CompleteOrder =()=>{




  if(qty > OneProductQty){
    setCartQtyError(`Sorry, we have only ${OneProduct?.quantity} ${updateProduct?.productId[0]?.category } ${(updateProduct?.productId[0]?.section)} in Stock, Please Adjust quantity`)
  }else{
    
    dispatch(FinishOrder(data))
    dispatch(CreateOrder(creatingOrder))
 

  }

 }

 const increase = (product)=>{
  setQtyError('')

  if(product && product?.quantity){
    product.quantity ++
    setNumber(product?.quantity)
   sessionStorage.setItem('singleProdId', product?.id)
   dispatch(GetOneProduct())

  }
  
 }

 const decrease = (product)=>{
  setQtyError('')

  if(product && product?.quantity > 1){
    product.quantity --
    setNumber(product?.quantity)

   
  }
 }


 const increaseCartQuantity =(item)=>{
  dispatch(GetOneProduct())
  setUpdateProduct(item)
  setCartQtyError('')
  sessionStorage.setItem('updateId', item?.productId[0]?._id)
  if(item && item?.quantity){
    item.quantity ++
    setQty(item?.quantity)


   

 
  
     const quantity = item?.quantity
     const productId = item?.productId[0]?._id
     const data = {quantity, productId}
    dispatch(UpdateCart(data))
  
  }

 }

 const decreaseCartQuantity =(item)=>{
  

  dispatch(GetOneProduct())
  setUpdateProduct(item)
  setCartQtyError('')
  if(item && item?.quantity > 1){
    item.quantity --
    setQty(item?.quantity)
 
    const quantity = item?.quantity
    const productId = item?.productId[0]?._id
    const data = {quantity, productId}
   dispatch(UpdateCart(data))
  
  }

 }












// const ProductData = {
//   product: [

//     { name: "Poultry", category: ["Layers", "Broilers"] },
//     { name: "Pig", category: ["Boar", "Dry Sows", "In-pigs", "Growers", "Weaners", "Piglets"] },
//     { name: "Egg", category: ["Big", "Small"] },
//     { name: "Cat-fish", category: ["Fingerlings", "Mature"] },

//   ]
// };



const onChange = (e)=>{
  e.preventDefault()

}

const toggleDrawer = (anchor, open) => (event) => {
  dispatch(GetOneProduct())
  if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
   
    return;
   
  }
  setCartQtyError('')
  setState({ ...state, [anchor]: open });
  dispatch(GetOneProduct())
};


const handleDelete = (id)=>{
  sessionStorage.setItem('deleteCartItemId', id)

  setCartQtyError('')

  dispatch(DeleteCartItem())
}







useEffect(()=>{
  if(message || qtyError){
    window.scrollTo({
      top:0,
      behavior: 'smooth'

    })
  }
},[message, qtyError])







setTimeout(()=>{
  if(message){
    dispatch(ClearMessage())
  }


},1500)







setTimeout(()=>{
  if(OrderMessage){
    dispatch(ClearMessage())
 

  
  }
 
},2000)
  
  




const StyledBadge = styled(Badge)(({ theme, key }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper} `,
    
    padding: '0 4px',
  },
}));



const handleClick = (product)=>{
  sessionStorage.setItem('singleProduct', JSON.stringify(product))
 
 
 const price = product?.price
const user =  User?.id


 const cartItems = [{
      "productId": product?.id,
      "quantity": product.quantity
      }]
 


const CartData = {cartItems, price,  user}


if(number > OneProduct?.quantity){
  setQtyError(`Sorry, we have only ${OneProduct?.quantity} ${OneProduct?.category} ${(OneProduct?.section)} in Stock, Please Adjust quantity`)
}else{

    dispatch(AddToCart(CartData))
  


}

  
  
}


const handleInputChange = (e)=>{
  setQuerry(e.target.value)

 }


 
const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};
// const handleOpenUserMenu = (event) => {
//   setAnchorElUser(event.currentTarget);
// };

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
  // navigate('/Login')
};







// cart side Modal start

const list = (anchor) => (
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 650 }}
    role="presentation"
 
  >
      <CloseIcon sx={{marginTop:5, marginLeft:5, cursor:'pointer', fontSize:'50'}} onClick={toggleDrawer(anchor, false)}/>
      <br/>



      {cartQtyError &&
<div className="alert alert-danger danger alert-dismissible" role="alert" style={{width:'80%', margin:'0px auto'}}>
<div className="containerss"  style={{textAlign:'center',  margin:'0px auto', whiteSpace:'no-wrap'}}>
<strong>  <i className="fa fa-exclamation-circle" aria-hidden="true"></i></strong>  {cartQtyError}!
</div>
</div>  
 }

      {OrderMessage && 
<div className="alert success alert-success alert-dismissible" role="alert" style={{width:'50%', margin:'0px auto' }}>
<div className="containerss"  style={{textAlign:'center', margin:'0px auto', whiteSpace:'no-wrap'}}>
<strong> <i className="fa fa-thumbs-up" aria-hidden="true"></i></strong> {OrderMessage}!
</div>
</div>
}
<br/>




<section className="h-100 gradient-custom " >

{loading && error === false ?
          <div className='loader'></div> : ""}
     

       


<div className="card-header py-3 text-center">
  {cartItem?.length >0 ?
            <h3 className="mb-0" style={{fontFamily:'serif'}}>My Cart   -   { activeCart && cartItem?.length} items</h3>: ""}

{ cartItem?.length  === 0 ?
            <h3 className="mb-0" style={{fontFamily:'serif'}}>No items in Cart</h3>: ""}
          </div>
  <div className="container py-5 col-md-20">

    <div className="row d-flex justify-content-center my-4 col-md-20">
      <div className="col-md-20">
    
  
        <div className="card mb-4 col-md-20">
      
          <div className="card-body">


          {  cartItem &&cartItem?.map((item)=>(
            <div className="row" key={item?.id}>
              <div className="col-lg-3 col-md-18 mb-4 mb-lg-0" key={item?.id}>


                {item?.productId[0]?.category === 'Poultry' && item?.productId[0]?.section === 'Layers' ?
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light" key={item?.id}>
                  <img src="https://thumbs.dreamstime.com/b/white-chicken-hen-isolated-d-illustration-white-chicken-hen-d-illustration-122513036.jpg?w=768"
                    className="w-100" alt="product" />
                  <a href="#!">
               
                  </a>
                </div>:""}



                {item?.productId[0]?.category === 'Poultry' && item?.productId[0]?.section === 'Broilers' ?
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light" key={item?.id}>
                  <img src="https://thumbs.dreamstime.com/b/full-body-brown-chicken-hen-standing-isolated-white-backgroun-background-use-farm-animals-livestock-theme-50156210.jpg?w=768"
                    className="w-100" alt="product" />
                  <a href="#!">
               
                  </a>
                </div>:""}


                {item?.productId[0]?.category === 'Egg' ?
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://thumbs.dreamstime.com/b/isolated-3d-egg-24231423.jpg?w=768"className="w-100" alt="product" />
                  <a href="#!">
               
                  </a>
                </div>:""}


                {item?.productId[0]?.category === 'Pig' && item?.productId[0]?.section ==='Piglets' ?
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://thumbs.dreamstime.com/z/two-piglets-isolated-white-two-piglets-isolated-white-background-125596059.jpg?w=992"className="w-100" alt="product" />
                  <a href="#!">
               
                  </a>
                </div>:""}


                
                {item?.productId[0]?.category === 'Pig' && item?.productId[0]?.section ==='Dry Sows' ?
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHPZCMj6oXFjszxSXKb_XN_B0zD8_6Ll8_Dg&usqp=CAU"className="w-100" alt="product" />
                  <a href="#!">
               
                  </a>
                </div>:""}



                {item?.productId[0]?.category === 'Pig' && item?.productId[0]?.section ==='Growers' ?
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXU_82DbhkFCA6Kl4xVL8FAI5byjjhg96BZw&usqp=CAU"className="w-100" alt="product" />
                  <a href="#!">
               
                  </a>
                </div>:""}


                
                {item?.productId[0]?.category === 'Pig' && item?.productId[0]?.section ==='Boar' ?
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="data:image/jpeg;base64,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" className="w-100" alt="product" />
                  <a href="#!">
               
                  </a>
                </div>:""}




                {item?.productId[0]?.category === 'Pig' && item?.productId[0]?.section ==='Weaners' || item?.productId[0]?.section ==='In-pigs' ?
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://thumbs.dreamstime.com/b/pig-isolated-white-big-background-130393074.jpg?w=768" className="w-100" alt="product" />
                  <a href="#!">
               
                  </a>
                </div>:""}









  
      


       












                {item?.productId[0]?.category === 'Cat-fish' ?
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://thumbs.dreamstime.com/b/catfish-white-background-41272273.jpg?w=768"className="w-100" alt="product" />
                  <a href="#!">
               
                  </a>
                </div>:""}
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>Category : {item?.productId[0]?.category}</strong></p>
                <p>Section : {item?.productId[0]?.section}</p>
              
               
                <button type="button" className=" btn-sm  mb-2" data-mdb-toggle="tooltip"
                  title="Remove item" onClick={() =>`${( handleDelete(item?.productId[0]?._id))}`} style={{ backgroundColor:'white', outline:'none', border:'none', marginTop:'20px'}}>
            <h3 style={{display:'inline', marginLeft:'15px'}}>Remove</h3>
                  <i className="fas fa-trash" style={{fontSize:'20px', color:'red', marginLeft:'5px'}}></i>   
                
                </button>
              
             
              </div>

              

              <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                <div className="d-flex mb-4" style={{maxWidth: "300px"}}>
                  <button className="btn minus btn-primary px-3 py-1 me-20" style={{backgroundColor:'green'}}  onClick={()=>decreaseCartQuantity(item)}>
                    <i className="fas fa-minus"></i>
                  </button>

                  <div className="form-outline">
                    <input id="form1" min="0" name="quantity" value={item?.quantity} type="number" className="form-control" onChange={onChange} />
                    <label className="form-label" htmlFor="form1">Quantity</label>
                  </div>

                  <button className="btn minus btn-primary px-3 py-2 ms-2" style={{backgroundColor:'green'}}   onClick={()=>increaseCartQuantity(item)}>
                    <i className="fas fa-plus"></i>
                  </button>
                </div>

                <p className="text-start text-md-center">
                  <strong> Unit Price : ₦{item?.price}</strong><br/>
                  <strong>SubTotal : ₦{item?.subtotal}</strong>
             
                </p>
              </div>
              <hr className="my-4" style={{width:590}} />
            </div>
      
             ))}
          </div>
        </div>



        {   cartItem?.length > 0 ?  
        <div className="card mb-4 mb-lg-0">
          <div className="card-body">




          <div className="btns">
  
           <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor: "#006400"}} onClick={CompleteOrder}>
             Finish Order
             </button>
            </div>
 
            <p><strong>We accept</strong></p>
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
              alt="Visa" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
              alt="American Express" />
            <img className="me-2" width="45px"
              src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
              alt="Mastercard" />
       
          </div>
        </div>: ""}
      </div>

    </div>
  </div>
</section> 

  </Box>
);


// cart side Modal end













    return(
        <div>

{/*     
     <div className="area"></div><nav className="main-menu">
            <ul>
                <li>
                    <a href="https://jbfarrow.com">
                        <i className="fa fa-home fa-2x"></i>
                        <span className="nav-text">
                           Community Dashboard
                        </span>
                    </a>
                  
                </li>
                <li className="has-subnav">
                    <a href="#">
                        <i className="fa fa-globe fa-2x"></i>
                        <span className="nav-text">
                            Global Surveyors
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="#">
                       <i className="fa fa-comments fa-2x"></i>
                        <span className="nav-text">
                            Group Hub Forums
                        </span>
                    </a>
                    
                </li>
                <li className="has-subnav">
                    <a href="#">
                       <i className="fa fa-camera-retro fa-2x"></i>
                        <span className="nav-text">
                            Survey Photos
                        </span>
                    </a>
                   
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-film fa-2x"></i>
                        <span className="nav-text">
                            Surveying Tutorials
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i className="fa fa-book fa-2x"></i>
                        <span className="nav-text">
                           Surveying Jobs
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                       <i className="fa fa-cogs fa-2x"></i>
                        <span className="nav-text">
                            Tools & Resources
                        </span>
                    </a>
                </li>
                <li>
                   <a href="#">
                        <i className="fa fa-map-marker fa-2x"></i>
                        <span className="nav-text">
                            Member Map
                        </span>
                    </a>
                </li>
                <li>
                    <a href="#">
                       <i className="fa fa-info fa-2x"></i>
                        <span className="nav-text">
                            Documentation
                        </span>
                    </a>
                </li>
            </ul>

            <ul className="logout">
                <li>
                   <a href="#">
                         <i className="fa fa-power-off fa-2x"></i>
                        <span className="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul>
        </nav> */}

<AppBar position="static" sx={{  backgroundColor: '#006400' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/Home" style={{color:'white'}}>
          <Typography
            variant="h6"
            noWrap
           // component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 700,
              letterSpacing: '.2rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Agritally
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
    
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Agritally
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>


          {[ 'right'].map((anchor) => (
          <IconButton  
          key={anchor}     
          anchor={anchor}
          open={state[anchor]}
        onClick={toggleDrawer(anchor, true)} aria-label="cart" sx={{mr:10, fontSize:30}} >
      <StyledBadge badgeContent={  cartItem?.length} color="primary">
        <ShoppingCartIcon sx={{color:'white'}} />
      </StyledBadge>
    </IconButton>
       ))}
            <Tooltip >
           


             <Link to="/userProfile">
              <IconButton  sx={{ p: 0 }}>
                <Avatar alt={UserInfo?.lastName} src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" />
              </IconButton>
              </Link>

    

            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

  


{/* {AllProducts?.length ===0 ? "" :

    <Box sx={{display:'flex', justifyContent:'center', alignItems: 'center', marginTop:'30px'}}>






<Container maxWidth="md" >
<TextField
id="search"
type="search"
label="Search Products..."
value={querry}
onChange={handleInputChange}
sx={{ width: 800 }}
InputProps={{
  endAdornment: (
    <InputAdornment position="end">
      <SearchIcon />
    </InputAdornment>
  ),
}}
/>
</Container>

</Box>}
<br/> */}


          <div>
        {['left', 'right', 'top', 'bottom'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}

    </div>
    <br/>

    <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          p: 1,
          m: 1,
          mt:1,
          mr:10,
   
          borderRadius: 1,
          cursor:'pointer'
        }}
      >


{/* <Badge badgeContent={pig?.length} color="success" > */}

<StyledBadge badgeContent={0} color="success">
<Tooltip title="Click To see All Products" sx={{cursor:'pointer'}}>
    <Card sx={{ width: 125,height:50, cursor:'pointer' }} className="report" onClick={AllProduct}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, } }>
        All 
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge>



<StyledBadge badgeContent={none} color="success">
<Tooltip title="Click To see All Pig Products" sx={{cursor:'pointer'}}>
    <Card sx={{ width: 125,height:50, cursor:'pointer' }} className="report" onClick={()=>PigProduct('Pig')}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, } }>
        Pig 
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 


    <StyledBadge badgeContent={none} color="success">
    <Tooltip title="Click To see All Poultry Products" sx={{cursor:'pointer'}}>
    <Card sx={{ width: 175, height:50, cursor:'pointer'  }} className="report" onClick={()=>PoultryProduct('Poultry')}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15} }>
    Poultry 
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 



    <StyledBadge badgeContent={none} color="success">
    <Tooltip title="Click To see All Egg Products" sx={{cursor:'pointer'}}>
    <Card sx={{ width: 175, height:50, cursor:'pointer'}} className="report" onClick={()=>EggProduct('Egg')}>
      <CardContent>
        <Typography variant="h6" component="div" sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15} }>
        Egg  
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 




    <StyledBadge badgeContent={none} color="success">
    <Tooltip title="Click To see All Cat Fish Products" sx={{cursor:'pointer'}}  onClick={()=>CatFishProduct('Cat-fish')}>
    <Card sx={{ width: 176, height:50, cursor:'pointer'  }} className="report">
      <CardContent>
        <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15,} }>
         Cat Fish  
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 


    <StyledBadge badgeContent={0} color="success">
    <Tooltip title="Click To see All Cow Products" sx={{cursor:'pointer'}}  onClick={()=>CowProduct('Cow')}>
     <Card sx={{ width: 175,height:50, cursor:'pointer' }} className="report">
      <CardContent>
        <Typography variant="h6" component="div" sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15,} }>
          Cow 
        </Typography>
      </CardContent>
    </Card> 
    </Tooltip>
    </StyledBadge> 







    

    <StyledBadge badgeContent={0} color="success">
    <Tooltip title="Click To see All Cucumber Products" sx={{cursor:'pointer'}}  onClick={()=>CucumberProduct('Cucumber')}>
    <Card sx={{ width: 175, height:50, cursor:'pointer'  }} className="report">
      <CardContent>
        <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15,} }>
      Cucumber 
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 



    <StyledBadge badgeContent={0} color="success">
    <Tooltip title="Click To see All Manure Products" sx={{cursor:'pointer'}}  onClick={()=>ManureProduct('manure')}>
    <Card sx={{ width: 175, height:50,  cursor:'pointer' }} className="report">
      <CardContent>  
        <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15,} }>
      Manure 
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 


    <StyledBadge badgeContent={0} color="success"> 
    <Tooltip title="Click To see All Plantain Products" sx={{cursor:'pointer'}}   onClick={()=>PlantainProduct('plantain')}>
    <Card sx={{ width: 175, height:50, cursor:'pointer'   }} className="report">
      <CardContent>   
        <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15,} }>
      Plantain  
        </Typography>
      </CardContent>
    </Card >
    </Tooltip>
    </StyledBadge> 




    <StyledBadge badgeContent={0} color="success"> 
    <Tooltip title="Click To see All Feed Products" sx={{cursor:'pointer'}}   onClick={()=>FeedProduct('feed')}>
    <Card sx={{ width: 175,height:50, cursor:'pointer'  }} className="report">
      <CardContent>
        <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, } }>
      Feed 
        </Typography>
      </CardContent>
    </Card>
    </Tooltip>
    </StyledBadge> 




      </Box><br/>


      {/* {error && report !== "" ?  
<div className="alert alert-danger danger alert-dismissible" role="alert" style={{width:'20%', margin:'0px auto'}}>
<div className="containerss"  style={{textAlign:'center',  margin:'0px auto', whiteSpace:'no-wrap'}}>
<strong>  <i className="fa fa-exclamation-circle" aria-hidden="true"></i></strong>  {error} on {report}!
</div>
</div> : "" 
 }


{error && report === "" ?  
<div className="alert alert-danger danger alert-dismissible" role="alert" style={{width:'20%', margin:'0px auto'}}>
<div className="containerss"  style={{textAlign:'center',  margin:'0px auto', whiteSpace:'no-wrap'}}>
<strong>  <i className="fa fa-exclamation-circle" aria-hidden="true"></i></strong>  {error} 
</div>
</div> : "" 
 } */}

 
    

{AllProducts?.length === 0   ?
    <Typography textAlign="center">No Product Available !</Typography> :  ""  }



{/* { report === 'Cow' || report ==='Cucumber' || report ==='manure' || report ==='plantain' || report ==='feed'?
    <Typography textAlign="center">No Product Available on {report} !</Typography> : ""} */}









{loading && error === false ?
          <div className='loader'></div> : ""}
       
     
     
{qtyError &&
<div className="alert alert-danger danger alert-dismissible" role="alert" style={{width:'30%', margin:'0px auto'}}>
<div className="containerss"  style={{textAlign:'center',  margin:'0px auto', whiteSpace:'no-wrap'}}>
<strong>  <i className="fa fa-exclamation-circle" aria-hidden="true"></i></strong>  {qtyError}!
</div>
</div>  
 }
<br/>


    {message && 
<div className="alert success alert-success alert-dismissible" role="alert" style={{width:'20%', margin:'0px auto', position:'fixed', left:750}}>
<div className="containerss"  style={{textAlign:'center', margin:'0px auto', whiteSpace:'no-wrap'}}>
<strong> <i className="fa fa-thumbs-up" aria-hidden="true"></i></strong> {message}!
</div>
</div>
}
<br/>

{error ==='Products Not Found' ? "" :

        <Box  className="main-contents">
    {AllProducts &&AllProducts?.filter((product) => product?.category?.toLowerCase()?.includes(querry))?.map((product) => (
   
        <div className="containers" key={product?.id}>
    <div className="box one" key={product?.id}>
      <div className="details" key={product?.id}>
        <div className="topic">Description</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque consequatur  placeat perferendis unde voluptates 
          explicabo rerum distinctio quis, illo, porro et?</p>
        <div className="rating">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="far fa-star"></i>
          <i className="far fa-star"></i>
        </div>
          <div className="price-box">
          </div>
      </div>


      
      <div className=" btns d-flex mb-4" style={{width: "40%", textAlign:'center', alignItems:'center', margin:'0px auto'}}>
                  <button className="btn minus btn-primary px-3 py-1 me-20" style={{backgroundColor:'green'}} onClick={()=>decrease(product)}>
                    <i className="fas fa-minus"></i>
                  </button>

                  <div className="form-outline">
                    <input id="form1" min="0" name="quantity" style={{width:70, textAlign:'center'}} type="number" className="form-control" onChange={onChange} value={product?.quantity}  />
                 
                  </div>

                  <button className="btn minus btn-primary px-3 py-2 ms-2" style={{backgroundColor:'green'}} onClick={()=>increase(product)} >
                    <i className="fas fa-plus"></i>
                  </button>
                </div>


                <div className="btns">
{product?.quantity <= 0?
  
  <button type="submit" className="btn btn-success btn-block mb-4" disabled cursor='not-allowed'  style={{backgroundColor: "#006400" }} onClick={()=>handleClick(product)} >
        Add To Cart
      </button> :""}

      </div> 

<div className="btns">
  {product?.quantity > 0 ?
      <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor: "#006400"}} onClick={()=>handleClick(product)} >
            Add To Cart
          </button> :""}
          </div>
     


    </div>
    <div className="box two">
      <div className="image-box">

        {product?.category ==='Poultry' && product?.section==='Layers' ?
        <div className="image">
          <img src="https://thumbs.dreamstime.com/b/white-chicken-hen-isolated-d-illustration-white-chicken-hen-d-illustration-122513036.jpg?w=768" alt=""/>
        </div>:""}


        {product?.category ==='Poultry' && product?.section==='Broilers' ?
        <div className="image">
          <img src="https://thumbs.dreamstime.com/b/full-body-brown-chicken-hen-standing-isolated-white-backgroun-background-use-farm-animals-livestock-theme-50156210.jpg?w=768" alt=""/>
        </div>:""}



        {product?.category ==='Egg' ?
        <div className="image">
          <img src="https://thumbs.dreamstime.com/b/isolated-3d-egg-24231423.jpg?w=768" alt=""/>
        </div>:""}


        {product?.category ==='Pig' && product?.section ==='Piglets'  ?
        <div className="image" style={{marginRight:'35px'}}>
          <img src="https://thumbs.dreamstime.com/z/two-piglets-isolated-white-two-piglets-isolated-white-background-125596059.jpg?w=992" alt="" style={{width:'120%'}}/>
        </div>:""}


        {product?.category ==='Pig' && product?.section ==='Dry Sows'  ?
        <div className="image" style={{marginRight:'35px'}}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHPZCMj6oXFjszxSXKb_XN_B0zD8_6Ll8_Dg&usqp=CAU" alt="" style={{width:'120%'}}/>
        </div>:""}



  {product?.category ==='Pig' && product?.section ==='Growers'  ?
        <div className="image" >
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXU_82DbhkFCA6Kl4xVL8FAI5byjjhg96BZw&usqp=CAU" alt="" style={{height:'80%'}}/>
        </div>:""}
      

        {product?.category ==='Pig' && product?.section ==='Boar'  ?
        <div className="image" style={{marginRight:'10px'}}>
          <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBgVFRUYGRYaHBgeGRocGhkfHSAeGRgcGSEZHB4cJS8nHB4tIRwZKDgnKy8xNTU1HCQ9QDszPzA0NTEBDAwMEA8QHhISHDErJCs0NDQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0Pz8xMf/AABEIALIBGgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEDBAUGAgj/xABCEAABAwIDBAcGBAQFAwUAAAABAAIRAyEEEjFBUWFxBQYHIoGR8BMyobHB0RRCUuFigpLxM0NystIjs8IkY3ODov/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAcEQEBAQADAQEBAAAAAAAAAAAAARECEiExUUH/2gAMAwEAAhEDEQA/AJlVURAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEReM43hB7RUBVUBERBRVREBERAREQEREBERAREQEREBERAREQFSVVUhBVERAREQEREFEVCYuuI6xdeGsJp4bK92hfq0Hc39R46c1LZFkt+Op6U6Wo4duaq8N3DVx/wBLRcrhulOulSp/hn2bOYznnsHIFcZ0l0sS5znue951JP3m3wWnb0g95hgg7mjTiSZWLbW5JPrtKvSz3mHve4W95xN+U/JWS6BLXASdwnXeRZc/Se4Nlzr74J+OhXv2sQXZr6G0bNn0WI3XRsxz2DuvdI3Od8mrJo9N4gQfaujgXjTZdy5f8SRNpnWSf2g+a9/igBlzFp56cDEyqjs6HXCu38wcBqHAHTi2/mtjh+ur75qTXRfuuIMciCuAbiCLOmBtGUmN0H7KvtbTHMw4HyFir2rORJTOujIvSfxhzSB42XlnXuhMGnVHg36kKPm1thINtYN+E/RXPabrmdN43T9VrtU6xIo67YOYL3Dmx3xV9vW/BH/PA5tePoosqMb+p7OAgiw2iZVptHNEPzC8gsg8yrqXil5nWjBu0xDPMj5hZtDpGi/3KrHcA9pPlKhF2FG1zZ4N+5+i908LFpAM7A4fIq6mJ2RQ7gOmMVQI9lUdl/S6HN8jfxXV9Ede2vOSq0Zt7CP9pNvNNhldwiwsD0lSrCab2u4TccwbrNVQREQEREBERAREQEREBERAREQUVJVVxPX/AKfFJn4drw17x3yTo07Lb/kpbk1ZNrS9cethrF1CkYogw5wPeqRqBGjPn8FzLaTGMz1XFjdjRZx/4/Na5/SbKQ7ned+p0T/K3ZzusJuIdUJe9xJ2T6tzXG3fXWTPGbisWagyU25GE3/U7/UTc+JAVynRY0ZQNNYm/MbVYZWAsNOF/krrKoMyOO62klLyWcYF0EG8aeo/ZWS+/wAba8L+a9vd5k2EEW5eirEgW2DlfeQgyGPNpB2cPkPorr6pkCZnSQTbTZFljU3xMCJjeR47/GyvMeCe6C42367rRFuATUxdYLAjK2+zNs293Re6AhxGeSTpEHzdqsfObiYPESRe2hsvbHT3YLjuDQJ5kTKqMgZpgCdls239QklVL3zBBtwJnyHxVtsuBkEAagkcttwbfBejsmD8d9tsc+CA+qNYE8SZ12yYVz2zYuIuCMxMabmxB4KgmNSRaRFx+3gVXS7RNjrBt/M35XV1MezUIOzbPdPltPmvQqSNQsMjXL9DFttrfBWc94MHn6ha1nGxc6HS0n16+K8OeO9YcfR4x5LEzbreIVO9zPrzTFZdHEVWPLmyDNnN5TqdTrt2ELtOguvJENxHeZoKgHeHB40+vNcThnZpmDMAi0GdhnkV5x+HGrCAdwJnZYHjx3qSmJ1w2IZUaHscHNOhBkK8oK6A6dr4R/dMfqa4kNcBvbG7bqN+xdB012i1hUp+waGtDRna8TLnE2ndAF+K1qYlZFqervTDMZQbWaImQ5u1rhYt+vIhbZaZEREBERAREQEREBERAWk6R6tYavU9tVpNdUAgOM7NJEwY4hbtUUs03Hy6yhlcc2wm333BZTOWi2PWfC+xxddhEAVHxb8pcXCPAhatogac7x8lwd10OIP7z+yvsq6TE+E2289VjtnhyGz7Jmm0D1vTF1e9oL7tN5+HL4Kw995Glh+3G/0VXDy+S8F27Ty+CYi+2tA4WKv0jYRw3/CLnVYRIEzHqArra20+W9BmPeDIsYG4SOFrDkvABtqI4fTbt03Lwx7iJAkbjGvjptKMG0EAbgD56XKovDQ6kbdRw9aq9Mgibcx46EfVYZJ597cBMcPqYV1tRwHedoANTpO3eEReEyRB+43gj6wvbXibwZ9cPNY9yBpqdbDTTgdF5e+Cd+4kTu5hDF54A/Npv+4EFeQ/T15HT5K26tp3vMajmCPivPtAduusfdaiMkPO75zde3Eeo9fJYYfx9b9sL019tm35KozqFYA3+e/d9lk1WGARbdE7vstbTf4ej9iNNyusxgHdMX5Hb8bLKqYyvlGWPmtNmOY6BxOkbBeeWgWyrvDntYFgYrCPZWc5wglrY8eW3RWpEodkVYezrs0cXtcG/wAMZS4b7j5KSFDXVPG+wxGHOgLgwgfpfYzwzFrvBTKt8bsZ5TKIiLTIiIgIiICIiAiIgIiIIm7WOj2tqsqht3Nhx2WMX46XUeZ42ctdmminLtCwftMFUgCWw6Z3X+yg4NB5rjymV143YrJN9m7QT9V5LzH01vy3q4xnrVY9ZpHqPQRXk1TodfW4qtC55bb7L7uCwHkl0Cea2dARIjQGNNBI1j1KuJr2WGTw/sqNBzT68VnNpNJcZaTJseYtfTUq2KUajZ/CR8dngNCs4urbKnr7X+KvMOt/qOWl1ZZlkmLcRwJmPBXAZiBF436yNP22pi6odlzry4qjXyIkkcDHG+z6q6HRoLACYg2ibT9bKzVMAEx8I0G620oLgeNmzUC3nJVs1AHDPpIkHdY3A1SYIaBJJF9vveZ0+Kx8Y+XFsbLzl3cGz8QmJrNpVHuBzGBzMkwJ4Ee9EaQFiPrhttsbvV1bNUMa3TfA2wwOudt5VtrpJJAsXA2bsI0tbXitxmsnD1x4+v3WRn3HxtZYTaYzeonPk+xhY2LxZa/KNfDx0A9fGo3NF9p7195+3rVY7gS+Rbd61OxWsO8QATbnuixA9XWZRftj5gc77LqK8U6T2uD9oPy2H1ZXcVWqOeCRr5+CzKAm59eivLy3OAZjh8YVxNUoPFiHQ5pkA6hwMgeanvA4gVKbKg0e1rh/MAfqvnnFYd7H5mGWuN9b2P8AdTN2fYjPg2iZyOe3wnMAfBwTjMTl66lERbZEREBERAREQEREBEVmvWaxpc9wa0AkuJgADaSdEGj69YhtPA1iTEtDRxLiAAoBJv8AsR812PX7rV+MeGUiRQYe7qM7tM0fADW/GBxucjkufL2unHyL7KpF7/BUZSfUcGMaXPOga0kwNsC5WR0bgamKqMo0W5nv2XgDa536WgetFN3VPqnSwLLd+s4d+oRrwaPyt4bdqs4peT5/Y9rDET9+Ky6eNBEe7x1Hjv8AJe+umAGHx2IpNENa6Wj+F4Dx5B0eC1NN/FYsrcsdOzo7EuotrNpF9LMQHtBdcG4OW4E7YjXksB2NJ897t95giymns4woZ0Zhwb5g95453ucPgQs3pfqnhMVepSAfM52d13iW6+Mq9Lnid5vqB/xIcTAg6QSdm2dZXp9e3kReTIHylS67szwRPvVhyez6tlWj2XYT9db+pn/BTryO3FEj8Ub6AR4C0W/uVjOxzgBpbid3O2mxTbS7NcCNRUdzeR/tAXO9pHVrBYTBZqdLLUc9jGOkl2hcZLjcZWu8YWut/qdpUWVMW7f9o5HX915Zii90EXh177QZgTA/uscsjVbrqh0I7HYptFgyt957v0sFiedwAN55qK1z6hOUbhxvIi8cFfptsRvvxvBMeS6ztD6ntwL2PoT7Cp3QHHMWvAnLJMmQCR/pK5PD1spha+M/V6ow+9z0vrcz5lavEVSXN3g7ydkak/JdP0T0S/G1vY0ozFrnSf4QPqQmO6mY3Dk56DyAffY0vbG+Wi3iEpGqY7vagbLgc/JbCk1oEjTnFxv3rGdgH5Q51N7WjU5HRt2kC3JXWYV8SA8g7MsTttuXPW8ZbcW1xLQ6+yZ9R5eCq5uV0OHHjt0XOYoltQEGDF9t9di22Aq+0s517Qbm/iVvfNZz3GxpNywM7oJnLr8dm5d92Y4gNdXoj3e65k7YJafmz4LgHZWOgm8xoRxi+mo3rpeqvSDaeMoEEZXuLHfztho/ryqcb6cp4l9ERdXMREQEREBERAREQFG3a9iHtZh2hxFNzqmdswC5oaWzvA7yklR52xMBwtEzcV2jzp1PspViJHXsNbq5gcHUr1GUqbC6o8w0DbvJ4AXJOi9XeQxgl7i1rYFyScoF95hTf1N6p08DTBgOxDmj2lQ79S1v6WA+cAlTF176m9VmYGlsdWf/AIjwPHI3c0fE35dMiLTKAO02kXdJVyREezAB2t9ky43iZ8lyhw/gvoTrf1VpY6mJhlZn+HUjT+F36mHds1ChDpDAvoVXUazcr2GHDZvBB2gi4Kxfrc+J56muacBhcugo0xbe1gafiCt4o07J+nmlhwbyA5pc+l/E1xzOaOIJJ5O4FSWtRmiIiqCibtmxkvw9EGzWve4cXENaT/S/zKlDG4xlFhfUe1jRq5xgfueCgHrR0p+MxdSsJyEhrJ2MaMrbbJuY/iKzfi8frl8SyeAU8dl/Vn8Fhc9RsV60OfOrW/kZwgGSN7juXGdnfVH8TVGIqt/9PTdLQRao9p04sadd5Eb1NKSLa0vW3ocYzCVKP5iJYdz23aeUiDwJXzi5hzaEEGCNoOhB4yvqlQN2i9D/AIbHPcBFOv8A9RsWGY++OeeT/OEqRuOx6jOJqvOraUf1vaf/ABKmFQ92Q1D+LqNGhoknm2oyP9xUwrSPD2AiCARuIlYzejqIBApMAOoyN+yy0QR1107OqVdpqUD7OoJOXvFrp2QPd8AobyVMPULHtLHSRB03SCLEL6pWt6Z6Go4un7OswObeDtE2kHYs2NSvmivUe5wLjpy0J/f4LoMFie8x+aHBzSDuLSCHcLiV1XS/ZNUDicNWY5p/LUlp5ZmgyNNVzXR3VjHMxBofh6jnNtubE+8Hnu5TvUV9A03hwBBkEAg8Cva0nVro6tQp5a1QEwIY0ktZwDnXPkBwW7W2FUREBERAREQEREFFHPbI7/oYdv8A7pd/Swj/AMlIyjLtheD+GZ/8jiP6AD81Kscf2f4L2/SNFsS2mTUd/wDWJb/+8in5RR2M4GX4nEHZlpN/7j/nTUrpCiIiqKLjuv8A1U/G0s9MAYimDkOmZuppk87gnQ8CV2SopYPmbD1alGo17CWVqb5E2LXNMEOHOQRzC+hOr3TDMXh21m2Js9u1rh7zT9N4IO1R/wBp/VVwccdh2F0ge3Y0SbWFQAa2gO5A7yuS6sdbnYWo11J4cHQKlN0hpjbOw7najbIU3PGs319BLn+tHWelgmDN3qr59nTBgujaT+Vo3+UrYdEdK08TTD2HYMzZu0nYYUZ9pnSwdXdSY1jXMytdUytL3HLmDQ6JgZzDd8nclviSeuW6ydYKuKeXV32aTlY2zWDh99V1PVPs7dWa2tiy6mwwW0RZzhsLzqwH9I73EaLZ9ReoQp5cTi2zUs5lI3DNoe+damhjRvE6SSkn6tv4tYeg2mxrGNDWNADWtEAAWAAGgV5EWmRcR2r9Gtq4B1SO/Rc17Twc4McPIg/yhdusDpno5uIoVKDtKjHNncSLO5gwfBBEHZXihSxwY7/MY9g5914/2EeIU2r5zFKthnsqlha+nUIEg5faUXAuZO3ZzBU6dXun6WMph9Mw6BnYfeadxG0biLFSVbG5REVQREQEREBERAREQEREBERAREQUUc9q3RL3tZiGNc7I1zXAAmADnzW0HvSeAUjqhClmrLiJOyXptlN1XDvcGio5r6ZJgF0ZXNneRljfBUtqOsP2cGm9xZiG5CTlY6ldrSZDZzXgW0C7TobBPo0wx9Q1CDZxEQ3Y3Ukxx3qS0uNkiItIIiIKLj+t/UTD46HiKNYf5jWNOYbnttm4GZHKQuwRSzSXHG9WOorcFUbVGKrVCARlhjWGRF2gE/FXKfVYP6Tq42qBlaGexbIMvyBrqhGyIgTtBOwLrkTIuqoiKoIiICIiDVdKdC0cRSfSe0RUOYkATnAADxP5gGjyWs6I6osw+UtquzN2gAX8ZtwXUIpi6oqoiqCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICoqogIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiChVURAREQEREBERAREQEREBERAREQEREBERAREQf/2Q==" alt=""  style={{height:'80%'}}/>
        </div>:""}


        {product?.category ==='Pig' && product?.section ==='In-pigs' || product?.section ==='Weaners'  ?
        <div className="image" style={{marginRight:'10px'}}>
          <img src="https://thumbs.dreamstime.com/b/pig-isolated-white-big-background-130393074.jpg?w=768" alt=""/>
        </div>:""}






        {product?.category ==='Cat-fish' ?
        <div className="image">
          <img src="https://thumbs.dreamstime.com/b/catfish-white-background-41272273.jpg?w=768" alt=""/>
        </div>:""}


        <div className="info">
          <div className="name">Category : {product?.category}</div>
          <div className="name">Section : {product?.section}</div>
          <div className="name">Price : ₦{product?.price}</div>
        

        </div>
      </div>
    </div>
  </div>

))}

  </Box> }
  </div>
    )

}



export default Products

