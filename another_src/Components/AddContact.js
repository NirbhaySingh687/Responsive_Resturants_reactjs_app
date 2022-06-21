import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom"


function AddContact(){
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const contacts= useSelector(state => state)
    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!email || !number || !name){
            return toast.warning("Please Provide Valid Value")
        }
        const checkEmail = contacts.find((contact) => contact.email === email)
        if(checkEmail){
            return toast.error("This Email is Already Exists")
        }
        let lastIdx= contacts.length
        const data = {
            id: lastIdx,
            name, email, number
        }
        dispatch({
            type: "ADD_CONTACT",
            payload: data
        })
        toast.success("Student Added Successfully")
        navigate("/")
    }
    return(
        <div className="container">
            <div className="row">
                <h1 className="display-3 text-center">Add Student</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" placeholder="Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="number" placeholder="Contact" className="form-control" value={number} onChange={(e) => setNumber(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <input type="submit" placeholder="Name" value="Add Student" className="btn btn-block btn-dark"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddContact