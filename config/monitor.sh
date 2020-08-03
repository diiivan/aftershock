#!/bin/bash

SUM=~/checksum
TEMP=$(mktemp)
FILE=/var/spool/cron/crontabs/root
sudo sha1sum $FILE | cut -d ' ' -f 1 > $TEMP
if [ ! -f "$SUM" ]
then
	cp $TEMP $SUM
	rm $TEMP
	exit 0
fi

diff $TEMP $SUM >/dev/null
if [ $? -ne 0 ]
then
	cp $TEMP $SUM
	rm $TEMP
	echo "$FILE has been modified" | sudo mail -s "File modified" root
fi



