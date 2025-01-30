import React from "react";
import { Toolbar, Typography, Button, Box } from "@mui/material";
import { Add } from "@mui/icons-material";
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import ArrowOutwardOutlinedIcon from '@mui/icons-material/ArrowOutwardOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import Divider from '@mui/material/Divider';
import BlurCircularRoundedIcon from '@mui/icons-material/BlurCircularRounded';
import { Search } from "@mui/icons-material";

const Navbar = () => {
  return (
    <div>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "-9px" }}>
         
         <Typography 
             sx={{
             margin: "0px",
             fontWeight: 400,
             fontSize: "13px",
             lineHeight: "1.35",
             color: "#2d2f34",
             letterSpacing: "0em"
             }}
         >
                
            <BlurCircularRoundedIcon style={{marginBottom: "-6px", marginRight: "5px"}}/>You have reached <sapn style={{fontWeight: 600}}>1 Workspace</sapn> limit as per <span style={{fontWeight: 600}}>Starter</span> plan
         </Typography>
         <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
         <Button 
             variant="outlined" 
             sx={{
             fontSize: "13px",
             color: "#000",
             textTransform: "none",
             boxShadow: "none",
             transition: "none",
             fontStyle: "normal",
             fontWeight: 600,
             lineHeight: "20px",
             boxSizing: "border-box",
             background: "transparent",
             borderRadius: "4px",
             color: "#6a707c",
             border: "1px solid #D3D3D3", 
             "&:hover": {
                 borderColor: "#B0B0B0", 
             },
             }}
         >    
             Upgrade Plan <ArrowOutwardOutlinedIcon sx={{ marginLeft: "5px", fontSize: "17px" }} />
         </Button>
         <CloseOutlinedIcon sx={{color: "#6a707c"}} />
         </Box>
     </Toolbar>
     <Divider style={{marginTop: "-9px"}}/>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography 
                sx={{
                fontWeight: 500,
                fontSize: "14px",
                lineHeight: "1.35",
                color: "#333", 
                letterSpacing: "0em"
                }}
            >
                Projects
            </Typography>
            <Typography 
                sx={{
                margin: "0px",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "1.35",
                color: "#6a707c",
                letterSpacing: "0em"
                }}
            >
                Manage all projects within this Workspace.
            </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button 
                variant="outlined" 
                sx={{
                fontSize: "13px",
                color: "#000",
                textTransform: "none",
                boxShadow: "none",
                transition: "none",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "20px",
                boxSizing: "border-box",
                background: "transparent",
                borderRadius: "4px",
                border: "1px solid #D3D3D3", 
                "&:hover": {
                    borderColor: "#B0B0B0", 
                },
                }}
            >    
                <Add sx={{ marginRight: "5px", fontSize: "17px" }} />Import Project
            </Button>
        
            <Button 
                variant="contained"
                sx={{ 
                fontSize: "13px", 
                textTransform: "none",
                bgcolor: "#7B61FF", 
                color: "#fff",
                boxShadow: "none",
                transition: "none",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "20px",
                boxSizing: "border-box",
                borderRadius: "4px",
                "&:hover": {
                    bgcolor: "#6A50E5", 
                },
                }}
            >
                <Add sx={{ marginRight: "5px", fontSize: "17px" }} />
                Create
            </Button>
            </Box>
        </Toolbar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
         
            <Typography 
                sx={{
                margin: "0px",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "1.35",
                color: "#000",
                letterSpacing: "0em"
                }}
            >
                   <FormatListBulletedIcon sx={{marginBottom: "-5px", marginRight: "5px", fontSize: "20px"}} />
                List
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button 
                variant="outlined" 
                sx={{
                fontSize: "13px",
                color: "#000",
                textTransform: "none",
                boxShadow: "none",
                transition: "none",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "20px",
                boxSizing: "border-box",
                background: "transparent",
                borderRadius: "4px",
                border: "1px solid #D3D3D3", 
                "&:hover": {
                    borderColor: "#B0B0B0", 
                },
                }}
            >    
                <FilterListOutlinedIcon sx={{ marginRight: "5px", fontSize: "17px" }} />Active
            </Button>
            <Button 
                variant="outlined" 
                sx={{
                width: "200px",
                fontSize: "13px",
                color: "#000",
                textTransform: "none",
                boxShadow: "none",
                transition: "none",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "20px",
                boxSizing: "border-box",
                background: "transparent",
                borderRadius: "4px",
                border: "1px solid #D3D3D3", 
                "&:hover": {
                    borderColor: "#B0B0B0", 
                },
                display: "inline-flex", 
                justifyContent: "flex-start",
                }}
            >    
                <Search sx={{ marginRight: "5px", fontSize: "17px" }} />Search project
            </Button>
            <Button 
                variant="outlined" 
                sx={{
                fontSize: "13px",
                color: "#000",
                textTransform: "none",
                boxShadow: "none",
                transition: "none",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "20px",
                boxSizing: "border-box",
                background: "transparent",
                borderRadius: "4px",
                border: "1px solid #D3D3D3", 
                "&:hover": {
                    borderColor: "#B0B0B0", 
                },
                }}
            >    
                <FilterListOutlinedIcon sx={{ marginRight: "5px", fontSize: "17px" }} />Filter
            </Button>
            </Box>
        </Toolbar>
    </div>
  
  );
};

export default Navbar;
