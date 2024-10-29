import { Box, Grid, Image } from '@chakra-ui/react'
import './ConfirmPane.css'
import userImage from './user2.jpg';
const ConfirmPane = (props) => {
  return ( 
    <div className="ConfirmPage">
      <Box textAlign="center" marginTop="15px" fontSize="larger" fontWeight="500">Confirm Selection</Box>
      <Grid position="absolute" top="45%" left="50%" transform="translate(-50%, -50%)" width="50%" height="70%" templateColumns="1fr 1fr" templateRows="1fr 1fr" gap="10">
        {
          props.selection !== undefined &&
          props.selection.map((candidate, index) => {
            if(candidate !== null){
              return (<Box key={index} position="relative" display="flex" justifyContent="center">
                <Box position="absolute" top="0%" height="10%">{candidate.name}</Box>
                <Image position="absolute" top="50%" left="50%" width="auto" height="70%" transform="translate(-50%, -50%)" src={userImage} />
                <Box position="absolute" top="90%" height="10%">{candidate.designation}</Box>
              </Box>)
            }
          })
        }
      </Grid>
    </div>
  );
}
 
export default ConfirmPane;