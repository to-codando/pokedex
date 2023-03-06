import { css } from "iares";

export const styles = () => css`
  app-power-bar,
  .wrap-ctx  {
    display: flex;
    width: 100%;
  }

  .wrap-ctx {
    flex-wrap: wrap;
    padding: 2em 0 0 0;
  }

  .content-ctx {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width:100%;
    margin-bottom: 8px;
  }

  .title-ctx,
  .amount-ctx {
    display: flex;
    color: var(--black-light);
  }

  .title-ctx {
    justify-self: flex-start;
  }

  .amount-ctx {
    justify-self: flex-end
  }

  .bar-ctx {
    background: var(--black-power);
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
  }

  .bar-ctx,
  .bar-ctx > span {
    display: flex;
  }

  .bar-ctx > span {
    padding: 3px;
    background: var(--green-bright)
  }
`;
