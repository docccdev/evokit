# Theming

Coming soon...

---

> Tool for creating custom block theme

<style>
    .demo-box-react .meta,
    .demo-box-react .demo-block-control {
        display: none !important;
    }
</style>

```jsx
/*react*/
<script>
const { ThemeGenerator } = EvoKit;

export default class EvoKitThemeGenerator extends React.Component {
    render() {
        return <ThemeGenerator templateUrl='//unpkg.com/evokit@latest/dist/theme-template.css' />;
    }
}
</script>
```

