#!/bin/bash
alias mycd='/home/gbobilles/Desktop/nightwatch'
pwd

counter=1
while [ $counter -le 6 ]
do

./node_modules/.bin/wdio run wdio.conf.js --spec myFirstScript

((counter++))
done
echo All done

counter=1
while [ $counter -le 6 ]
do

node_modules/.bin/nightwatch --config rock.conf.js --tag WeeklyFloorReport

((counter++))
done
echo All done


