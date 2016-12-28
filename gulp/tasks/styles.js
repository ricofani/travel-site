var gulp = require( 'gulp' );
var postcss = require( 'gulp-postcss' );
var autoprefixer = require( 'autoprefixer' );
var postcssSimpleVars = require( 'postcss-simple-vars' );
var postcssNested = require( 'postcss-nested' );
var postcssImport = require( 'postcss-import' );
var postcssMixins = require( 'postcss-mixins' );
var postcssHexrgba = require( 'postcss-hexrgba' );

gulp.task( 'styles', function()
{
    return gulp.src( './app/assets/styles/styles.css' )
    .pipe( postcss( [
        postcssImport,
        postcssMixins,
        postcssSimpleVars,
        postcssNested,
        postcssHexrgba,
        autoprefixer
    ] ) )
    .on( 'error', function( errorInfo )
    {
        console.log( errorInfo.toString() );
        this.emit( 'end' );
    } )
    .pipe( gulp.dest( './app/temp/styles' ) );
} );