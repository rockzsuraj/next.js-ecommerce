import React from "react";
import CaptionCarousel from "../components/Carousel";
import CategoryList from "../components/CategoryList";
import { GetServerSideProps } from "next";
import { CategoryList as CategoryListTypes } from "../types/category";
import { Flex, Wrap } from "@chakra-ui/react";
import { DesktopNav } from "../components/DesktopNav";
import axios from 'axios';

interface Props {
  data: CategoryListTypes
}

export default function Home({ data }: Props) {
  return (
    <main className="min-h-screen">
      <Flex display={{ base: 'none', md: 'flex' }} pl={2} py={5}>
        <Wrap>
          <DesktopNav NAV_ITEMS={data} />
        </Wrap>
      </Flex>
      <CaptionCarousel />
      <CategoryList data={data} />
    </main>
  )
}

export async function getServerSideProps() {
  const { data } = await axios(`https://api.escuelajs.co/api/v1/categories`)
  return { props: { data } }
}
