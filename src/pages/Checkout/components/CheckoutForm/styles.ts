import styled, { css } from "styled-components";

import { SectionBaseStyle } from "../../styles";

export const CompleteOrderFormContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
  width: 40rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const FormSectionContainer = styled(SectionBaseStyle)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;