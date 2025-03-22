import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, updateItem, cancelEdit } from '../reduxe/counterSlice';
import { v4 as uuidv4 } from 'uuid';

function ItemForm() {
    const dispatch = useDispatch();
    const currentItem = useSelector(state => state.currentItem);
    const [data, setData] = useState({ title: '', price: '' });

    useEffect(() => {
        if(currentItem) {
            setData(currentItem);
        } else {
            setData({ title: '', price: '' })
        }
        
    }, [currentItem])
    
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(currentItem) {
            dispatch(updateItem(data))
        } else {
            dispatch(addItem({...data, id: uuidv4()}))
        }
        setData({ title: '', price: '' })
    }

    const handleCancel = () => {
        dispatch(cancelEdit());
    };

    return (
        <div className="calculate">
            <form className="calculateForm" onSubmit={handleSubmit}>
                <input type="text" name="title" onChange={handleChange} value={data.title} className="title" required/>
                <input type='number' name="price" onChange={handleChange} value={data.price} className="price" required/>
                <button className="save">Save</button>
                {currentItem && <button type="button" onClick={handleCancel}>Отмена</button>}
            </form>
        </div>
    )
}

export default ItemForm