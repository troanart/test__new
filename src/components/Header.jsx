import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "white", padding: 1, boxShadow: 0 }}>
      <Toolbar sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
        <Box display="flex" alignItems="center">
          <EmojiEventsIcon sx={{ color: "#fbc02d", fontSize: 30, mr: 1 }} />
          <Box>
            <Typography variant="body1" color="#000" fontWeight="bold">
              Новинка
            </Typography>
            <Typography variant="body2" color="gray">
              2025 року
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <PaymentIcon sx={{ color: "#fbc02d", fontSize: 30, mr: 1 }} />
          <Box>
            <Typography variant="body1" color="#000" fontWeight="bold">
              Оплата
            </Typography>
            <Typography variant="body2" color="gray">
              після перевірки
            </Typography>
          </Box>
        </Box>

        <Box display="flex" alignItems="center">
          <LocalShippingIcon sx={{ color: "#fbc02d", fontSize: 30, mr: 1 }} />
          <Box>
            <Typography variant="body1" color="#000" fontWeight="bold">
              Швидка
            </Typography>
            <Typography variant="body2" color="gray">
              доставка
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
