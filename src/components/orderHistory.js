import  React,{useState, useEffect} from 'react';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';
// import { tableCellClasses } from '@mui/material/TableCell';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MUIDataTable from "mui-datatables";
import CancelIcon from '@mui/icons-material/Cancel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Typography from '@mui/material/Typography';

import {useSelector} from "react-redux"





 const OrderHistory=()=> {
  useEffect(()=>{
    document.body.style.zoom = "70%";
 
  },[])
  

  const Orders = useSelector((state)=>state?.user?.order)



  const [tableBodyHeight, setTableBodyHeight] = useState("400px");

const [tableBodyMaxHeight, setTableBodyMaxHeight] = useState("");
const [searchBtn, setSearchBtn] = useState(true);
const [downloadBtn, setDownloadBtn] = useState(true);
const [printBtn, setPrintBtn] = useState(true);
const [viewColumnBtn, setViewColumnBtn] = useState(true);
const [filterBtn, setFilterBtn] = useState(true);
 const [singleOrder, setSingleOrder] = useState({})



 const dateOfEntry = singleOrder?.createdAt
 const FormattedDate = (new Date(dateOfEntry))?.toString();



  const [open, setOpen] = useState(false);

  const handleClickOpen = (order) => {
    setSingleOrder(order)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };









  const columns = [
    {
     name: "Date Of Entry",
     label: "Date Of Entry",
     options: {
      filter: true,
      sort: true,
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
     name: "Unit Price",
     label: "Unit Price",
     options: {
      filter: true,
      sort: false,
     }
    },
    {
      name: "Total",
      label: "Total",
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
       filter: true,
       sort: false,
      }
     },


   
    {
      name: "Details",
      label: "Details",
      options: {
       filter: true,
       sort: false,
      }
     },


    
   ];



   const data =
   Orders &&
   Orders?.map((order) => {
    var date = order?.createdAt,
    newDate = (new Date(date))?.toString();

     return {
        "Date Of Entry":  newDate,
        Quantity: order?.cartId?.cartItems?.[0]?.quantity,
        'Unit Price':  '₦' + order?.cartId?.cartItems?.[0]?.price,
        'Total': ' ₦' + order?.cartId?.cartItems?.[0]?.subtotal,
        Status: order?.status,
        Remark:  order?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red'}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green'}}/>,
       

        // Section: report?.section,
        // Quantity: report?.quantity,
        // "Weight ": report?.weight + 'kg',
        // 'Created By':  report?.user?.firstName + ' ' + report?.user?.lastName,
        // Status:report?.status,
        // Price: '₦' + report?.price,
        // Remark:  report?.status  ==='Pending' ?  <CancelIcon sx={{cursor:'pointer', color:'red'}}/> : <CheckCircleIcon sx={{cursor:'pointer', color:'green'}}/>,
       
       

          Details:   (
            <VisibilityIcon  sx={{cursor:'pointer', color:'blue'}}  onClick={() => `${( handleClickOpen(order))}`} />
          ),

          

          // Delete:   (
          //   <DeleteIcon  sx={{cursor:'pointer', color:'red'}}   onClick={() => `${( handleClickOpenDeletePig(report?.id))}`}  />
          // ),

     };
   });
 
   
  //  const data = [
  //   { Amount:  "23", "Weight (kg)": "Test Corp",  Quantity: "Yonkers", Mortality:'34', Status:'Approved', 'Date Of Entry': '12-10-2020', 'Details': <VisibilityIcon  sx={{cursor:'pointer'}} onClick={handleClickOpen}/> },
  //   { Amount: "Joe James", "Weight (kg)": "Test Corp",  Quantity: "Yonkers", Mortality:'34', Status:'Denied', 'Date Of Entry': '12-10-2020', 'Details': <VisibilityIcon  sx={{cursor:'pointer'}} onClick={handleClickOpen}/> },
  //   { Amount: "Joe James", "Weight (kg)": "Test Corp",  Quantity: "Yonkers", Mortality:'34', Status:'Approved', 'Date Of Entry': '12-10-2020', 'Details': <VisibilityIcon  sx={{cursor:'pointer'}} onClick={handleClickOpen}/> },
  //   { Amount: "Joe James", "Weight (kg)": "Test Corp",  Quantity: "Yonkers", Mortality:'34', Status:'Denied', 'Date Of Entry': '12-10-2020', 'Details': <VisibilityIcon  sx={{cursor:'pointer'}} onClick={handleClickOpen}/> },
   
  //  ];
   
   
  const options = {
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







  return (
    <div>


   
{Orders?.length > 0 ?

<div style={{width:1800, marginLeft:80}}>
<MUIDataTable
  title={ `My Order Entries`}
  data={data}
  columns={columns}
  options={options}

 

/>

</div> :   <Typography variant="h6" component="div"  sx={{textAlign:'center', whiteSpace:'nowrap', fontWeight:1000, fontSize:15, mt:3, ml:7} }>
   You currently Have No  Order! 
   </Typography>}






    <div>
   
      <Dialog
        open={open}
        maxWidth="md"
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div id="alert-dialog-title h3" style={{marginTop:20, marginLeft:25}}>
          <h3 style={{display:'inline'}}> Order  Details  </h3> <h3 style={{display:'inline', marginLeft:'90px'}}> Your Order Transaction Id : {singleOrder?.cartId?._id}</h3> 
        </div>
      
        <DialogContent>
          {singleOrder?.status  === 'Pending' ?
          <DialogContentText id="alert-dialog-description">

           Order Status :  {singleOrder?.status}, Awaiting Admin Approval!    <CancelIcon sx={{cursor:'pointer', color:'red', marginLeft:5, marginTop:-0.5}}/>,
          </DialogContentText>: ""}
          


          {singleOrder?.status  === 'Approved' ?
          <DialogContentText id="alert-dialog-description">

           Order Status :  Your Order Has Been Approved!     <CheckCircleIcon sx={{cursor:'pointer', color:'green', marginLeft:5, marginTop:-0.5}}/>
          </DialogContentText>: ""}
          <br/>
       

          <DialogContentText id="alert-dialog-description">
          Date Of Entry : {`${FormattedDate}`}
          </DialogContentText>
          <br/>

          <DialogContentText id="alert-dialog-description">
        Product : {singleOrder?.cartId?.cartItems?.[0]?.productId?.category}
          </DialogContentText><br/>


          <DialogContentText id="alert-dialog-description">
        Product  Setion : {singleOrder?.cartId?.cartItems?.[0]?.productId?.section}
          </DialogContentText><br/>


          <DialogContentText id="alert-dialog-description">
        Total Quantity : {singleOrder?.cartId?.cartItems?.[0]?.quantity}
          </DialogContentText><br/>


          <DialogContentText id="alert-dialog-description">
        Order Unit Price :  ₦ { singleOrder?.cartId?.cartItems?.[0]?.price}
          </DialogContentText>
          <br/>


          <DialogContentText id="alert-dialog-description">
        Order Sub Total :  ₦ { singleOrder?.cartId?.cartItems?.[0]?.subtotal}
          </DialogContentText>
          <br/>


       
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {/* <Button onClick={handleClose} autoFocus>
            Agree
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>






    
    </div>
  );
}
export default OrderHistory;




  
