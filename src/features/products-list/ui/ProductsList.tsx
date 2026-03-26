import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import type { ProductResponse } from 'entities/product';

import styles from './ProductsList.module.scss';

import Text from 'shared/ui/Text/Text';
import Button from 'shared/ui/Button/Button';

import plus from 'assets/plus.svg';
import three_dots_round from 'assets/three_dots_round.svg';
import Sort from '@mui/icons-material/Sort';
import { useSortStore } from '../model/useSortStore';


interface ProductsListProps {
  data: ProductResponse | undefined,
  isFetching: boolean
}

export const ProductsList = ({ data, isFetching }: ProductsListProps) => {
  const sortModel = useSortStore(s => s.sortModel)
  const setSortModel = useSortStore(s => s.setSortModel)

  const columns: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Наименование',
      flex: 2,
      renderCell: (params) => {        
        return <div className={styles.titleCell}>
          <img
            className={styles.thumbnail}
            src={params.row.thumbnail}
            width={48}
            height={48}
            alt="thumbnail"
          />
          <div className={styles.titles}>
            <Text 
              content={params.value}
              variant="h4"
            />
            <Text 
              content={params.row.category}
              variant="secondary4"    
            />       
          </div>          
        </div>
        ;
      },
    },
    {
      field: 'brand',
      headerName: 'Вендор',
      flex: 1,
      renderCell: (params) => {
        return <div className={styles.vendorCell}>
          <Text 
            content={params.value}
            variant="bold2"
          />
        </div>
      }
    },
    {
      field: 'sku',
      headerName: 'Артикул',
      flex: 1,
    },
    {
      field: 'rating',
      headerName: 'Оценка',
      flex: 1,
      renderCell: (params) => {
        return <div className={styles.ratingCell}>
            <Text 
              content={params.value}
              style={params.value < 3.5 ? { color: "red" } : {}}
              variant="cell"
            />
            <Text 
              content="/5"
              variant="cell"    
            />       
        </div>
        ;
      },
    },
    {
      field: 'price',
      headerName: 'Цена, ₽',
      flex: 2,
      renderCell: (params) => {
        return <div className={styles.priceCell}>
          {
            String(params.value).includes(".")
            ?
              <div className={styles.priceContainer}>
                <Text 
                  content={String(params.value).slice(0, -3) ?? ""}
                  variant="secondary3"    
                />
                <Text 
                  content={String(params.value).slice(-3) ?? ""}
                  variant="secondary3_1"    
                />
              </div>
            :
              <Text 
                content={params.value}
                variant="secondary3"    
              />

          }
          <div className={styles.buttons}>
            <Button
              className={styles.addButton}
              content={
                <img 
                  src={plus}
                  alt="plus"
                />
              }
              variant="contained"
            />
            <Button
              className={styles.optionsButton}
              content={
                <img 
                  src={three_dots_round}
                  alt="three_dots_round"
                />
              }
              variant="contained"
            />          
          </div>          
        </div>
        ;
      },
    }
  ];
  
  return(
    <section className={styles.table}>
      <DataGrid 
        columns={columns}
        rows={data?.products}
        rowHeight={71}
        columnHeaderHeight={71}
        checkboxSelection
        disableRowSelectionOnClick
        hideFooter
        loading={isFetching}
        slots={{
          columnHeaderSortIcon: ({ direction }) => {
           return <Sort
            className={
              direction === 'asc' 
                ? styles["sortIcon_rotated"]
                : direction === 'desc' 
                  ? styles.sortIcon
                  : styles["sortIcon_disabled"]
            }
          />;
          },
        }}
        sortModel={sortModel}
        onSortModelChange={setSortModel}
      />
    </section>
  );
};

