import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Container,
} from "@mui/material";

const ProductCard = () => {
  const [productInfo, setProductInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const response = await fetch("http://your-api-endpoint.com/product");
        const data = await response.json();
        setProductInfo(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductInfo();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Card sx={{}}>
      <Box sx={{ backgroundColor: "#f8bbd0", padding: 2, textAlign: "center" }}>
        <Typography variant="h6" fontWeight="bold">
          {productInfo.name || "имя продукта"}
        </Typography>
      </Box>
      <Container>
        <CardMedia
          component="img"
          height="300"
          image={productInfo.image || "https://via.placeholder.com/300"}
          alt={productInfo.name || "Мереживна накидка"}
        />

        <CardContent>
          {productInfo.features &&
            productInfo.features.map((feature, index) => (
              <Typography key={index} variant="body1" gutterBottom>
                ✔ {feature}
              </Typography>
            ))}

          <Box
            sx={{
              display: "flex",

              margin: "auto",
              marginTop: 2,
              backgroundColor: "",
              color: "white",
              padding: 1,
              borderRadius: 1,
              maxWidth: 310,
              columnGap: 1,
            }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="#f44336"
              paddingX={4}
              paddingY={2}>
              <Typography variant="body2" ml={0.5} textAlign="center">
                {productInfo.timeRemaining?.hours || "1"} годин
              </Typography>
            </Box>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              backgroundColor="#f44336"
              paddingX={4}
              paddingY={2}>
              <Typography variant="body2" ml={0.5} textAlign="center">
                {productInfo.timeRemaining?.minutes || "25"} хвилини
              </Typography>
            </Box>
            <Box
              display="flex"
              justifyContent="center"
              paddingX={4}
              paddingY={2}
              alignItems="center"
              backgroundColor="#f44336">
              <Typography variant="body2" ml={0.5} textAlign="center">
                {productInfo.timeRemaining?.seconds || "13"} секунд
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              marginTop: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <Typography variant="h6" color="primary">
              {
                <>
                  <span
                    style={{
                      textDecoration: "line-through",
                      marginRight: "8px",
                      color: "#000",
                    }}>
                    {productInfo.originalPrice || "100"} грн
                  </span>
                  <span
                    style={{
                      fontSize: "25px",
                      color: "#ffd100",
                    }}>
                    {productInfo.originalPrice || "250"} грн
                  </span>
                </>
              }
            </Typography>
          </Box>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: 2 }}>
            Купити зараз
          </Button>
        </CardContent>
      </Container>
    </Card>
  );
};

export default ProductCard;
