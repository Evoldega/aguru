import { useEffect } from 'react';

import Text from 'shared/ui/Text/Text';
import Button from 'shared/ui/Button/Button';

import styles from './Products.module.scss';
import refresh from 'assets/refresh.svg';

import ProductsList from 'features/products-list';
import Pagination, { usePaginationStore } from 'features/products-pagination';
import { useProducts } from 'features/products-list/api/useProducts';
import { useSearchStore } from 'features/products-search/model/useSearchStore';
import { useDebounce } from 'shared/lib/useDebounce';
import AddProduct from 'features/products-add';

export const Products = () => {
  const { search } = useSearchStore();

  const { page, pageSize, setPage } = usePaginationStore();
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setPage(1)
  }, [debouncedSearch])


  const skip = (page - 1) * pageSize;
  const { data, isFetching, refetch  } = useProducts({
    limit: pageSize, 
    skip,
    search: debouncedSearch,
  });

  return(
    <section className={styles.products}>
      <header className={styles.header}>
        <Text 
          content="Все позиции"
          variant='h3'    
        />
        <div className={styles.buttons}>
          <Button
            className={styles.refreshButton}
            onClick={() => refetch()}
            content={
              <img 
                src={refresh}
                alt="refresh"
              />
            }
            variant="text"
          />
          <AddProduct />
        </div>
      </header>
      <ProductsList data={data} isFetching={isFetching} />
      {
        !!data?.total &&
        <footer className={styles.footer}>
          <div className={styles.counts}>
            <Text 
              content="Показано"
              variant="secondary4"
            />
            &nbsp;
            <Text 
              content={`${skip + 1}-${Math.min(skip + pageSize, data?.total || 0)}`}
              variant='secondary4'
              style={{ color: "black" }}
            />
            &nbsp;
            <Text 
              content="из"
              variant="secondary4"
            />
            &nbsp;
            <Text 
              content={`${data?.total || 0}`}
              variant='secondary4'
              style={{ color: "black" }}  
            />            
          </div>
          <Pagination count={data?.total ?? 0}/>
        </footer>
      }
    </section>
  );
};