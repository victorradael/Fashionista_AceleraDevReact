import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import actions from '../../store/actions/Toast';
import './styles.css';

export default function Toast() {
  const dispatch = useDispatch();
  const visible = useSelector(state => state.toastReducer.visible);
  const message = useSelector(state => state.toastReducer.message);
  const error = useSelector(state => state.toastReducer.error);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(actions.removeToast());
    }, 1800);

    return () => {
      clearTimeout(timer);
    };
  }, [visible]);

  return (
    <>
      {visible && 
        <div className='toast toast--hover' style={{ background: `${ error ? '#FF4500' : '#268B07'}`}}>
          {error
            ? <div className='toast__content'>
                <AiOutlineCheckCircle size={18} color='#FFF' /> 
                <label className='message'>{message}</label>
              </div>
            : <div className='toast__content'>
                <AiOutlineCheckCircle size={18} color='#FFF' /> 
                <label className='message'>{message}</label>
              </div>
          }
        </div>
      }
    </>
  );
};

