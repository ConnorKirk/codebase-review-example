# Codebase Review Example

Sometimes it is useful to perform a code review on an existing codebase.
I wanted a pull request like workflow for doing so. 

This repository demonstrates how you can create a pull request to review the code of an existing codebase.

1. Check out a new branch with no parent commit.

`git switch --orphan "pr-review"`

2. Add an empty commit to the branch
`git commit -m "empty" --allow-empty`

3. Push the branch to your remote repository.
`git push --set-upstream origin pr-review`

4. Create a new pull request (aka merge request). Make sure to set the _source_ branch as the branch to you wish to review. Set the _target_ branch as the empty branch (`pr-review` in this example)
