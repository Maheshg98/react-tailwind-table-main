import React from 'react'
import Table, { AvatarCell } from './Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faStar, faCalendarAlt, faEllipsisV  } from '@fortawesome/free-solid-svg-icons';


const getData = () => {
  const data = [
    {
      patients: 'Pankaj Singh',
      email: '+152 1451451',
      date: '20 Jan 2024',
      time: '10:18',
      doctor: 'Dr.Sarah Smith',
      injury: 'Fever',
      action: '...',
      imgUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      starred: true,
    },
    {
      patients: 'Cara Stevens',
      email: '+152 1451451',
      date: '20 Jan 2024',
      time: '10:18',
      doctor: 'Dr.Rajesh',
      injury: 'Malaria',
      action: '...',
      imgUrl: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      starred: true, // Example of Cara Stevens
      circleColor: 'bg-green-500', // Indicate Cara Stevens
    },
    {
      patients: 'Pooja Patel',
      email: '+152 1451451',
      date: '20 Jan 2024',
      time: '10:18',
      doctor: 'Dr.Megha Trivedi',
      injury: 'Cholera',
      action: '...',
      imgUrl: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      starred: true,
      circleColor: 'bg-red-500',
    },
    {
      patients: 'Megha Trivedi',
      email: '+152 1451451',
      date: '20 Jan 2024',
      time: '10:18',
      doctor: 'Dr.Rajesh',
      injury: 'Fever',
      action: '...',
      imgUrl: 'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      starred: true, // Example of Cara Stevens
      isCaraStevens: true, // Ind
    },
    {
      patients: 'John Doe',
      email: '+152 1451451',
      date: '20 Jan 2024',
      time: '10:18',
      doctor: 'Dr.Cara Stevens',
      injury: 'Cholera',
      action: '...',
      imgUrl: 'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      starred: true,
      isCaraStevens: true,
    },
    {
      patients: 'Nasir Uddin',
      email: '+152 1451451',
      date: '20 Jan 2024',
      time: '10:18',
      doctor: 'Dr.Rajesh',
      injury: 'Fever',
      action: '...',
      imgUrl: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      starred: true,
    },
  ]
 

  const uniquePatients = new Set();
  const uniqueData = [];

  // Iterate over data and add unique patients to uniqueData
  data.forEach(entry => {
    if (!uniquePatients.has(entry.patients)) {
      uniqueData.push(entry);
      uniquePatients.add(entry.patients);
    }
  });

  return uniqueData;
}

function App() {

  const columns = React.useMemo(() => [
    {
      Header: "Patients",
      accessor: 'patients',
      Cell: AvatarCell,
      imgAccessor: "imgUrl",
      emailAccessor: "email",
    },
    {
      Header: "Date",
      accessor: 'date',
      Cell: ({ value }) => (
        <div className="flex items-center">
          <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" />
          {value}
        </div>
      ),
    },
    {
      Header: "Time",
      accessor: 'time',
      Cell: ({ value }) => (
        <div className="flex items-center">
          <FontAwesomeIcon icon={faClock} className="mr-1" />
          {value}
        </div>
      ),
    },
    {
      Header: "Doctor",
      accessor: 'doctor',
      Cell: ({ value, row }) => (
        <div className="flex items-center">
          {row.original.starred && (
            <div className={`rounded-full w-6 h-6 flex items-center justify-center mr-2 ${row.original.isCaraStevens ? 'bg-red-500' : 'bg-green-500'}`}>
              <FontAwesomeIcon icon={faStar} className="text-white text-xs" />
            </div>
          )}
          {value}
        </div>
      ),
    },
    {
      Header: "Injury",
      accessor: 'injury',
      Cell: ({ value }) => (
        <div className={`px-2 py-1 w-16 rounded-lg ${value === 'Fever' || value === 'Malaria' || value === 'Cholera' ? 'bg-gray-300' : ''}`}>
          {value}
        </div>
      ),
    },
    {
     Header: "Actions",
      accessor: 'action',
      Cell: () => (
        <div className="flex items-center">
          <FontAwesomeIcon icon={faEllipsisV} />
        </div>
      ),
    }
  ], []);

  const data = React.useMemo(() => getData(), [])

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <h1 className="text-xl font-semibold">Todays Appointment List</h1>
        </div>
        <div className="mt-6 overflow-x-auto">
          <Table columns={columns} data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
