import React from 'react';
import '../styles/styles.css';
import { FaTrashAlt } from 'react-icons/fa';

const Social = ({state, setState, className, Icon, children}) => {

    return (
        <div className='btn-container'>
        <button className={state && className} onClick={() => {!state ? setState(true): setState(false)}}>
         {
          state ? <span> <Icon/> {children} <FaTrashAlt/> </span> : <span> <Icon/> {children}</span>
           }
        </button>

        </div>
    );
};

export default Social;