import { css } from "iares";

export const styles = () => css`
  app-toggle,
  .wrap-ctx {
    width: 100%
  }

  app-toggle,
  .wrap-ctx,
  .wrap-ctx > app-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }

  .wrap-ctx > app-option {
    height:48px;
    padding-left: 1em;
    cursor: pointer;
  }

  .wrap-ctx > app-option > p {
    color: var(--green-moss);
    font-size: 1em;
    font-weight:500;
    text-transform: capitalize;
  }

  .wrap-ctx {
    border-radius:8px;
    border: 2px var( --green-super-light) solid;
    height: 64px;
  }

  .wrap-ctx > button {
    display: flex;
    background: var(--green-bright);
    border-radius: 4px;
    margin-right:6px;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
  }
`;
