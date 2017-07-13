A [PostCSS] plugin to enable 'null' in margin and padding shorthands

[PostCSS]: https://github.com/postcss/postcss
[Gulp]: https://github.com/gulpjs/gulp

## Installation

```js
npm install postcss-sides
```

## Example

```css
div {
    margin: null auto
}
```

will produce

```css
div {
    margin-left: auto;
    margin-right: auto;
}
```

## Usage

Using [Gulp].

```js
var gulp            = require('gulp'),
    postcss         = require('gulp-postcss'),
    sides           = require('postcss-sides');

gulp.task('css', function() {
    gulp.src('path/to/dev/css').
        .pipe(postcss({
            sides
        }))
        .pipe(gulp.dest('path/to/build/css'));
});

// rest of the gulp file
```
