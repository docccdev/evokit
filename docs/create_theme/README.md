# CREATE THEME

!> Tool for creating custom themes

<style>
    .demo-box-react .meta,
    .demo-box-react .demo-block-control {
        display: none !important;
    }
</style>

<script type="text/template" id="theme-template">
:root {
    --ek-danger-border-color: #e6b9b3;
    --ek-danger-divider-color: #e6b9b3;
    --ek-danger-background-color: #efd2ce;
    --ek-danger-text-color: #bb2914;
    --ek-danger-link-color: #bb2914;
}

.ek-body_background_danger {
    background-color: var(--ek-danger-background-color);
}
.ek-box_background_danger {
    background-color: var(--ek-danger-background-color);
}
.ek-box_border_danger {
    border: 1px solid var(--ek-danger-border-color);
}
.ek-grid_divider_danger > .ek-grid__item {
        border: 0 solid var(--ek-danger-divider-color);
}
.ek-grid_divider_danger > .ek-grid__item + .ek-grid__item {
            border-left-width: 1px;
}
.ek-list_color_danger > .ek-list__item:before {
            color: var(--ek-danger-text-color);
}
.ek-list_divider_danger > .ek-list__item + .ek-list__item {
            border-top: 1px solid var(--ek-danger-divider-color);
}
.ek-link_color_danger {
    color: var(--ek-danger-link-color);
}
.ek-text_color_danger {
    color: var(--ek-danger-text-color);
}
.ek-line_color_danger {
    border-color: var(--ek-danger-divider-color);
}
@media (--ek-media-small) {
        .ek-body_background_danger\@small {
    background-color: var(--ek-danger-background-color);
    }
        .ek-box_background_danger\@small {
    background-color: var(--ek-danger-background-color);
    }
        .ek-box_border_danger\@small {
    border: 1px solid var(--ek-danger-border-color);
    }

    .ek-grid_divider_danger\@small > .ek-grid__item {
        border: 0 solid var(--ek-danger-divider-color);
    }

        .ek-grid_divider_danger\@small > .ek-grid__item + .ek-grid__item {
            border-left-width: 1px;
    }
        .ek-list_color_danger\@small > .ek-list__item:before {
            color: var(--ek-danger-text-color);
    }
        .ek-list_divider_danger\@small > .ek-list__item + .ek-list__item {
            border-top: 1px solid var(--ek-danger-divider-color);
    }
        .ek-link_color_danger\@small {
    color: var(--ek-danger-link-color);
    }
        .ek-text_color_danger\@small {
    color: var(--ek-danger-text-color);
    }
        .ek-line_color_danger\@small {
    border-color: var(--ek-danger-divider-color);
    }
}
@media (--ek-media-medium) {
        .ek-body_background_danger\@medium {
    background-color: var(--ek-danger-background-color);
    }
        .ek-box_background_danger\@medium {
    background-color: var(--ek-danger-background-color);
    }
        .ek-box_border_danger\@medium {
    border: 1px solid var(--ek-danger-border-color);
    }

    .ek-grid_divider_danger\@medium > .ek-grid__item {
        border: 0 solid var(--ek-danger-divider-color);
    }

        .ek-grid_divider_danger\@medium > .ek-grid__item + .ek-grid__item {
            border-left-width: 1px;
    }
        .ek-list_color_danger\@medium > .ek-list__item:before {
            color: var(--ek-danger-text-color);
    }
        .ek-list_divider_danger\@medium > .ek-list__item + .ek-list__item {
            border-top: 1px solid var(--ek-danger-divider-color);
    }
        .ek-link_color_danger\@medium {
    color: var(--ek-danger-link-color);
    }
        .ek-text_color_danger\@medium {
    color: var(--ek-danger-text-color);
    }
        .ek-line_color_danger\@medium {
    border-color: var(--ek-danger-divider-color);
    }
}
@media (--ek-media-large) {
        .ek-body_background_danger\@large {
    background-color: var(--ek-danger-background-color);
    }
        .ek-box_background_danger\@large {
    background-color: var(--ek-danger-background-color);
    }
        .ek-box_border_danger\@large {
    border: 1px solid var(--ek-danger-border-color);
    }

    .ek-grid_divider_danger\@large > .ek-grid__item {
        border: 0 solid var(--ek-danger-divider-color);
    }

        .ek-grid_divider_danger\@large > .ek-grid__item + .ek-grid__item {
            border-left-width: 1px;
    }
        .ek-list_color_danger\@large > .ek-list__item:before {
            color: var(--ek-danger-text-color);
    }
        .ek-list_divider_danger\@large > .ek-list__item + .ek-list__item {
            border-top: 1px solid var(--ek-danger-divider-color);
    }
        .ek-link_color_danger\@large {
    color: var(--ek-danger-link-color);
    }
        .ek-text_color_danger\@large {
    color: var(--ek-danger-text-color);
    }
        .ek-line_color_danger\@large {
    border-color: var(--ek-danger-divider-color);
    }
}
@media (--ek-media-wide) {
        .ek-body_background_danger\@wide {
    background-color: var(--ek-danger-background-color);
    }
        .ek-box_background_danger\@wide {
    background-color: var(--ek-danger-background-color);
    }
        .ek-box_border_danger\@wide {
    border: 1px solid var(--ek-danger-border-color);
    }

    .ek-grid_divider_danger\@wide > .ek-grid__item {
        border: 0 solid var(--ek-danger-divider-color);
    }

        .ek-grid_divider_danger\@wide > .ek-grid__item + .ek-grid__item {
            border-left-width: 1px;
    }
        .ek-list_color_danger\@wide > .ek-list__item:before {
            color: var(--ek-danger-text-color);
    }
        .ek-list_divider_danger\@wide > .ek-list__item + .ek-list__item {
            border-top: 1px solid var(--ek-danger-divider-color);
    }
        .ek-link_color_danger\@wide {
    color: var(--ek-danger-link-color);
    }
        .ek-text_color_danger\@wide {
    color: var(--ek-danger-text-color);
    }
        .ek-line_color_danger\@wide {
    border-color: var(--ek-danger-divider-color);
    }
}
@media (--ek-media-huge) {
        .ek-body_background_danger\@huge {
    background-color: var(--ek-danger-background-color);
    }
        .ek-box_background_danger\@huge {
    background-color: var(--ek-danger-background-color);
    }
        .ek-box_border_danger\@huge {
    border: 1px solid var(--ek-danger-border-color);
    }

    .ek-grid_divider_danger\@huge > .ek-grid__item {
        border: 0 solid var(--ek-danger-divider-color);
    }

        .ek-grid_divider_danger\@huge > .ek-grid__item + .ek-grid__item {
            border-left-width: 1px;
    }
        .ek-list_color_danger\@huge > .ek-list__item:before {
            color: var(--ek-danger-text-color);
    }
        .ek-list_divider_danger\@huge > .ek-list__item + .ek-list__item {
            border-top: 1px solid var(--ek-danger-divider-color);
    }
        .ek-link_color_danger\@huge {
    color: var(--ek-danger-link-color);
    }
        .ek-text_color_danger\@huge {
    color: var(--ek-danger-text-color);
    }
        .ek-line_color_danger\@huge {
    border-color: var(--ek-danger-divider-color);
    }
}
</script>

```jsx
/*react*/
<script>
const { Box, Grid } = EvoKit;

export default class ExampleBox extends React.Component {
    constructor(props) {
        super(props);
        this.template = document.getElementById('theme-template').innerText.trim();



        this.state = {
            themeName: 'default',
        };
    }

    render() {
        const { themeName } = this.state;
        const newTemplate = this.template.replace(/danger/g, themeName);

        return (
            <div>
                themeName:
                <input
                    type='text'
                    value={themeName}
                    onChange={({ target }) => this.setState({ themeName: target.value })}
                />
                <pre>
                    <code
                        className='language-css'
                        dangerouslySetInnerHTML={{__html: newTemplate}}
                    />
                </pre>
            </div>
        )
    }
}
</script>
```


