import { css } from "iares";

export const styles = () => css`
  app-tag,
  .wrap-ctx {
    display:flex
  }

  app-tag + app-tag {
    margin-left: 1em
  }

  .wrap-ctx {
    padding:1em;
    color: var(--green-smooth);
    background: var(--green-soft-light);
    border-radius: 8px;
  }

`;
