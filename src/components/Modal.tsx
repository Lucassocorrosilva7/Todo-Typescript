import React from 'react'
import { FaWindowClose } from 'react-icons/fa';
import styles from "./Modal.module.scss"

interface Props{
children: React.ReactNode;
title: string;
}

const Modal = ({children, title}: Props) => {

  const closeModal = (e: React.MouseEvent): void => {
    const modal = document.querySelector("#modal")
    modal!.classList.add("hidden")
  };

  return (
    <div id="modal" className='hidden'>
       <div className={styles.fade}></div>
       <div className={styles.modal}>
           <i className={styles.modal__btnclose}><FaWindowClose color='#F05454' fontSize={25} onClick={closeModal}/></i>
           <h2>{title}</h2>
           {children}
       </div>
     </div>
  )
}



export default Modal;
