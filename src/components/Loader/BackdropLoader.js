import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const BackdropLoader = () => {
    return (
        <Backdrop
            sx={{ color: '#005CEE', zIndex: 1500 }}
            open={true}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default BackdropLoader;
