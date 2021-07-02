import React from 'react';
import {ITError} from '../component-interfaces'
const TError = (props:ITError) => {
    const {
     message
    }=props;
    return <p>{message}</p>
}
export default TError;