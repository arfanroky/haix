import React from 'react';
import '../styles/styles.css';
import { FaTrashAlt } from 'react-icons/fa';

const Social = ({state, setState, className, Icon, children}) => {

    return (
        // Reusable component
        <div className='btn-container'>
            <button  onClick={() => setState(true)}>
          <Icon/> {children}
        </button>
        <button className={state && className} onClick={() => setState(false)}>
        {
            state ? <span> <Icon/> {children} <FaTrashAlt/> </span> : ''
           }
        </button>
        </div>
    );
};

export default Social;