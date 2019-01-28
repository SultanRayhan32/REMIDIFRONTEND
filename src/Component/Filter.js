import React, { Component } from 'react';
import axios from 'axios';


class Filter extends Component {

    state = { list : [] , anjir : false , film : [] , makan : 0 }

    componentDidMount() {
        axios.get('http://localhost:1945/film')
        .then((res)=>{
            this.setState({film : res.data})
        })
    }

    renderfilm = () =>{
        var x = this.state.film.map((item)=>{
            return(
                <tr>
                    <td>{item.nama}</td>
                    <td>{item.harga}</td>
                    
                </tr>
                )
        })
        return x;
    }

    lihatsemuaFIlm = () =>{
        this.setState({ anjir : false})
    }

    onBtnSeacrhClick = () =>{
        if(this.refs.genre.value == 'All' || this.refs.film.value == ''){
            this.setState({ anjir : true })
            var film = this.refs.film.value;
            var harga1 = this.refs.harga1.value;
            var harga2 = this.refs.harga2.value;
            axios.get(`http://localhost:1945/filter2/${film}/${harga1}/${harga2}`)
            .then((res)=>{
                this.setState({ list : res.data })
                
            })
            return
        }
        this.setState({ anjir : true })
        var film = this.refs.film.value;
        var genre = this.refs.genre.value;
        var harga1 = this.refs.harga1.value;
        var harga2 = this.refs.harga2.value;
        axios.get(`http://localhost:1945/filter/${genre}/${film}/${harga1}/${harga2}`)
        .then((res)=>{
            this.setState({ list : res.data })
        })
    }

    renderFilterfilm = () =>{
        var y = this.state.list.map((res)=>{
            return(
                <tr>
                    <td>{res.film}</td>
                    <td>{res.harga}</td>
                </tr>
            )
        })
        return y;
    }

    render(){
        if(this.state.anjir === true){
        return(<div>

            Film : <input type="text" ref="film"></input> <br/><br/>
            Kategori : 
            <select ref="genre">
                <option >All</option>
                 <option>Action</option>
                 <option>Comedy</option>
                 <option>Roman</option>
                 <option>Thriller</option>
                 <option>Anime</option>
                 <option>bimbingan orang tua</option>
                 <option>Smart People</option>
                 <option>Film Edukasi Remaja</option>
                 <option>kartun</option>
            </select>
            <br/><br/>
            Harga : <input type="number" ref="harga1" defaultValue="0"></input> > <input type="number" ref="harga2" defaultValue="100000"></input>
            <br/><br/>
            <button onClick={this.onBtnSeacrhClick}>Cari</button>
            <button onClick={this.lihatsemuaFIlm}>All</button>
            <center>
                <table>
                    <thead>
                        <tr>
                            <td>Film</td>
                            <td>Harga</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderFilterfilm()}
                    </tbody>
                </table>
            </center>
            
         </div>)
    }
    else if(this.state.anjir === false){
        return (<div>
            Film : <input type="text" ref="film"></input> <br/><br/>
                Kategori : 
                <select ref="genre">
                    <option >All</option>
                     <option>Action</option>
                     <option>Comedy</option>
                     <option>Roman</option>
                     <option>Thriller</option>
                     <option>Anime</option>
                     <option>bimbingan orang tua</option>
                     <option>Smart People</option>
                     <option>Film Edukasi Remaja</option>
                     <option>kartun</option>
                </select>
                <br/><br/>
                Harga : <input type="number" ref="harga1" defaultValue="0"></input> > <input type="number" ref="harga2" defaultValue="100000"></input>
                <br/><br/>
                <button onClick={this.onBtnSeacrhClick}>Cari</button>
                <button onClick={this.lihatsemuaFIlm}>All</button>
            
            <center>
                <table>
                    <thead>
                        <tr>
                            <td>Film</td>
                            <td>Harga</td>
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
}

export default Filter;