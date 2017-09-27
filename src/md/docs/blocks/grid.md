<!--
docs/blocks/grid|20
-->

# Grid

### Резиновый макет сетки.

Cетка UIKit вмещает до 10 столбцов. Она использует блоки с предварительно определенными классами внутри каждой сетки, которые определяют ширину столбца. Кроме того, можно создавать вложенную разметку.

---

## Использование

Для того, чтобы создать контейнер сетки, добавить класс `.ui-grid`  к родительскому элементу и класс `.ui-grid__item` дочерним элементам.

``` html
<div class='ui-grid'>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
</div>
```


---

## Колонки

|                    Class                    |                 Description               |
|---------------------------------------------|-------------------------------------------|
| `.ui-grid_column_1` до `.ui-grid_column_10` | Делит на равные колонки.                  |
| `.ui-grid_column_expand`                    | Каждый потомок получит одинаковый размер. |

``` html
<div class='ui-grid ui-grid_column_2'>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
</div>
```

---

## Расстояние между ячейками

По умолчанию, сетка не имеет отступов.

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ui-grid_size_`[size](docs/base/sizes.html)  | Отступ между ячейками.  |

``` html
<div class='ui-grid ui-grid_size_xxxl'>
    <div class='ui-grid__item ui-width-1-2'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ui-grid__item ui-width-1-2'>
        <div class='doc-example'>Item</div>
    </div>
</div>
```

---

## Направление ячеек

Устанавливает главную ось `main-axis`, определяя тем самым направление для элементов сетки. По умолчанию, слева направо.

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ui-grid_direction_row`            | Cлева направо для **ltr**, справа налево для **rtl**  |
|  `.ui-grid_direction_row-reverse`    | Cправа налево для **ltr**, слева направо для **rtl**  |
|  `.ui-grid_direction_column`         | Aналогично **row** сверху вниз  |
|  `.ui-grid_direction_column-reverse` | Aналогично **row-reverse**, снизу вверх.  |

``` html
<div class='ui-grid ui-grid_column_2 ui-grid_direction_row-reverse'>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item 1</div>
    </div>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item 2</div>
    </div>
</div>
```

---

## Перенос ячеек

В одной строке может быть много элементов. Модификатор задает правила переноса.

|              Class             |                       Description                       |
|--------------------------------|---------------------------------------------------------|
|  `.ui-grid_wrap_nowrap`        | Элементы не переносятся                                 |
|  `.ui-grid_wrap_wrap`          | Переносятся                                             |
|  `.ui-grid_wrap_wrap-reverse`  | Переносятся и располагаются в обратном порядке          |

``` html
<div class='ui-grid ui-grid_wrap_nowrap'>
    <div class='ui-grid__item'>
        <div class='doc-example'>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.</div>
    </div>
    <div class='ui-grid__item'>
        <div class='doc-example'>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.</div>
    </div>
</div>
```

---

## Вложенные сетки

Вы можете легко расширить макет сетки с вложенными сетками.

``` html
<div class='ui-grid ui-grid_size_xxxl'>
    <div class='ui-grid__item ui-width-1-2'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ui-grid__item ui-width-1-2'>
        <div class='ui-grid ui-grid_size_m'>
            <div class='ui-grid__item ui-width-1-3'>
                <div class='doc-example'>Item</div>
            </div>
            <div class='ui-grid__item ui-width-1-3'>
                <div class='doc-example'>Item</div>
            </div>
            <div class='ui-grid__item ui-width-1-3'>
                <div class='doc-example'>Item</div>
            </div>
        </div>
    </div>
</div>
```

---

## Горизонтальное выравнивание

По умолчанию, сетка выровнена по левому краю.

|           Class           |          Description          |
|---------------------------|-------------------------------|
|  `.ui-grid_align_left`    | Выравнивание по левому краю. |
|  `.ui-grid_align_right`   | Выравнивание по правому краю. |
|  `.ui-grid_align_center`  | Выравнивание по центру.       |
|  `.ui-grid_align_justify` | Выравнивание по краям.        |

``` html
<div class="ui-grid ui-grid_align_center">
    <div class="ui-grid__item">
        <div class='doc-example'>Item</div>
    </div>
</div>
```

---

## Вертикальное выравние

По умолчанию, сетка выровнена к верху.

|            Class            |        Description      |
|-----------------------------|-------------------------|
|  `.ui-grid_valign_middle`   | Выравнивание по центру. |
|  `.ui-grid_valign_bottom`   | Выравнивание к низу.    |
|  `.ui-grid_valign_justify`  | Выравнивание к краям.   |
|  `.ui-grid_valign_baseline` | Выравнивает базовую линию ячейки с базовой линией первой текстовой строки.   |

``` html
<div class='ui-grid ui-grid_column_1 ui-grid_valign_justify' style='height: 200px'>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
</div>
```

---

## Разделитель между ячейками

Чтобы применить вертикальный разделитель между ячейками, добавьте класс `.ui-grid_theme_divider`.

``` html
<div class='ui-grid ui-grid_size_xxxl ui-grid_theme_divider ui-grid_column_3'>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ui-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
</div>
```
