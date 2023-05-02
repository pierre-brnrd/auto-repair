import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Customer } from "../data";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const promiseDelay = (ms: number): Promise<NodeJS.Timeout> =>
  new Promise((resolve) => setTimeout(resolve, ms));
const save = async ({
  customer,
  cost,
  code,
  date,
  description,
  setLoading,
  handleClose,
  setCustomers,
}: {
  customer: Customer;
  cost: string;
  date: string;
  code: string;
  description: string;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
  handleClose: () => void;
}): Promise<any> => {
  return promiseDelay(3000).then(() => {
    setCustomers((oldCustomers) => {
      const idx = oldCustomers.findIndex(
        (oldCustomer) =>
          oldCustomer.firstName === customer.firstName &&
          oldCustomer.lastName === customer.lastName
      );
      const newData = { ...oldCustomers[idx] };
      newData.service = [
        ...newData.service,
        {
          code: parseInt(code),
          date: date,
          cost: parseInt(cost),
          desc: description,
        },
      ];

      oldCustomers.splice(idx, 1, newData);
      return [...oldCustomers];
    });
    setLoading(false);
    handleClose();
  });
};

export const CreateServiceFormModal: React.FC<{
  customer: Customer;
  setCustomers: React.Dispatch<React.SetStateAction<Customer[]>>;
}> = ({ customer, setCustomers }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [code, setCode] = useState("");
  const [date, setDate] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event: any) => {
    setLoading(true);
    save({
      customer: customer,
      code: code,
      date: date,
      cost: cost,
      description: description,
      handleClose: handleClose,
      setLoading: setLoading,
      setCustomers: setCustomers,
    });
  };

  return (
    <div>
      <IconButton sx={{ padding: "4px" }} onClick={handleOpen}>
        <AddIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <React.Fragment>
            <form autoComplete="off">
              <h2>{`Service creation for ${customer.firstName} - ${customer.lastName}`}</h2>
              <TextField
                label="Code"
                onChange={(e) => setCode(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="number"
                sx={{ mb: 3 }}
                fullWidth
                value={code}
              />
              <TextField
                label="Description"
                onChange={(e) => setDescription(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                sx={{ mb: 3 }}
                fullWidth
                value={description}
              />
              <TextField
                label="Date"
                onChange={(e) => setDate(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="text"
                value={date}
                fullWidth
                sx={{ mb: 3 }}
              />
              <TextField
                label="Cost"
                onChange={(e) => setCost(e.target.value)}
                required
                variant="outlined"
                color="secondary"
                type="number"
                value={cost}
                fullWidth
                sx={{ mb: 3 }}
              />
              <Button
                variant="outlined"
                color="secondary"
                type="button"
                disabled={loading}
                onClick={handleSubmit}
              >
                Create service
              </Button>
            </form>
          </React.Fragment>
        </Box>
      </Modal>
    </div>
  );
};
