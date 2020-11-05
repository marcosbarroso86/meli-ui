import React, { useMemo } from 'react'
import { ItemList } from '../components/itemList/ItemList'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { getItems } from '../redux/ducks/items';
import queryString from 'query-string'
import { Breadcrumb } from '../components/breadcrumb/Breadcrumb';

export const ResultScreen = () => {

    const location = useLocation();
    const { search = ''} = queryString.parse(location.search);

    const dispatch = useDispatch();
    useMemo(() => dispatch( getItems(search) ), [search])

    return (
        <>
            <Breadcrumb />
            <ItemList />
        </>
    )
}
