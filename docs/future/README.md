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
- [2.0.0][changelog] ~~Добавить темы для цвета рамки блоку `box`~~
- [2.0.0][changelog] ~~Екстра размер для текста (extrabig/extrasmall)~~
- [2.0.0][changelog] ~~Добавить ссылкам вертикальное выравнивание~~
- Добавить ссылкам возможность менять подчеркивание
- Добавить`z-index` для блока `box` (?)
- Написать конфигуратор темы (?)


## Test

```jsx
/*react*/
<script>
const { Body, Grid, Box, List, Text, Link, Picture, Image, Line } = EvoKit;

export default class ExampleLink extends React.Component {
    render() {
        return (
            <div>
                BODY:
                <Body body-indent='m'>
                    <Body.Section>
                        section
                    </Body.Section>
                </Body>
                <br />
                <br />
                GRID:
                <Grid grid-divider='success' grid-column={2} grid-indent='m'>
                    <Grid.Item>
                        item
                    </Grid.Item>
                    <Grid.Item>
                        item
                    </Grid.Item>
                </Grid>
                <br />
                <br />
                BOX:
                <Box box-padding='m' box-background='success' box-border='success' box-round='xs'>
                    box
                </Box>
                <br />
                <br />
                LIST:
                <List list-indent='m' list-divider='default'>
                    <List.Item>
                        item
                    </List.Item>
                    <List.Item>
                        item
                    </List.Item>
                </List>
                <br />
                <br />
                TEXT:
                <div>
                    <Text text-tag='small' text-size='small'>small</Text>
                    <Text text-size='default'>default</Text>
                    <Text text-tag='big' text-size='big'>big</Text>
                    <Text text-tag='h1' text-size='h1'>H1</Text>
                    <br />
                    <br />
                    <Text text-lheight='default'>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                    </Text>
                </div>
                <br />
                <br />
                LINK:
                <div>
                    <Link
                        href="#"
                        link-style='dotted'
                        link-color='success'
                        link-valign='text-top'
                        link-lheight='medium'
                    >dotted</Link>
                </div>
                <br />
                <br />
                PICTURE:
                <Box style={{ width: 150 }}>
                    <Picture picture-round='full'>
                        <Picture.Item src='https://picsum.photos/300/300' alt='' />
                    </Picture>
                </Box>
                <br />
                <br />
                IMAGE:
                <div>
                    <Image src='https://picsum.photos/150/150' image-valign='top' />
                </div>
                <br />
                <br />
                LINE:
                <Line line-indent='m' />
            </div>
        )
    }
}
</script>
```
