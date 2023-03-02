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

  .header-grid-ctx {
    display: grid;
    grid-template-columns: 154px 1fr 64px;
    grid-gap: 0 2em;
    width:100%;
  }

  .search-wrap-ctx {
    display: flex;
    width:100%;
    height:48px;
  }

  .logo-image-ctx {
    position: relative;
    top: 5px;
  }


`;
