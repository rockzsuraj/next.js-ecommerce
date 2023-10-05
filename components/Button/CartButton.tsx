'use client'
import React, { useState } from 'react';
import { Button, Badge, Box } from '@chakra-ui/react';
import { FaShoppingCart } from 'react-icons/fa';
import Cart from '../Cart';
import { useAppSelector } from '../../redux/store';

interface Props {
    itemCount: number;
}

const CartButton = ({ itemCount }: Props) => {
    const [open, setOpen] = useState(false);
    const cartItems = useAppSelector(state => state.cart);

    function handleClick(val: boolean) {
        setOpen(val);
    }
    return (
        <Box>
            <Button
                variant="solid"
                colorScheme="teal"
                size="md"
                leftIcon={<FaShoppingCart />}
                onClick={() => handleClick(true)}
            >
                Cart{' '}
                {cartItems.length > 0 && (
                    <Badge ml={2} colorScheme="red">
                        {cartItems.length}
                    </Badge>
                )}
            </Button>
            <Cart isOpen={open} onClick={handleClick} />
        </Box>
    );
};

export default CartButton;
