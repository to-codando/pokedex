import { css } from "iares";

export const styles = () => css`
  app-show-room,
  .filter-wrap-ctx,
  .cards-wrap-ctx,
  .wrap-ctx {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width:100%;
  }

  .wrap-ctx {
    flex-wrap: wrap;
  }

  .filter-wrap-ctx {
    padding:2em 0;
    background: var(--white);
    box-shadow: 3px 3px 15px rgba(155, 155, 155, .1)
  }

  .cards-wrap-ctx {
    padding: 2em 0 0 0;
  }
`;
