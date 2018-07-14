[sizes]: base/sizes.md
[media]: base/media.md

# Grid

### Модификаторы имеют [Media][media] параметры.

Cетка вмещает до 10 столбцов. Она использует блоки с предварительно определенными классами внутри каждой сетки, которые определяют ширину столбца. Кроме того, можно создавать вложенную разметку.

---

## Использование

Для того, чтобы создать контейнер сетки, добавить класс `.ek-grid`  к родительскому элементу и класс `.ek-grid__item` дочерним элементам.

``` html
<div class='ek-grid'>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
</div>
```


---

## Колонки

|                    Class                    |                 Description               |
|---------------------------------------------|-------------------------------------------|
| `.ek-grid_column_1` до `.ek-grid_column_10` | Делит на равные колонки.                  |
| `.ek-grid_column_expand`                    | Каждый потомок получит одинаковый размер. |

``` html
<div class='ek-grid ek-grid_column_2'>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
</div>
```

---

## Расстояние между ячейками

По умолчанию, сетка не имеет отступов.

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ek-grid_size_`[sizes]  | Отступ между ячейками.  |

``` html
<div class='ek-grid ek-grid_size_xxxl'>
    <div class='ek-grid__item ek-width-1-2'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ek-grid__item ek-width-1-2'>
        <div class='doc-example'>Item</div>
    </div>
</div>
```

---

## Направление ячеек

Устанавливает главную ось `main-axis`, определяя тем самым направление для элементов сетки. По умолчанию, слева направо.

|         Class         |         Description         |
|-----------------------|-----------------------------|
|  `.ek-grid_direction_row`            | Cлева направо для **ltr**, справа налево для **rtl**  |
|  `.ek-grid_direction_row-reverse`    | Cправа налево для **ltr**, слева направо для **rtl**  |
|  `.ek-grid_direction_column`         | Aналогично **row** сверху вниз  |
|  `.ek-grid_direction_column-reverse` | Aналогично **row-reverse**, снизу вверх.  |

``` html
<div class='ek-grid ek-grid_column_2 ek-grid_direction_row-reverse'>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item 1</div>
    </div>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item 2</div>
    </div>
</div>
```

---

## Перенос ячеек

В одной строке может быть много элементов. Модификатор задает правила переноса.

|              Class             |                       Description                       |
|--------------------------------|---------------------------------------------------------|
|  `.ek-grid_wrap_nowrap`        | Элементы не переносятся                                 |
|  `.ek-grid_wrap_wrap`          | Переносятся                                             |
|  `.ek-grid_wrap_wrap-reverse`  | Переносятся и располагаются в обратном порядке          |

``` html
<div class='ek-grid ek-grid_wrap_nowrap'>
    <div class='ek-grid__item'>
        <div class='doc-example'>Многие думают, что Lorem Ipsum - взятый с потолка псевдо-латинский набор слов, но это не совсем так.</div>
    </div>
    <div class='ek-grid__item'>
        <div class='doc-example'>Его корни уходят в один фрагмент классической латыни 45 года н.э., то есть более двух тысячелетий назад.</div>
    </div>
</div>
```

---

## Вложенные сетки

Вы можете легко расширить макет сетки с вложенными сетками.

``` html
<div class='ek-grid ek-grid_size_xxxl'>
    <div class='ek-grid__item ek-width-1-2'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ek-grid__item ek-width-1-2'>
        <div class='ek-grid ek-grid_size_m'>
            <div class='ek-grid__item ek-width-1-3'>
                <div class='doc-example'>Item</div>
            </div>
            <div class='ek-grid__item ek-width-1-3'>
                <div class='doc-example'>Item</div>
            </div>
            <div class='ek-grid__item ek-width-1-3'>
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
|  `.ek-grid_align_left`    | Выравнивание по левому краю. |
|  `.ek-grid_align_right`   | Выравнивание по правому краю. |
|  `.ek-grid_align_center`  | Выравнивание по центру.       |
|  `.ek-grid_align_justify` | Выравнивание по краям.        |

``` html
<div class="ek-grid ek-grid_align_center">
    <div class="ek-grid__item">
        <div class='doc-example'>Item</div>
    </div>
</div>
```

---

## Вертикальное выравние

По умолчанию, сетка выровнена к верху.

|            Class            |        Description      |
|-----------------------------|-------------------------|
|  `.ek-grid_valign_middle`   | Выравнивание по центру. |
|  `.ek-grid_valign_bottom`   | Выравнивание к низу.    |
|  `.ek-grid_valign_justify`  | Выравнивание к краям.   |
|  `.ek-grid_valign_baseline` | Выравнивает базовую линию ячейки с базовой линией первой текстовой строки.   |

``` html
<div class='ek-grid ek-grid_column_1 ek-grid_valign_justify' style='height: 200px'>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
</div>
```

---

## Разделитель между ячейками

Чтобы применить вертикальный разделитель между ячейками, добавьте класс `.ek-grid_theme_divider`.

``` html
<div class='ek-grid ek-grid_size_xxxl ek-grid_theme_divider ek-grid_column_3'>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
    <div class='ek-grid__item'>
        <div class='doc-example'>Item</div>
    </div>
</div>
```
