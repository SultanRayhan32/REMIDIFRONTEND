import React, { Component } from 'react';
import axios from 'axios';


class TableMovieCat extends Component {
    state = {list : [] , editgak : 0 , movie : [] , kategori : []}

    componentDidMount(){
        axios.get('http://localhost:1946/getmoviescat')
        .then((res)=>{
            this.setState({list : res.data})
        })
        axios.get('http://localhost:1946/list')
        .then((res)=>{
            this.setState({movie : res.data})
        })
        axios.get('http://localhost:1946/getcategories')
        .then((res)=>{
            this.setState({kategori : res.data})
        })
    }

    

    onBtnAddClick = () =>{
       var kategori = this.refs.kategori1.value;
       var film = this.refs.film1.value;

        axios.post(`http://localhost:1946/addmoviescat2?kategori=${kategori}&film=${film}`)
        .then((res)=>{

        })
    }

    onBtnDelete = (idmovie , idcategory) =>{
        if(window.confirm('Kamu Yakin ?')){
            axios.delete(`http://localhost:1946/deletemoviescat2?idmovie=${idmovie}&idcategory=${idcategory}`)
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
        
            return(
                <tr>
                    <td>{res.Namamovie}</td>
                    <td>{res.Namakategori}</td>
                   
                    <td><button onClick={() => this.onBtnDelete( res.idmovies , res.idkategori)}>Delete</button></td>
                </tr>)
        
      
        
            
        })
        return x
    }

    renderSelectOption = () =>{
        var y = this.state.movie.map((res)=>{
            return(<option>
                {res.nama}
            </option>)
        })
        return y;
    }

    renderSelectOption2 = () =>{
        var y = this.state.kategori.map((res)=>{
            return(<option>
                {res.nama}
            </option>)
        })
        return y;
    }

    render(){
        return(<div>
            <center>
            <table>
                <thead>
                    <tr>
                        <td>Movie</td>
                        <td>kategori</td>
                        
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {this.rendercategories()}
                </tbody>
                <tfoot>
                    
                   <td><select ref="film1">{this.renderSelectOption()}</select></td>
                   <td><select ref="kategori1">{this.renderSelectOption2()}</select></td>
                    <td><button onClick={this.onBtnAddClick}>Add</button></td>
                    
                    
                </tfoot>
            </table>
            </center>
            
        </div>)
    }
}

export default TableMovieCat;