# Set Up
## Init 
### AC
- Folder structure is created
- Check, if routing is possible in the VSTS context

# Personal Builds Module
## Init
### AC
- Set up Routing (IF possible)
- Set as default Module

## My Builds Panel
### AC
- Checks for logged in User shortcut (hardcoded in 1. version)
- Shows the last 10 builds over all branches for that user, sorted by starting date desc
- Each build is shown as a horiontal axis
- Each build shows the name of branch and when started
- In the axis, each build step should be shown
- Each build step shows its status in a colour (ok, failed, ignored etc.)
- Hovering over a step, shows more details
- Clicking click on a build opens a detail-window (other story)

### Tasks
- Create Service to read data of logged in User
- Create Service for generic build-informations
- Create Component for a Build-Axis inlcuding details
- Check how tooltips can be made to work

## Build-Details Window
### AC



