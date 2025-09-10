import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Toast = () => {
    const notify = () => toast("Voy juda oson!")

    return (
        <>
            <button onClick={notify}>xabar</button>
            <ToastContainer />
        </>
    )
}

export default Toast