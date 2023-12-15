import { DataTable } from './components/data-table/data-table';
import { NavigationSection } from './components/navigation-section';
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
    <main className="flex">
      <div>
        <NavigationSection />
      </div>
      <div className="p-4 w-full" style={{ border: '1px solid' }}>
        <DataTable columns={columns} data={data} />
      </div>
    </main>
  );
}

export default App;
