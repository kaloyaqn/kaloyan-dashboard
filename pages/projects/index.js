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
    console.log(projectsDB._id);
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
        accessor: 'projectStatus',
        className: 'project-status',
        Cell: ({ value }) => (
          <span className={`status-cell ${value === 'Завършен' ? 'status-completed' : 'status-pending'}`}>
            {value}
          </span>
        ),

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
            <button onClick={() => handleDelete(row.original._id)}>
              Del
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
                    {cell.column.id === 'projectStatus' ? (
                      cell.render('Cell')
                    ) : (
                      cell.render('Cell')
                    )
                    }
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