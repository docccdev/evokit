<!--
docs/blocks/picture|80
-->

# Картинка

Блок `.ui-picture` состоит из одного элемента `.ui-picture__item`.

---

## Использование
Компонент создает квадрат относительно ширины родителя и адаптирует изображение в этих рамках.

``` html
<div class='ui-width-1-5'>
    <div class='ui-picture'>
        <img class='ui-picture__item' src='https://picsum.photos/600/300/?random'>
    </div>
</div>
```

---

## Размер

|            Class           |                       Description                       |
|----------------------------|---------------------------------------------------------|
| `.ui-picture_size_cover`   | Картинка сохраняет свои пропорции при заполнении блока. |

``` html
<div class="ui-width-1-5">
    <div class="ui-picture ui-picture_size_cover">
        <img class='ui-picture__item' src='https://picsum.photos/600/300/?random'>
    </div>
</div>
```

---

## Стили

|          Class          |      Description     |
|-------------------------|----------------------|
| `.ui-picture_style_round` | Круглое изображение. |

``` html
<div class="ui-width-1-5">
    <div class="ui-picture ui-picture_style_round ui-picture_size_cover">
        <img class='ui-picture__item' src='https://picsum.photos/600/300/?random'>
    </div>
</div>
```
