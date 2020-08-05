#!/bin/bash

echo -n | sudo tee portsentry.blocked.atcp
sudo route del -host 192.168.56.1 reject
