# Getting Started with Create React App
## Project structure
- /src/index.js - entry point
- /src/... - app resides in this folder
- /assets 
- /components - shared components
- /config
- /i18n
- /navigation - router logic here, import in index.js
- /redux - depracated
- /pages - heart of application
- /services - manage api requests
- /utils - helpers, validation etc

## Current pages
- / root folder contains list of posts/articles
![alt text](/img/homepage.png "Homepage")
- /?tag=<str:name> list of posts containing specified tagname
- /post/<int:id> 
![alt text](/img/post.png "Post")
- /editor - editor in which admin can add posts. It has live preview of post being written.
![alt text](/img/editor.png "Editor")