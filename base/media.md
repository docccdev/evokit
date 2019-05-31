[variables]: /base/variables.md

# Media

Определяются в [css variables][variables]: `@custom-media`.

---

## Values

|    Key     |  Value                 |
|------------|------------------------|
| `small`    | var(--ek-media-small)  |
| `medium`   | var(--ek-media-medium) |
| `large`    | var(--ek-media-large)  |
| `wide`     | var(--ek-media-wide)   |
| `huge`     | var(--ek-media-huge)   |

---

## Example

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Grid grid-column={[3, '4@wide', '5@huge']}>
                {[1, 2, 3, 4, 5].map((key) => (
                    <Grid.Item>
                        <Example.Box>
                            item {key}
                        </Example.Box>
                    </Grid.Item>
                ))}
            </Grid>
        )
    }
}
</script>
```

