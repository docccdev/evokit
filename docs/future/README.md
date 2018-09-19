[changelog]: changelog/

# Планы

- [0.1.59 beta][changelog] ~~Белый цвет для текста~~
- [0.1.59 beta][changelog] ~~Отражения изображения~~
- [0.1.59 beta][changelog] ~~Придумать решение `display: none` с возможностью `media`~~
- [0.1.59 beta][changelog] ~~Добавить ограничения `max-width` и `max-height` для изображения~~
- [1.0.6][changelog] ~~Модификаторы текста с `media` параметрами~~
- [1.0.9][changelog] ~~Добавить для текста модификаторы `uppercase`, `capitalize`, `lowercase`~~
- [1.0.10][changelog] ~~Добавить темы цветов для блока `line`~~
- [1.1.0][changelog] ~~Сделать дефолтным префикс `ek-` для css класов~~
- [1.1.1][changelog] ~~Сделать модификаторы ширины `expand` с медиа параметрами~~
- Екстра размер для текста (extrabig/extrasmall)
- Добавить ссылкам возможность менять подчеркивание
- Добавить ссылкам вертикальное выравнивание (?)
- Добавить темы для цвета рамки блоку `box`
- Добавить`z-index` для блока `box` (?)
- Написать конфигуратор темы (?)


## Test

```jsx
/*react*/
<script>
const { Link } = EvoKit;

export default class ExampleLink extends React.PureComponent {
    render() {
        return (
            <div>
                <Link href='#' ek-size='h1'>H1</Link>
                <br />
                <Link href='#' ek-size='h2'>H2</Link>
                <br />
                <Link href='#' ek-size='h3'>H3</Link>
                <br />
                <Link href='#' ek-size='h4'>H4</Link>
                <br />
                <Link href='#' ek-size='h5'>H5</Link>
                <br />
                <Link href='#' ek-size='h6'>H6</Link>
            </div>
        )
    }
}
</script>
```
