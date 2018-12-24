workflow "New workflow" {
  on = "push"
  resolves = ["build"]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "lint" {
  uses = "actions/npm@master"
  needs = ["Install"]
  runs = "lint"
}

action "build" {
  uses = "actions/npm@master"
  needs = ["lint"]
  runs = "build"
}
