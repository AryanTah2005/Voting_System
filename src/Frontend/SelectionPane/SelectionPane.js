import { Box, Grid, Image, Radio, RadioGroup } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useState } from 'react'
import './SelectionPane.css'
import userImage from './user.jpg';
const SelectionPane = (props) => {
  const [value, setValue] = useState()

  function updateSelection(newVal){
    let theCandidate = null
    props.candidateData[props.stage-1].map((candidate) => {
      if(candidate.name === newVal){
        theCandidate = candidate
      }
    })

    setValue(newVal)
    //make call to home to change selection
    let currSelect = [...props.selection]
    currSelect[props.stage-1] = {}
    currSelect[props.stage-1].name = theCandidate.name
    currSelect[props.stage-1].photo_url = theCandidate.photo_url
    currSelect[props.stage-1].designation = theCandidate.designation
    props.setSelection(currSelect)
  }

  useEffect(() => {
    if(props.selection[props.stage-1] !== null){
      setValue(props.selection[props.stage-1].name)
    }
    else{
      setValue('')
    }
  },
  [props.stage])

  return ( 
    <div className="SelectionPane">
      <Box textAlign="center" marginTop="15px" fontSize="larger" fontWeight="500">{props.candidateData[props.stage-1][0].designation}</Box>
      <RadioGroup onChange={(newVal) => updateSelection(newVal)} value={value}>
        <Grid position="absolute" top="45%" left="50%" transform="translate(-50%, -50%)" width="70%" height="70%" templateColumns="1fr 1fr 1fr" templateRows="1fr 1fr" gap="10">
          {
            props.candidateData[props.stage-1].map((candidate, index) => (
              <Box key={index} position="relative" display="flex" justifyContent="center">
                <Box position="absolute" top="0%" height="10%">{candidate.name}</Box>
                <Image position="absolute" top="50%" left="50%" width="auto" height="70%" transform="translate(-50%, -50%)" src={userImage} />
                <Radio position="absolute" top="90%" value={candidate.name}>Vote for {candidate.name}</Radio>
              </Box>
            ))
          }
        </Grid>
      </RadioGroup>
    </div>
  );
}
 
export default SelectionPane;