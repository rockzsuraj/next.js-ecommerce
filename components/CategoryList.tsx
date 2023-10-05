import React, { Fragment } from 'react';
import { Heading, Wrap } from '@chakra-ui/react'
import { CategoryList } from '../types/category';
import ProductCategory from './CategoryCard';
import Link from 'next/link';

interface Props {
  data: CategoryList
}

const HomeProductList = ({ data }: Props) => {

  return (
    <Fragment>
      <Heading p={5} as="h1">Trending category</Heading>
      <Wrap>
        {data?.map((item) => (
          <ProductCategory brand={item.name} image={item.image} key={item.id} id={item.id} />
        ))}
      </Wrap>
    </Fragment>

  );
};

export default HomeProductList;