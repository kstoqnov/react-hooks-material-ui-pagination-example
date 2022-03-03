import React, { useState } from "react";
import { Box, List, Tag, ListItem, Divider } from "@chakra-ui/core";
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";
import { default as data } from "./MOCK_DATA.json";

export default function App() {
  let [page, setPage] = useState(1);
  const PER_PAGE = 24;

  const count = Math.ceil(data.length / PER_PAGE);
  const _DATA = usePagination(data, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    _DATA.jump(p);
  };

  return (
    <Box p="5">
      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />

      <List p="10" pt="3" spacing={2}>
        {_DATA.currentData().map(v => {
          return (
            <ListItem key={v.id} listStyleType="disc">
              <span>{v.sku}</span>{" "}
              <Divider display="inline" orientation="vertical" />
              <span> {v.category_type}</span>{" "}
              <Divider display="inline" orientation="vertical" />
              <span>
                <Tag color="#0f4211">${v.msrp}</Tag>
              </span>
            </ListItem>
          );
        })}
      </List>

      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Box>
  );
}
