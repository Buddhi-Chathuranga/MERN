import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class TableRowLecturer extends Component{
    
    onDelete (id){  
        console.log(id)
        
        axios.delete(`http://localhost:8070/item/delete/${id}`).then(()=>{
        alert("Success Deleteed")
        window.location.reload(); 
        })
    }


    render(){
        return(
                <tr >
                    <td>
                        {this.props.obj.category}
                    </td>
                    <td>
                        {this.props.obj.subcategory}
                    </td>
                    <td>
                        {this.props.obj.name}
                    </td>
                    <td>
                        {this.props.obj.desc}
                    </td>
                    <td>
                        <Link to={`/editItem/${this.props.obj._id}`} className="btn btn-primary">Edit</Link>
                    </td>
                    <td>
                        <button className="btn btn-primary"  onClick={() => this.onDelete(this.props.obj._id)}>Delete</button>
                    </td>
                </tr>
        );
    }
}

export default TableRowLecturer;