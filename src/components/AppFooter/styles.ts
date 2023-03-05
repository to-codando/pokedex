import { css } from "iares";

export const styles = () => css`
  app-footer {
    margin-top: 2em
  }

  app-footer,
  app-copy,
  .wrap-ctx,
  .copyright-ctx {
    display:flex;
    flex-wrap: wrap;
    width:100%;
  }

  .wrap-ctx {
    padding: 2em 0 0 0;
    background: var(--black-soft);
  }

  .menu-ctx {
    display: flex;
    width: 100%;
  }

  .menu-ctx > li {
    padding-left: 1em;
    color: var(--green-super-light);
  }

  .menu-ctx > li::after {
    content:"/";
    padding-left:1em
  }

  .menu-ctx > li:last-of-type::after {
    display: none;
  }

  .copyright-ctx {
    justify-content: center;
    align-items: center;
    padding: 1em 0 .5em 0;
    margin-top: 5em;
    color: var(--green-super-light);
    background: var(--black-power)
  }

  .copyright-ctx > span {
    padding-left: 0.5em;
  }


  @media all and (min-width: 641px) {
     .align-brand-ctx {
      justify-self: flex-end
    }
  }

  @media all and (max-width: 640px) {
    .menu-ctx{
      justify-content: center;
    }
    .align-brand-ctx {
      justify-self: center
    }
  }
`;
