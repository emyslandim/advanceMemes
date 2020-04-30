import React from 'react'

const ImageModal = ({ display, url, changeDisplay }) => {

    return (
        <div id="myModal" className="modal" style={{display: display}}>
            <span className="close" onClick={()=> {changeDisplay('none') }}>&times;</span>
                <img alt='exibição da imagem no modal' id='myImg' className="modal-content" src={url} />
            <div id="caption"></div>
        </div>
    )
}


export default ImageModal