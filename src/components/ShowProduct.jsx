import React,{useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getProducts,productSelectors } from '../features/productSlice'
const ShowProduct = () => {
    const dispatch = useDispatch()
    const products = useSelector(productSelectors.selectAll)

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])
    
  return (
    <div className='box mt-5'>
        {products.map((product)=>(
            <>
            <h4 className='title is-4'>title :{product.title} </h4>
            <h4 className='title is-4'>title :{product.price} </h4>
            </>
        ))}
        
    </div>
  )
}

export default ShowProduct