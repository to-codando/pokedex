import { css } from "iares";

export const styles = () => css`
  app-logo,
  .wrap-ctx {
    display: flex;
    justify-content: center;
    align-items: center;
    width:154px;
  }

  .wrap-ctx > * {
    display: flex;
    width:100%;
  }
`;
