import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tes from './Component/Tes';
import Filter from './Component/Filter';
import Tablemovies from './Component/Tablemovies'
import Tablecategories from './Component/Tablecategories';
import TablecategoriesCat from './Component/TableMovieCat';

class App extends Component {
  render() {
    return (
      <div>
        <center> <h1>API NYA MENGGUNAKAN YANG ADA DI FOLDER INI</h1> </center>
        <br/><br/>

        <Tablemovies/>
        <br/><br/>
        <Tablecategories />
        <br/><br/>
        <TablecategoriesCat />
        
      </div>
    );
  }
}

export default App;
