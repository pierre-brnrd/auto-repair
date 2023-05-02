import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import RepairManager from "./routes/RepairManager/RepairManager";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <RepairManager />
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
