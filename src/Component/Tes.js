import React, { Component } from 'react';
import axios from 'axios';
import {UncontrolledDropdown , DropdownToggle , DropdownMenu ,DropdownItem} from 'reactstrap';
import '../support/tes.css';

class Tes extends Component {

    state = {film : []}

    componentDidMount(){
        axios.get('http://localhost:1945/film')
        .then((res)=>{
            this.setState({film : res.data})
        })
    }

    filterfilm = () =>{
        axios.get('/')
    }

    renderfilm = () =>{
        var x = this.state.film.map((item)=>{
            return(
                <tr>
                    <td>{item.nama}</td>
                    <td>{item.harga}</td>
                    <td></td>
                </tr>
                )
        })
        return x;
    }

    render() {
        return(<div>
                <center>
                    <table>
                        <thead>
                            <tr>
                                <td>Nama Film</td>
                                <td>Harga</td>
                                <td>Kategori</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.renderfilm()}
                            
                        </tbody>
                    </table>
                </center>
           
        </div>)
    }
}

export default Tes;