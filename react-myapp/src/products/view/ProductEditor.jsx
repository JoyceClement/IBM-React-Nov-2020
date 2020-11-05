import React, { Component } from 'react';


class ProductEditor extends Component {
    state = {
        name: '',
        description: '',
        price: 0,
        categoryName :''
    };

    onAddNewProductClick = () => {
        const { addNew } = this.props,
            { name, description, price , categoryName } = this.state;
        addNew(name, description, price, categoryName);
    }

    selectChangeHandler = () =>{
        console.log("jhhjd")
    }
    render() {
    const catogoryList = this.props.categoryList.map((categoryName , index) => (<option key={index}> {categoryName.name}</option>));
        return (
          <section className="edit">
            <div className="field">
              <label htmlFor="">Name :</label>
              <input
                type="text"
                onChange={evt => this.setState({ name: evt.target.value })}
              />
            </div>
            <div className="field">
              <label htmlFor="">Description :</label>
              <input
                type="text"
                onChange={evt =>
                  this.setState({ description: evt.target.value })
                }
              />
            </div>
            <div className="field">
              <label htmlFor="">Price :</label>
              <input
                type="number"
                onChange={evt =>
                  this.setState({ price: parseInt(evt.target.value) })
                }
              />
            </div>
            <div className="field">
              <label htmlFor="">Category</label>
              <select onChange ={evt => this.setState({categoryName : evt.target.value})} >
              {catogoryList}
              </select>
            </div>
            <div className="field">
              <input
                type="button"
                value="Add Product"
                onClick={this.onAddNewProductClick}
              />
            </div>
          </section>
        );
    }
}

export default ProductEditor;