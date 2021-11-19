import aos from 'aos'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Collection from '../../components/collection/Collection'
import { selectCollection } from '../../redux/reducers/collection/collection.selectors'

export default function CollectionPage({match: {params}}) {
    const state = useSelector(state=>state)
    const collectionToRender = selectCollection(params.collection)(state)
    useEffect(() => {
        aos.init({
            duration: 1000,
        })
        window.scrollTo(0, 0)
      }, [])
      
    return (
        <div data-aos="fade-up">
            <Collection collectionToRender={collectionToRender} />
        </div>
    )
}
