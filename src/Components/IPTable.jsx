import React, { useState } from "react";
import "./Components.css";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  MenuItem,
  Menu,
  IconButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const IPTable = ({
  columns,
  rows,
  menuOptions,
  onMenuClick,
  onOptionSelect,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const textFieldStyles = {
    "& .MuiFilledInput-root": {
      "&.Mui-focused .MuiFilledInput-notchedOutline": {
        borderColor: "#2b9aca !important",
      },
      "& .MuiFilledInput-input": {
        padding: "5px",
        width: "120px",
      },
    },
    "& .MuiSelect-select": {
      padding: "5px",
    },
  };

  const handleMenuClick = (event, row) => {
    setAnchorEl(event.currentTarget);
    setSelectedRow(row);
    onMenuClick && onMenuClick(row);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedRow(null);
  };

  return (
    <Box>
      <TableContainer sx={{ borderRadius: "4px", overflowX:"auto",width:"100%" }}>
        <Table>
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              {columns?.slice(1, -1)?.map((column) => (
                <TableCell key={column.id}>
                  <TextField
                    type={column.id.includes("date") ? "date" : "search"}
                    variant="filled"
                    size="small"
                    sx={{
                      ...textFieldStyles,
                      ...(column.id.includes("date") ? { width: "125px" } : {}),
                    }}
                    placeholder="Search"
                  />
                </TableCell>
              ))}
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((row, index) => (
              <TableRow key={index}>
                {Object.values(row).map((value, i) => (
                  <TableCell key={i}>{value}</TableCell>
                ))}
                <TableCell>
                  <IconButton onClick={(event) => handleMenuClick(event, row)}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    sx={{
                      "& .MuiPaper-root": {
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        backgroundColor: "rgb(183, 192, 192)",
                        color: "black",
                      },
                    }}
                  >
                    {menuOptions?.map((option) => (
                      <MenuItem
                        key={option.label}
                        onClick={() => {
                          onOptionSelect(option, selectedRow);
                          handleMenuClose();
                        }}
                      >
                        <ListItemIcon color="black">{option.icon}</ListItemIcon>
                        <ListItemText>{option.label}</ListItemText>
                      </MenuItem>
                    ))}
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default IPTable;
