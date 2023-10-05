import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const CategoriesHomePage = () => {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault()
        router.push('/pdp')
      }
  return (
    <>
        <div>plp index</div>
        <Link href={'/pdp'}>
            navigate to pdp
        </Link>
        <Button onClick={handleClick} title='pdp' color={'black'}/>
    </>
  )
}

export default CategoriesHomePage