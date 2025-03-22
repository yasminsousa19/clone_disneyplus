const gulp = require('gulp'); //importa o gulp
const sass = require('gulp-sass')(require('sass')) //importa o sass

function styles(){
    return gulp.src('./src/styles/*.scss') //essa função busca todos os arquivos scss dentro da pasta styles
        .pipe(sass({outputStyle: 'compressed'})) //aqui mostra que os estilos que sairem em scss vai ser comprimido
        .pipe(gulp.dest('./dist/css')) //aqui ele vai salvar os arquivos
}

exports.default = styles;
exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); //aqui ele vai monitorar os arquivos que serão alterados
}