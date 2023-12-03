



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
import {useNavigate, Link} from 'react-router-dom'
// import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import CardContent from '@mui/material/CardContent';
import Badge from '@mui/material/Badge';
import ApprovalIcon from '@mui/icons-material/Approval';
import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';
// import InputAdornment from '@mui/material/InputAdornment';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

// import { styled } from '@mui/material/styles';


// import SearchIcon from "@mui/icons-material/Search";

import OrderHistory from './orderHistory';

import { useSelector, useDispatch } from 'react-redux'
import {AddProducts, ClearError, ClearMessage, GetUser, GetProducts, GetOrder, LoggedOut} from "../Actions/Actions"
import Select from '@mui/material/Select';
import { jwtDecode } from "jwt-decode"













 const HomePage=()=> {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const token = sessionStorage.getItem('userToken')
   


    useEffect(()=>{
      document.body.style.zoom = "70%";
      dispatch(GetUser())
      dispatch(GetProducts())
      dispatch(GetOrder())
      dispatch(ClearError())
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
  const error = useSelector((state)=>state?.user?.error)
  const loading = useSelector((state)=>state?.user?.loading)
  const orders = useSelector((state)=>state?.user?.order)
 


const pages = ['About Us', 'Contact Us'];
const settings = [ 'Logout', 'Reset Password','Profile', 'Dashboard',];


  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [finishedOrder, setFinishedOrder] = useState(false);
  const [productDialog, setProductDialog] = useState(false);
  const UserInfo = JSON.parse(sessionStorage.getItem('UpdateUser'))


  const [selectedProduct, setSelectedProduct] = useState();
  const [selectedCategory, setSelectedCategory] = useState();

  const [products, setProducts] = useState({
    section:'',
    category:"",
    quantity:'',
    weight:'',
    user:'',
    price:"",
  })

  const {section, quantity, weight, user, price, category} = products
  products.section = selectedCategory
 const User = JSON.parse(sessionStorage?.getItem("user"))
 products.user = User?.id
 products.category = selectedProduct


  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="#">
          Agritally
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  

  const ProductData = {
    product: [
 
      { name: "Poultry", category: ["Layers", "Broilers"] },
      { name: "Pig", category: ["Boar", "Dry Sows", "In-pigs", "Growers", "Weaners", "Piglets"] },
      { name: "Egg", category: ["Big", "Small"] },
      { name: "Cat-fish", category: ["Fingerlings", "Mature"] },
    ]
  };



// what this does is, depending on the Product i select, it populates the section attached to the product on the section dropdown select... start
  
  const availableProduct = ProductData.product.find((c) => c.name === selectedProduct);
  const availableCategory = availableProduct?.category?.find((s) => s.name === selectedProduct);

// what this does is, depending on the Product i select, it populates the section attached to the product on the section dropdown select.. end











  const handleChange = (e)=>{
    const {name, value} = e.target
    setProducts({...products, [name]:value})


  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    const product = {section, quantity,price, weight, user, category}
     dispatch(AddProducts(product))


   

  }



  
const handleFocus = () => {
  if (error) {
    dispatch(ClearError());
  }

  if(message){
    dispatch(ClearMessage())
  }

 
};



  
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
    // navigate('/Login')
  };

  
  const HandleOpenProduct = () => {
    setProductDialog(true);
    if(error){
      dispatch(ClearError())
    }
  };


    setTimeout(()=>{
      if(message){
        dispatch(ClearMessage())
      }
    },1500)




  const handleCloseProduct = () => {
    setProductDialog(false);
    if(message){
      dispatch(ClearMessage())
    }
    if(error){
      dispatch(ClearError())
    }
  };

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const handleClickOpen1 = () => {
        setOpen1(true);
      };
    
      const handleClose1 = () => {
        setOpen1(false);
      };


    









  

 




  return (
    <div>
    <AppBar position="static" sx={{  backgroundColor: '#006400' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
     
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
           // component="a"
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
            <Tooltip >
              {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://demos.creative-tim.com/argon-dashboard/assets-old/img/theme/team-4.jpg" />
              </IconButton> */}

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




    <Typography variant="h5" component="div" className="text-uppercase" sx={{textAlign:'center', mt:20, fontWeight:600, fontFamily:'sans-serif', color:'black'}} >
      Welcome, {UserInfo?.lastName}   
      </Typography>


{/* 
cards on Homepage  for order History, create Order and Add Products Start */}

     <Box sx={{ display: 'flex', justifyContent: 'center',p: 1, m: 1, mt:15, borderRadius: 1,cursor:'pointer' }}>


 
     <Link to="/record">
     <Card sx={{ minWidth: 275, mr:15 }}>
      <CardContent>
        <Typography variant="h5" component="div" onClick={handleClickOpen}>
        Enter Product Record   <Fab  aria-label="add" sx={{ml:5, backgroundColor:'#006400', color:'white'}}><AddIcon /></Fab>
        </Typography>
      </CardContent>
    </Card> 
    </Link>







    <Badge badgeContent={orders?.length} color="success"  sx={{mr:13,  }}>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <Tooltip title="Click To See All Order Entries" sx={{cursor:'pointer'}}>
      <Typography variant="h5" component="div" onClick={handleClickOpen1}>
     My Order Entries   <Fab  aria-label="add" sx={{ml:5, backgroundColor:'#006400', color:'white'}}><ApprovalIcon /></Fab>
      </Typography>
      </Tooltip>
      </CardContent>
    </Card>
    </Badge> 




    <Link to="/products">
     <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" onClick={handleClickOpen}>
        Create Order Entries   <Fab  aria-label="add" sx={{ml:5, backgroundColor:'#006400', color:'white'}}><AddIcon /></Fab>
        </Typography>
      </CardContent>
    </Card> 
    </Link>



    <Card sx={{ minWidth: 275, ml:15 }}>
      <CardContent>
      <Tooltip title="Add Products" sx={{cursor:'pointer'}}>
        <Typography variant="h5" component="div" onClick={HandleOpenProduct}>
        Add Products  <Fab  aria-label="add" sx={{ml:5, backgroundColor:'#006400', color:'white'}}><AddIcon /></Fab>
        </Typography>
        </Tooltip>
      </CardContent>
    </Card>
      </Box>
      
{/* cards on Homepage  for order History, create Order and Add Products end */}





{/* Modal showing Order History end, Please check how i imported the OrderHistory component in the Modal*/}
    <div>
<Dialog fullScreen open={open1} onClose={handleClose1}>
  <AppBar sx={{ position: 'relative', backgroundColor: '#006400'  }}>
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        onClick={handleClose1}
        aria-label="close">
        <CloseIcon />
      </IconButton>
      <Typography sx={{ ml: 110, flex: 1 }} variant="h6" component="div">
        My Order Entries
      </Typography>
    </Toolbar>
  </AppBar>
  <br/>
    <OrderHistory/>
</Dialog>
</div>
{/* Modal showing Order History end , Please check how i imported the OrderHistory component in the Modal*/}







{/* Adding Product Modal start */}


<div> 
      <Dialog
        open={productDialog}
        onClose={handleCloseProduct}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="lg">
        <Box sx={{display:"flex", justifyContent:'space-between'}}>
        <DialogTitle id="alert-dialog-title">
          {"Add Products"}
        </DialogTitle>
        <CloseIcon sx={{marginTop:2, mr:5, fontSize:30, fontWeight:900, color:'red', cursor: 'pointer'}} onClick={handleCloseProduct}/>
        </Box>
       


         {loading && error === false ?
          <div className='loader'></div> : ""}
          <br/> 


          {message && 
<div className="alert success alert-success alert-dismissible" role="alert" style={{width:'30%', margin:'0px auto'}}>
<div className="containerss"  style={{textAlign:'center', margin:'0px auto', whiteSpace:'no-wrap'}}>
<strong> <i className="fa fa-thumbs-up" aria-hidden="true"></i></strong> {message}!
</div>
</div>
}



{error &&
<div className="alert alert-danger danger alert-dismissible" role="alert" style={{width:'40%', margin:'0px auto'}}>
<div className="containerss"  style={{textAlign:'center',  margin:'0px auto', whiteSpace:'no-wrap'}}>
<strong>  <i className="fa fa-exclamation-circle" aria-hidden="true"></i></strong>  {error}!
</div>
</div>  
 }



<form>  
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          textAlign:'center',
          alignItems:'center',
          p: 1,
          m: 1,
          mt:5,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}>
        <Box sx={{mr:30}}>
              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Product...</InputLabel>
                <Select
                  sx={{ width: 330, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedProduct || ""}
                  fullWidth
                  onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product..." />}
                  onChange={(e) => setSelectedProduct(e.target.value)}>
                  {ProductData.product.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>
          


              <Box >
              <FormControl sx={{ width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Category...</InputLabel>
                <Select
                  sx={{ width: 330, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedCategory || ""}
                  onFocus={handleFocus}
                  input={<OutlinedInput label="Select Category..." />}
                  onChange={(e) => setSelectedCategory(e.target.value)}>
                  {availableProduct?.category.map((e, key) => (
                    <MenuItem key={key} value={e}>
                      {e}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl> 
              </Box>
              
          
       
               <Box sx={{ml:30}}>
                <TextField
                label="Quantity"
                id="outlined-start-adornment"
                sx={{ width: 330 }}
                 onChange={handleChange}
                 name='quantity'
                 value={quantity}
                onFocus={handleFocus}/> 
                 </Box>
               </Box><br/>






           <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          p: 1,
          m: 1,
          mt:3,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >

          <Box sx={{ml:4}}>
           <TextField
          label="Price"
          id="outlined-start-adornment"
          sx={{ width: 330 }}
          onChange={handleChange}
          name='price'
          value={price}
          onFocus={handleFocus}
        /> 
        </Box>



          <Box sx={{ml:8}}>
         <TextField
          label="Weight (kg)"
          id="outlined-start-adornment"
          sx={{ width: 330 }}
          onChange={handleChange}
          name='weight'
          value={weight}
          onFocus={handleFocus}
        /> 

       </Box>
   </Box>
</form><br/>

        <DialogActions>
        <div className="form-group focused" style={{marginRight:10}}>
            <a href="#!" className="btn btn-success"  style={{backgroundColor:'#006400', }}  onClick={handleSubmit}>Add Product </a>
            </div>
        </DialogActions>
      </Dialog>
    </div> 

{/* Adding Product Modal end */}





    <Copyright sx={{ mt: 35 }} />

    
    </div>
  );
}
export default HomePage;




  
