# Модификаторы размеров

Для формирования модификаторов отступов, взята буквенная сетка размеров одежды.
Определяется в css переменной `--ek-step-indent`.

---

## Values

|  Key   | Value (from css variable)   |
|--------|-----------------------------|
| `none` |   var(--ek-step-indent) * 0 |
| `xxs`  |   var(--ek-step-indent) * 1 |
| `xs`   |   var(--ek-step-indent) * 2 |
| `s`    |   var(--ek-step-indent) * 3 |
| `m`    |   var(--ek-step-indent) * 4 |
| `l`    |   var(--ek-step-indent) * 5 |
| `xl`   |   var(--ek-step-indent) * 6 |
| `xxl`  |   var(--ek-step-indent) * 7 |

---

## Example

```jsx
/*react*/
<script>
const { Grid, Example } = EvoKit;

export default class ExampleGrid extends React.Component {
    render() {
        return (
            <Example values={['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl']}>
                {(value) => (
                    <Grid grid-indent={value}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((key) => (
                            <Grid.Item>
                                <Example.Box>
                                    item {key}
                                </Example.Box>
                            </Grid.Item>
                        ))}
                    </Grid>
                )}
            </Example>
        )
    }
}
</script>
```
