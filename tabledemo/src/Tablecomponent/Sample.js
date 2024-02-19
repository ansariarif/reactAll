import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Sample(){
    const history = useNavigate();
    console.log(history)
    useEffect(() => history('/home'))
    
    return(
        <>
        </>
    );
}
export default Sample;