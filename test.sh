#!/bin/bash
alias mycd='/home/gbobilles/Desktop/nightwatch'
pwd



counter=1
while [ $counter -le 1 ]
do
node_modules/.bin/nightwatch --config leave.conf.js --tag CustomLeavelab
((counter++))
done
echo All done



# counter=1
# while [ $counter -le 5 ]
# do
# node_modules/.bin/nightwatch --config leave.conf.js --tag existingAccount
# ((counter++))
# done
# echo All done
