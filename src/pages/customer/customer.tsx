import { Card } from "@components/card/card";
import * as S from "./styles";
import { CustomButton } from "@components/customButton/button";
import { useState } from "react";
import { TextStrong } from "@styles/utils";
import { useCustomer } from "@hooks/useCustomer/useCustomer";
import { useFilter } from "@hooks/useFilter/useFilter";
import { CustomerDto } from "@dtos/customer/CustomerDto";
import { useParams } from "react-router-dom";

export const Customer = () => {
  const { selectedCustomers, setSelectedCustomers } = useCustomer();
  const { value } = useFilter();
  const { userName } = useParams();

  return (
    <>
      <S.Container>
        {selectedCustomers.length >= 1 && (
          <>
            <S.Wapper>
              <S.BoxLenghtAndFilter>
                <S.Lenght>
                  <TextStrong>clientes Selecionados:</TextStrong>
                </S.Lenght>
              </S.BoxLenghtAndFilter>
              <S.CardWapper>
                {selectedCustomers?.map((item: CustomerDto) => (
                  <Card isClientSelect item={item} />
                ))}
              </S.CardWapper>
              <div
                onClick={() => {
                  setSelectedCustomers([]);
                }}
              >
                <CustomButton
                  height="base"
                  variant="outlined"
                  borderRadius="small"
                >
                  <S.TitleButton> Limpar clientes selecionados</S.TitleButton>
                </CustomButton>
              </div>
            </S.Wapper>
          </>
        )}

        {!selectedCustomers.length && (
          <S.NotSelected>
            <S.TextNotSelect>Nenhum cliente selecionado</S.TextNotSelect>

            <S.WapperButtonNotSelected
              onClick={() =>
                (window.location.href = `/home/${userName}/clientes`)
              }
            >
              <CustomButton variant="filled" borderRadius="small" height="base">
                <S.TitleButton>Selecione um cliente para editar</S.TitleButton>
              </CustomButton>
            </S.WapperButtonNotSelected>
          </S.NotSelected>
        )}
      </S.Container>
    </>
  );
};
