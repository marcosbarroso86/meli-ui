import React from 'react'
import { useSelector } from 'react-redux'
import { ItemCard } from '../itemCard/ItemCard'

export const ItemList = () => {

    const items = useSelector(state => state.items.results) 

    return (
        <div className="margin-bottom-50">
          {
            items.map( item => (
                <ItemCard key={ item.id } 
                    {...item}>
                </ItemCard>
            ))
          } 
        </div>
    )
}
