import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography, Chip, LinearProgress, ListItemIcon, ListItemText, Button } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import { Add } from "@mui/icons-material";

const options = [
    { name: "Edit project", icon: <EditOutlinedIcon fontSize="small" /> },
    { name: "Invite member", icon: <EditOutlinedIcon fontSize="small" /> },
    { name: "Duplicate project", icon: <EditOutlinedIcon fontSize="small" /> },
    { name: "Move project", icon: <EditOutlinedIcon fontSize="small" /> },
    { name: "Add to portfolio", icon: <EditOutlinedIcon fontSize="small" /> },
    { name: "Archive project", icon: <EditOutlinedIcon fontSize="small" /> },
    { name: "Delete project", icon: <EditOutlinedIcon fontSize="small" /> }
  ];
  
  
  const ITEM_HEIGHT = 48;

export default function ProjectTable() {
    const progress = 0;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div>
        <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
            <TableRow>
                <TableCell>Project name</TableCell>
                <TableCell >Status</TableCell>
                <TableCell >Priority</TableCell>
                <TableCell >Start date</TableCell>
                <TableCell >End date</TableCell>
                <TableCell >Task progress</TableCell>
                <TableCell >Owner</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                <TableCell component="th" scope="row">
                    <LegendToggleIcon style={{marginRight: "5px", marginBottom: "-6px", color: "rgb(255, 52, 101)"}}/>
                    Demo Project
                </TableCell>
                <TableCell >
                    <Chip
                        label="On Hold"
                        color="secondary"
                        sx={{
                        position: "relative",
                        margin: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(0, 0, 0, 0.87)",
                        whiteSpace: "nowrap",
                        outline: 0,
                        textDecoration: "none",
                        border: 0,
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        userSelect: "none",
                        cursor: "pointer",
                        flexShrink: 0,
                        height: 22,
                        maxWidth: "100%",
                        borderRadius: "32px",
                        padding: "0px 8px",
                        transition: "0.35s ease-in-out",
                        fontSize: "12px",
                        backgroundColor: "rgb(250, 167, 224)",
                        }}
                    />
                    </TableCell>
                    <TableCell ><Chip
                        label="High"
                        color="secondary"
                        sx={{
                        position: "relative",
                        margin: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "rgba(0, 0, 0, 0.87)",
                        whiteSpace: "nowrap",
                        outline: 0,
                        textDecoration: "none",
                        border: 0,
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        userSelect: "none",
                        cursor: "pointer",
                        height: 22,
                        maxWidth: "100%",
                        borderRadius: "32px",
                        padding: "0px 8px",
                        fontSize: "12px",
                        background: "rgb(253, 162, 155)"
                        }}
                    />
                    </TableCell>
                <TableCell >Jan 30,2025</TableCell>
                <TableCell >Jan 30,2025</TableCell>
                <TableCell > 
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LinearProgress 
                        variant="determinate" 
                        value={progress} 
                        sx={{ flexGrow: 1 }}
                    />
                    <Typography variant="body2">{progress}%</Typography>
                    </Box>
                </TableCell>
                <TableCell >
                    <Tooltip title="Account settings">
                        <IconButton
                            size="small"
                            sx={{ ml: 2 }}
                            aria-haspopup="true"
                        >
                            <Avatar sx={{ width: 22, height: 22, fontSize: "12px", color: "rgb(255, 52, 101)", backgroundColor: "rgb(242, 244, 247)" }}>E</Avatar>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Action">
                        <IconButton
                            aria-label="more"
                            id="long-button"
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup="true"
                            onClick={handleClick}
                        >
                            <MoreHorizIcon />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        id="long-menu"
                        MenuListProps={{
                        'aria-labelledby': 'long-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                        paper: {
                            style: {
                            maxHeight: ITEM_HEIGHT * 6.5,
                            width: '25ch',
                            },
                        },
                        }}
                    >
                    {options.map((option) => (
                        <MenuItem key={option.name} onClick={handleClose}>
                            <ListItemIcon>{option.icon}</ListItemIcon>
                            <ListItemText primary={option.name} />
                        </MenuItem>
                        ))}
                    </Menu>
                </TableCell>
                
                </TableRow>
            </TableBody>
        </Table>
        <Button 
            color="secondary" 
            sx={{ 
                fontSize: "13px", 
                color: "#858484", 
                textTransform: "capitalize" 
            }}
            >
            <Add sx={{ marginRight: "5px", fontSize: "15px" }} />
            Create Project
        </Button>
        </TableContainer>
        
    </div>
  );
}
