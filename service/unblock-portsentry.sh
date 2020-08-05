#!/bin/bash

echo -n | sudo tee /var/lib/portsentry/portsentry.blocked.atcp
sudo route del -host 192.168.56.1 reject
