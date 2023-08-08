import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Label from "../../components/Forms/Label";
import FormButton from "../../components/Buttons/FormButton";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

export default function CreateSvetnime() {
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
      try {
        const response = await fetch("/api/svetnime/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            svetnimeProduct: data.svetnimeProduct,
            svetnimeLink: data.svetnimeLink,
            svetnimeClientName: data.svetnimeClientName,
            svetnimeClientNumber: data.svetnimeClientNumber,
            svetnimeOrderShippingType: data.svetnimeOrderShippingType,
            svetnimeSpeditorskaFirma: data.svetnimeSpeditorskaFirma,
            svetnimeClientAddress: data.svetnimeClientAddress,
            svetnimeOrderStatus: data.svetnimeOrderStatus,
            svetnimeOrderPrice: data.svetnimeOrderPrice,
            svetnimePriceStatus: data.svetnimePriceStatus,
            svetnimeBelejki: data.svetnimeBelejki,
          }),
        });

        if (response.ok) {
          toast.success("Поръчката е създаден успешно!");
          router.push("/svetnime");
        } else {
          toast.error("Възникна грешка при създаването на поръчка.");
        }
      } catch (error) {
        console.error("Error creating project:", error);
        toast.error("Възникна грешка при създаването на поръчка.");
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
            <h1>Добавяне на поръчка</h1>
            <p>Въведете нужните данни, за да добавите поръчка в таблицата.</p>
          </div>
          <div>
            <Label name="Продукт" />
            <input
              className={errors.svetnimeProduct ? "input-error" : ""}
              type="text"
              placeholder="Въведи име на продукт"
              id="svetnimeProduct"
              {...register("svetnimeProduct", {
                required: {
                  value: true,
                  message: "Името на продукта е задължително!",
                },
              })}
            />
            {errors.svetnimeProduct && (
              <Error>{errors.svetnimeProduct.message}</Error>
            )}
          </div>
          <div>
            <Label name="Линк към продукта" />
            <input
              type="text"
              placeholder="Пример: domain.com (без https://)"
              id="svetnimeLink"
              className={errors.svetnimeLink ? "input-error" : ""}
              {...register("svetnimeLink", {
                required: {
                  value: true,
                  message: "Линк към продукта е задължителен!",
                },
              })}
            />
            {errors.svetnimeLink && <Error>{errors.svetnimeLink.message}</Error>}
          </div>
          
          <div className="flex space-between">
            <div style={{ width: "48%" }}>
              <Label name="Име на клиент" />
              <input
                type="text"
                className="option-select"
                placeholder="Калоян Ангелов"
                id="svetnimeClientName"
                {...register("svetnimeClientName")}
              />
            </div>
            <div style={{ width: "48%" }}>
              <Label name="Номер на клиент" />
              <input
                type="number"
                className="option-select"
                placeholder="08/09XXXXXXXX"
                id="svetnimeClientNumber"
                {...register("svetnimeClientNumber")}
              />
            </div>
          </div>
          <div className="flex space-between">
          <div style={{ width: "48%" }}>
              <Label name="ЛА/Офис" />
              <select
                type="text"
                className="option-select"
                placeholder=""
                id="svetnimeOrderShippingType"
                {...register("svetnimeOrderShippingType")}
              >
                <option value="Личен Адрес">Личен адрес</option>
                <option value="Офис">Офис</option>
              </select>
          </div>
          <div style={{ width: "48%" }}>
              <Label name="Спедиторска фирма" />
              <select
                type="text"
                className="option-select"
                placeholder=""
                id="svetnimeSpeditorskaFirma"
                {...register("svetnimeSpeditorskaFirma")}
              >
                <option value="Спиди">Спиди</option>
                <option value="Еконт">Еконт</option>
              </select>
          </div>
          </div>
          <div>
            <Label name="Адрес на клиент" />
            <input
              className={errors.svetnimeClientAddress ? "input-error" : ""}
              type="text"
              placeholder="Въведи адрес на клиент"
              id="svetnimeClientAddress"
              {...register("svetnimeClientAddress", {
                required: {
                  value: true,
                  message: "Името на продукта е задължително!",
                },
              })}
            />
            {errors.svetnimeClientAddress && (
              <Error>{errors.svetnimeClientAddress.message}</Error>
            )}
          </div>
          <div className="flex space-between">
            <div style={{ width: "48%" }}>
              <Label name="Статус на прокета" />
              <select
                type="text"
                className="option-select"
                placeholder=""
                id="svetnimeOrderStatus"
                {...register("svetnimeOrderStatus")}
              >
                <option value="Обработва се">Oбработва се</option>
                <option value="Обработена">Обработена</option>
              </select>
            </div>
            <div style={{ width: "48%" }}>
              <Label name="Платежен статус" />
              <select
                type="text"
                className="option-select"
                placeholder=""
                id="svetnimePriceStatus"
                {...register("svetnimePriceStatus")}
              >
                <option value="Неплатен">Неплатен</option>
                <option value="Платен">Платен</option>
              </select>
            </div>
          </div>
          <div>
            <Label name="Цена (без доставката)" />
            <input
              className={errors.svetnimeOrderPrice ? "input-error" : ""}
              type="double"
              placeholder="Въведи цена на продукт"
              id="svetnimeOrderPrice"
              {...register("svetnimeOrderPrice", {
                required: {
                  value: true,
                  message: "Цената на продукта е задължително!",
                },
              })}
            />
            {errors.svetnimeOrderPrice && (
              <Error>{errors.svetnimeOrderPrice.message}</Error>
            )}
          </div>
          <div className="flex column">
            <Label name="Бележки" />
            <textarea
              className={errors.svetnimeBelejki ? "input-error" : ""}
              type="text"
              placeholder="Място за бележки"
              id="svetnimeBelejki"
              {...register("svetnimeBelejki", {
                required: {
                  value: false,
                  message: "Името на продукта е задължително!",
                },
              })}
            />
            {errors.svetnimeBelejki && (
              <Error>{errors.svetnimeBelejki.message}</Error>
            )}
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
