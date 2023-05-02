import React, { useState, useMemo } from "react";

import InputAdornment from "@mui/material/InputAdornment";
import Search from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/system";
import { Customer, customerData } from "./data";
import { filterCustomers } from "./helpers";
import { CustomerSection } from "./components/CustomerSection";

const Layout = styled("div")({
  display: "flex",
  flex: 1,
  // 100% of the screen - 2x padding
  height: "calc(100% - 32px)",
  flexDirection: "column",
  padding: "16px",
});

const FilterWrapper = styled("div")({
  display: "flex",
  margin: "4px",
  flexDirection: "row",
  justifyContent: "flex-end",
});

const SectionWrapper = styled("div")({
  display: "flex",
  flex: 1,
  flexDirection: "column",
});

const RepairManager: React.FC<{}> = () => {
  const [filter, setFilter] = useState("");
  const [customers, setCustomers] = useState<Customer[]>(customerData);

  const filteredCustomers = useMemo(
    () => filterCustomers({ customers, filter }),
    [customers, filter]
  );

  return (
    <Layout>
      <FilterWrapper>
        <TextField
          label="Filter by customer"
          variant="outlined"
          onChange={(event) => setFilter(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </FilterWrapper>
      <SectionWrapper>
        {filteredCustomers.map((customer) => (
          <CustomerSection customer={customer} setCustomers={setCustomers} />
        ))}
      </SectionWrapper>
    </Layout>
  );
};

export default RepairManager;
