import React from 'react';
import Pricing from '../../Pricing';
import Beauty from '../Beauty.js'
import {homeObjOne,homeObjThree,homeObjTwo,homeObjFour} from '../HomePage/Data'


function Home() {
    return (
        <>
           <Beauty {...homeObjOne} /> 
           <Beauty {...homeObjThree} /> 
           <Beauty {...homeObjTwo} /> 
           <Pricing />
           <Beauty {...homeObjFour} /> 
        </>
    )
}

export default Home
