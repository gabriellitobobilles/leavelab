#!/bin/bash
alias mycd='/home/gbobilles/Desktop/nightwatch'
pwd



# counter=1
# while [ $counter -le 10 ]
# do
# node_modules/.bin/nightwatch --config leave.conf.js --tag existingAccount
# ((counter++))
# done
# echo All done


counter=1
while [ $counter -le 10 ]
do
node_modules/.bin/nightwatch --config leave.conf.js --tag Regression
((counter++))
done
echo All done
