import  React,{useState} from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';
import VisibilityIcon from '@mui/icons-material/Visibility';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MUIDataTable from "mui-datatables";





 const OrderHistory=()=> {


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };









  const columns = [
    {
     name: "Amount",
     label: "Amount",
     options: {
      filter: true,
      sort: true,
     }
    },
    {
     name: "Weight (kg)",
     label: "Weight (kg)",
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
      name: "Date Of Entry",
      label: "Date Of Entry",
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
   
   const data = [
    { Amount:  "23", "Weight (kg)": "Test Corp",  Quantity: "Yonkers", Mortality:'34', Status:'Approved', 'Date Of Entry': '12-10-2020', 'Details': <VisibilityIcon  sx={{cursor:'pointer'}} onClick={handleClickOpen}/> },
    { Amount: "Joe James", "Weight (kg)": "Test Corp",  Quantity: "Yonkers", Mortality:'34', Status:'Denied', 'Date Of Entry': '12-10-2020', 'Details': <VisibilityIcon  sx={{cursor:'pointer'}} onClick={handleClickOpen}/> },
    { Amount: "Joe James", "Weight (kg)": "Test Corp",  Quantity: "Yonkers", Mortality:'34', Status:'Approved', 'Date Of Entry': '12-10-2020', 'Details': <VisibilityIcon  sx={{cursor:'pointer'}} onClick={handleClickOpen}/> },
    { Amount: "Joe James", "Weight (kg)": "Test Corp",  Quantity: "Yonkers", Mortality:'34', Status:'Denied', 'Date Of Entry': '12-10-2020', 'Details': <VisibilityIcon  sx={{cursor:'pointer'}} onClick={handleClickOpen}/> },
   
   ];
   
   const options = {
     filterType: 'checkbox',
   };







  return (
    <div>


   




    <div style={{width:1600, marginLeft:170}}>
<MUIDataTable
  title={"My Order History"}
  data={data}
  columns={columns}
  options={options}
 

/>


</div>






    <div>
   
      <Dialog
        open={open}
        maxWidth="md"
        fullWidth
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {" Order  Details"}
        </DialogTitle>
      
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        Customer Name : Precious Mike
          </DialogContentText>
          <br/>

          <DialogContentText id="alert-dialog-description">
          Date Of Entry : 03 - 2 -2023
          </DialogContentText>
          <br/>


          <DialogContentText id="alert-dialog-description">
        Order Amount : $234.78
          </DialogContentText>
          <br/>


          <DialogContentText id="alert-dialog-description">
        Total Quantity&nbsp;(g) : 34.98
          </DialogContentText>
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




  
