<!--
docs/blocks/grid|1
-->

# Grid

### Резиновый макет сетки.

Cетка UIKit вмещает до 10 столбцов. Она использует блоки с предварительно определенными классами внутри каждой сетки, которые определяют ширину столбца. Кроме того, можно создавать вложенную разметку.

---

## Использование

Для того, чтобы создать контейнер сетки, добавить класс `.ui-grid`  к родительскому элементу. Добавьте класс `.ui-grid__item` дочерним элементам. Сетка поддерживает 1, 2, 3, 4, 5, 6 ... 10 ячеек. Добавьте один из `.ui-width-*`  классов дочерним элементам, чтобы определить размер ячейки. Набор `.ui-width-*`  классов, могут быть применены к любым элементам.

|                  Class                 |            Description                                      |
|----------------------------------------|-------------------------------------------------------------|
|  `.ui-width-auto`                      | Устанавливает ширину исходя из типа и содержимого элемента. |
|  `.ui-width-expand`                    | Заполняет оставшееся пространство контейнера сетки.         |
|  `.ui-width-1-1`                       | Заполняет 100% доступной ширины.                            |
|  `.ui-width-1-2`                       | Деление на две половины, 50%.                               |
|  `.ui-width-1-3` до `.ui-width-2-3`    | Деление на три части.                                       |
|  `.ui-width-1-4` до `.ui-width-3-4`    | Деление на четыре части.                                    |
|  `.ui-width-1-5` до `.ui-width-4-5`    | Деление на пять частей.                                     |
|  `.ui-width-1-6` до `.ui-width-5-6`    | Деление на шесть частей.                                    |
|  ...                                   | ...                                                         |
|  `.ui-width-1-10` до `.ui-width-9-10`  | Деление на десять частей.                                   |

Мы построили намеренное избыточность в каждом наборе единичных классов, например класс `.ui-width-5-10`  будет работать точно так же как `.ui-width-1-2`.

``` html
<div class='ui-grid'>
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

|           Class            |        Description      |
|----------------------------|-------------------------|
|  `.ui-grid_valign_middle`  | Выравнивание по центру. |
|  `.ui-grid_valign_bottom`  | Выравнивание к низу.    |
|  `.ui-grid_valign_justify` | Выравнивание к краям.   |

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
