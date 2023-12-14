

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
import TextField from '@mui/material/TextField';

import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';





import MUIDataTable from "mui-datatables";

import Badge from '@mui/material/Badge';

import CloseIcon from '@mui/icons-material/Close';


import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';


import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from "@mui/icons-material/Search";

import { useSelector, useDispatch } from 'react-redux'
import {
     ClearError,
     ClearMessage, 
     LoggedOut, 
     CreateFishRecord,
    GetFishRecord,
    UpdateFishRecord,
    DeleteFishRecord,

    CreatePigRecord,
    GetPigRecord,

    CreateEggRecord,
    GetEggRecord,

    CreatePoultryRecord,
    GetPoultryRecord,
    UpdatePoultryRecord,
    DeletePoultryRecord,     } from "../../Actions/Actions"
// import Select from '@mui/material/Select';


import Drawer from '@mui/material/Drawer';
// import { create } from '@mui/material/styles/createTransitions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';


import { jwtDecode } from "jwt-decode"
import { Start } from '@mui/icons-material';
















const Record = ()=>{




  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = sessionStorage.getItem('userToken')

  useEffect(()=>{
    document.body.style.zoom = "70%";
    
    dispatch(GetEggRecord())
    dispatch(GetPigRecord())
    dispatch(GetPoultryRecord())
    dispatch(GetFishRecord())
   

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



 
  const User = JSON.parse(sessionStorage.getItem('user'))

  const id = User?.id

const message = useSelector((state)=>state?.user?.message)
const error = useSelector((state)=>state?.user?.error)
const loading = useSelector((state)=>state?.user?.loading)
const EggRecords = useSelector((state)=>state?.user?.EggRecord)
const PigRecords = useSelector((state)=>state?.user?.PigRecord)
const FishRecords = useSelector((state)=>state?.user?.FishRecord)
const PoultryRecords = useSelector((state)=>state?.user?.PoultryRecord)






const [selectedProduct, setSelectedProduct] = useState(null);
const [selectedPig, setSelectedPig] = useState();
const [selectedPoultry, setSelectedPoultry] = useState();
const [selectedFish, setSelectedFish] = useState();
const [selectedPen, setSelectedPen] = useState();
const [selectedEgg, setSelectedEgg] = useState();
const pages = ['About Us', 'Contact Us'];
const settings = [ 'Logout', 'Reset Password','Profile', 'Dashboard',];
const [anchorElNav, setAnchorElNav] = useState(null);
const [anchorElUser, setAnchorElUser] = useState(null);



const [tableBodyHeight, setTableBodyHeight] = useState("300px");

const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
const [searchBtn, setSearchBtn] = useState(true);
const [downloadBtn, setDownloadBtn] = useState(true);
const [printBtn, setPrintBtn] = useState(true);
const [viewColumnBtn, setViewColumnBtn] = useState(true);
const [filterBtn, setFilterBtn] = useState(true);

 const UserInfo = JSON.parse(sessionStorage.getItem('UpdateUser'))

 const handleFocus = () => {
    if (error) {
      dispatch(ClearError());
    }
  
 
  };





 const ProductData = {
    product: [
  
      { name: "Poultry", category: ["Layers", "Broilers"] },
      { name: "Pig", category: ["Boar", "Dry Sows", "In-pigs", "Growers", "Weaners", "Piglets"] },
      { name: "Egg", category: ["Big", "Small"] },
      { name: "Fish", category: ["Fingerlings", "Mature"] },
    ]
  };





  

const PigData = {
    PigProduct: [
  
      { name: "Boar" },
      { name: "DrySows" },
      { name: "In-pigs"  },
      { name: "farrow-pigs" },
      { name: "Growers" },
      { name: "Weaners" },
      { name: "Piglets" },
    ]
  };
  
  
  const EggData = {
    EggProduct: [
  
      { name: "Big" },
      { name: "Small" },
    
    ]
  };
  
  
  
  const PoultryData = {
    PoultryProduct: [
  
      { name: "Layers" },
      { name: "Broilers" },
    
    ]
  };
  
  
  
  
  
  const FishData = {
    FishProduct: [
  
      { name: "Fingerlings" },
      { name: "Mature" },
    
    ]
  };
  
  
  
  
  const PenData = {
    PigProduct: [
  
      { name: 1, },
      { name: 2,  },
      { name: 3,  },
      { name: 4,  },
  
    ]
  };
  

  

  
const availableProduct = ProductData.product.find((c) => c.name === selectedProduct);
const availablePig = PigData.PigProduct.find((c) => c.name === selectedPig);
const availablePoultry = PoultryData.PoultryProduct.find((c) => c.name === selectedPoultry);
const availableFish = FishData.FishProduct.find((c) => c.name === selectedFish);
const availableEgg = EggData.EggProduct.find((c) => c.name === selectedEgg);
const availableCategory = availableProduct?.category?.find((s) => s.name === selectedProduct);
  









const [EggRecord, setEggRecord] = useState({
    user:'',
    category:"",
    penNumber:'',
    totalBirdHoused:'',
    ageHoused:"",
    mortality:"",
    waterConsumption:"",
    feedConsumption:"",
    remark:'',
    culls:"",
    // openingBalance:'',
    // closingBalance:'',

    eggCollection:{
      firstTray:"",
      secondTray:"",
      thirdTray:"",
      cracks:"",
      production:''
    }

  })
  const { penNumber, totalBirdHoused, ageHoused, mortality,  waterConsumption, feedConsumption, remark, culls, eggCollection, }  = EggRecord
  
  EggRecord.user = id
  EggRecord.category = selectedEgg




  
  const [PigRecord, setPigRecord] = useState({
    user:'',
    pen:"",
    category:'',
    room:'',
    quantity:"",
    mortality:"",


  })
  const {pen, category,room,quantity,  user } = PigRecord

  PigRecord.pen = selectedPen
  PigRecord.category = selectedPig
  PigRecord.user = id



    
  const [PoultryRecord, setPoultryRecord] = useState({
    User:'',
    category:'',
    quantity:"",
    mortality:"",


  })
 // const {cat,qty, mort, User } = PoultryRecord



 const [FishRecord, setFishRecord] = useState({
  User:'',
  category:'',
  quantity:"",
  mortality:"",
  weight:""


})
// const {cat,qty, mort, User } = PoultryRecord



const handleChangeFish =(e)=>{
  const {name, value} = e.target
  setFishRecord({...FishRecord, [name]:value})

}


const HandleSubmitPig = (e)=>{
    e.preventDefault()
    const mortality = PigRecord.mortality
    const data = { user,pen, category,room,quantity, mortality}
 

 dispatch(CreatePigRecord(data))
  



  }
 

  const handleChangePoultry =(e)=>{
    const {name, value} = e.target
    setPoultryRecord({...PoultryRecord, [name]:value})

  }

  
  
  const handleChangePig =(e)=>{
    const {name, value} = e.target
    setPigRecord({...PigRecord, [name]:value})

  }


  const handleChange =(e)=>{
    const {name, value} = e.target
    setEggRecord({...EggRecord, [name]:value})

  }


  const HandleSubmit = (e)=>{
    e.preventDefault()
    const category = selectedEgg
    const data = {
      user,
      category, 
        penNumber,
       totalBirdHoused,
        ageHoused,
         mortality,
         waterConsumption,
         feedConsumption,
         remark,
         culls, 
         eggCollection,
        
        }

  dispatch(CreateEggRecord(data))
 
  }


  setTimeout(()=>{
    if(message){
      dispatch(ClearMessage())
    }
  },1500)
  



  const HandleSubmitPoultry = (e)=>{
    e.preventDefault()
    const user = id
    const category = selectedPoultry
    const mortality = PoultryRecord.mortality
    const quantity = PoultryRecord.quantity
    const data = {category,user, mortality, quantity}

  dispatch(CreatePoultryRecord(data))
 
  }



  const HandleSubmitFish = (e)=>{
    e.preventDefault()
    const user = id
    const category = selectedFish
    const mortality = FishRecord.mortality
    const quantity = FishRecord.quantity
    const weight = FishRecord.weight
    const data = {category,user, mortality, quantity, weight}

  dispatch(CreateFishRecord(data))
 
  }

























  






 
const handleOpenNavMenu = (event) => {
  setAnchorElNav(event.currentTarget);
};

const handleCloseNavMenu = () => {
  setAnchorElNav(null);
};

const handleCloseUserMenu = () => {
  setAnchorElUser(null);
  // navigate('/Login')
};






const columns = [
    {
     name: "Section",
     label: "Section",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Opening Stock",
     label: "Opening Stock",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Mortality",
     label: "Mortality",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Closing Stock",
     label: "Closing Stock",
     options: {
      filter: true,
      sort: false,
     }
    },
   ];
   

   const options2 = {
    filterType: 'checkbox',

    search: searchBtn,
    download: downloadBtn,
    print: printBtn,
    viewColumns: viewColumnBtn,
    filter: filterBtn,
    filterType: "dropdown",
  
    tableBodyHeight,
    tableBodyMaxHeight,
  };


   const EggRecordcolumns = [
    {
     name: "Date Entered",
     label: "Date Entered",
     options: {
      filter: true,
      sort: true,
     }
    },
    // {
    //  name: "Opening Stock",
    //  label: "Opening Stock",
    //  options: {
    //   filter: true,
    //   sort: false,
    //  }
    // },
    {
     name: "Mortality",
     label: "Mortality",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Category",
     label: "Category",
     options: {
      filter: true,
      sort: false,
     }
    },


    {
      name: "Age Housed",
      label: "Age Housed",
      options: {
       filter: true,
       sort: false,
      }
     },




     {
      name: "Culls",
      label: "Culls",
      options: {
       filter: true,
       sort: false,
      }
     },


     {
      name: "Feed Consumption",
      label: "Feed Consumption",
      options: {
       filter: true,
       sort: false,
      }
     },

     
     {
      name: "Water Consumption",
      label: "Water Consumption",
      options: {
       filter: true,
       sort: false,
      }
     },





     {
      name: "Pen Number",
      label: "Pen Number",
      options: {
       filter: true,
       sort: false,
      }
     },



     {
      name: "First Tray",
      label: "First Tray",
      options: {
       filter: true,
       sort: false,
      }
     },

     

     {
      name: "Second Tray",
      label: "Second Tray",
      options: {
       filter: true,
       sort: false,
      }
     },



     

     {
      name: "Third Tray",
      label: "Third Tray",
      options: {
       filter: true,
       sort: false,
      }
     },


     

     {
      name: "Cracks",
      label: "Cracks",
      options: {
       filter: true,
       sort: false,
      }
     },


     

     {
      name: "Total Bird Housed",
      label: "Total Bird Housed",
      options: {
       filter: true,
       sort: false,
      }
     },

     {
      name: "Status",
      label: "Status",
      options: {
       filter: true,
       sort: false,
      }
     },

     {
      name: "Remark",
      label: "Remark",
      options: {
       filter: false,
       sort: false,
      }
     },

   ];
   



   
   const PigRecordcolumns = [
    {
     name: "Date Entered",
     label: "Date Entered",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Category",
     label: "Category",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Mortality",
     label: "Mortality",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Pen",
     label: "Pen",
     options: {
      filter: true,
      sort: false,
     }
    },


    {
      name: "Room",
      label: "Room",
      options: {
       filter: true,
       sort: false,
      }
     },




     {
      name: "Quantity",
      label: "Quantity",
      options: {
       filter: true,
       sort: false,
      }
     },


     {
      name: "Status",
      label: "Status",
      options: {
       filter: true,
       sort: false,
      }
     },

     {
      name: "Remark",
      label: "Remark",
      options: {
       filter: false,
       sort: false,
      }
     },


   
   ];






    
 





    
   const PoultryRecordcolumns = [
    {
     name: "Date Entered",
     label: "Date Entered",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Category",
     label: "Category",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Mortality",
     label: "Mortality",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Quantity",
     label: "Quantity",
     options: {
      filter: true,
      sort: false,
     }
    },


    {
      name: "Status",
      label: "Status",
      options: {
       filter: true,
       sort: false,
      }
     },

     {
      name: "Remark",
      label: "Remark",
      options: {
       filter: false,
       sort: false,
      }
     },


   




  

 

  


  
   ];
   







   const FishRecordcolumns = [
    {
     name: "Date Entered",
     label: "Date Entered",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Category",
     label: "Category",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Weight",
     label: "Weight",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
     name: "Quantity",
     label: "Quantity",
     options: {
      filter: true,
      sort: false,
     }
    },


    {
      name: "Mortality",
      label: "Mortality",
      options: {
       filter: true,
       sort: false,
      }
     },


    {
      name: "Status",
      label: "Status",
      options: {
       filter: true,
       sort: false,
      }
     },

     {
      name: "Remark",
      label: "Remark",
      options: {
       filter: false,
       sort: false,
      }
     },





  

 

  


 
   ];

   



     
    

    

   const EggRecordData =
   EggRecords &&
   EggRecords?.map((record) => {
    var date = record?.createdAt,
    newDate = (new Date(date))?.toDateString();

     return {
        "Date Entered":  newDate,
       // 'Opening Stock': (<h5 style={{marginLeft:30}}>{record?.openingBalance} </h5>),
        Mortality : (<h5 style={{marginLeft:20}}>{record?.mortality} </h5>),
        Category :record?.category,
        'Age Housed' :  (<h5 style={{marginLeft:30}}>{record?.ageHoused} </h5>),
        Culls :  record?.culls,
        'Feed Consumption': (<h5 style={{marginLeft:30}}>{record?.feedConsumption} </h5>),
        'Water Consumption': (<h5 style={{marginLeft:30}}>{record?.waterConsumption} </h5>),
        'Pen Number': (<h5 style={{marginLeft:30}}>{record?.penNumber} </h5>),
        'First Tray': (<h5 style={{marginLeft:20}}>{record?.eggCollection?.firstTray} </h5>),
        'Second Tray': (<h5 style={{marginLeft:30}}>{record?.eggCollection?.secondTray} </h5>),
        'Third Tray': (<h5 style={{marginLeft:20}}>{record?.eggCollection?.thirdTray} </h5>),
        Cracks: (<h5 style={{marginLeft:20}}>{record?.eggCollection?.cracks} </h5>),
        "Total Bird Housed": (<h5 style={{marginLeft:20}}>{record?.totalBirdHoused} </h5>),
        Status:record?.status,

        Remark:  record?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red', marginLeft:2}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green', marginLeft:2}}/>,

    
      

     };
   });
 



   const PigRecordData =
   PigRecords &&
   PigRecords?.map((record) => {
    var date = record?.createdAt,
    newDate = (new Date(date))?.toDateString();

     return {
        "Date Entered":  newDate,
        Category:  record?.category,
        Status:record?.status,
        Room:  (<h5 style={{marginLeft:15}}>{record?.room} </h5>),
        Quantity:   (<h5 style={{marginLeft:20}}>{record?.quantity} </h5>),
        Mortality : (<h5 style={{marginLeft:20}}>{record?.mortality} </h5>),
       Pen: (<h5 style={{marginLeft:10}}>{record?.pen} </h5>),

       Remark:  record?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red', marginLeft:2}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green', marginLeft:2}}/>,

    
      
     };
   });
 



   




   
   const PoultryRecordData =
   PoultryRecords &&
   PoultryRecords?.map((record) => {
    var date = record?.createdAt,
    newDate = (new Date(date))?.toDateString();

     return {
        "Date Entered":  newDate,
        Category:  record?.category,
        Status:record?.status,
        Quantity:   (<h5 style={{marginLeft:20}}>{record?.quantity} </h5>),
        Mortality : (<h5 style={{marginLeft:20}}>{record?.mortality} </h5>),
      
       Remark:  record?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red', marginLeft:2}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green', marginLeft:2}}/>,

 

     };
   });



   const FishRecordData  =
   FishRecords &&
   FishRecords?.map((record) => {
    var date = record?.createdAt,
    newDate = (new Date(date))?.toDateString();

     return {
        "Date Entered":  newDate,
        Category:  record?.category,
        Mortality:(<h5 style={{marginLeft:20}}>{record?.mortality} </h5>),
        Status:record?.status,
        Quantity:   (<h5 style={{marginLeft:20}}>{record?.quantity} </h5>),
      Weight :(<h5 style={{marginLeft:20}}>{record?.weight}Kg  </h5>),
      
       Remark:  record?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red', marginLeft:2}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green', marginLeft:2}}/>,


     };
   });
 
 































  
  
















    return(
        <div>





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





        


    {/* <Typography sx={{ textAlign:"center", mt:5, fontWeight:'bold'}}>All Product Record</Typography>  */}

  

    <Box sx={{ justifyContent: 'center', alignItems:'center', textAlign:"center", mt:5 }}>
              <FormControl sx={{  width: 600 }}>
                <InputLabel id="demo-multiple-name-label" >Select Product To Enter Record...</InputLabel>
                <Select
                  sx={{ width: 600, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedProduct || ""}
                  fullWidth
               onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product To Enter Record..." />}
                  onChange={(e) => setSelectedProduct(e.target.value)}>
                  {ProductData.product.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>
              <br/>


 

 


              {loading && error === false ?
          <div className='loader'></div> : ""}
          <br/>


          {message && 

<div className="alert success alert-success alert-dismissible" role="alert" style={{width:'20%', margin:'0px auto'}}>
<div className="containerss"  style={{textAlign:'center', margin:'0px auto', whiteSpace:'no-wrap'}}>

<strong> <i className="fa fa-thumbs-up" aria-hidden="true"></i></strong> {message}!

</div>
</div>
}

{error &&
<div className="alert alert-danger danger alert-dismissible" role="alert" style={{width:'30%', margin:'0px auto'}}>
<div className="containerss"  style={{textAlign:'center',  margin:'0px auto', whiteSpace:'no-wrap'}}>

<strong>  <i className="fa fa-exclamation-circle" aria-hidden="true"></i></strong>  {error}!




</div>
</div>  
 }
    





              {selectedProduct === 'Egg' ?    
      <Box> 

<Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          textAlign:'center',
          alignItems:'center',
          flexWrap:'wrap',
          p: 1,
          m: 1,
          mt:5,
         // bgcolor: 'background.paper',
          borderRadius: 1,
        }}>         


            <Box sx={{mr:12}}>
              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Category...</InputLabel>
                <Select
                  sx={{ width: 250, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedEgg || ""}
                  fullWidth
                 onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product..." />}
                  onChange={(e) => setSelectedEgg(e.target.value)}>
                  {EggData.EggProduct.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>  
              <Box >
           <TextField
          label="Pen Number"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
         onChange={handleChange}
         name='penNumber'
         value={penNumber}
         onFocus={handleFocus}
      
        /> 
        </Box>

        <Box >
        <TextField
          label="Culls"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'  
         onChange={handleChange}
         name='culls'
         value={culls}
         onFocus={handleFocus}
       
        /> 
        </Box>
  


        <Box >
           <TextField
          label="Age Housed"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
         onChange={handleChange}
         name='ageHoused'
         value={ageHoused}
         onFocus={handleFocus}
       
        /> 
        </Box>

        <Box >
           <TextField
          label="Mortality"
          id="outlined-start-adornment"
          sx={{ width: 250}}
          type='number'
         onChange={handleChange}
          name='mortality'
          value={mortality}
          onFocus={handleFocus}
        /> 
        </Box>


        <Box >
           <TextField
          label="Cracks"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
          onChange={(e) =>
            setEggRecord({
              ...EggRecord,
              eggCollection: { ...EggRecord.eggCollection, cracks: e.target.value },
            })
          }
          value={EggRecord.eggCollection.cracks}
          name='cracks'
          onFocus={handleFocus}
        /> 
        </Box>
        </Box>




        <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          textAlign:'center',
          alignItems:'center',
          flexWrap:'wrap',
          p: 1,
          m: 1,
          mt:3,
        //  bgcolor: 'background.paper',
          borderRadius: 1,
        }}>         


<Box >
           <TextField
          label="Water Consumption"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
         onChange={handleChange}
         name='waterConsumption'
         value={waterConsumption}
         onFocus={handleFocus}
    
        /> 
        </Box>
        <Box >
           <TextField
          label="Feed Consumption"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
         onChange={handleChange}
         name='feedConsumption'
         value={feedConsumption}
         onFocus={handleFocus}
        /> 
        </Box>

        <Box >
           <TextField
          label="Total Bird Housed"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
         onChange={handleChange}
         name='totalBirdHoused'
         value={totalBirdHoused}
         onFocus={handleFocus}
      
        /> 
        </Box>


        <Box >
           <TextField
          label="First Tray"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
          onChange={(e) =>
            setEggRecord({
              ...EggRecord,
              eggCollection: { ...EggRecord.eggCollection, firstTray: e.target.value },
            })
          }
      
         name='firstTray'
          value={EggRecord.eggCollection.firstTray}
          onFocus={handleFocus}
        /> 
        </Box>

        <Box >
           <TextField
          label="Second Tray"
          id="outlined-start-adornment"
          sx={{ width: 250}}
          type='number'
          onChange={(e) =>
            setEggRecord({
              ...EggRecord,
              eggCollection: { ...EggRecord.eggCollection, secondTray: e.target.value },
            })
          }
          value={EggRecord.eggCollection.secondTray}
         name='secondTray'
   
          onFocus={handleFocus}
        /> 
        </Box>


        <Box >
           <TextField
          label="Third Tray"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'

          onChange={(e) =>
            setEggRecord({
              ...EggRecord,
              eggCollection: { ...EggRecord.eggCollection, thirdTray: e.target.value },
            })
          }
          value={EggRecord.eggCollection.thirdTray}
          name='thirdTray'
          onFocus={handleFocus}
        /> 
        </Box>
        </Box>




        <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          textAlign:'center',
          alignItems:'center',
          flexWrap:'wrap',
          p: 1,
          m: 1,
          mt:3,
         // bgcolor: 'background.paper',
          borderRadius: 1,
        }}>    



                <Box >
           <TextField
          label="Production"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
          onChange={(e) =>
            setEggRecord({
              ...EggRecord,
              eggCollection: { ...EggRecord.eggCollection, production: e.target.value },
            })
          }
          value={EggRecord.eggCollection.production}
          name='production'
         onFocus={handleFocus}
        /> 
        </Box>     



        {/* <Box >
           <TextField
          label="Opening Balance"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
         onChange={handleChange}
          name='openingBalance'
         value={openingBalance}
          onFocus={handleFocus}
        /> 
        </Box>

        <Box >
           <TextField
          label="Closing Balance"
          id="outlined-start-adornment"
          sx={{ width: 250 }}
          type='number'
         onChange={handleChange}
         name='closingBalance'
         value={closingBalance}
         onFocus={handleFocus}
  
        /> 
        </Box> */}



        <Box >
           <TextField
          label="Remark..."
          id="outlined-start-adornment"
          sx={{ width: 1200 }}
          type='text'
         onChange={handleChange}
         name='remark'
         value={remark}
         onFocus={handleFocus}
         
        /> 
        </Box>



        <Box sx={{mt:2}}>
        <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#006400', width: 250}} onClick={HandleSubmit} >
            Submit
          </button> 
             
        </Box> 

        </Box>

        </Box> 
        

        : ""}

















{selectedProduct === 'Poultry' ?    
      <Box> 

<Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          textAlign:'center',
          alignItems:'center',
          flexWrap:'wrap',
          p: 1,
          m: 1,
          mt:2,
        //  bgcolor: 'background.paper',
          borderRadius: 1,
        }}>   




        <Box sx={{mr:50}}>
              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Category...</InputLabel>
                <Select
                  sx={{ width: 550, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedPoultry || ""}
                  fullWidth
                 onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product..." />}
                  onChange={(e) => setSelectedPoultry(e.target.value)}>
                  {PoultryData.PoultryProduct.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>   

    
        <Box >
           <TextField
          label="Mortality"
          id="outlined-start-adornment"
          sx={{ width: 550}}
          type='number'
         onChange={handleChangePoultry}
          name='mortality'
          value={PoultryRecord.mortality}
          onFocus={handleFocus}
        /> 
        </Box>


        <Box >
           <TextField
          label="Quantity"
          id="outlined-start-adornment"
          sx={{ width: 550}}
          type='number'
          onChange={handleChangePoultry} 
          value={PoultryRecord.quantity}
          name='quantity'
          onFocus={handleFocus}
        /> 
        </Box>
        </Box>

        {/* <Box sx={{mt:2, float:'right', mr:10}}>
        <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949', width: 250}} onClick={HandleSubmitPig} >
            Submit
          </button> 
             
        </Box>  */}






      
        <Box sx={{mt:2, float:'right', mr:10}}>
        <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#006400', width: 250}} onClick={HandleSubmitPoultry} >
            Submit
          </button> 
             
        </Box> 





        </Box> 


        : ""}









{selectedProduct === 'Pig' ?    
      <Box> 

<Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          textAlign:'center',
          alignItems:'center',
          flexWrap:'wrap',
          p: 1,
          m: 1,
          mt:2,
         // bgcolor: 'background.paper',
          borderRadius: 1,
        }}>   




        <Box sx={{mr:25}}>
              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Category...</InputLabel>
                <Select
                  sx={{ width: 350, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedPig || ""}
                  fullWidth
                 onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product..." />}
                  onChange={(e) => setSelectedPig(e.target.value)}>
                  {PigData.PigProduct.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>   

                      <Box sx={{mr:25}}>
              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Pen...</InputLabel>
                <Select
                  sx={{ width: 350, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedPen || ""}
                  fullWidth
                 onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product..." />}
                  onChange={(e) => setSelectedPen(e.target.value)}>
                  {PenData.PigProduct.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>    




        <Box >
        <TextField
          label="Room"
          id="outlined-start-adornment"
          sx={{ width: 350}}
          type='number'  
         onChange={handleChangePig}
         name='room'
         value={room}
         onFocus={handleFocus}
       
        /> 
        </Box>
  


    
        <Box >
           <TextField
          label="Mortality"
          id="outlined-start-adornment"
          sx={{ width: 350}}
          type='number'
         onChange={handleChangePig}
          name='mortality'
          value={PigRecord?.mortality}
          onFocus={handleFocus}
        /> 
        </Box>


        <Box >
           <TextField
          label="Quantity"
          id="outlined-start-adornment"
          sx={{ width: 350}}
          type='number'
          onChange={handleChangePig} 
          value={quantity}
          name='quantity'
          onFocus={handleFocus}
        /> 
        </Box>
        </Box>

        {/* <Box sx={{mt:2, float:'right', mr:10}}>
        <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949', width: 250}} onClick={HandleSubmitPig} >
            Submit
          </button> 
             
        </Box>  */}





      
        <Box sx={{mt:2, float:'right', mr:10}}>
        <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#006400', width: 250}} onClick={HandleSubmitPig} >
            Submit
          </button> 
             
        </Box> 





        </Box> 


        : ""}











{selectedProduct === 'Fish' ?    
      <Box> 

<Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          textAlign:'center',
          alignItems:'center',
          flexWrap:'wrap',
          p: 1,
          m: 1,
          mt:2,
         // bgcolor: 'background.paper',
          borderRadius: 1,
        }}>   




        <Box sx={{mr:30}}>
              <FormControl sx={{  width: 150 }}>
                <InputLabel id="demo-multiple-name-label">Select Category...</InputLabel>
                <Select
                  sx={{ width: 400, height: 55 }}
                  labelId="demo-multiple-name-label"
                  id="demo-multiple-name"
                  value={selectedFish || ""}
                  fullWidth
                 onFocus={handleFocus}
                  input={<OutlinedInput label="Select Product..." />}
                  onChange={(e) => setSelectedFish(e.target.value)}>
                  {FishData.FishProduct.map((value, key) => (
                    <MenuItem key={key} value={value.name}> 
                      {value.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Box>   

    
        <Box >
           <TextField
          label="Mortality"
          id="outlined-start-adornment"
          sx={{ width: 400}}
          type='number'
         onChange={handleChangeFish}
          name='mortality'
          value={FishRecord.mortality}
          onFocus={handleFocus}
        /> 
        </Box>


        <Box >
           <TextField
          label="Quantity"
          id="outlined-start-adornment"
          sx={{ width: 400}}
          type='number'
          onChange={handleChangeFish} 
          value={FishRecord.quantity}
          name='quantity'
          onFocus={handleFocus}
        /> 
        </Box>



        <Box >
           <TextField
          label="weight"
          id="outlined-start-adornment"
          sx={{ width: 400}}
          type='number'
          onChange={handleChangeFish} 
          value={FishRecord.weight}
          name='weight'
          onFocus={handleFocus}
        /> 
        </Box>
        </Box>

        {/* <Box sx={{mt:2, float:'right', mr:10}}>
        <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#012949', width: 250}} onClick={HandleSubmitPig} >
            Submit
          </button> 
             
        </Box>  */}






        <Box sx={{mt:2, float:'right', mr:10}}>
        <button type="submit" className="btn btn-success btn-block mb-4" style={{backgroundColor:'#006400', width: 250}} onClick={HandleSubmitFish} >
            Submit
          </button> 
    
        </Box> 





        </Box> 


        : ""}








 
        {/* All Tables Start */}





 
{selectedProduct === 'Pig' &&  PigRecords?.length > 0 ?   


<div style={{marginTop:'100px', width:1900, margin:'100px auto 0 auto'}} >
<MUIDataTable
  title={"Pig Record"}
  data={PigRecordData}
  columns={PigRecordcolumns}
  options={options2}
/>

</div> : ""} 





{selectedProduct === 'Egg' &&  EggRecords?.length > 0 ?   



<div style={{ width:1850, margin:'30px auto 0 auto'}} >
<MUIDataTable
  title={"Egg Record"}
  data={EggRecordData}
  columns={EggRecordcolumns}
  options={options2}
/>

</div> : ""} 





            
 {selectedProduct === 'Poultry' &&  PoultryRecords?.length > 0 ?   


<div style={{marginTop:'100px', width:1850, margin:'100px auto 0 auto'}} >
<MUIDataTable
  title={"Poultry Record"}
  data={PoultryRecordData}
  columns={PoultryRecordcolumns}
  options={options2}
/>

</div> : ""} 






{selectedProduct === 'Fish' &&  FishRecords?.length > 0 ?   


<div style={{marginTop:'100px', width:1850, margin:'100px auto 0 auto'}} >
<MUIDataTable
  title={"Fish Record"}
  data={FishRecordData}
  columns={FishRecordcolumns}
  options={options2}
/>

</div> : ""} 










        {/* All Tables end  */}




  </div>
    )

}



export default Record

