import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Label from "../../components/Forms/Label";
import FormButton from "../../components/Buttons/FormButton";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function CreateProject() {
  const [spinner, setSpinner] = useState("Създай проект");
  const [clients, setClients] = useState([]);
  const [projects, setProjects] = useState([]);
  const router = useRouter();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });

  const handleCreate = async (data) => {
    const selectedClient = clients.find(
      (client) => client._id === data.firstName
    );
    if (selectedClient) {
      const {
        clientFirstname,
        clientLastname,
        clientPhoneNumber,
        clientEmail,
      } = selectedClient;

      try {
        const response = await fetch("/api/project/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            projectTitle: data.projectTitle,
            projectLink: data.projectLink,
            projectStatus: data.projectStatus,
            projectStatusPrice: data.projectStatusPrice,
            projectType: data.projectType,
            projectDesc: data.projectDesc,
            firstName: data.firstName,
            clientFirstname,
            clientLastname,
            clientPhoneNumber,
            clientEmail,
            projectPrice: data.projectPrice,
          }),
        });

        if (response.ok) {
          toast.success("Проектът е създаден успешно!");
          router.push("/projects");
        } else {
          toast.error("Възникна грешка при създаването на проекта.");
        }
      } catch (error) {
        console.error("Error creating project:", error);
        toast.error("Възникна грешка при създаването на проекта.");
      }
    }
  };

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await fetch("/api/clients/read");
        const data = await res.json();
        setClients(data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };

    fetchClients();
  }, []);

  return (
    <>
      <div className="flex justify-center align-center vh-100">
        <Form
          className="flex column g-20"
          onSubmit={handleSubmit(handleCreate)}
        >
          <div className="flex column g-12 mb-20">
            <h1>Добавяне на проект</h1>
            <p>Въведете нужните данни, за да добавите проект в таблицата.</p>
          </div>
          <div>
            <Label name="Име на проекта" />
            <input
              className={errors.projectTitle ? "input-error" : ""}
              type="text"
              placeholder="Въведи име на проекта"
              id="projectTitle"
              {...register("projectTitle", {
                required: {
                  value: true,
                  message: "Името на проекта е задължително!",
                },
              })}
            />
            {errors.projectTitle && (
              <Error>{errors.projectTitle.message}</Error>
            )}
          </div>
          <div>
            <Label name="Линк към проекта" />
            <input
              type="text"
              placeholder="Пример: domain.com (без https://)"
              id="projectLink"
              className={errors.projectLink ? "input-error" : ""}
              {...register("projectLink", {
                required: {
                  value: true,
                  message: "Линк към проекта е задължителен!",
                },
              })}
            />
            {errors.projectLink && <Error>{errors.projectLink.message}</Error>}
          </div>
          <div className="flex space-between">
            <div style={{ width: "48%" }}>
              <Label name="Статус на прокета" />
              <select
                type="text"
                className="option-select"
                placeholder=""
                id="projectStatus"
                {...register("projectStatus")}
              >
                <option value="Незавършен">Незавършен</option>
                <option value="Завършен">Завършен</option>
              </select>
            </div>
            <div style={{ width: "48%" }}>
              <Label name="Платежен статус" />
              <select
                type="text"
                className="option-select"
                placeholder=""
                id="projectStatusPrice"
                {...register("projectStatusPrice")}
              >
                <option value="Неплатен">Неплатен</option>
                <option value="Платен">Платен</option>
              </select>
            </div>
          </div>
          <div>
            <Label name="Вид на проекта" />
            <select
              type="text"
              className="option-select"
              placeholder="Вид на проекта"
              id="projectType"
              {...register("projectType")}
            >
              <option value="Персонален уебсайт">Персонален уебсайт</option>
              <option value="E-commerce платфлорма">
                E-commerce платформа
              </option>
              <option value="Фирмен софтуер">Фирмен софтуер</option>
            </select>
          </div>
          <div>
            <Label name="Описание на прокета" />
            <input
              className={errors.projectDesc ? "input-error" : ""}
              type="text"
              name="projectDesc"
              placeholder="Кратко описание на прокета"
              id="projectDesc"
              {...register("projectDesc", {
                required: {
                  value: true,
                  message: "Описанието на проекта е задължително!",
                },
              })}
            />
            {errors.projectDesc && <Error>{errors.projectDesc.message}</Error>}
          </div>
          <div className="flex space-between">
            <div style={{ width: "48%" }}>
              <Label name="Избери клиент" />
              <select
                type="text"
                className="option-select"
                placeholder="Име на клиента"
                id="projectClientFirst"
                {...register("firstName", {
                  required: {
                    value: true,
                    message: "Първото име на клиента е задължително!",
                  },
                })}
                aria-invalid={errors.firstName ? "true" : "false"}
              >
                <option value="">Избери клиент</option>
                {clients.map((client) => (
                  <option key={client._id} value={client._id}>
                    {client.clientFirstname} {client.clientLastname}
                  </option>
                ))}
              </select>
              {errors.password && <Error>{errors.password.message}</Error>}
              <Link className="lost" href="/clients/">
                Създай клиент
              </Link>
            </div>
            <div style={{ width: "48%" }}>
              <Label name="Цена" />
              <input
                className={errors.projectDesc ? "input-error" : ""}
                type="number"
                name="projectPrice"
                placeholder="Цена в лева"
                id="projectPrice"
                {...register("projectPrice", {
                  required: {
                    value: true,
                    message: "Цената на проекта е задължителна!",
                  },
                })}
              />
              {errors.repeatPassword && (
                <Error>{errors.repeatPassword.message}</Error>
              )}
            </div>
          </div>
          <FormButton type="submit" title={spinner} />
        </Form>
      </div>
    </>
  );
}

const Form = styled.form`
  padding: 24px;
  width: 500px;
  max-width: 500px;

  h1 {
    text-align: center;
    color: var(--gray-900);
    font-weight: var(--font-weight-semibold);
    font-color: var(--font-size-display-sm);
  }

  p {
    text-align: center;
    color: var(--gray-500);
    font-size: var(--font-size-text-md);
    font-weight: var(--font-weight-regular);
  }

  span {
    text-align: center;
    font-size: var(--font-size-text-sm);
    font-weight: var(--font-weight-regular);

    a {
      color: var(--primary-700);
      font-weight: var(--font-weight-semibold);

      &:hover {
        color: var(--primary-800);
      }
    }
  }

  @media only screen and (max-width: 768px) {
    div {
      flex-direction: column;
      width: 100% !important;
      gap: 20px;
    }
  }
`;

const Error = styled.h6`
  color: #f04438;
  font-size: 14px;
  margin-top: 6px;
  font-weight: 400;
`;
