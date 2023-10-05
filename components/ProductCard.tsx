'use client'

import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip
} from '@chakra-ui/react'
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'

interface Props {
    isNew: boolean;
    imageURL: string;
    name: string;
    price: number;
    rating: number;
    numReviews: number;
}

interface RatingProps {
    rating: number
    numReviews: number
}

function Rating({ rating, numReviews }: RatingProps) {
    return (
        <Box display="flex" alignItems="center">
            {Array(5)
                .fill('')
                .map((_, i) => {
                    const roundedRating = Math.round(rating * 2) / 2
                    if (roundedRating - i >= 1) {
                        return (
                            <BsStarFill
                                key={i}
                                style={{ marginLeft: '1' }}
                                color={i < rating ? 'teal.500' : 'gray.300'}
                            />
                        )
                    }
                    if (roundedRating - i === 0.5) {
                        return <BsStarHalf key={i} style={{ marginLeft: '1' }} />
                    }
                    return <BsStar key={i} style={{ marginLeft: '1' }} />
                })}
            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                {numReviews} review{numReviews > 1 && 's'}
            </Box>
        </Box>
    )
}

function ProductAddToCart({ imageURL, isNew, name, numReviews, price, rating }: Props) {
    return (
        <Flex p={5} alignItems="center" justifyContent="center">
            <Box
                bg={useColorModeValue('white', 'gray.800')}
                maxW="sm"
                borderWidth="1px"
                rounded="lg"
                shadow="lg"
                position="relative">
                {isNew && (
                    <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
                )}

                <Image src={imageURL} alt={`Picture of ${name}`} roundedTop="lg" height={400} width={400} objectFit='cover'/>

                <Box p="6">
                    <Box display="flex" alignItems="baseline">
                        {isNew && (
                            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                                New
                            </Badge>
                        )}
                    </Box>
                    <Flex mt="1" justifyContent="space-between" alignContent="center">
                        <Box
                            fontSize="2xl"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                            isTruncated>
                            {name}
                        </Box>
                        <Tooltip
                            label="Add to cart"
                            bg="white"
                            placement={'top'}
                            color={'gray.800'}
                            fontSize={'1.2em'}>
                            <chakra.a href={'#'} display={'flex'}>
                                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                            </chakra.a>
                        </Tooltip>
                    </Flex>

                    <Flex justifyContent="space-between" alignContent="center">
                        <Rating rating={rating} numReviews={numReviews} />
                        <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                            <Box as="span" color={'gray.600'} fontSize="lg">
                                £
                            </Box>
                            {price.toFixed(2)}
                        </Box>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}

export default ProductAddToCart