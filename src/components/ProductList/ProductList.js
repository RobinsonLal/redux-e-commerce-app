import React, { useEffect } from 'react'
import '../ProductList/ProductList.css'

import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../redux/productSlice'
import SingleProduct from '../SingleProduct/SingleProduct'

import { Spin } from 'antd';

function ProductList() {

    const dispatch = useDispatch()

    const products = useSelector(state => state.productReducer.products)
    const status = useSelector(state => state.productReducer.status)

    useEffect(() => {
        dispatch(fetchData())
    }, [])

    if(status === 'Loading') {
        return < Spin style={{ position: 'absolute', top:'40%', left:'50%'}} />;
    }

    if(status === 'Failed'){
        return <h2>Something went wrong. Please check back later.</h2>
    }

    return (
        <div className='productList' > {products.map(item => {
            return <p> <SingleProduct key={item.id} product={item} /></p>
        })} </div>
    )
}

export default ProductList