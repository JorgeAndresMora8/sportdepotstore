import { Box, CircularProgress } from "@mui/material";

function Loading() {
  return (
    <div
      style={{
        width: "100%",
        height: "30rem",
        flexDirection: "column",
        backgroundColor: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
      <b
        style={{ fontFamily: "poppins", fontWeight: "300", marginTop: "1rem" }}
      >
        Were getting <span style={{ color: "#1976D2" }}>the data...</span>
      </b>
    </div>
  );
}

export default Loading;
