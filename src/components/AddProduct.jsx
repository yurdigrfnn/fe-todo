import React,{useState} from 'react'
import { useDispatch } from 'react-redux';

const AddProduct = () => {
    const [title,serTitle] = useState('');
    const [price,setPrice] = useState('');
    const dispact = useDispatch()

    const updateProduct = (e) => {
        e.preventDefault();

    }

  return (
    <div>
        <form onSubmit={updateProduct} action="" className='box mt-5'>
            <div className='field'>
                <label htmlFor="" className='label'>title</label>
                <div className='control'>
                    <input type="text" name="" id="" className='input'
                        value={title}
                        onChange={(e) => serTitle(e.target.value) }
                    />
                </div>
            </div>
            <div className='field'>
                <label htmlFor="" className='label'>price</label>
                <div className='control'>
                    <input type="text" name="" id="" className='input' 
                    value={price}
                    onChange={(e) => setPrice(e.target.value) }/>
                </div>
            </div>
            <div className='field'>
                <button className='button is-success'>save</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct