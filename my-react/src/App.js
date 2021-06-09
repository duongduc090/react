import React, { useState, useEffect } from 'react';
import './App.css';
import Routers from './Router';
import productApi from './api/productApi.js'
import categoryApi from './api/categoryApi'

function App() {
  const [products, setProduct] = useState([]);
  const [categories, setCategory] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const { data: products } = await productApi.getAll();
        // console.log(products.data);
        setProduct(products.data)
      } catch (error) {
        console.log(error)
      }
    }
    getTodos();
    const getTodos2 = async () => {
      try {
        const { data: cates } = await categoryApi.getAll();
        setCategory(cates.data)
      } catch (error) {
        console.log(error)
      }
    }
    getTodos2();
  }, [])

  const onHandleAdd = async (product, id, token) => {
    try {
      await productApi.add(product, id, token);

      setProduct([
        ...products,
        product
      ]);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleUpdate = async (id, product, iduser, token) => {
    try {
      await productApi.update(id, product, iduser, token);
      const { data: newProducts } = await productApi.getAll();
      setProduct(newProducts.data);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleDelete = async (id, iduser, token) => {
    try {
      await productApi.remove(id, iduser, token);
      const newProducts = products.filter(product => product._id !== id);
      setProduct(newProducts);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleAdd2 = async (cate, id, token) => {
    try {
      await categoryApi.add(cate, id, token);
      setCategory([
        ...categories,
        cate
      ]);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleUpdate2 = async (id, cate, iduser, token) => {
    try {
      await categoryApi.update(cate, id, iduser, token);
      const { data: newCategorys } = await categoryApi.getAll();
      setCategory(newCategorys.data);
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleDelete2 = async (id, iduser, token) => {
    try {
      await categoryApi.remove(id, iduser, token);
      const newCategorys = categories.filter(cate => cate._id !== id);
      setCategory(newCategorys);
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="App">
      <Routers productList={products} categories={categories} onAdd={onHandleAdd} onAdd2={onHandleAdd2} onUpdate={onHandleUpdate} onUpdate2={onHandleUpdate2} onDelete={onHandleDelete} onDelete2={onHandleDelete2} />
    </div>
  );
}

export default App;
