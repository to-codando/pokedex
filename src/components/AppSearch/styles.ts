import { css } from "iares";

export const styles = () => css`

  app-search {
    align-items: center;
    justify-content: center;
  }

  app-search,
  .wrap-ctx {
    display: flex;
    width: 100%;
  }

  .wrap-ctx {
    max-width: 680px;
    position: relative;
    border: 2px var(--green-soft-light) solid;
    padding:4px;
    border-radius:8px;
  }

  .wrap-ctx  > input {
    width: 100%;
    height:44px;
    padding:0 56px 0 15px;
    background:var(--green-soft-light);
    border:0;
    outline:0;
    border-radius:4px;
    color:var(--green-moss);
    font-size: 1em;
    transition: ease-in 0.2s;
  }

  .wrap-ctx  > input:focus {
    background: var(--white)
  }

  .wrap-ctx  > input::placeholder {
    color: var(--green-moss);
  }

  .wrap-ctx > i {
    position: absolute;
    right:16px;
    top:10px;
  }
`;
