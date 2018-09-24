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
const { Body, Grid, Panel, Box, List, Text, Link, Picture, Image, Line, Tags } = EvoKit;

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
                <Grid grid-column={2} grid-size='m'>
                    <Grid.Item>
                        item
                    </Grid.Item>
                    <Grid.Item>
                        item
                    </Grid.Item>
                </Grid>
                <br />
                <br />
                PANEL:
                <Panel panel-theme='muted' panel-size='m'>
                    <Panel.Body>
                        body
                    </Panel.Body>
                </Panel>
                <br />
                <br />
                BOX:
                <Box box-padding='m' box-theme='muted'>
                    box
                </Box>
                <br />
                <br />
                LIST:
                <List list-size='m'>
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
                    <Text text-tag='h1' text-size='h1' style={{ margin: 0 }}>H1</Text>
                </div>
                <br />
                <br />
                LINK:
                <div>
                    <Link href="#" link-style='dotted'>dotted</Link>
                </div>
                <br />
                <br />
                PICTURE:
                <div className='ek-width-3-10'>
                    <Picture src='https://picsum.photos/300/300' picture-style='round' />
                </div>
                <br />
                <br />
                IMAGE:
                <div>
                    <Image src='https://picsum.photos/150/150' image-valign='top' />
                </div>
                <br />
                <br />
                LINE:
                <Line line-size='m' />
                <br />
                <br />
                TAGS:
                <Tags tags-theme='muted' tags-size='m'>
                    <Tags.Item>
                        item
                    </Tags.Item>
                    <Tags.Item>
                        item
                    </Tags.Item>
                </Tags>
            </div>
        )
    }
}
</script>
```
