import React, { useContext } from "react";
import {TiDelete} from 'react-icons/ti';
import { AppContext } from "../context/AppContext";

const ExpenseItem = (props) =>{
    const {dispatch} = useContext(AppContext);

    const handleDeleteExpenses = () =>{
        dispatch({
            type:'DELETE_EXPENSES',
            payload: props.id,
        });
    }
    return(
        <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.name}
            <div>
                <span className="badge badge-primary badge-pill mr-3 bg-primary">
                    ₹{props.cost}
                    
                    
                    

                </span>
                <TiDelete size='1.5em' onClick={handleDeleteExpenses}></TiDelete>
            </div>
        </li>
    )
}
export default ExpenseItem;