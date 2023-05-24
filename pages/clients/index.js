import React, {useState, useEffect} from 'react'
import { useTable } from 'react-table';
import AddButton from '../../components/Buttons/AddButton';
import Head from 'next/head';

const Clients = () => {

    const [clientsDB, setClientDB] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const res = await fetch('/api/clients/read');
          const data = await res.json();
          setClientDB(data);
        };
        fetchData();
      }, []);


      const columns = React.useMemo(
        () => [
          {
            Header: 'Име',
            accessor: ({clientFirstname, clientLastname}) => (
              <>
                <span className='table-primary'>{clientFirstname} {clientLastname}</span>
              </>
            ),
          },          
          {
            Header: "Контакт",
            accessor: ({clientEmail, clientPhoneNumber}) => (
                <div className='flex column'>
                <a href={`mailto:${clientEmail}`} className='table-primary'>{clientEmail}</a>
                <a href={`tel:${clientPhoneNumber}`} className='table-secondary'>{clientPhoneNumber}</a>
                
                </div>
            )
          }
        ],
        []
      );
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({columns, data:clientsDB})
    return (
        <>
            <Head>
                <title>Static Dashboard - Клиенти</title>
            </Head>

            <div className='page-header flex space-between mb-32'>
                <h2>Клиенти</h2>
                <AddButton href="/clients/create" title="Добави клиент"/>
            </div>

            <div className='table-container'>
                <table className='w-100' {...getTableProps()}>
                    <thead>
                    {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                        {
                        headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>
                            {
                            column.render('Header')}
                            </th>
                        ))}
                        </tr>
                    ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {
                            rows.map(row => {
                                prepareRow(row);
                                return (
                                    <tr {...row.getRowProps()}>
                                        {
                                            row.cells.map(cell => {
                                                return (
                                                    <td
                                                    {...cell.getCellProps()}
                                                    className={cell.column.className}
                                                    >
                                                        {cell.render('Cell')}
                                                    </td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Clients