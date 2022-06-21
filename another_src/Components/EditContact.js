import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";


function EditContact(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const { id } = useParams()
    console.log(`@@@@@@@@`,id)
    const contacts = useSelector(state => state)
    const con = contacts.find((contact) => contact.id === parseInt(id))
    useEffect(()=>{
        if(con){
            setName(con.name)
            setEmail(con.email)
            setNumber(con.number)
        }
    }, [])
    const handleUpdate = (e)=> {
        e.preventDefault()
    }
    return(
        <div className="container">
            <div className="row">
                <h1 className="display-3 text-center">Edit Student {id}</h1>
                <div className="col-md-6 shadow mx-auto p-5">
                    <form onSubmit={handleUpdate}>
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
                            <input type="submit" placeholder="Name" value="Update Student" className="btn  btn-dark"/>
                            <Link to="/" className="btn btn-danger mr-3">Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditContact