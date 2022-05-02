import React, { Component } from 'react';
import axios from 'axios';
import SelectCategoria from './categoria.component';

export default class Edit extends Component {

  constructor(props) {
    super(props);
    this.onChangeInput = this.onChangeInput.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleSetCategoria = this.handleSetCategoria.bind(this);

    this.state = {
      id: 0,
      nombre: '',
      idcategoria: 0,
      descripcion: '',
      productos: [],
      categorias: []
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    axios.get(`https://localhost:44305/api/v1/Producto/${id}`)
      .then(response => {
        let producto = response.data.data;
        this.setState({
          id: id,
          nombre: producto.nombre,
          idcategoria: producto.idCategoria,
          descripcion: producto.descripcion
        });
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeInput(e) {
    const value = e.target.value;
    const name = e.target.name; 
    this.setState({ [name]: value })
  }

  handleSetCategoria(id) {
    this.setState({ idcategoria: id });
  }


  onSubmit(e) {
    e.preventDefault();
    const obj = {
      id: this.state.id,
      nombre: this.state.nombre,
      descripcion: this.state.descripcion,
      idcategoria: this.state.idcategoria
    };
    axios.put('https://localhost:44305/api/v1/Producto/', obj)
    .then(res => console.log(res.data));
    this.props.history.push('/index');
  }

  render() {
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Actualizar Producto
        </h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nombre:  </label>
            <input
              type="text"
              className="form-control"
              name="nombre"
              autoComplete='off'
              value={this.state.nombre}
              onChange={this.onChangeInput}
            />
          </div>
          <div className="form-group">
            <label>Descripcion: </label>
            <input type="text"
              name="descripcion"
              autoComplete='off'
              className="form-control"
              value={this.state.descripcion}
              onChange={this.onChangeInput}
            />
          </div>
          <SelectCategoria handleSetCategoria={this.handleSetCategoria} value={this.state.idcategoria} />
          <div className="form-group">
            <input type="submit"
              value="Actualizar"
              className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}