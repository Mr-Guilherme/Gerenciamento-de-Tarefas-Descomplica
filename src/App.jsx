import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import { createTheme, ThemeProvider } from "@mui/material";
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: blueGrey
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <ListarTarefa />
      </div>
    </ThemeProvider>
  );
}

export default App;
