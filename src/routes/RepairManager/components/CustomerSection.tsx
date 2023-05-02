import React from "react";
import { styled } from "@mui/system";
import { ServiceCard } from "./ServiceCard";
import { Customer } from "../data";
import { CreateServiceFormModal } from "./CreateServiceFormModal";

const ServiceWrapper = styled("div")({ display: "flex", flexDirection: "row" });

const SectionTitle = styled("div")({
  display: "flex",
  textTransform: "capitalize",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  padding: "4px",
});

const Section = styled("div")({
  display: "flex",
  minHeight: "160px",
  flexDirection: "column",
  border: "1px #444 solid",
  margin: "4px",
});

export const CustomerSection: React.FC<{
  customer: Customer;
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
}> = ({ customer, setCustomers }) => {
  return (
    <Section>
      <SectionTitle>
        {`${customer.make} ${customer.model} - ${customer.lastName} ${customer.firstName}`}

        <CreateServiceFormModal
          customer={customer}
          setCustomers={setCustomers}
        />
      </SectionTitle>
      <ServiceWrapper>
        {customer.service.map((s) => (
          <ServiceCard service={s} />
        ))}
      </ServiceWrapper>
    </Section>
  );
};
