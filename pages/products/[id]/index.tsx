import React, { useEffect } from 'react'
import ProductDetails from '../../../components/ProductDetails'
import { Products } from '../../../types/products'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../../redux/slices/products/productsSlice'
import { AppDispatch, useAppSelector } from '../../../redux/store'
import { Box, Flex, Spinner } from '@chakra-ui/react'

interface Props {
    data: Products
}

const ProductDetailsPage = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const data = useAppSelector(state => state.products.products);
    const id = router.query.id as string;

    useEffect(() => {
        dispatch(fetchProducts(id));
    }, [id])

    if (!data) {

        return (
        <Flex className='min-h-screen'>
            <Spinner />
        </Flex>
        )

    }

    return (
        <Box className='min-h-screen' >
            <ProductDetails
                description={data.description}
                heading={data.title}
                imageUrl={data.images[0]}
                price={data.price.toString()}
                id={data.id}
            />
        </Box>
    )
}

export default ProductDetailsPage



