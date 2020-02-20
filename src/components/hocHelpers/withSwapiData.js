import React from 'react';
import { SWConsumer} from '../SWContext';


const withSwapiData = (View, mapMetothToProps) => {
  
    return (props) =>{
        return (
            <SWConsumer>
            {
                (swapiService) => {
                    return ( <View {...props} {...mapMetothToProps(swapiService)}/>)
                }
            }
            </SWConsumer>
        )
    }
    
}

export default withSwapiData;
