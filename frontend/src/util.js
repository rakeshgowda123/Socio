import { toast, ToastContainer } from "react-toastify";

export const handleSuccess=(msg)=>{
    toast.success(msg,{
        position:'top-left',
        autoClose:2000
    })
}

export const handleError=(msg)=>{
    toast.error(msg,{
        position:'top-left',
         autoClose:2000
    })
}
