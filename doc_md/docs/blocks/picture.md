<!--
docs/blocks/picture|80
-->

# Картинка

Блок `.ui-picture` состоит из одного элемента `.ui-picture__item`.

---

## Использование
Компонент создает квадрат относительно ширины родителя и адаптирует изображение в этих рамках.

``` html
<div class='doc-example ui-width-1-5'>
    <div class='ui-picture'>
        <img class='ui-picture__item' src='http://lorempixel.com/600/300/'>
    </div>
</div>
```

---

## Размер

|            Class           |                       Description                       |
|----------------------------|---------------------------------------------------------|
| `.ui-picture_size_cover`   | Картинка сохраняет свои пропорции при заполнении блока. |

``` html
<div class="doc-example ui-width-1-5">
    <div class="ui-picture ui-picture_size_cover">
        <img class='ui-picture__item' src='http://lorempixel.com/600/300/'>
    </div>
</div>
```

---

## Стили

|          Class          |      Description     |
|-------------------------|----------------------|
| `.ui-picture_style_round` | Круглое изображение. |

``` html
<div class="doc-example ui-width-1-5">
    <div class="ui-picture ui-picture_style_round ui-picture_size_cover">
        <img class='ui-picture__item' src='http://lorempixel.com/600/300/'>
    </div>
</div>
```
