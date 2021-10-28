import React from 'react'

const MyModal = ({visible, setVisible, children}) => {
    return (
        <div className={visible?'modal open':'modal'}>
        <div className = "modal context">
            <div className = "modal content">
                <div className = "modal body">
                    <i class="material-icons" onClick={()=>{
                        setVisible(false);
                    }}>close</i>
                    {children}
                </div>
                <div class="modal-footer">
                    <a href="#!">Cose</a>
                 </div>
            </div>
        </div>
    </div>
    )
}

export default  MyModal