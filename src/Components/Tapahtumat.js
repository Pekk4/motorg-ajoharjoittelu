import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';

export default function Tapahtumat() {
  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: "100%" }}
    >
      <Container maxWidth="lg">
        <Typography component={"span"}>
            <div className="max-h-[75vh] overflow-y-auto my-14">
                <zero-md src={require("../assets/markdowns/tapahtumat.md")} />
            </div>
        </Typography>
      </Container>
    </Box>
  );
}