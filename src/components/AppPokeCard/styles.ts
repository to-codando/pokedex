import { css } from "iares";

export const styles = () => css`
  app-poke-card,
  .wrap-ctx,
  .content-ctx,
  .image-ctx {
    display: flex;
    flex-wrap: wrap;
    width:100%;
  }

  .content-ctx {
    justify-content: space-between;
  }

  .code-ctx {
    color: var(--green-moss);
    font-weight:600;
  }

  .icon-ctx {
    position:relative;
    top: -7px
  }

  .image-ctx {
    justify-content: center;
    margin-top: 1em;
  }

  .tags-ctx {
    display: grid;
    grid-gap: 1em;
    grid-template-columns: repeat(3, 1fr);
    width:100%;
  }

  @media all and (max-width: 640px) {

    .image-ctx > img {
      width:100%;
    }
  }
`;
