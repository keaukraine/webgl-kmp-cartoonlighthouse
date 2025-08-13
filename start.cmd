JAVA_PATH=C:\Users\keaukraine\.jdks\corretto-21.0.6

rmdir .\node_modules\.cache /s /q

start npm start
start node scripts\watch-frontend.js --project=cartoonlighthouse --path=..\..\kmp-engine-frontend


@REM wt -p "Command Prompt" npm start ; split-pane -p "Command Prompt" node scripts\watch-frontend.js --project=cartoonlighthouse --path=..\..\kmp-engine-frontend

@REM wt cmd npm run start ; split-pane node scripts\watch-frontend.js --project=cartoonlighthouse --path=..\..\kmp-engine-frontend
