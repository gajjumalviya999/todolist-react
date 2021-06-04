import React , {useState} from 'react';
import './css/Inputcomp.css';


const Inputcomp =()=>{
    const [data, setdata] = useState([]);
    const [state, setstate] = useState("");
    const [action,setaction]=useState("Add Task");
    const saveValue=(event)=>{
        setstate(event.target.value);
    }
    const deleteItem=(ind)=>{
        const filterdData= data.filter((item,index)=>{
            return ind !== index;
        });
        setdata([...filterdData])
     }
     const editItem=(item,index)=>{
        setstate(item);
        setaction("Edit");
        deleteItem(index);
     }
    const getFormData=(event)=>{
        event.preventDefault();
        if(state !== "" && state.trim()!=="")
            {
               setdata((olddata)=>{
                   return [...olddata,state];
               })
            }
        else if(state.length!==0 && state.trim()===""){
            alert("Only White Spaces Not Allowed");
        }    
        setstate("");
        setaction("Add Task");
    }
    return(
        <React.Fragment>
            <div className="Container">
                <div className="AddEventContainer">
                    <form id="form" onSubmit={getFormData}>
                        <div className="text">
                            <input type="text" id="eventInputtext" placeholder="Enter Task" value={state} onChange={saveValue}  />
                        </div>
                        <div className="submitbtn">
                            <input type="submit" id="submitbtn" value={action}/>
                        </div>
                        
                    </form>
                </div>
                <div className="List">
                    <ul id="listUl">
                        {     
                            data.map((item,index)=>{
                                return(     
                                    <li key={index}>
                                        <p>{item}</p>
                                        <button className="editbtn" onClick={()=>editItem(item,index)}>Edit</button>
                                        <button className="deletebtn" onClick={()=>deleteItem(index)}>Delete</button>
                                    </li>    
                            )
                            })
                        }
                    </ul>
                </div>
                <div className="Pending-Current">
                    <h2>Currently Pending Task : {data.length}</h2>
                </div>
            </div>
        </React.Fragment>
    );
   
}
export default Inputcomp;
