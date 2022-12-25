import React ,{ Component } from "react";
import axios from "axios";
import TableRow from "./TableRowItem";



export default class AllItems extends Component{
constructor(props){
    super(props); 
    this.state = { items: [] };
}

componentDidMount(){
    axios.get('http://localhost:8070/item/')
    .then(response=>{
        this.setState({items : response.data});
    })
    .catch(function(err){
        console.log(err);
    })
}

tabRow(){
    return this.state.items.map(function (object,i){
        return <TableRow obj={object} key={i}/>
    })
}


render(){
   
    return(
        <div >
            <h3 > Item List </h3>
           <table class="table">
               <tbody>
                   <tr>
                        <th >Category</th>
                        <th >Sub-Category</th>
                        <th >Name</th>
                        <th >Description</th>
                        <th >Action</th>

                   </tr>
                   {this.tabRow()}
               </tbody>
           </table>
        </div>
    )
}

}
