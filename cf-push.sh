#!/bin/bash

./prepare-cf-push.sh

# TODO: to be updated

# cf push
# cf map-route lift-website-staging spring.io --hostname cloudlift
# cf map-route lift-website-staging cfapps.io --hostname cloudlift
# cf unmap-route lift-website-staging cfapps.io --hostname cloudlift-staging

# cf unmap-route lift-website spring.io --hostname cloudlift
# cf unmap-route lift-website cfapps.io --hostname cloudlift

# cf delete -f lift-website
# cf rename lift-website-staging lift-website

