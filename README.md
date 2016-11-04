# jasmine-testcase
This tests the reporters for jasminebrowser

The bug is in the Junit reporter ( reporter that most test servers need ) 

How to setup:
commands:

npm install

gulp teamcity //this command should report with teamcity, giving correct data back over 1 failure of jasmine

gulp junit // currently this is bugged, giving errors in jasmine-browser
