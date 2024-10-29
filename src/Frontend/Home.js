import { useState, useEffect } from "react";
import './Home.css'
import IntroPane from "./IntroPane/IntroPane";
import SelectionPane from "./SelectionPane/SelectionPane";
import ConfirmPane from "./ConfirmPage/ConfirmPane";
import OutroPane from './OutroPane/OutroPane'
import { Button } from "@chakra-ui/react";
import { Box, Tooltip } from '@chakra-ui/react'
import { ArrowForwardIcon, ArrowBackIcon, CheckIcon, RepeatIcon } from "@chakra-ui/icons";

const Home = (props) => {
  const [stage, setStage] = useState(0)
  // 0 = intro
  // 1 = Head Boy
  // 2 = Head Girl
  // 3 = sports captain boy
  // 4 = sports captain girl
  // 5 = confirm selection page
  // 6 = outro
  const [candidateData, setCandidateData] = useState([]) //array of array of objects, will have name, designation, photo url
  const [selection, setSelection] = useState([null, null, null, null]) //object

  useEffect(() => {
    setCandidateData([
      [
        {
          name: "Ishan Joshi",
          designation: "Head Boy",
          photo_url: "/12/Head Boy/Ishan Joshi.jpg"
        },
        {
          name: "Advait Kakade",
          designation: "Head Boy",
          photo_url: "/12/Head Boy/Advait Kakade.jpg"
        },
        {
          name: "Aryan Ranjan",
          designation: "Head Boy",
          photo_url: "/12/Head Boy/Aryan Ranjan.jpg"
        },
        {
          name: "Atharva Kshirsagar",
          designation: "Head Boy",
          photo_url: "/12/Head Boy/Atharva Kshirsagar.jpg"
        },
        {
          name: "Shivesh Upadhyay",
          designation: "Head Boy",
          photo_url: "/12/Head Boy/Shivesh Upadhyay.jpg"
        },
        {
          name: "Swaraj Deo",
          designation: "Head Boy",
          photo_url: "/12/Head Boy/Swaraj Deo.jpg"
        }
      ],
      [
        {
          name: "Anushka Hapse",
          designation: "Head Girl",
          photo_url: "/12/Head Girl/Anushka Hapse.jpg"
        },
        {
          name: "Bhagyashree Mohan",
          designation: "Head Girl",
          photo_url: "/12/Head Girl/Bhagyashree Mohan.jpg"
        },
        {
          name: "Bhoomi Sahajsinghani",
          designation: "Head Girl",
          photo_url: "/12/Head Girl/Bhoomi.jpg"
        },
        {
          name: "Mihikka Deodhar",
          designation: "Head Girl",
          photo_url: "/12/Head Girl/Mihikka Deodhar.jpg"
        },
        {
          name: "Sara Chaudhari",
          designation: "Head Girl",
          photo_url: "/12/Head Girl/Sara Chaudhary.jpg"
        },
        {
          name: "Tanvi Hegde",
          designation: "Head Girl",
          photo_url: "/12/Head Girl/Tanvi.jpg"
        }
      ],
      [
        {
          name: "Anuj Khandelwal",
          designation: "Sports Captain Boy",
          photo_url: "/12/Sports Captain Boy/Anuj Khandelwal.jpg"
        },
        {
          name: "Aryan Tah",
          designation: "Sports Captain Boy",
          photo_url: "/12/Sports Captain Boy/Aryan Tah.jpg"
        },
        {
          name: "Gaurish Malhotra",
          designation: "Sports Captain Boy",
          photo_url: "/12/Sports Captain Boy/Gaurish Malhotra.jpg"
        },
        {
          name: "Harsh Kumar",
          designation: "Sports Captain Boy",
          photo_url: "/12/Sports Captain Boy/Harsh Kumar.jpg"
        },
        {
          name: "Paresh Singh",
          designation: "Sports Captain Boy",
          photo_url: "/12/Sports Captain Boy/Paresh Singh.jpg"
        },
        {
          name: "Paritosh Nimhan",
          designation: "Sports Captain Boy",
          photo_url: "/12/Sports Captain Boy/Paritosh.jpg"
        }
      ],
      [
        {
          name: "Ananya Malasane",
          designation: "Sports Captain Girl",
          photo_url: "/12/Sports Captain Girl/Ananya Malasane.jpg"
        },
        {
          name: "Anoushka",
          designation: "Sports Captain Girl",
          photo_url: "/12/Sports Captain Girl/Anoushka.jpg"
        },
        {
          name: "Disha Ankireddi",
          designation: "Sports Captain Girl",
          photo_url: "/12/Sports Captain Girl/Disha Ankireddi.jpg"
        },
        {
          name: "Kavya Patil",
          designation: "Sports Captain Girl",
          photo_url: "/12/Sports Captain Girl/Kavya Patil.jpg"
        },
        {
          name: "Niharika",
          designation: "Sports Captain Girl",
          photo_url: "/12/Sports Captain Girl/Niharika.jpg"
        },
        {
          name: "Vaishnavi Pise",
          designation: "Sports Captain Girl",
          photo_url: "/12/Sports Captain Girl/Vaishnavi Pise.jpg"
        }
      ],
    ])
  },
  [])

  function incrementStage(){
    setStage(stage+1)
  }

  function decrementStage(){
    setStage(stage-1)
  }

  function submitResponse(){
    // update in db
    props.incrementVote(selection)
    setStage(6)
  }

  function resetSystem(){
    setSelection([null, null, null, null])
    setStage(0)
  }

  return ( 
    <div className="Home">
      <div className="Header">
        <div className="HeaderText">DAV Voting</div>
      </div>
      <div className="Content">
        {
          stage === 0 && 
          <IntroPane />
        }
        {
          stage > 0 && stage < 5 && 
          <SelectionPane stage={stage} candidateData={candidateData} selection={selection} setSelection={setSelection} />
        }
        {
          stage < 5 &&
          <Button rightIcon={<ArrowForwardIcon />} position="absolute" left="80%" top="90%" transform="translate(-50%, -50%)" onClick={() => incrementStage()}>
            Next
          </Button>
        }
        {
          stage > 0 && stage < 6 &&
          <Button rightIcon={<ArrowBackIcon />} position="absolute" left="20%" top="90%" transform="translate(-50%, -50%)" onClick={() => decrementStage()}>
            Previous
          </Button>
        }
        {
          stage === 5 &&
          <ConfirmPane selection={selection} />
        }
        {
          stage === 5 &&
          <Tooltip placement="top" isDisabled={(selection.filter((elem) => elem !== null)).length === 4} label="Make sure you voted for everyone!">
            <Box position="absolute" left="80%" top="90%" transform="translate(-50%, -50%)">
              <Button isDisabled={(selection.filter((elem) => elem !== null)).length < 4} rightIcon={<CheckIcon />} colorScheme="green" onClick={() => submitResponse()}>
                Submit
              </Button>
            </Box>
          </Tooltip>
        }
        {
          stage === 6 &&
          <OutroPane />
        }
        {
          stage === 6 && 
          <Button position="absolute" left="80%" top="90%" transform="translate(-50%, -50%)" rightIcon={<RepeatIcon />} onClick={() => resetSystem()}>
            Reset
          </Button>
        }
      </div>
    </div>
  );
}
 
export default Home;