import React from 'react';
import Loader from "react-loader-spinner";

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './page-data-loader.css';

const PageDataLoader = () => {
    return (
        <div className="page-data-loader-container">
             <Loader
                type="TailSpin"
                color="#000000"
                height={100}
                width={100}
                timeout={3000}
                className="page-data-loader"
            />
        </div>
    )
}

export default PageDataLoader;
