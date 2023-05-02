import { Customer } from "./data";

export const filterCustomers = ({
  customers,
  filter,
}: {
  customers: Customer[];
  filter: string;
}) => {
  const lowercaseFilter = filter.toLocaleLowerCase();
  return customers.filter(
    (customer) =>
      customer.firstName.toLocaleLowerCase().includes(lowercaseFilter) ||
      customer.lastName.toLocaleLowerCase().includes(lowercaseFilter) ||
      customer.make.toLocaleLowerCase().includes(lowercaseFilter) ||
      customer.model.toLocaleLowerCase().includes(lowercaseFilter)
  );
};
