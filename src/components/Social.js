import React from 'react';
import '../styles/styles.css';
import { FaTrashAlt } from 'react-icons/fa';

const Social = ({state, setState, className, Icon, children}) => {

    return (
        <div className='btn-container'>
            <button className={className} onClick={() => {
                return(
                    state ? setState(false) : setState(true)
                )
            }}>
           {
            state ? <span> <Icon/> {children} <FaTrashAlt/> </span> : <span> <Icon/> {children}</span>
           }
        </button>
        </div>
    );
};

export default Social;