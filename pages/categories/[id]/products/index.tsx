import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { CategoryProductsList } from '../../../../types/categoryProducts';
import ProductListCard from '../../../../components/ProductsListCard';
import { Wrap } from '@chakra-ui/react';
import axios from 'axios';

interface Props {
    data: CategoryProductsList[]
}

const ProductsPage: FC<Props> = (props) => {

    return (
        <Wrap className='min-h-screen'>
            {
                props?.data?.map(item => {
                    return (
                        <ProductListCard
                            imageURL={item?.images?.[0]}
                            key={item.id} isNew={true}
                            name={item.title}
                            price={item.price}
                            numReviews={4}
                            rating={4}
                            id={item.id.toString()}
                        />
                    )
                })
            }
        </Wrap>
    )
}

export default ProductsPage


// This gets called on every request
export async function getServerSideProps(context) {
    const query = context.query;
    const {data} = await axios(`https://api.escuelajs.co/api/v1/categories/${query.id}/products`);
    return { props: { data } }
}
