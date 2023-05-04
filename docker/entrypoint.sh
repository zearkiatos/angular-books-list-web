if [ $(echo "$NODE_ENV")=="develop" ]
then
    ng serve --host=0.0.0.0 --port=8000 --live-reload --disable-host-check
else
    npm run build
    npm run start
fi

echo "`date`: 🤖 All ready boss!"
