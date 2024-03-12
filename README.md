# ChatDemo

This demonstrates how one could use three different api protocols to build a very simple chat application.

There is a workspace file for visual studio. If you open that workspace there is a launch configuration that is called `Launch all servers`. This will launch all servers.

Then run the `Chrome`, `Firefox` or `Edge` launch configuration to start.

First run `npm run initialize`, then `npm install`. Also you will need docker and docker-compose installed! This is because grpc-web need an envoy proxy to work.

Check out the implementations of the various api protocols, if you see something that could be better (simpler is better) then make a pr! Thank you in advance for doing that!
