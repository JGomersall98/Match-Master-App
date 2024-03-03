import { MatchMasterText } from "./MatchMasterTextComponent";
import {Box} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export function MatchMasterTopLeft({ onClick }) {

    const navigate = useNavigate();
    const goToMainScreen = () => {
      navigate('/');
    };

    return (
        <Box position="absolute" top="0" left="0" paddingLeft={'2vw'} paddingTop={'2vw'} onClick={goToMainScreen}>
            <MatchMasterText fontSize="2vw"/>
        </Box>
    );
}