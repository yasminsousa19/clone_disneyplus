const gulp = require('gulp'); //importa o gulp
const sass = require('gulp-sass')(require('sass')) //importa o sass
const imagemin = require('gulp-imagemin')

function styles(){
    return gulp.src('./src/styles/*.scss') //essa função busca todos os arquivos scss dentro da pasta styles
        .pipe(sass({outputStyle: 'compressed'})) //aqui mostra que os estilos que sairem em scss vai ser comprimido
        .pipe(gulp.dest('./dist/css')) //aqui ele vai salvar os arquivos
}

function images(){
    return gulp.src('./src/images/**/*') //essa função busca todos os arquivos dentro da pasta images
        .pipe(imagemin()) //aqui mostra que os estilos que sairem em scss vai ser comprimido
        .pipe(gulp.dest('./dist/images')) 
}

exports.default = gulp.parallel(styles, images); //esse parallel vai executar ambos os plugins juntamente

exports.watch = function(){
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)); //aqui ele vai monitorar os arquivos que serão alterados
}