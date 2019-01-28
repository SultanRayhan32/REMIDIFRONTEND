import React, { Component } from 'react';
import axios from 'axios';


class Tablemovies extends Component {
    state = {list : [] , editgak : 0}

    componentDidMount(){
        axios.get('http://localhost:1946/list')
        .then((res)=>{
            this.setState({list : res.data})
        })
    }

    onBtnAddClick = () =>{
        var film = this.refs.film2.value;
        var tahun = this.refs.tahun2.value;
        var des = this.refs.deskripsi2.value;
        axios.post(`http://localhost:1946/addmovies2?film=${film}&tahun=${tahun}&des=${des}`)
        .then((res)=>{

        })
    }

    onBtnDelete = (id) =>{
        if(window.confirm('Kamu Yakin ?')){
            axios.delete(`http://localhost:1946/deletemovies2?id=${id}`)
            .then((res)=>{
                alert('Berhasil di delete')
            })
        }
    }

    onBtnEditSaveClick = (id) =>{
        var film = this.refs.film.value;
        var tahun = this.refs.tahun.value;
        
        axios.post(`http://localhost:1946/updatemovies2?film=${film}&tahun=${tahun}&id=${id}`)
        .then((res)=>{
            alert('Berhasil di edit')
        })
    }

    rendermovie = () =>{
        var x = this.state.list.map((res)=>{
        if(res.idmovies !== this.state.editgak){
            return(
                <tr>
                    <td>{res.idmovies}</td>
                    <td>{res.nama}</td>
                    <td>{res.tahun}</td>
                    <td>{res.description}</td>
                    <td><button onClick={() => this.setState({ editgak : res.idmovies })}>Edit</button></td>
                    <td><button onClick={() => this.onBtnDelete(res.idmovies)}>Delete</button></td>
                </tr>)
        }
        return(<tr>
            <td>{res.idmovies}</td>
            <td>{res.nama}<input type="text" ref="film"/></td>
            <td>{res.tahun}<input type="number" ref="tahun" defaultValue={res.tahun} /></td>
            <td>{res.description}<input type="text" ref="deskripsi"/></td>
            <td><button onClick={() => this.onBtnEditSaveClick(res.idmovies)}>Save</button></td>
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
                        <td>Film</td>
                        <td>Tahun</td>
                        <td>deskripsi</td>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {this.rendermovie()}
                </tbody>
                <tfoot>
                    <td></td>
                    <td><input ref="film2"/></td>
                    <td><input ref="tahun2"/></td>
                    <td><input ref="deskripsi2"/></td>
                    <td><button onClick={this.onBtnAddClick}>Add</button></td>
                    <td></td>
                    
                </tfoot>
            </table>
            </center>
            
        </div>)
    }
}

export default Tablemovies;