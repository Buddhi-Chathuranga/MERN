import React ,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class Edit extends Component{
    constructor(props){
        super(props);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeSubcategory = this.onChangeSubcategory.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDesc = this.onChangeDesc.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            category: '',
            subcategory: '',
            name: '',
            desc: ''
        }
    }

    componentDidMount(){
        const id= this.props.match.params.id;
        axios.get(`http://localhost:8070/item/get/${id}`)
        .then(response=>{
            console.log(response.data.category);

            
                this.setState({
                    category: response.data.category,
                    subcategory: response.data.subcategory,
                    name: response.data.name,
                    desc: response.data.desc
                })
            
        })
        .catch(function(err){
            console.log(err);
        })
    }


    onChangeCategory(e){
        this.setState({
            category: e.target.value
        });
    }
    onChangeSubcategory(e){
        this.setState({
            subcategory: e.target.value
        });
    }
    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }
    onChangeDesc(e){
        this.setState({
            desc: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        const id = this.props.match.params.id;
        const obj = {
            category: this.state.category,
            subcategory: this.state.subcategory,
            name: this.state.name,
            desc: this.state.desc
        }
        console.log(id)

         axios.put(`http://localhost:8070/item/update/${id}`,obj).then(()=>{
         
        this.setState({
            category: '',
            subcategory: '',
            name: '',
            desc: ''
            })
            this.props.history.push("/ItemList");
            
        });
        
        
    
    }


    render(){

    return(
        <div className="container">
        <form onSubmit={this.onSubmit}>

        <div class="mb-3">
            <select required class="form-select" aria-label="Default select example" id="category"
            value = { this.state.category }
            onChange={ this.onChangeCategory }>
            <option value="" selected disabled>Please Category</option>
            <option value="MaleItem">Male Item</option>
            <option value="FemaleItem">Female Item</option>
            </select>
        </div>
        <div class="mb-3">
            <select required  class="form-select" aria-label="Default select example" id="subCategory"
            value = { this.state.subcategory }
            onChange={ this.onChangeSubCategory }>
            <option value="" selected disabled>Please Sub-Category</option>
            <option value="MaleItem">Male Item</option>
            <option value="FemaleItem">Female Item</option>
            </select >
        </div>
        <br/>
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter Name" 
                value = { this.state.name }
                onChange={ this.onChangeName }
                required/>
        </div>
        <div class="mb-3">
            <label class="form-label">Description</label>
            <input type="textreare" class="form-control" id="desc" placeholder="Enter Description"   
                value = { this.state.desc }
                onChange={ this.onChangeDesc }
                required/>
        </div>
        
        <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
        </div>
        )
    }
}