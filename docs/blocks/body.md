# Body

Добавьте класс `.ek-body` для тега `<body>`, чтобы определить дефолтные стили на странице. Элемент `ek-body__section` ограничивает контент по ширине и центрирует его.

|         Name        |             Value            |
|---------------------|------------------------------|
|  `font-family`      |  "Roboto", Arial, sans-serif |
|  `font-size`        |  13px                        |
|  `font-weight`      |  400                         |
|  `color`            |  #3c3c3c                     |
|  `background-color` |  #FFF                        |
|  `min-width`        |  1000px                      |


---

## Размер

Модификатор размера задает максимальную ширину для `.ek-body__section`. По умолчаню `min-width: 1000px` и `max-width: 1200px`.

|          Class        |        Description        |
|-----------------------|---------------------------|
|  `.ek-body_size_xl`   |  `max-width: 1440px`      |
|  `.ek-body_size_xxl`  |  `max-width: 1640px`      |
|  `.ek-body_size_xxxl` |  `max-width: 1840px`      |

``` html
<div class='ek-body'>
    <div class='ek-body__section'>
        header
    </div>
    <div class='ek-body__section'>
        content
    </div>
    <div class='ek-body__section'>
        footer
    </div>
</div>
```
