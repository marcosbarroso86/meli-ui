import React, { useMemo } from 'react'
import { ItemCardDetail } from '../components/itemCardDetail/ItemCardDetail'
import { useParams, Redirect } from 'react-router-dom'
import { getItemById } from '../redux/ducks/items';
import { useDispatch } from 'react-redux';
import { Breadcrumb } from '../components/breadcrumb/Breadcrumb';

export const DetailScreen = () => {

    const { id } = useParams();
   
    if ( !id ) return < Redirect to="/" />

    const dispatch = useDispatch();
    useMemo(() => dispatch( getItemById(id) ), [id] )

    return (
        <div>
            <Breadcrumb />
            <ItemCardDetail />
        </div>
    )
}
