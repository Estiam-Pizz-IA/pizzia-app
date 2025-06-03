import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import moment from "moment";

export function Grid({ orders }) {

  const handleFormatPizzaName = (pizzas) => {
    return pizzas.map((pizza) => pizza.name || pizza.id).join(", ");
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell >
              <strong>Order ID</strong>
            </TableCell>
            <TableCell>
              <strong>Pizza</strong>
            </TableCell>
            <TableCell>
              <strong>Order Date</strong>
            </TableCell>
             <TableCell>
              <strong>User</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>
              <TableCell>
                 <Tooltip title={handleFormatPizzaName(order.pizzaIDs)}>
                  {order.pizzaIDs.length}
                </Tooltip>
              </TableCell>
              <TableCell>{moment(order.dateOrder).format('YYYY/MM/DD hh:mm')}</TableCell>
              <TableCell>{order.userID.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}