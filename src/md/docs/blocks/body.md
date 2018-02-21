<!--
docs/blocks/body|10
-->

# Body

Добавьте класс `.ui-body` для тега `<body>`, чтобы определить дефолтные стили на странице. Элемент `ui-body__section` ограничивает контент по ширине и центрирует его.

|         Name        |             Value            |
|---------------------|------------------------------|
|  `font-family`      |  "Roboto", Arial, sans-serif |
|  `font-size`        |  13px                        |
|  `color`            |  #3c3c3c                     |
|  `background-color` |  #fff                        |
|  `min-width`        |  1000px                      |


---

## Размер

Модификатор размера задает максимальную ширину для `.ui-body__section`. По умолчаню `min-width: 1000px` и `max-width: 1200px`.

|          Class        |        Description        |
|-----------------------|---------------------------|
|  `.ui-body_size_xl`   |  `max-width: 1440px`      |
|  `.ui-body_size_xxl`  |  `max-width: 1640px`      |
|  `.ui-body_size_xxxl` |  `max-width: 1840px`      |

``` html
<div class='ui-body'>
    <div class='ui-body__section'>
        header
    </div>
    <div class='ui-body__section'>
        content
    </div>
    <div class='ui-body__section'>
        footer
    </div>
</div>
```
