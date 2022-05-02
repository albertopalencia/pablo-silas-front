
import React, { Component } from 'react';
import axios from 'axios';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            descripcion: '',
            categoria: '',
            productos: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = event => {       
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => { 
        event.preventDefault();
        const parametro = {
            Nombre: this.state.nombre,
            descripcion: this.state.descripcion,
            categoria: this.state.categoria
        };   
        axios.get(`https://localhost:44305/api/v1/Producto?Nombre=${parametro.Nombre}&Descripcion=${parametro.descripcion}&Categoria=${parametro.categoria}`)
        .then(res => {       
             this.props.handlerProducto(res.data.data)
        })
    }

    render() { 
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form-horizontal">
                    <div className="row">
                        <div className="col-md-4">
                            <label> Nombre:</label>
                            <div className="form-group">
                                <input type="text" autoComplete='off' className="form-control" name="nombre" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label> Descripcion: </label>
                            <div className="form-group">
                                <input type="text" autoComplete='off' className="form-control" name="descripcion" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <label> Categoria:</label>
                            <div className="form-group">
                                <input type="text" autoComplete='off' className="form-control" name="categoria" onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <button type="submit" className="btn btn-success" >Buscar </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
