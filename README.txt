The code uses the Express web server package to create a simple hit tracking application. 
Each time you visit the app, 
it logs your hit in Redis, then displays the total number of page loads.

Use npm to install the app’s dependencies:
#   npm install express redis

Create DockerFile
docker-compose.yml


Call 
docker compose up   ----> to start all the services in your docker-compose.yml file.
In the same way as when calling   
docker run,---->    you should add the -d argument to detach your terminal and run the services in the background:

docker compose up   ----> run ---> docker-compose.yml
docker run  ---->  -d


What is Redis?
-Redis stands for Remote Dictionary Server.
-It’s an open-source, in-memory data store that can be used as a:

Database
Cache
Message broker
#  It’s super fast because all the data is stored in memory (RAM),
# rather than on disk. Redis is often used in web applications to store frequently accessed data,
# like session data, counters, or user preferences, because it can retrieve and store data almost instantly.

Where Redis is Used
-Web applications (Node.js, Django, Flask)
-Microservices (shared cache)
-Real-time analytics
-Gaming leaderboards
-Chat apps (Pub/Sub)