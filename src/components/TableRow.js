import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {

  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  delete() {
    axios.delete(`https://localhost:44305/api/v1/Producto/${this.props.obj.id}`)
      .then((response) => {
        window.location.reload();
      })
      .catch(err => console.log(err))
  }
  render() {
    return (
      <tr>
        <td>
          {this.props.obj.id}
        </td>
        <td>
          {this.props.obj.categorias.nombre}
        </td>
        <td>
          {this.props.obj.nombre}
        </td>
        <td>
          {this.props.obj.descripcion}
        </td>
        <td>
          <Link to={"/edit/" + this.props.obj.id} className="btn btn-primary">Editar</Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">Eliminar</button>
        </td>
      </tr>
    );
  }
}

export default TableRow;