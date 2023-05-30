import React from 'react';
import { Link } from 'react-router-dom'

import DetailProduct from '../components/DetailProduct';

class Detail extends React.Component{
    render() {
        return(
            <div className='home'>
                <DetailProduct/>
            </div>
        )
    }
}

export default Detail