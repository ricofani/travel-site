var gulp = require( 'gulp' );
var watch = require( 'gulp-watch' );
var browserSync = require( 'browser-sync' )
.create();


gulp.task( 'watch', function()
{
    browserSync.init( {
        notify: false, // don't show message box when refreshing
        server : {
            baseDir : 'app'
        }
    } );
    watch( './app/index.html', function()
    {
        browserSync.reload();
    } );
    watch( './app/assets/styles/**/*.css', function()
    {
        gulp.start( 'cssInject' );
    } );
} );

gulp.task( 'cssInject', ['styles'], function() // first run and complete ['...']-tasks before cssInject
{
    return gulp.src( './app/temp/styles/styles.css' )
    .pipe( browserSync.stream() );
} );
