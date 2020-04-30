import React, { Fragment, useState } from "react";
import Modal from './imageModal'


const Image = ({ url, title }) => {

  const [display, changeDisplay] = useState('none');
  return (
    <Fragment>
    <li onClick={()=> { changeDisplay('block') }}> 
      <img src={url} alt={title} />
    </li>
    <Modal changeDisplay={changeDisplay} url={url} display={display} />
    </Fragment>
    
  )
};

export default Image;
