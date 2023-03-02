import { css } from "iares";

export const styles = () => css`
  app-header,
  .wrap-ctx {
    display:flex;
    flex-wrap: wrap;
    width:100%;
    height:104px;
    background: var(--green-bright);
  }

  .wrap-ctx {
    align-items: center
  }

  .logo-image-ctx {
    position: relative;
    top: -5px;
  }


`;
