import { 
  FormControl, 
  OutlinedInput, 
  Tooltip, 
  InputAdornment
} from "@mui/material";

import styles from "./ProductSearch.module.scss"

import cross from "assets/cross.svg";
import loupe from "assets/loupe.svg";
import { useSearchStore } from "../model/useSearchStore";

export const ProductsSearch = () => {

    const { search, setSearch } = useSearchStore();

    return(
      <FormControl className={styles.container} fullWidth variant="outlined">
        <OutlinedInput
          className={styles.input}
          error={!!!search && !setSearch}
          id="search"
          startAdornment={
            <InputAdornment position="start">
              <img src={loupe} alt="loupe" />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment
              className={styles.endadornment} 
              position="end"
            >
              {
                search &&
                <Tooltip title="Очистить" placement="top">
                  <img onClick={() => setSearch("")} src={cross} alt="cross" />
                </Tooltip>
              }
            </InputAdornment>
          }
          onChange={e => setSearch(e.target.value)}
          size="small"
          placeholder="Найти"
          value={search}
        />
      </FormControl>
    );
};