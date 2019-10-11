[README]: /packages/evokit/README.md

[panel]: /docs/deprecated/removed_panel.md
[tags]: /docs/deprecated/removed_tags.md
[width]: /docs/deprecated/removed_width.md
[mixes]: /docs/deprecated/removed_mixes.md
[sizes]: /docs/deprecated/removed_sizes.md

[media]: /docs/getting-started/media.md
[use-props_multi-values]: /docs/getting-started/props?id=multi-values
[use-props_box-ref]: /docs/getting-started/props?id=box-ref
[text]: /docs/base/text.md
[colors]: /docs/base/colors.md
[create_theme]: /docs/base/theme.md

[evokit]: /packages/evokit/
[body]: /packages/evokit-body/
[box]: /packages/evokit-box/
[grid]: /packages/evokit-grid/
[image]: /packages/evokit-image/
[line]: /packages/evokit-line/
[link]: /packages/evokit-link/
[list]: /packages/evokit-list/
[picture]: /packages/evokit-picture/
[text]: /packages/evokit-text/

[issues/3]: //github.com/docccdev/evokit/issues/3

# EvoKit

[![](https://img.shields.io/npm/v/evokit.svg)](https://www.npmjs.com/package/evokit)
[![](https://img.shields.io/badge/page-README-42b983)][README]

---

## CHANGELOG

!> In version 3.0.0 there are no more UI blocks, they are all in separate packages, please update carefully.

### 3.1.0 *(11.10.2019)*

- **Fixed** react ref prop. The prop `{BLOCK_NAME}-ref` is now deprecated. [More][use-props_box-ref]
- **Fixed** prop `{BLOCK_NAME}-tag`
- **Added** multi prop values. [More][use-props_multi-values]

### 3.0.3 *(11.07.2019)*

- Minor improvement

### 3.0.2 *(04.07.2019)*

- Fixed default prop `className` for css modules Blocks [#3][issues/3]

### 3.0.1 *(19.06.2019)*

- Added function `withProps`

### 3.0.0

- **Added** New core [evokit][evokit].
- **Added** Separated all UI blocks in packages:
    - [evokit-body][body]
    - [evokit-box][box]
    - [evokit-grid][grid]
    - [evokit-image][image]
    - [evokit-line][line]
    - [evokit-link][link]
    - [evokit-list][list]
    - [evokit-picture][picture]
    - [evokit-text][text]
- **Removed** PeerDependencies `classnames`.
- **Removed** [Mixes][Mixes] block.
- **Removed** Static themes from package, please use [Theme Creator][create_theme]:
    - `themes.css`
    - `theme.danger.css`
    - `theme.dark.css`
    - `theme.default.css`
    - `theme.info.css`
    - `theme.light.css`
    - `theme.minor.css`
    - `theme.muted.css`
    - `theme.primary.css`
    - `theme.reset.css`
    - `theme.second.css`
    - `theme.success.css`
    - `theme.warning.css`
- **Changed** The prop `mix-*` replaced with props target block, example:
``` jsx
// bad
<Box mix-width={val}>
<Image mix-round={val}>
<Grid.Item mix-width={val}>
// good
<Box box-width={val}>
<Image image-round={val}>
<Grid.Item grid-item-width={val}>
```
- **Changed** Replace prop `domRef` to `${blockName}-ref`, see example:
``` jsx
// bad
<Box domRef={fn}>
// good
<Box box-ref={fn}>
```
- **Changed** Replace block element prop:
``` jsx
// bad
<Grid.Item grid-width={val}>
// good
<Grid.Item grid-item-width={val}>
```

### 2.1.5
- Init `CSSModules`.


### 2.1.4
- Создан `theme-template.css` для [create_theme].


### 2.1.3
- Добавлено свойство `body-color` для блока [Body][body].
- Добавлена в конфиг переменная `--ek-body-font-family` для блока [Body][body].
- Удален цвет фона и текста по умолчанию для [Body][body].
- Удален цвет текста по умолчанию для [Link][link].
- Удален цвет линии по умолчанию для [Line][line].
- Исправлена проблема с `background gradient`.


### 2.1.2
- Для блока [Box][box] свойство `box-width` заменено на `mix-width`.
- Для элемента [Grid.Item][grid] свойство `grid-width` заменено на `mix-width`.


### 2.1.1
- Исправлено очищение [Mixes][mixes] свойств.


### 2.1.0
- Добавлены [Mixes][mixes].
- Для блока [Box][box] свойства `box-round` и `box-round-*` заменены на `mix-round` и `mix-round-*`.
- Для блока [Image][image] свойства `image-round` и `image-round-*` заменены на `mix-round` и `mix-round-*`.
- Для блока [Picture][picture] свойства `picture-round` и `picture-round-*` заменены на `mix-round` и `mix-round-*`.


### 2.0.9
- Удален модификатор `picture-size` для блока [picture].
- Для блоков [image], [picture] добавлен модификатор `*-fit`:


### 2.0.8
- Добавлено значение `full` для модификатора`*-round` блока [box].
- Удален модификатор `picture-style` для блока [picture].
- Елемент `<Picture.Item />` блока [picture] вынесен отдельно и обязателен для использования.
- Для блоков [box], [image], [picture] добавлены модификаторы:
    - `*-round`
    - `*-round-top`
    - `*-round-right`
    - `*-round-bottom`
    - `*-round-left`
    - `*-round-top-left`
    - `*-round-top-right`
    - `*-round-bottom-left`
    - `*-round-bottom-right`


### 2.0.7
- Исправлен импорт `React` для `Example` блока.


### 2.0.6
- Добавлен модификатор `grid-width='auto'` и `grid-column='auto'` для блока [grid].
- Добавлен модификатор `box-width='auto'` для блока [box].


### 2.0.5
- Исправлена ошибка рендера [picture][picture].
- Добавлен файл со всеми темами `dist/themes.css`.


### 2.0.4
- Добавлен `Example` блок для документации.


### 2.0.3
- Добавлен модификатор `background` для блока [body][body].


### 2.0.2
- Исправлен баг в `theme.warning.css`.
- Добавлен дефолтный `line-height` для [text][text], [link][link].
- Исправлен модификатор `width` для jsx блоков [box][box].


### 2.0.1
- Исправлен баг в темах для [box][box], [grid][grid], [list][list].


### 2.0.0
- Удален блок [panel][panel].
- Удален блок [tags][tags].
- Переименованные переменные `evokit.config.js`:
    - `--EKMediaSmall` -> `--ek-media-small`
    - `--EKMediaMedium` -> `--ek-media-medium`
    - `--EKMediaLarge` -> `--ek-media-large`
    - `--EKMediaWide` -> `--ek-media-wide`
    - `--EKMediaHuge` -> `--ek-media-huge`
    - `--EKStepSize` -> `--ek-step-indent`
    - `--EKFontSizeH1` -> `--ek-font-size-h1`
    - `--EKFontSizeH2` -> `--ek-font-size-h2`
    - `--EKFontSizeH3` -> `--ek-font-size-h3`
    - `--EKFontSizeH4` -> `--ek-font-size-h4`
    - `--EKFontSizeH5` -> `--ek-font-size-h5`
    - `--EKFontSizeH6` -> `--ek-font-size-h6`
    - `--EKFontSize` -> `--ek-default-font-size`
    - `--EKLineHeight` -> `--ek-default-line-height`
    - `--EKFontWeight` -> `--ek-default-font-weight`
    - `--EKBorderColor` -> `--ek-default-border-color`
    - `--EKBackgroundColor` -> `--ek-default-background-color`
    - `--EKColor` -> `--ek-default-text-color`
    - `--EKMinWidth` -> `--ek-body-min-width`
    - `--EKMaxWidth` -> `--ek-body-max-width`
    - `--EKColorLink` -> `--ek-${theme_name}-link-color`
    - `--EKColor${theme_name}` -> `--ek-${theme_name}-text-color`
    - `--EKBackgroundColor${theme_name}` -> `--ek-${theme_name}-background-color`
    - `--EKBorderColor${theme_name}` -> `--ek-${theme_name}-border-color`
- Удаленные переменные `evokit.config.js`:
    - `--EKBorderRadius`
    - `--EKLineHeightRead`
    - `--EKFontSizeFirst`
    - `--EKFontSizeSecond`
    - `--EKFontSizeThird`
- Добавленные переменные `evokit.config.js`:
    - `--ek-step-round`
    - `--ek-step-font-size`
    - `--ek-step-line-height`
    - `--ek-${theme_name}-divider-color`
- Удален модификатор отступа `xxxl` для всех блоков.
- Удалены вспомогательные классы `.ek-width-*-*` [width][width].
- Изменения модификаторов для блока [box][box]:
    - Удалено `.ek-box_style_round`
    - Удалено `.ek-box_theme_*`
    - Добавлено `.ek-box_round_${step_round}`
    - Добавлено `.ek-box_background_${theme_name}`
    - Добавлено `.ek-box_border_${theme_name}`
    - Добавлено `.ek-box_width_${from}-${to}`
- Изменения модификаторов для блока [grid][grid]:
    - Переименовано `.ek-grid_size_*` -> `.ek-grid_indent_*`
    - Удалено `.ek-grid_theme_divider`
    - Добавлено `.ek-grid_divider_${theme_name}`
- Изменения модификаторов для блока [line][line]:
    - Переименовано `.ek-line_size_*` -> `.ek-line_indent_*`
- Изменения модификаторов для блока [list][list]:
    - Переименовано `.ek-list_size_*` -> `.ek-list_indent_*`
    - Удалено `.ek-list_theme_divider`
    - Добавлено `.ek-list_divider_${theme_name}`
- Изменения модификаторов для блока [link][link]:
    - Переименовано `.ek-link_size_base` -> `.ek-link_size_default`
    - Добавлено `.ek-link_size_(small|large)`
    - Добавлено `.ek-link_lheight_(default|medium|large)`
    - Добавлено `.ek-link_valign_(baseline|bottom|middle|sub|super|text-bottom|text-top|top)`
- Изменения модификаторов для блока [text][text]:
    - Переименовано `.ek-text_size_base` -> `.ek-text_size_default`
    - Удалено `.ek-text_style_read`
    - Добавлено `.ek-text_lheight_(default|medium|large)`
    - Добавлено `.ek-text_size_(small|large)`
- Темы вынесены в отдельные файлы:
    - `theme.danger.css`
    - `theme.dark.css`
    - `theme.default.css`
    - `theme.info.css`
    - `theme.light.css`
    - `theme.minor.css`
    - `theme.muted.css`
    - `theme.primary.css`
    - `theme.reset.css`
    - `theme.second.css`
    - `theme.success.css`
    - `theme.warning.css`


### 1.1.6
- Исправлен `evokit.config.js`.


### 1.1.5
- Исправлены модификаторы ширины для [grid].


### 1.1.4
- Добавлен `line-height: var(--EKLineHeight)` для [body][body].
- Исправлены модификаторы ширины для [grid].


### 1.1.3
- Откат jsx блоков с `React.PureComponent` на `React.Component`.


### 1.1.2
- Обновлен `evokit.config.js`.
- Обновлен `package.json`.
- Изменен дефолтный префикс для всех`jsx` блоков c `ek-` на `{blockName}-`, пример:
    - Было `<Text ek-size='h1'>...</Text>`
    - Cтало `<Text text-size='h1'>...</Text>`
- Добавлена возможность изменять `tagName` для `jsx` блоков, пример:
    - `<Text text-tag='h1' text-size='h1'>...</Text>`


### 1.1.1
- Добавлены медиа параметрами для модификаторов ширины `*-expand`.
- Удалены отступы для [body][body].
- Добавлены модификаторы горизонтальных отступов для [body][body]:
    - `.ek-body_indent_*`
- Удалено media выражения `@xxxlarge`.
- Переименованные media выражения:
    - `@xlarge` -> `@wide`
    - `@xxlarge` -> `@huge`
- Изменения в переменных `evokit.config.js`:
    - Удалено `--EKPadding`
    - Удалено `--EKMediaXxxlarge`
    - Переименовано `EKMediaXlarge` -> `EKMediaWide`
    - Переименовано `EKMediaXxlarge` -> `EKMediaHuge`


### 1.1.0
- Установлен дефолтный префикс `ek-` для css класов


### 1.0.12
- Исправлены внешние зависимости. В версии `1.0.11` была сломана `commonjs` сборка


### 1.0.11
- Библиотека стала доступна для внешнего подключения `window.EvoKit`
- Блоки стали `PureComponent`


### 1.0.10
- Добавлены модификаторы цвета [line][line]:
    - `.ek-line_color_*`


### 1.0.9
- Добавлены модификаторы для [text][text]:
    - `.ek-text_transform_none`
    - `.ek-text_transform_capitalize`
    - `.ek-text_transform_lowercase`
    - `.ek-text_transform_uppercase`


### 1.0.8
- Добавлены модификаторы `position` для [box][box]:
    - `.ek-box_position_absolute`
    - `.ek-box_position_fixed`
    - `.ek-box_position_relative`
    - `.ek-box_position_static`
- Добавлены модификаторы `place` для [box][box]:
    - `.ek-box_place_top`
    - `.ek-box_place_top-left`
    - `.ek-box_place_top-right`
    - `.ek-box_place_center`
    - `.ek-box_place_center-left`
    - `.ek-box_place_center-right`
    - `.ek-box_place_bottom`
    - `.ek-box_place_bottom-left`
    - `.ek-box_place_bottom-right`
- Добавлен модификатор `style` для [box][box]:
    - `.ek-box_style_round`

### 1.0.7
- Установлен дефолтный class prefix `ek-`.


### 1.0.6
- Добавлены media модификаторы для:
    - `ek-text_align_*`
    - `ek-text_valign_*`


### 1.0.5
- Удалена переменная `--EKFontFamily`, используется `system-ui`.


### 0.1.59 beta (24.05.2018)
- Добавлен белый цвет текста [colors][colors]:
    - `.ek-text_color_white`
    - `.ek-link_color_white`
    - `.ek-list_color_white`
- Удалено свойство `display: block` для модификаторов:
    - `.ek-text_wrap_nowrap`
    - `.ek-text_wrap_break`
- Добавлены по умолчанию ограничения `max-width` и `max-height` для блока [image][image].
- Добавлены модификаторы отражения [image][image]:
    - `.ek-image_mirror_x`
    - `.ek-image_mirror_y`
    - `.ek-image_mirror_xy`
- Добавлен модификатор для [box][box]:
    - `.ek-box_display_none`


### 0.1.58 beta (25.04.2018)
- Fix warning `Unknown prop domRef on <div> tag`


### 0.1.57 beta (25.04.2018)
- Добавлен метов `domRef` для всех `jsx` блоков, пример: `domRef={(node) => this.node = node}`
- Добавлен новый блок в `jsx`:
     - [UiTags][tags]


### 0.1.56 beta (20.03.2018)
- Блок [link][link] получил свойство `display: inline` и базовый `line-height: 1.3em`.
- Добавлен модификатор для [link][link]:
    - `.ek-link_style_multi-line`
- Добавлен модификатор разделителя для [panel][panel]:
    - `.ek-panel_style_divider`
- Удалены модификаторы отображения [text][text]:
    - `.ek-text_display_*`
- Установлено по умолчанию свойство `display: block` для модификаторов:
    - `.ek-text_align_*`
    - `.ek-text_wrap_*`

### 0.1.55 beta (14.03.2018)
- Добавлены модификаторы `display` для `jsx` блоков:
     - [UiBox][box]
     - [UiText][text]


### 0.1.54 beta (14.03.2018)
- Изменен тег c `<div>` на `<span>` для jsx компонента [UiText][text].
- Изменен тег c `<a>` на `<hr>` для jsx компонента [UiLine][line].
- Блок [box][box] получил свойство `display: block`.
- Блок [text][text] получил свойство `display: inline`.
- Блок [list][list] получил свойство `display: block`.
- Добавлены модификаторы отображения [box][box]:
    - `.ek-box_display_*`
- Добавлены модификаторы отображения [text][text]:
    - `.ek-text_display_*`

### 0.1.53 beta (12.03.2018)
- Новый раздел [colors][colors].
- Изменен модификатор насыщенности с `regular` на `base` для [text][text].
- Установлен базовый `font-weight: 400` для [body][body].
- Добавлено автоопределение сенсорных экранов для свойства `:hover` на ссылке [link][link].
- Добавлен модификатор базового цвета [text][text]:
    - `.ek-text_color_base`
- Добавлен модификатор базового цвета [list][list]:
    - `.ek-list_color_base`
- Добавлены модификаторы для [link][link]:
    - `.ek-link_color_*`
    - `.ek-link_size_*`
    - `.ek-link_weight_*`


### 0.1.52 beta (19.01.2018)
- Добавлен новый блок в `jsx`:
     - [UiImage][image]


### 0.1.51 beta (14.12.2017)
- Новый блок [tags][tags].


### 0.1.50 beta (27.09.2017)
- Добавлены модификаторы переноса [grid][grid]:
    - `.ek-grid_wrap_nowrap`
    - `.ek-grid_wrap_wrap`
    - `.ek-grid_wrap_wrap-reverse`


### 0.1.49 beta (14.09.2017)
- Добавлены модификаторы стиля для [line][line]:
    - `.ek-line_style_dotted`
    - `.ek-line_style_dashed`


### 0.1.48 beta (13.09.2017)
- Исправлены названия компононетов для `React Developer Tools`.


### 0.1.46 beta (06.09.2017)
- Оптимизирован размер `.js` бандла.
- Добавлены модификаторы в `jsx` для блока [picture][picture]:
    - `ek-size`
    - `ek-style`
- Добавлен новый блок в `jsx`:
    - [UiImage][image]


### 0.1.45 beta (04.09.2017)
- Добавлен новый блок в `jsx`:
     - [UiList][list]


### 0.1.44 beta (31.08.2017)
- Добавлены блоки `jsx`:
     - [UiGrid][grid]
     - [UiPanel][panel]
     - [UiBox][box]
     - [UiText][text]
     - [UiLink][link]
     - [UiPicture][picture]
     - [UiLine][line]


### 0.1.43 beta (30.08.2017)
- Исправлены стили  [picture][picture].
- Добавлен модификатор закругления для [picture][picture]:
    - `.ek-picture_size_cover`
    - `.ek-picture_style_round`


### 0.1.42 beta (28.08.2017)
- Новый блок [image][image].


### 0.1.41 beta (16.08.2017)
- Добавлены два цвета для [text][text]:
    - `.ek-text_color_red`
    - `.ek-text_color_yellow`
- Добавлены модификаторы цвета маркера для списка [list][list]:
    - `.ek-list_color_red`
    - `.ek-list_color_yellow`
    - `.ek-list_color_link`
    - `.ek-list_color_muted`
    - `.ek-list_color_info`
    - `.ek-list_color_success`
    - `.ek-list_color_warning`
    - `.ek-list_color_error`


### 0.1.40 beta (10.08.2017)
- **УДАЛЕН** блок `.ek-page`
- **УДАЛЕН** блок `.ek-title-*`
- **УДАЛЕН** блок `.ek-text-*`


### 0.1.39 beta (03.08.2017)
- Добавлен новый элемент `.ek-body__section` для блока [body][body]:
    - **НЕ ИСПОЛЬЗОВАТЬ** блок `.ek-page`, замените его на `.ek-body__section`


### 0.1.38 beta (28.07.2017)
- Новый блок [body][body].
- Новый блок [text][text]:
    - **НЕ ИСПОЛЬЗОВАТЬ** вспомогательные классы `.ek-title-*`, замените их на `.ek-text`
    - **НЕ ИСПОЛЬЗОВАТЬ** вспомогательные классы `.ek-text-*`, замените их на `.ek-text`
- Добавлен модификатор `.ek-grid_valign_baseline` для [grid][grid].
- Добавлены модификаторы тем для блока [box][box]:
    - `.ek-box_theme_info`
    - `.ek-box_theme_success`
    - `.ek-box_theme_warning`
    - `.ek-box_theme_error`
- Добавлены модификаторы тем для блока [panel][panel]:
    - `.ek-panel_theme_info`
    - `.ek-panel_theme_success`
    - `.ek-panel_theme_warning`
    - `.ek-panel_theme_error`


### 0.1.37 beta (25.07.2017)
- Увеличена скорость компиляции стилей в 6 раз.
- **Удален** миксин для комбинирования медиа стилей. Использовать [postcss](http://postcss.org) плагин.


### 0.1.36 beta (11.07.2017)

- Новое [media][media] правило `xxxlarge`.
- Добавлен модификатор `.ek-page_size_xxxl` для блока `.ek-page`.


### 0.1.35 beta (20.06.2017)

- Исправлен модификатор размера для [list][list].
- Для модификатора `.ek-list_theme_divider` добавлены [media][media] правила.
- Модификаторы для обнуления [sizes][sizes]:
    - `.ek-box_margin_none`
    - `.ek-box_padding_none`
    - `.ek-box_size_none`
    - `.ek-grid_size_none`
    - `.ek-line_size_none`
    - `.ek-list_size_none`
    - `.ek-panel_size_none`


### 0.1.34 beta (19.04.2017)

- Добавлены стили `border-radius` и `padding` к элементу`.ek-panel__body` для блока [panel][panel].
- Добавлен модификатор `.ek-panel_theme_blue` для [panel][panel].
- Новые модификаторы для [box][box]:
    - `.ek-box_margin_auto`
    - `.ek-box_margin-left_auto`
    - `.ek-box_margin-top_auto`
    - `.ek-box_margin-right_auto`
    - `.ek-box_margin-bottom_auto`
    - `.ek-box_margin-tb_auto`
    - `.ek-box_margin-lr_auto`

### 0.1.33 beta (18.04.2017)

- Добавлен модификатор `.ek-box_theme_blue` для [box][box].
- Обновлен список переменных.


### 0.1.32 beta (13.04.2017)

- Added [picture][picture] to portable bundle.
- Added min and max width for `.ek-grid__item`.


### 0.1.31 beta (27.03.2017)

- Fixed bug with [grid][grid] item padding when applied theme divider.


### 0.1.30 beta (23.03.2017)

- Исправлена ошибка с повторяющимися стилями.


### 0.1.29 beta (23.03.2017)

- Big update [grid][grid] divider:
    - `Responsive`
    - `Multi column`
    - `Horizontal and vertical divider`


### 0.1.28 beta (06.03.2017)

- Added font weight class for [text][text]:
    - `.ek-text-thin`
    - `.ek-text-light`
    - `.ek-text-regular`
    - `.ek-text-medium`
    - `.ek-text-black`


### 0.1.27 beta (06.03.2017)

- Добавлен модификатор `.ek-box_theme_transparent` для [box][box].
- Добавлен модификатор `.ek-panel_theme_transparent` для [panel][panel].
- Added [media][media] rules for all [box][box] modifiers.
- Added [media][media] rules for all [panel][panel] modifiers.


### 0.1.26 beta (01.03.2017)

- Добавлен цвет текста `.ek-text-muted` для [text][text].
- Добавлен модификатор `.ek-panel_style_border` для [panel][panel].
- Added border-box for [panel][panel].
- Reset margin-bottom for `.ek-grid_theme_divider`.


### 0.1.25 beta (20.02.2017)

- Added modifiers for [grid][grid]:
    - `.ek-grid_direction_row`
    - `.ek-grid_direction_row-reverse`
    - `.ek-grid_direction_column`
    - `.ek-grid_direction_column-reverse`
    - `.ek-grid_align_left`
    - `.ek-grid_valign_top`
- Added [media][media] rules for all grid modifiers.


### 0.1.24 beta (06.02.2017)

- Новый блок [link][link].
- Added modifiers for [box][box] padding:
    - `.ek-box_padding-left_*`
    - `.ek-box_padding-top_*`
    - `.ek-box_padding-right_*`
    - `.ek-box_padding-bottom_*`
- Added modifiers for [box][box] margin:
    - `.ek-box_margin-left_*`
    - `.ek-box_margin-top_*`
    - `.ek-box_margin-right_*`
    - `.ek-box_margin-bottom_*`


### 0.1.23 beta (24.01.2017)

- Новый блок [picture][picture].
- Added ek-width class `.ek-width-auto`.
- Added ek-width class `.ek-width-expand`.
- Added modifier for [grid][grid] `.ek-grid_column_expand`.
- Исправлен стиль `position` для `.ek-list__item`.
- Changed the design documentation and add preview block.


### 0.1.21 beta (16.01.2017)

- Added modifier `.ek-grid_column_*` for [grid][grid].
- Added description for [media][media] rules.
- Changed all media class from `.ek-width-xl-1-2` to `.ek-width-1-2@xlarge`.


### 0.1.20 beta (13.01.2017)

- Новый блок [box][box].
- **УДАЛЕН** блок `.ek-block`.
- Исправлен стиль `display` для `.ek-list__item`.
