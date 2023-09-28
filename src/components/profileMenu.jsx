"use client";
import useAuth from "@/hooks/useAuth";
import Logout from "@mui/icons-material/Logout";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import * as React from "react";
import { toast } from "react-toastify";
import userIcon from "../assets/icons8-user-16.png";
import Toaster from "./Toaster";

const ProfileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { user, logout } = useAuth();
  console.log({ user });
  const { displayName, photoURL } = user || {};
  const handleLogout = async () => {
    await logout();
    toast("Log out Successfully!");
  };

  const open = Boolean(anchorEl);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <React.Fragment>
        <Box
          sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
          {user && (
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              sx={{ ml: 2 }}>
              <Image
                style={{ borderRadius: "50%", height: "40px" }}
                src={photoURL || userIcon}
                width={40}
                height={60}
                alt="User Profile"></Image>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleMouseLeave}
                onClick={handleMouseLeave}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: 1,
                      mr: 1,
                    },
                    "&:before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                <MenuItem onClick={handleMouseLeave}>
                  <Avatar /> {displayName}
                </MenuItem>

                <Divider />
                <MenuItem onClick={handleMouseLeave}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleMouseLeave}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  {/* <MenuItem onClick={handleMouseLeave}> */}
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          )}
        </Box>
      </React.Fragment>
      <Toaster></Toaster>
    </>
  );
};

export default ProfileMenu;
