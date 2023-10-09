

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
import {Link} from 'react-router-dom'
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';
// import AddIcon from '@mui/icons-material/Add';
// import Fab from '@mui/material/Fab';
// import CardContent from '@mui/material/CardContent';
import Badge from '@mui/material/Badge';
// import ApprovalIcon from '@mui/icons-material/Approval';
import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import InputLabel from '@mui/material/InputLabel';
// import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';
import InputAdornment from '@mui/material/InputAdornment';
// import FormControl, { useFormControl } from '@mui/material/FormControl';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogActions from '@mui/material/DialogActions';


import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from "@mui/icons-material/Search";

import { useSelector, useDispatch } from 'react-redux'
import { ClearError, ClearMessage, GetUser, GetProducts, AddToCart, GetCart, DeleteCartItem, UpdateCart, FinishOrder,CreateOrder, GetOneProduct} from "../../Actions/Actions"
// import Select from '@mui/material/Select';

import "./Products.css"
import Drawer from '@mui/material/Drawer';
import { create } from '@mui/material/styles/createTransitions';


// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail'
















const Products = ()=>{




  const dispatch = useDispatch()

  useEffect(()=>{
    document.body.style.zoom = "70%";
    dispatch(GetUser())
    dispatch(GetProducts())
    dispatch(GetCart())
    dispatch(GetOneProduct())
  },[])


const message = useSelector((state)=>state?.user?.message)
const OrderMessage = useSelector((state)=>state?.user?.orderMsg)
const error = useSelector((state)=>state?.user?.error)
const loading = useSelector((state)=>state?.user?.loading)
const AllProducts = useSelector((state)=>state?.user?.products)
const cartItems = useSelector((state)=>state?.user?.cartItems)
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



 const CompleteOrder =()=>{



  if(qty > OneProductQty){
    setCartQtyError(`Sorry, we have only ${OneProduct?.quantity} ${updateProduct?.productId?.category } ${(updateProduct?.productId?.section)} in Stock, Please Adjust quantity`)
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
  sessionStorage.setItem('updateId', item?.productId?._id)
  if(item && item?.quantity){
    item.quantity ++
    setQty(item?.quantity)


   

 
  
     const quantity = item?.quantity
     const productId = item?.productId?._id
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
    const productId = item?.productId?._id
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


},1000)







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
 
 
 const productId = product?.id
 const price = product?.price
 const quantity = product.quantity
const user =  User?.id

const CartData = {productId, price, quantity, user}


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
<strong> <i className="fa fa-thumbs-up" aria-hidden="true"></i></strong> Order Submitted Sucessfully!
</div>
</div>
}
<br/>




<section className="h-100 gradient-custom " >

{loading && error === false ?
          <div className='loader'></div> : ""}
     

       


<div className="card-header py-3 text-center">
  {cartItems?.length >0 ?
            <h3 className="mb-0" style={{fontFamily:'serif'}}>My Cart   -   { activeCart && cartItems?.length} items</h3>: ""}

{ cartItems?.length  === 0 ?
            <h3 className="mb-0" style={{fontFamily:'serif'}}>No items in Cart</h3>: ""}
          </div>
  <div className="container py-5 col-md-20">

    <div className="row d-flex justify-content-center my-4 col-md-20">
      <div className="col-md-20">
    
  
        <div className="card mb-4 col-md-20">
      
          <div className="card-body">


          {  cartItems &&cartItems?.map((item)=>(
            <div className="row" key={item?.id}>
              <div className="col-lg-3 col-md-18 mb-4 mb-lg-0" key={item?.id}>


                {item?.productId?.category === 'Poultry' ?
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light" key={item?.id}>
                  <img src="https://thumbs.dreamstime.com/b/white-chicken-hen-isolated-d-illustration-white-chicken-hen-d-illustration-122513036.jpg?w=768"
                    className="w-100" alt="product" />
                  <a href="#!">
               
                  </a>
                </div>:""}


                {item?.productId?.category === 'Egg' ?
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://thumbs.dreamstime.com/b/isolated-3d-egg-24231423.jpg?w=768"className="w-100" alt="product" />
                  <a href="#!">
               
                  </a>
                </div>:""}


                {item?.productId?.category === 'Pig' ?
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://thumbs.dreamstime.com/b/pig-isolated-white-big-background-130393074.jpg?w=768"className="w-100" alt="product" />
                  <a href="#!">
               
                  </a>
                </div>:""}


                {item?.productId?.category === 'Cat-fish' ?
                <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="https://thumbs.dreamstime.com/b/catfish-white-background-41272273.jpg?w=768"className="w-100" alt="product" />
                  <a href="#!">
               
                  </a>
                </div>:""}
              </div>

              <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <p><strong>Category : {item?.productId?.category}</strong></p>
                <p>Section : {item?.productId?.section}</p>
              
               
                <button type="button" className=" btn-sm  mb-2" data-mdb-toggle="tooltip"
                  title="Remove item" onClick={() =>`${( handleDelete(item?.productId?._id))}`} style={{ backgroundColor:'white', outline:'none', border:'none', marginTop:'20px'}}>
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



        {   cartItems?.length > 0 ?  
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
      <StyledBadge badgeContent={  cartItems?.length} color="primary">
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

  


{AllProducts?.length ===0 ? "" :

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
<br/>


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
 
    

{AllProducts?.length === 0 ?
    <Typography textAlign="center">No Product Available !</Typography> : ""}


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


        <Box  className="main-contents">
    {AllProducts &&AllProducts?.filter((product) => product?.category?.toLowerCase()?.includes(querry))?.map((product) => (
        <div className="containers" key={product?._id}>
    <div className="box one" key={product?._id}>
      <div className="details" key={product?._id}>
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
  
      <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor: "#006400"}} onClick={()=>handleClick(product)} >
            Add To Cart
          </button>
          </div>
     


    </div>
    <div className="box two">
      <div className="image-box">

        {product?.category ==='Poultry' ?
        <div className="image">
          <img src="https://thumbs.dreamstime.com/b/white-chicken-hen-isolated-d-illustration-white-chicken-hen-d-illustration-122513036.jpg?w=768" alt=""/>
        </div>:""}


        {product?.category ==='Egg' ?
        <div className="image">
          <img src="https://thumbs.dreamstime.com/b/isolated-3d-egg-24231423.jpg?w=768" alt=""/>
        </div>:""}


        {product?.category ==='Pig' ?
        <div className="image">
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

  </Box>
  </div>
    )

}



export default Products

