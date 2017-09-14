<!--
docs/blocks/line|100
-->

# Line

### Разделительная линия с внешними отступами.

Рисует горизонтальную линию, которая относится к блочным элементам. Линия всегда начинается с новой строки, а после нее все элементы отображаются на следующей строке.

---

## Использование

Блок состоит из одного класса `.ui-line`.

``` html
<div class="doc-example">
    <div class='ui-line'></div>
</div>
```

---

## Размер

Модификатор размера определяет внешние вертикальные отступы. По умолчанию, линия не имеет отступов.

|         Class         |          Description           |
|-----------------------|--------------------------------|
|  `.ui-line_size_`[size](docs/base/sizes.html)  | Отступ сверху и снизу.  |

``` html
<div class="doc-example">
    <div class='ui-line ui-line_size_xxxl'></div>
</div>
```

---

## Стили

Устанавливает стиль линии.

|          Class          |      Description       |
|-------------------------|------------------------|
| `.ui-line_style_dotted` | Точечный.              |
| `.ui-line_style_dashed` | Пунктирный.            |

``` html
<div class="doc-example">
    <div class='ui-line ui-line_style_dotted ui-line_size_xxxl'></div>
    <div class='ui-line ui-line_style_dashed ui-line_size_xxxl'></div>
</div>
```
