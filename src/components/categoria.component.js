import React, { Component } from 'react';
import axios from 'axios';

class SelectCategoria extends Component {

    constructor(props) {
        super(props);
        this.state = { categorias: [], status: false };
        this.selectCategoria = this.selectCategoria.bind(this)
    }

    cargarCategorias() {
        axios.get('https://localhost:44305/api/v1/Categorias')
            .then(response => {
                this.setState({ categorias: response.data.data, status: true });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidMount() {
        this.cargarCategorias();
    } 

    selectCategoria(e) {
        e.preventDefault();
        let id = e.target.value;        
        this.props.handleSetCategoria(id)
    }

    render() { 
        const value = this.props.value;
        return (
            <div className="form-group">
                <label>Categorias: </label>
                <select name="categoriaId" className="form-control" value= {value}  onChange={this.selectCategoria}> 
                    {
                       this.state.status && this.state.categorias.map((cate) => (
                            <option key={cate.id} value={cate.id}>
                                {cate.nombre}
                            </option>
                        ))
                    }
                </select>
            </div>
        );
    }
}

export default SelectCategoria;