# React useEffect: Incorrect Object Comparison

This example demonstrates a common error in React's `useEffect` hook: incorrectly comparing objects using strict equality (`===`).  When objects are compared this way, React might not detect changes, leading to unexpected behavior such as infinite render loops or missing updates.

## Problem

The `useEffect` hook uses the dependency array to determine when to re-run the effect.  If an object is part of the dependency array and the object itself is changed, strict equality will incorrectly report no change because the object references are different.

## Solution

There are two primary approaches to solving this:

1. **Deep Comparison:** Use a library like `lodash.isEqual` or `fast-deep-equal` to perform a deep comparison of objects.
2. **Custom Comparison:** Implement a custom comparison function to handle your specific object structure, checking the relevant properties to ensure they are updated.

This repository contains both a buggy version and a corrected version demonstrating both solutions.