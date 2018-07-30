# Image

Чтобы применить этот компонент, просто добавьте класс `.ek-image` к тегу `<img>`.


``` html
<img
    class='ek-image'
    src='https://picsum.photos/100/100/?random'
    width='100'
    height='100'
>
Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться.
```

---

## Горизонтальное выравнивание

|           Class           |          Description          |
|---------------------------|-------------------------------|
| `.ek-image_align_left`    | Выравнивание по левому краю.  |
| `.ek-image_align_center`  | Выравнивание по центру.       |
| `.ek-image_align_right`   | Выравнивание по правому краю. |

``` html
<img
    class='ek-image ek-image_align_left'
    src='https://picsum.photos/100/100/?random'
    width='100'
    height='100'
>
Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
<div class="ek-line ek-line_size_m"></div>
<img
    class='ek-image ek-image_align_center'
    src='https://picsum.photos/100/100/?random'
    width='100'
    height='100'
>
Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
<div class="ek-line ek-line_size_m"></div>
<img
    class='ek-image ek-image_align_right'
    src='https://picsum.photos/100/100/?random'
    width='100'
    height='100'
>
Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст Lorem Ipsum получил много версий. Некоторые версии появились по ошибке, некоторые - намеренно (например, юмористические варианты).
```

---

## Вертикальное выравнивание

|            Class            |              Description              |
|-----------------------------|---------------------------------------|
| `.ek-image_valign_top`      | Выравнивание по верхнему краю строки. |
| `.ek-image_valign_middle`   | Выравнивание по середине.             |
| `.ek-image_valign_bottom`   | Выравнивание по нижнему краю.         |

``` html
<img
    class='ek-image ek-image_valign_top'
    src='https://picsum.photos/100/100/?random'
    width='100'
    height='100'
>
Выравнивание по верхнему краю строки
<hr class="ek-line ek-line_size_m" />
<img
    class='ek-image ek-image_valign_middle'
    src='https://picsum.photos/100/100/?random'
    width='100'
    height='100'
>
Выравнивание по середине
<hr class="ek-line ek-line_size_m" />
<img
    class='ek-image ek-image_valign_bottom'
    src='https://picsum.photos/100/100/?random'
    width='100'
    height='100'
>
Выравнивание по нижнему краю
```

---

## Отражение

|         Class         |                     Description                     |
|-----------------------|-----------------------------------------------------|
| `.ek-image_mirror_x`  | Отражение по горизонтали                            |
| `.ek-image_mirror_y`  | Отражение по вертикали                              |
| `.ek-image_mirror_xy` | Одновременное отражение по горизонтали и вертикали  |

``` html
<img
    class='ek-image'
    src='https://picsum.photos/100/100/?random'
    width='100'
    height='100'
    alt=''
>
<img
    class='ek-image ek-image_mirror_x'
    src='https://picsum.photos/100/100/?random'
    width='100'
    height='100'
    alt=''
>
<img
    class='ek-image ek-image_mirror_y'
    src='https://picsum.photos/100/100/?random'
    width='100'
    height='100'
    alt=''
>
<img
    class='ek-image ek-image_mirror_xy'
    src='https://picsum.photos/100/100/?random'
    width='100'
    height='100'
    alt=''
>
```