import { css } from "iares";

export const styles = () => css`
  app-title,
  app-title-size,
  .wrap-ctx {
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    width:100%;
  }

  .wrap-ctx {
    min-height: 2em;
    align-items:center;
  }

  .wrap-ctx > app-title-size > h1,
  .wrap-ctx > app-title-size > h2,
  .wrap-ctx > app-title-size > h3  {
    color: var(--green-moss);
    font-weight: 500;
    padding-left: 8px
  }

  .wrap-ctx > app-title-size > h1 {
    font-size: 2em
  }
  .wrap-ctx > app-title-size > h2 {
    font-size: 1.5em
  }
  .wrap-ctx > app-title-size > h3 {
    font-size: 1em
  }
`;
