workflow "New workflow" {
  on = "push"
  resolves = ["build"]
}

action "Install" {
  uses = "actions/npm@e7aaefe"
  runs = "install"
}

action "lint" {
  uses = "actions/npm@e7aaefe"
  needs = ["Install"]
  runs = "lint"
}

action "build" {
  uses = "actions/npm@e7aaefe"
  needs = ["lint"]
  runs = "build"
}
