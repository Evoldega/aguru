import { Pagination as PaginationMui } from '@mui/material';
import { usePaginationStore } from '../model/usePaginationStore';

interface PaginationProps {
    count: number;
}

export const Pagination = ({count}: PaginationProps) => {

    const { page, pageSize, setPage } = usePaginationStore();
    
    return(
        <PaginationMui
            count={Math.ceil(count / pageSize)} 
            variant="outlined" 
            shape="rounded"
            onChange={(e, page) => setPage(page)}
            page={page}
        />
    );
}