# Css variables

```html
<style>
    @custom-media --ek-media-small only screen and (min-width: 480px);
    @custom-media --ek-media-medium only screen and (min-width: 768px);
    @custom-media --ek-media-large only screen and (min-width: 960px);
    @custom-media --ek-media-wide only screen and (min-width: 1200px);
    @custom-media --ek-media-huge only screen and (min-width: 1400px);

    :root {
        --ek-step-indent: 4px;
        --ek-step-round: 2px;
        --ek-step-font-size: 2px;
        --ek-step-line-height: 0.25em;

        --ek-body-min-width: 1000px;
        --ek-body-max-width: 1240px;
        --ek-body-font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif;

        --ek-font-size-h1: 24px;
        --ek-font-size-h2: 22px;
        --ek-font-size-h3: 20px;
        --ek-font-size-h4: 18px;
        --ek-font-size-h5: 16px;
        --ek-font-size-h6: 14px;

        --ek-default-font-size: 13px;
        --ek-default-font-weight: 400;
        --ek-default-line-height: 1em;
    }
</style>

```
