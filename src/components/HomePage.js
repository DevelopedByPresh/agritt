



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
import AdbIcon from '@mui/icons-material/Adb';
import {useNavigate, Link} from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import CardContent from '@mui/material/CardContent';
import Badge from '@mui/material/Badge';
import ApprovalIcon from '@mui/icons-material/Approval';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import InputLabel from '@mui/material/InputLabel';
import Dialog from '@mui/material/Dialog';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';

import OrderHistory from './orderHistory';
import CreateOrder from './createOrder';
import { useSelector, useDispatch } from 'react-redux'
import {AddPoultryProduct, AddCatFishProduct,AddPigProduct, AddEggProduct, ClearError, ClearMessage, GetUser} from "../Actions/Actions"
import Select from '@mui/material/Select';







 const HomePage=()=> {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(()=>{
      document.body.style.zoom = "70%";
      dispatch(GetUser())
    
    },[])
    

  

    
  const message = useSelector((state)=>state?.user?.message)
  const error = useSelector((state)=>state?.user?.error)
  const loading = useSelector((state)=>state?.user?.loading)

  

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
    quantity:'',
    weight:'',
    user:'',
    price:"",
  })

  const {section, quantity, weight, user, price} = products
  products.section = selectedCategory
 const User = JSON.parse(sessionStorage.getItem("user"))
 products.user = User?._id





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
 
      { name: "poultry", category: ["Layers", "Broilers"] },
      { name: "pig", category: ["Boar", "Dry Sows", "In-pigs", "Growers", "Weaners", "Piglets"] },
      { name: "egg", category: ["Big", "Small"] },
      { name: "cat Fish", category: ["Fingerlings", "Mature"] },
  
 
   
 
    ]
  };




  
  const availableProduct = ProductData.product.find((c) => c.name === selectedProduct);
  const availableCategory = availableProduct?.category?.find((s) => s.name === selectedProduct);















  const handleChange = (e)=>{
    const {name, value} = e.target
    setProducts({...products, [name]:value})


  }

  const handleSubmitPoultry = (e)=>{
    e.preventDefault()
    const product = {section, quantity,price, user}
     dispatch(AddPoultryProduct(product))


   

  }

  const handleSubmitPig = (e)=>{
    e.preventDefault()
    const product = {section, quantity, weight, price, user}
     dispatch(AddPigProduct(product))

   

  }


  const handleSubmitEgg = (e)=>{
    e.preventDefault()

    const product = {section, quantity, price, user}
     dispatch(AddEggProduct(product))
  

   

  }


  const handleSubmitCatFish = (e)=>{
    e.preventDefault()
    const product = {section, quantity, weight, price, user}
     dispatch(AddCatFishProduct(product))
  

   

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
  };


    setTimeout(()=>{
      if(message){

        dispatch(ClearMessage())
        setProductDialog(false);
      }
    
   
    },3000)




  const handleCloseProduct = () => {
    setProductDialog(false);
    if(message){
      dispatch(ClearMessage())
    }
    if(error){
      dispatch(ClearError())
    }
  };

  
    const handleClickOpenFinishedOrder = (e) => {
        setFinishedOrder(true);
    };
  
    const handleCloseFinishedOrder  = () => {
        setFinishedOrder(false);
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


    









  const top100Films = [
    { label: 'Inventory', year: 1994 },
    { label: 'Sales', year: 1972 },
    { label: 'Event', year: 1974 },

  ];

 




  return (
    <div>
    <AppBar position="static" sx={{  backgroundColor: '#006400' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
     
          <Typography
            variant="h6"
            noWrap
            component="a"
      
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



     <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          mt:15,
   
          borderRadius: 1,
          cursor:'pointer'
        }}
      >
    <Badge badgeContent={7} color="success"  sx={{mr:13,  }}>
<Card sx={{ minWidth: 275 }}>
      <CardContent>
    
      <Tooltip title="Click To See All Order Entries" sx={{cursor:'pointer'}}>
      
   
      <Typography variant="h5" component="div" onClick={handleClickOpen1}>
      Order Entries   <Fab  aria-label="add" sx={{ml:5, backgroundColor:'#006400', color:'white'}}><ApprovalIcon /></Fab>
      </Typography>
      </Tooltip>
    

      </CardContent>

    </Card>
    </Badge> 


     <Card sx={{ minWidth: 275 }}>
      <CardContent>
    
      <Tooltip title="Add Entries" sx={{cursor:'pointer'}}>
      
   
        <Typography variant="h5" component="div" onClick={handleClickOpen}>
        Create Order Entries   <Fab  aria-label="add" sx={{ml:5, backgroundColor:'#006400', color:'white'}}><AddIcon /></Fab>
        </Typography>
        </Tooltip>
  
      </CardContent>
   
    </Card> 



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


      <div>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        // TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative', backgroundColor:"#006400" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 100, flex: 1 }} variant="h6" component="div">
              Create Order Entries
            </Typography>

            


          
          </Toolbar>
        </AppBar>

   

        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          mt:10,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >

        
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['Inventory','Sales', 'Event' ]}
      sx={{ mr:10, width: 500 }}
      renderInput={(params) => <TextField {...params} label="Category" />}
    />

<Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['Inventory','Sales', 'Event' ]}
      sx={{ mr:10, width: 500 }}
      renderInput={(params) => <TextField {...params} label="Produce" />}
    />




<TextField
          label="Amount"
          id="outlined-start-adornment"
          sx={{ width: 500 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
          }}
        />
    </Box>



    <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          mt:5,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >

        

<TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{ mr:10, width: 500 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />

<TextField
          label="Qty/Weight"
          id="outlined-start-adornment"
          sx={{ mr:10, width: 500 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />


<TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{  width: 500 }}
          InputProps={{
            startAdornment: <InputAdornment position="start">kg</InputAdornment>,
          }}
        />
  

    </Box>


    <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          mt:2,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >

        
<FormControl fullWidth sx={{ m: 1, width:600 }}>
          <InputLabel htmlFor="outlined-adornment-amount">Total Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$ </InputAdornment>}
            label="Total Amount"
          />
        </FormControl>


  

    </Box>

  

    <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          mt:2,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >



<Box sx={{mr:12}}>
<a href="#" className="btn btn-success"  style={{backgroundColor:'#006400'}} onClick={handleCloseFinishedOrder}>Add Another  <Fab color="white" aria-label="add" sx={{ml:3, color:'#006400'}} ><AddIcon /></Fab></a>
</Box>

<Box sx={{pr:5}}>
<a href="#" className="btn btn-success"  style={{backgroundColor:'#006400',}} onClick={handleClickOpenFinishedOrder} >Finish Order Entry <Fab  aria-label="add" sx={{ml:5,  color:'#006400'}}><ApprovalIcon /></Fab> </a>
</Box>

        


    </Box>





    <div>
   
      <Dialog
  fullScreen
 
  
        open={finishedOrder}
        // TransitionComponent={Transition}
      
        onClose={handleCloseFinishedOrder}
        aria-describedby="alert-dialog-slide-description"
      >

<AppBar sx={{ position: 'relative',  backgroundColor: '#006400' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleCloseFinishedOrder}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 100, flex: 1 }} variant="h6" component="div">
               Order Summary
            </Typography>
        
          </Toolbar>
        </AppBar>
        <br/>
 
    


    <CreateOrder/>
    <br/>

    <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          m: 1,
          mt:2,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >


<Card sx={{ minWidth: 275, mr:10}}>
      <CardContent>
    
      <Tooltip title="Total Amount of All Entries" >
      
   
      <Typography  color="text.secondary" gutterBottom>
      Total Amount :  $ XX2359
        </Typography>

        </Tooltip>
  
      </CardContent>
   
    </Card>
        
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{  width: 300 }}
      renderInput={(params) => <TextField {...params} label="Payment Type" />}
    />

    </Box>

    <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          p: 1,
          ml: 3,
          mt:2,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >

<Box sx={{mr:12}}>
<a href="#" className="btn btn-success"  style={{backgroundColor:'#006400'}} onClick={handleCloseFinishedOrder}>Add Another Order <Fab color="white" aria-label="add" sx={{ml:3, color:'#006400'}} ><AddIcon /></Fab></a>
</Box>

<Box sx={{pr:5}}>
<a href="#" className="btn btn-success"  style={{backgroundColor:'#006400'}} >Submit Order Entry <Fab  aria-label="add" sx={{ml:5, color:'#006400'}}><ApprovalIcon /></Fab> </a>
</Box>




  

    </Box>
    <br/>
      </Dialog>
    </div>
      </Dialog>
    </div>


















    <div>

<Dialog
  fullScreen
  open={open1}
  onClose={handleClose1}
  // TransitionComponent={Transition}
>
  <AppBar sx={{ position: 'relative', backgroundColor: '#006400'  }}>
    <Toolbar>
      <IconButton
        edge="start"
        color="inherit"
        onClick={handleClose1}
        aria-label="close"
      >
        <CloseIcon />
      </IconButton>
      <Typography sx={{ ml: 110, flex: 1 }} variant="h6" component="div">
        My Order History
      </Typography>

   
    
    </Toolbar>
  </AppBar>
  <br/>



    <OrderHistory/>


</Dialog>
</div>










<div>
      
      <Dialog
        open={productDialog}
        onClose={handleCloseProduct}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="lg"

      >
        <DialogTitle id="alert-dialog-title">
          {"Add Products"}
        </DialogTitle>






        
         {loading && error === false ?
          <div className='loader'></div> : ""}
          <br/> 


   {message &&  

<div className="alert success alert-success alert-dismissible" role="alert" style={{width:'50%', margin:'0px auto'}}>
<div className="container" style={{width:'50%', margin:'0px auto'}}>

<strong > <i className="fa fa-thumbs-up" aria-hidden="true"></i></strong> {message} !

</div>
</div>
 }



{error &&
<div className="alert alert-danger danger alert-dismissible" role="alert" style={{width:'80%', margin:'0px auto'}}>
<div className="container"  style={{textAlign:'center',  margin:'0px auto', whiteSpace:'no-wrap'}}>

<strong>  <i className="fa fa-exclamation-circle" aria-hidden="true"></i></strong>  {error}!




</div>
</div>  
 }



<form>
        
        <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        //  flexWrap:'wrap',
          textAlign:'center',
          alignItems:'center',
          p: 1,
          m: 1,
          mt:5,
          bgcolor: 'background.paper',
          borderRadius: 1,
        }}
      >

        
        <Box sx={{mr:30}}>

              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Product...</InputLabel>
                <Select
                  sx={{ width: 330, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedProduct}
                  fullWidth
                  onFocus={handleFocus}
                  input={<OutlinedInput label="Select State..." />}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                >
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
                  value={selectedCategory}
                  onFocus={handleFocus}
                  input={<OutlinedInput label="Select Local Government..." />}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
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
          onFocus={handleFocus}
        
        /> 



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


    {selectedProduct === 'cat Fish' ||  selectedProduct === 'pig' ?

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



</Box>:""}











</Box>

    </form><br/>


 

   
        <DialogActions>

          {selectedProduct === 'poultry' ?

        <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#006400', }}  onClick={handleSubmitPoultry}>Add Product </a>
                  
                  </div> : ""}
 



{selectedProduct === 'pig' ?
                  
        <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#006400', }} onClick={handleSubmitPig} >Add Product </a>
                  
                  </div> : ""
 }




{selectedProduct === "egg" ?

                  
        <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#006400', }} onClick={handleSubmitEgg} >Add Product  </a>
                  
                  </div> :
""}


               {selectedProduct === "cat Fish" ?   
        <div className="form-group focused" style={{marginRight:10}}>
                  <a href="#!" className="btn btn-success"  style={{backgroundColor:'#006400', }} onClick={handleSubmitCatFish}  >Add Product  </a>
                  
                  </div>: ""}
                  
  
         
        </DialogActions>
      </Dialog>
    </div>







    <Copyright sx={{ mt: 35 }} />

    
    </div>
  );
}
export default HomePage;




  
