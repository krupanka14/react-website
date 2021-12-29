import React from 'react';
import Pricing from '../../Pricing';
import Beauty from '../Beauty';
import {homeObjOne,homeObjThree,homeObjTwo,homeObjFour} from '../Products/Data'

const Products = () => {
    return (
        <>
            <Beauty {...homeObjOne} />
            <Beauty {...homeObjTwo} />

        </>
    )
}

export default Products
