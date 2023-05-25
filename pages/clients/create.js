import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Label from "../../components/Forms/Label";
import FormButton from "../../components/Buttons/FormButton";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function CreateClient() {
  const [spinner, setSpinner] = useState("Създай клиент");
  const [clients, setClients] = useState([]);
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
      try {
        const response = await fetch("/api/clients/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            clientFirstname: data.clientFirstname,
            clientLastname: data.clientLastname,
            clientEmail: data.clientEmail,
            clientPhoneNumber: data.clientPhoneNumber,
          }),
        });

        if (response.ok) {
          toast.success("Клиентът е създаден успешно!");
          router.push("/clients");
        } else {
          toast.error("Възникна грешка при създаването на клиента.");
        }
      } catch (error) {
        console.error("Error creating project:", error);
        toast.error("Възникна грешка при създаването на клиента.");
      }
  };

  return (
    <>
      <div className="flex justify-center align-center vh-100">
        <Form
          className="flex column g-20"
          onSubmit={handleSubmit(handleCreate)}
        >
          <div className="flex column g-12 mb-20">
            <h1>Добавяне на клиент</h1>
            <p>Въведете нужните данни, за да добавите клиент в таблицата.</p>
          </div>
          <div className="flex space-between">
            <div style={{ width: "48%" }}>
            <Label name="Първо име на клиента" />
            <input
              className={errors.clientFirstname ? "input-error" : ""}
              type="text"
              placeholder="Димчо"
              id="clientFirstname"
              {...register("clientFirstname", {
                required: {
                  value: true,
                  message: "Първото име на клиента е задължително!",
                },
              })}
            />
            {errors.clientFirstname && (
              <Error>{errors.clientFirstname.message}</Error>
            )}
            </div>
            <div style={{ width: "48%" }}>
            <Label name="Фамилия на клиента" />
            <input
              className={errors.clientLastname ? "input-error" : ""}
              type="text"
              placeholder="Дебелянов"
              id="clientLastname"
              {...register("clientLastname", {
                required: {
                  value: true,
                  message: "Фамилията на клиента е задължително!",
                },
              })}
            />
            {errors.clientLastname && (
              <Error>{errors.clientLastname.message}</Error>
            )}
            </div>
          </div>
          <div>
            <Label name="Имейл на клиента" />
            <input
              type="text"
              placeholder="client@email.com"
              id="clientEmail"
              className={errors.clientEmail ? "input-error" : ""}
              {...register("clientEmail", {
                required: {
                  value: true,
                  message: "Имейла на клиента е задължителен!",
                },
              })}
            />
            {errors.clientEmail && <Error>{errors.clientEmail.message}</Error>}
          </div>
          <div>
            <Label name="Телефонен номер на клиента" />
            <input
              type="text"
              placeholder="088 майката на Росен"
              id="clientPhoneNumber"
              className={errors.clientPhoneNumber ? "input-error" : ""}
              {...register("clientPhoneNumber", {
                required: {
                  value: true,
                  message: "Телефонният номер на клиента е задължителен!",
                },
              })}
            />
            {errors.clientPhoneNumber && <Error>{errors.clientPhoneNumber.message}</Error>}
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
