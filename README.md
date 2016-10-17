# Concourse Example: DEF 

This example project shows:
-
 
Deploy artifact to Cloud Foundry ([PWS](http://run.pivotal.io))


## Prerequisites

This guide assumes you have a working installation of Concourse.  
Concourse commands
 fly -t l set-pipeline -p ci -c pipeline.yml

 fly -t l unpause-pipeline -p ci 
 
 Hijack command:
 
 fly -t l hijack -j static-ci/build  -- this denotes hijacking the job  pipeline/job
 

