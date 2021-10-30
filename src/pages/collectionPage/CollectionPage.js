import React from 'react'
import { useSelector } from 'react-redux'
import Collection from '../../components/collection/Collection'
import { selectCollection } from '../../redux/reducers/collection/collection.selectors'

export default function CollectionPage({match: {params}}) {
    const state = useSelector(state=>state)
    const collectionToRender = selectCollection(params.collection)(state)
    return (
        <div>
            <Collection collectionToRender={collectionToRender} />
        </div>
    )
}
