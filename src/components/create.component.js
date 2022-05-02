import React, { Component } from 'react';
import axios from 'axios';
import SelectCategoria from './categoria.component';
export default class Create extends Component {


  constructor(props) {
    super(props);
    this.state = {
      status: false,
      nombre: '',
      descripcion: '',
      idCategoria: 0
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSetCategoria = this.handleSetCategoria.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleSetCategoria(id) {
    this.setState({ idCategoria: id })
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    const producto = {
      nombre: this.state.nombre,
      categoria: this.state.idCategoria,
      descripcion: this.state.descripcion
    };
    axios.post('https://localhost:44305/api/v1/Producto/', producto)
      .then(res =>  this.props.history.push('/index'))
      this.setState({
        nombre: '',
        categoria: '',
        descripcion: ''
      })
  }


  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Nuevo Producto</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nombre: </label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              autoComplete='off'
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label>Descripcion: </label>
            <input type="text"
              className="form-control"
              name="descripcion"
              autoComplete='off'
              onChange={this.handleInput} />
          </div>
          <SelectCategoria handleSetCategoria={this.handleSetCategoria} value={0} />
          <div className="form-group">
            <input type="submit"
              value="Guardar"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}