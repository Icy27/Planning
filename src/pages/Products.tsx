import "./Products.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <>
      <div className="container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 8, sm: 16, md: 24 }}
          >
            {Array.from(Array(1)).map((_, index) => (
              <Grid item xs={24} key={index}>
                <Link to="/Planning/timer">
                  <button>Timer</button>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
}
