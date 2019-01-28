import React, { Component } from 'react';
import axios from 'axios';


class Tablecategories extends Component {
    state = {list : [] , editgak : 0}

    componentDidMount(){
        axios.get('http://localhost:1946/getcategories')
        .then((res)=>{
            this.setState({list : res.data})
        })
    }

    onBtnAddClick = () =>{
       var kategori = this.refs.kategori1.value
        axios.post(`http://localhost:1946/addcategories2?kategori=${kategori}`)
        .then((res)=>{

        })
    }

    onBtnDelete = (id) =>{
        if(window.confirm('Kamu Yakin ?')){
            axios.delete(`http://localhost:1946/deletecategories2?id=${id}`)
            .then((res)=>{
                alert('Berhasil di delete')
            })
        }
    }

    onBtnEditSaveClick = (id) =>{
        var nama = this.refs.namakategori.value;;
        
        axios.post(`http://localhost:1946/updatecategories2?nama=${nama}&id=${id}`)
        .then((res)=>{
            alert('Berhasil di edit')
        })
    }

    rendercategories = () =>{
        var x = this.state.list.map((res)=>{
        if(res.id !== this.state.editgak){
            return(
                <tr>
                    <td>{res.id}</td>
                    <td>{res.nama}</td>
                    <td><button onClick={() => this.setState({ editgak : res.id })}>Edit</button></td>
                    <td><button onClick={() => this.onBtnDelete(res.id)}>Delete</button></td>
                </tr>)
        }
        return(<tr>
            <td>{res.id}</td>
            <td>{res.nama}<input type="text" ref="namakategori"/></td>
            <td><button onClick={() => this.onBtnEditSaveClick(res.id)}>Save</button></td>
            <td><button onClick={() => this.setState({ editgak : 0 })}>Cancel</button></td>
        </tr>)
        
            
        })
        return x
    }

    render(){
        return(<div>
            <center>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Nama</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {this.rendercategories()}
                </tbody>
                <tfoot>
                    <td></td>
                   <td><input ref="kategori1"/></td>
                    <td><button onClick={this.onBtnAddClick}>Add</button></td>
                    <td></td>
                    
                </tfoot>
            </table>
            </center>
            
        </div>)
    }
}

export default Tablecategories;