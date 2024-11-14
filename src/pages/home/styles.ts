import { DesignSystem } from "@styles/design-system";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;

  flex-direction: column;
  justify-content: center;

  align-items: center;
`;

export const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 10px;
`;

export const CardWapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  grid-gap: 30px;
`;

export const TitleButton = styled.p`
  font-size: ${DesignSystem.typography.size.small};
  font-weight: ${DesignSystem.typography.weight.bold};
  line-height: ${DesignSystem.typography.lineHeigth.medium};

  @media (${DesignSystem.media.mobile}) {
    font-size: ${DesignSystem.typography.size.medium};
  }
`;

export const BoxLenghtAndFilter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
`;

export const Lenght = styled.p`
  font-size: ${DesignSystem.typography.size.medium};
  font-weight: ${DesignSystem.typography.weight.regular};
  line-height: ${DesignSystem.typography.lineHeigth.large};
  color: ${DesignSystem.color.black};
`;

export const Filter = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
`;

export const FilterIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${DesignSystem.color.black};
`;

export const FilterText = styled.p`
  font-size: ${DesignSystem.typography.size.small};
  font-weight: ${DesignSystem.typography.weight.bold};
  line-height: ${DesignSystem.typography.lineHeigth.medium};
  color: ${DesignSystem.color.black};
`;