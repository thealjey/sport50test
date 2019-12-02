import { ReactNode } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { theme } from "@sport50test/theme";

export const MainLayout = ({ children }: { children?: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
    <style jsx global>{`
      #__next {
        display: flex;
        flex-direction: column;
        height: 100vh;
      }
    `}</style>
  </ThemeProvider>
);
