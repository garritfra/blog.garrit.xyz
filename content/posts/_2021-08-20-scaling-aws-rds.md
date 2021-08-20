---
title: How (not) to scale Amazon RDS
date: "2021-08-20"
---

I'm currently working on a webbased service hosted on AWS. It's quite common
for the application to see large spikes of users for a brief time. Because of
this, our database has to withstand immense loads.

So far, our model was to use a single beefy RDS Postgres database instance,
simply because we didn't need to care about the size of the database back when
the project started. As time went by, the amount of visitors grew and grew. In
order to keep up with the load, we just kept on throwing more money at the
beast that is AWS by using larger and larger database instances. This had to
stop. Everyone has heard of autoscaling database and compute instances before,
so I dove right into the rabbithole of "the hyperscalable cloud" (tm).

# First Attempt: 
