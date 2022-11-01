import styled from "styled-components";
import Button from "@mui/material/Button";
import { Container, TextField } from "@mui/material";

const MyButton = styled(Button)`
  background-color: #000;
  padding: 100px;
`;

const Header = styled(Container)`
  background-color: #000;
`;

const App = () => {
  return (
    <>
      <Header maxWidth="xl">1</Header>
      <TextField id="outlined-basic" label="ID" variant="outlined" />
      <TextField id="outlined-basic" label="PASSWORD" variant="outlined" />
      <Button variant="contained">로그인</Button>
    </>
  );
};

export default App;
