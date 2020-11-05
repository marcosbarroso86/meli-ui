import React from 'react'
import { useSelector } from 'react-redux'

export const Breadcrumb = () => {
    
    const categories = useSelector(state => state.items.categories)
    
    return (
        <nav>
            <ul className="breadcrumb">
                {
                    categories.map( category => (
                        <li key={ category } className="breadcrumb-item">{ category }</li>
                    ))
                }
            </ul>
        </nav>
    )
}
