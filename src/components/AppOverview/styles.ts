import { css } from "iares";

export const styles = () => css`
  app-overview,
  .wrap-ctx,
  .wrap-image-ctx {
    display: flex;
    flex-wrap: wrap;
    width:100%;
  }

  .wrap-ctx {
    padding:2em 0
  }

  .wrap-image-ctx {
    justify-content: center;
    align-items:center;
    height:500px
  }

  .wrap-image-ctx > img {
    width:100%;
    max-width:350px;
  }

  .wrap-tag-ctx {
    display:grid;
    grid-gap: 1em;
    grid-template-columns: repeat(4, 1fr);
    max-width: 120px
  }

  .wrap-title-ctx {
    display: flex;
    width:100%;
    margin-bottom: 2em;
    border-bottom: 1px var(--green-moss) solid
  }
`;
