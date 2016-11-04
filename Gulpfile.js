var gulp = require('gulp'),
    del = require('del'),
    jasmineBrowser = require('gulp-jasmine-browser'),
    reporters = require('jasmine-reporters');

gulp.task('teamcity', function() { // should go correctly without problems
    return gulp.src("jasmine-test/test_spec.js")
        .pipe(jasmineBrowser.specRunner({console: true}))
        .pipe(jasmineBrowser.headless({
            throwFailures: false,
            reporter: new reporters.TeamCityReporter({savePath: "build", consolidateAll: false, filePrefix: 'jsunit'})
        }))
});

gulp.task('junit', function() { // should give jasminebrowser errors
    return gulp.src("jasmine-test/test_spec.js")
        .pipe(jasmineBrowser.specRunner({console: true}))
        .pipe(jasmineBrowser.headless({
            throwFailures: false,
            reporter: new reporters.JUnitXmlReporter({savePath: "build", consolidateAll: false, filePrefix: 'jsunit'})
        }))
});