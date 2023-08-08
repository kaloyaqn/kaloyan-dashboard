import React, { useState, useEffect } from "react";
import { useTable } from "react-table";
import Head from "next/head";
import AddButton from "../../components/Buttons/AddButton";
import { toast } from "react-toastify";

import Popup from "reactjs-popup";
import FormButton from "../../components/Buttons/FormButton";

const Svetnime = () => {
  const [projectsDB, setProjectDB] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);

  const fetchData = async () => {
    try {
      const res = await fetch("/api/svetnime/read");
      const data = await res.json();
      setProjectDB(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`/api/svetnime/delete/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      console.log(data);
      toast.success("Проектът е изтрит успешно!");
      fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  //React Table

  const columns = React.useMemo(
    () => [
      {
        Header: "Продукт",
        accessor: ({ svetnimeProduct, svetnimeLink }) => (
          <>
            <div>{svetnimeProduct}</div>
            <a href={`${svetnimeLink}`} className="project-link">
              {svetnimeLink}
            </a>
          </>
        ),
        className: "project-title",
      },
      {
        Header: "Клиент",
        accessor: ({ svetnimeClientName, svetnimeClientNumber }) => (
          <>
            <div className="table-primary">{svetnimeClientName}</div>
            <a href={`tel:${svetnimeClientNumber}`} className="table-secondary">
              {svetnimeClientNumber}
            </a>
          </>
        ),
      },
      {
        Header: "Адрес",
        accessor: ({ svetnimeClientAddress }) => (
          <div className="flex column gap-1">
            <div className="table-primary">{svetnimeClientAddress}</div>
          </div>
        ),
      },
      {
        Header: "Спедиторска фирма ",
        accessor: ({ svetnimeOrderShippingType, svetnimeSpeditorskaFirma }) => (
          <>
            <div className="flex g-10">
              <div
                className={`status-cell flex  ${
                  svetnimeOrderShippingType === "Спиди"
                    ? "status-completed"
                    : "status-pending"
                }`}
              >
                <span className="flex align-center g-6">
                  {svetnimeOrderShippingType}
                </span>
              </div>
              <div
                className={`status-cell flex align-center  ${
                  svetnimeSpeditorskaFirma === "Еконт"
                    ? "status-econt"
                    : "status-speedy"
                }`}
              >
                {svetnimeSpeditorskaFirma === "Спиди" ? (
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.69149 1.27636C1.44681 1.97455 0.425532 2.57455 0.425532 2.60727C0.425532 2.65091 1.51064 3.31636 2.85106 4.11273C4.18085 4.90909 5.32979 5.61818 5.40426 5.68364C5.58511 5.88 5.58511 10.2655 5.40426 10.4509C5.24468 10.6145 4.8617 10.6145 4.70213 10.4509C4.61702 10.3636 4.57447 9.72 4.57447 8.28V6.25091L2.34043 4.92C1.11702 4.2 0.0851064 3.6 0.0531915 3.6C0.0212766 3.6 0 4.8 0 6.26182C0 8.25818 0.0319149 8.94545 0.138298 9.03273C0.202128 9.08727 1.2234 9.72 2.39362 10.4182C3.56383 11.1273 4.59574 11.7709 4.69149 11.8473C4.7766 11.9345 4.90426 12 4.96808 12C5.03191 12 6.18085 11.3345 7.54255 10.5164L10 9.03273V6.31636C10 4.82182 9.97872 3.6 9.96808 3.6C9.94681 3.6 9.28723 3.99273 8.5 4.47273C6.82979 5.48727 6.61702 5.54182 6.46808 4.93091C6.38298 4.62545 6.5 4.52727 8.2766 3.49091C9.04255 3.04364 9.67021 2.65091 9.68085 2.61818C9.68085 2.54182 5.15957 1.75089e-07 5.03191 1.75089e-07C4.98936 1.75089e-07 3.92553 0.578182 2.69149 1.27636Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    width="12"
                    height="14"
                    viewBox="0 0 12 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.67798 0.185969C2.90964 0.350358 2.19133 1.05437 2.0198 1.81199C1.99121 1.93707 1.68387 4.20277 1.33365 6.84729C0.722556 11.5002 0.704687 11.6646 0.743998 11.9398C0.829766 12.5723 1.19071 13.019 1.80538 13.2513L2.01622 13.3335H5.55416H9.09209L9.32438 13.2513C9.6603 13.1298 9.92118 12.9583 10.1678 12.701C10.5537 12.3007 10.7217 11.904 10.7217 11.4001C10.7217 11.2358 10.7038 11.0356 10.6788 10.9499C10.5823 10.5818 10.3429 10.2601 10.0355 10.0743C9.65673 9.84917 9.66387 9.84917 7.04438 9.84917H4.67503L4.69647 9.73481C4.7072 9.67049 4.88588 8.32321 5.08958 6.74008C5.29685 5.15694 5.47553 3.80967 5.48626 3.74534L5.5077 3.63099H7.89133C10.5358 3.63099 10.4787 3.63456 10.9361 3.39512C11.3649 3.16998 11.7437 2.73757 11.901 2.29086C11.9939 2.02641 12.0296 1.52252 11.9725 1.28666C11.8259 0.704151 11.3721 0.275311 10.7896 0.164527C10.6716 0.143085 9.36726 0.12879 7.25522 0.132364C4.52851 0.132364 3.86738 0.143085 3.67798 0.185969Z"
                      fill="white"
                    />
                    <path
                      d="M7.68072 4.72454C6.99815 4.90323 6.44423 5.43213 6.23338 6.10398C6.16191 6.32555 6.14404 6.46135 6.14404 6.73295C6.14404 7.35476 6.31915 7.78003 6.74799 8.20887C7.19828 8.65915 7.66285 8.83784 8.31326 8.80567C9.02799 8.76994 9.63194 8.39113 9.98931 7.75501C10.6504 6.5757 9.98216 5.02831 8.67777 4.72097C8.39188 4.65664 7.93802 4.65664 7.68072 4.72454Z"
                      fill="white"
                    />
                  </svg>
                )}

                <span className="flex align-center g-6">
                  {svetnimeSpeditorskaFirma}
                </span>
              </div>
            </div>
          </>
        ),
      },
      {
        Header: "Статус",
        accessor: ({ svetnimeOrderStatus, svetnimePriceStatus }) => (
          <>
            <div className="flex g-10">
              <div
                className={`status-cell flex  ${
                  svetnimeOrderStatus === "Завършена"
                    ? "status-completed"
                    : "status-pending"
                }`}
              >
                <span className="flex align-center g-6">
                  {svetnimeOrderStatus}
                </span>
              </div>
              <div
                className={`status-cell flex  ${
                  svetnimePriceStatus === "Платен"
                    ? "status-completed"
                    : "status-error"
                }`}
              >
                <span className="flex align-center g-6">
                  <div
                    className={`dot ${
                      svetnimePriceStatus === "Платен"
                        ? "dot-success"
                        : "dot-error"
                    }`}
                  ></div>
                  {svetnimePriceStatus}
                </span>
              </div>
            </div>
          </>
        ),
        className: "project-status",
      },
      {
        Header: "Цена",
        accessor: ({ svetnimeOrderPrice }) => (
          <span className="table-primary">{svetnimeOrderPrice}лв.</span>
        ),
      },
      {
        Header: "Бележки",
        accessor: ({ svetnimeBelejki }) => (
          <>
            <small className="table-secondary small project-desc">
              {svetnimeBelejki}
            </small>
          </>
        ),
      },

      {
        Header: "Действия",
        accessor: "actions",
        Cell: ({ row }) => (
          <div className="flex" style={{ gap: "8px" }}>
            <button
              className="action-btn"
              onClick={() => handleDelete(row.original._id)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="action-svg"
                  d="M2.5 4.99996H4.16667M4.16667 4.99996H17.5M4.16667 4.99996V16.6666C4.16667 17.1087 4.34226 17.5326 4.65482 17.8451C4.96738 18.1577 5.39131 18.3333 5.83333 18.3333H14.1667C14.6087 18.3333 15.0326 18.1577 15.3452 17.8451C15.6577 17.5326 15.8333 17.1087 15.8333 16.6666V4.99996H4.16667ZM6.66667 4.99996V3.33329C6.66667 2.89127 6.84226 2.46734 7.15482 2.15478C7.46738 1.84222 7.89131 1.66663 8.33333 1.66663H11.6667C12.1087 1.66663 12.5326 1.84222 12.8452 2.15478C13.1577 2.46734 13.3333 2.89127 13.3333 3.33329V4.99996M8.33333 9.16663V14.1666M11.6667 9.16663V14.1666"
                  stroke="#667085"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <Popup
              trigger={
                <button className="action-btn">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.13703 3.71793C2.86827 3.44917 2.42802 3.4569 2.19043 3.75357C0.81976 5.465 0 7.63677 0 10C0 15.5228 4.47717 20 10 20C15.5228 20 20 15.5228 20 10C20 4.47717 15.5228 0 10 0C8.09583 0 6.31597 0.532213 4.80107 1.456C4.44637 1.67228 4.40817 2.16064 4.7019 2.45439C4.93197 2.68443 5.29197 2.71513 5.57147 2.54867C6.8675 1.77674 8.38197 1.33333 10 1.33333C14.7865 1.33333 18.6667 5.21353 18.6667 10C18.6667 14.7865 14.7865 18.6667 10 18.6667C5.21353 18.6667 1.33333 14.7865 1.33333 10C1.33333 7.98383 2.02178 6.1285 3.1764 4.6562C3.39677 4.3752 3.38953 3.97043 3.13703 3.71793Z"
                      fill="black"
                    />
                    <path
                      d="M10.0002 5.33325C10.3684 5.33325 10.6668 5.63172 10.6668 5.99992C10.6668 6.36812 10.3684 6.66659 10.0002 6.66659C9.63196 6.66659 9.3335 6.36812 9.3335 5.99992C9.3335 5.63172 9.63196 5.33325 10.0002 5.33325Z"
                      fill="black"
                    />
                    <path
                      d="M10.0002 7.66675C10.3684 7.66675 10.6668 7.96521 10.6668 8.33341V15.0001C10.6668 15.3683 10.3684 15.6667 10.0002 15.6667C9.63196 15.6667 9.3335 15.3683 9.3335 15.0001V8.33341C9.3335 7.96521 9.63196 7.66675 10.0002 7.66675Z"
                      fill="black"
                    />
                  </svg>
                </button>
              }
              modal
            >
              <h3 className="" style={{marginBottom: "8px"}}>Данни за доставка</h3>
              {/* Content inside the popup */}
              <div className="selected-row-details">
                {/* Display the details using row.original */}
                <div>{row.original.svetnimeClientName}</div>
                <div>{row.original.svetnimeClientNumber}</div>
                <div>{row.original.svetnimeSpeditorskaFirma}</div>
                <div>{row.original.svetnimeOrderShippingType}</div>
                <div>{row.original.svetnimeClientAddress}</div>
                <div style={{marginBottom: "8px"}}>{row.original.svetnimeOrderPrice}лв.</div>

                {/* ... Display other details ... */}
                <FormButton className="w-100" title="Готово" onClick={close}>
                  Готово
                </FormButton>
              </div>
            </Popup>
          </div>
        ),
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: projectsDB });

  const handleViewDetails = (rowData) => {
    setSelectedRow(rowData);
    // Code to show modal or display area for details
  };
  return (
    <>
      <Head>
        <title>Static Dashboard - Проекти</title>
      </Head>

      <div className="page-header flex space-between mb-32">
        <h2>Проекти</h2>
        <AddButton href="/svetnime/create" title="Добави поръчка" />
      </div>
      <div className="flex space-between"></div>

      <div className="table-container">
        <table className="w-100" {...getTableProps()}>
          <thead>
            {
              // Loop over the header rows
              headerGroups.map((headerGroup) => (
                // Apply the header row props
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {
                    // Loop over the headers in each row
                    headerGroup.headers.map((column) => (
                      // Apply the header cell props
                      <th {...column.getHeaderProps()}>
                        {
                          // Render the header
                          column.render("Header")
                        }
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr key={projectsDB._id} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className={cell.column.className}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Svetnime;
