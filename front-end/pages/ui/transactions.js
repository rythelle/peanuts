import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardGroup,
  Button,
  Row,
  Col,
  Table,
} from 'reactstrap';
import ButtonTable from '../../src/components/ButtonTable';
import TableRow from '../../src/components/TableRow';

const transactionsData = [
  {
    createdAt: '2022-10-15',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    value: '123',
    status: 'Pago',
  },
  {
    createdAt: '2022-10-15',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    value: '123',
    status: 'Pago',
  },
  {
    createdAt: '2022-10-15',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    value: '123',
    status: 'Pago',
  },
  {
    createdAt: '2022-10-15',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    value: '123',
    status: 'Pago',
  },
];

const Transactions = () => {
  return (
    <div>
      <TableRow />
      {/* <Table borderless hover responsive>
        <thead>
          <tr>
            <th>Data</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Situação</th>
          </tr>
        </thead>
        <tbody>
          {transactionsData.map((transaction) => (
            <TableRow
              createdAt={transaction.createdAt}
              description={transaction.description}
              value={transaction.value}
              status={transaction.status}
            />
          ))}
        </tbody>
      </Table> */}
    </div>
  );
};

export default Transactions;
