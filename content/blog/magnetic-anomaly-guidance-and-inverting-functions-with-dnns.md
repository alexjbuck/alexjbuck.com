---
title: Magnetic anomaly guidance and inverting functions with DNNs
date: 2022-08-25T01:00:26.903Z
description: Follow me as I try to brute force the inverse of a complicated
  equation with a DNN
---
# Motivation
DNNs can be used as a universal function approximation tool.

Can we use a DNN to learn the mapping from a series of B field measurements at known heights to the estimated target location? (h0,b0, h1,b1, ...) => (x,y).
