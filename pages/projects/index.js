import React, {useState, useEffect} from 'react'
import { useTable } from 'react-table';
import Head from 'next/head';
import AddButton from '../../components/Buttons/AddButton';
import { toast } from 'react-toastify';

const Projects = () => {  
  const [projectsDB, setProjectDB] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/project/read');
      const data = await res.json();
      setProjectDB(data);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/project/delete/${id}`, {
        method: "DELETE",
      });
  
      const data = await res.json();
      console.log(data);
      toast.success("Проектът е изтрит успешно!");
      fetchData();
    } catch (e) {
      console.error(e)
    }
  }
  

  //React Table

  const columns = React.useMemo(
    () => [
      {
        Header: 'Име',
        accessor: ({projectTitle, projectLink}) => (
          <>
            <div>{projectTitle}</div>
            <a href={`https://${projectLink}`} className='project-link'>{projectLink}</a>
          </>
        ),
        className: 'project-title',
      },
      {
        Header: 'Статус',
        accessor: ({projectStatus, projectStatusPrice}) => (
          <>
            <div className='flex g-10'>
              <div className={`status-cell flex  ${projectStatus === 'Завършен' ? 'status-completed' : 'status-pending'}`}>
                <span className='flex align-center g-6'>{projectStatus}</span>
              </div>
              <div className={`status-cell flex  ${projectStatusPrice === 'Платен' ? 'status-completed' : 'status-error'}`}>
                <span className='flex align-center g-6'
                ><div className={`dot ${projectStatusPrice === 'Платен' ? 'dot-success' : 'dot-error'}`}>
                  </div>{projectStatusPrice}</span>
              </div>
            </div>
          </>
        ),
        className: 'project-status',

      },
      {
        Header: 'За проекта',
        accessor: ({projectType, projectDesc}) => (
          <>
            <div className='table-primary'>{projectType}</div>
            <div className='table-secondary project-desc'>{projectDesc}</div>
          </>
        )
      },
      {
        Header: 'Клиент',
        accessor: ({projectClientFirst, projectClientLast, projectClientEmail}) => (
          <>
            <div className='table-primary'>{projectClientFirst} {projectClientLast}</div>
            <a href={`mailto:${projectClientEmail}`} className='table-secondary'>{projectClientEmail}</a>
          </>
        ),
      },
      {
        Header: "Цена",
        accessor: ({projectPrice}) => (
          <span className='table-primary'>{projectPrice}лв.</span>
        )
      },   
      {
        Header: "",
        accessor: "actions",
        Cell: ({ row }) => (
          <div>
            <button className='action-btn' onClick={() => handleDelete(row.original._id)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="action-svg" d="M2.5 4.99996H4.16667M4.16667 4.99996H17.5M4.16667 4.99996V16.6666C4.16667 17.1087 4.34226 17.5326 4.65482 17.8451C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8451C15.6577 17.5326 15.8333 17.1087 15.8333 16.6666V4.99996H4.16667ZM6.66667 4.99996V3.33329C6.66667 2.89127 6.84226 2.46734 7.15482 2.15478C7.46738 1.84222 7.89131 1.66663 8.33333 1.66663H11.6667C12.1087 1.66663 12.5326 1.84222 12.8452 2.15478C13.1577 2.46734 13.3333 2.89127 13.3333 3.33329V4.99996M8.33333 9.16663V14.1666M11.6667 9.16663V14.1666" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
          </div>
        )
      },      
    ],
    []
  );



  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({columns, data:projectsDB})

  return (
    <>  
    <Head>
      <title>Static Dashboard - Проекти</title>
    </Head>

    <div className='page-header flex space-between mb-32'>
      <h2>Проекти</h2>
      <AddButton href="/projects/create" title="Добави проект"/>
    </div>
    <div className="flex space-between">

    </div>
    <div className='table-container'>
      <table className='w-100' {...getTableProps()}>
        <thead>
          {// Loop over the header rows
          headerGroups.map(headerGroup => (
            // Apply the header row props
            <tr {...headerGroup.getHeaderGroupProps()}>
              {// Loop over the headers in each row
              headerGroup.headers.map(column => (
                // Apply the header cell props
                <th {...column.getHeaderProps()}>
                  {// Render the header
                  column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {/* Apply the table body props */}
        <tbody {...getTableBodyProps()}>
          {
          rows.map(row => {
            prepareRow(row);
            return (
              <tr key={projectsDB._id} {...row.getRowProps()}>
                {
                row.cells.map(cell => {               
                  return (
                  <td 
                    {...cell.getCellProps()}
                    className={cell.column.className}
                    >
                      {cell.render('Cell')}
                  </td>
                  );
                })
                }
              </tr>
            );
          })}
        </tbody>
    </table>
    </div>
</>
  )
}

export default Projects