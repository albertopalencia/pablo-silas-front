import React, { Component } from 'react';
import TableRow from './TableRow';
import Search from "./search.component.js";
 
export default class Index extends Component {

  state = { productos: [], status: false }

  componentDidMount() { }

  tabRow() {
    if (this.state.status) {
      return this.state.productos.map(function (producto, i) {
        return <TableRow obj={producto} key={i} />;
      });
    }
  }

  handlerProducto = (producto) => {    
    this.setState({ productos: producto, status: true });
  }

  render() {
    return (
      <div>
        <hr />
        <div className="row">
          <Search handlerProducto={this.handlerProducto} />
        </div>
        <h3 align="center">Productos</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Categoria</th>
              <th>Producto</th>
              <th>Descripcion</th>
              <th colSpan="2"></th>
            </tr>
          </thead>
          <tbody>
            {this.tabRow()}
          </tbody>
        </table>
      </div>
    );
  }
}