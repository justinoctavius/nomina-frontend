import { DataTable } from './components/data-table/data-table';
import { columns } from './components/position-table/columns';

function getData() {
  // Fetch data from your API here.
  return [
    {
      id: '728ed52f',
      name: 'Programador',
      salaryPerHour: 500,
      description: 'A ve si eta vaina sirve',
    },
    // ...
  ];
}

function App() {
  const data = getData();

  return (
    <div className="p-4">
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default App;
