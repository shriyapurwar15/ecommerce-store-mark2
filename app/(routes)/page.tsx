import getBillboard from '@/actions/get-billboards';
import getProducts from '@/actions/get-products';
import Billboard from '@/components/Billboard'
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container'
import React from 'react'

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("02d36f77-9fdb-40b0-a488-e3e47f0c2856");
  return (
    <Container>
      <div className='space-y-10 pb-10 '>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 '>
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  )
}

export default HomePage
