import { Card, CardBody, CardTitle, CardSubtitle, Table } from 'reactstrap';
import PropTypes from 'prop-types';
import ButtonTable from './ButtonTable';
import Image from 'next/image';

// const TableRow = ({ createdAt, description, value, status }) => {
//   return (
//     <tr>
//       <th scope="row">{createdAt}</th>
//       <td>{description}</td>
//       <td>{value}</td>
//       <td>{status}</td>
//       <td>
//         <ButtonTable />
//       </td>
//     </tr>
//   );
// };

// Table.propTypes = {
//   createdAt: PropTypes.string,
//   description: PropTypes.string,
//   value: PropTypes.string,
//   status: PropTypes.string,
// };
// export default TableRow;

const tableData = [
  {
    name: 'Hanna Gover',
    email: 'hgover@gmail.com',
    project: 'Flexy React',
    status: 'pending',
    weeks: '35',
    budget: '95K',
  },
  {
    name: 'Hanna Gover',
    email: 'hgover@gmail.com',
    project: 'Lading pro React',
    status: 'done',
    weeks: '35',
    budget: '95K',
  },
  {
    name: 'Hanna Gover',
    email: 'hgover@gmail.com',
    project: 'Elite React',
    status: 'holt',
    weeks: '35',
    budget: '95K',
  },
  {
    name: 'Hanna Gover',
    email: 'hgover@gmail.com',
    project: 'Flexy React',
    status: 'pending',
    weeks: '35',
    budget: '95K',
  },
  {
    name: 'Hanna Gover',
    email: 'hgover@gmail.com',
    project: 'Ample React',
    status: 'done',
    weeks: '35',
    budget: '95K',
  },
];

const TableRow = () => {
  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Project Listing</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Overview of the projects
        </CardSubtitle>
        <div className="table-responsive">
          <Table hover className="text-nowrap mt-3 align-middle" borderless>
            <thead>
              <tr>
                <th>Team Lead</th>
                <th>Project</th>

                <th>Status</th>
                <th>Weeks</th>
                <th>Budget</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.project}</td>
                  <td>
                    {tdata.status === 'pending' ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3" />
                    ) : tdata.status === 'holt' ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3" />
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3" />
                    )}
                  </td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.budget}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default TableRow;
