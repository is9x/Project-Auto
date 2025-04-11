function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function removeEditorsAndViewers(fileUrl, debugMode, enableDelay) {
  try {
    var fileId = fileUrl.match(/[-\w]{25,}/)[0]; // Extract file ID from URL
    var userEmail = Session.getActiveUser().getEmail(); // Fetch authenticated user's email
    var file = DriveApp.getFileById(fileId);

    var editors = file.getEditors();
    var viewers = file.getViewers(); // Includes viewers and commenters
    var log = "";

    if (debugMode) {
      log += "Your email: " + userEmail + "<br>";
      log += "Found " + editors.length + " editors and " + viewers.length + " viewers/commenters.<br>";
    }

    // Remove editors except the authenticated user's email
    editors.forEach(function(user) {
      try {
        if (user.getEmail() !== userEmail) {
          if (enableDelay) {
            Utilities.sleep(100); // Apply delay if enabled
          }
          if (debugMode) {
            log += "Removing editor: " + user.getEmail() + "<br>";
          }
          file.removeEditor(user);
        } else if (debugMode) {
          log += "Skipping your user: " + userEmail + "<br>";
        }
      } catch (e) {
        log += "Failed to remove user: " + user.getEmail() + ". Error: " + e.message + "<br>";
      }
    });

    // Remove viewers/commenters except the authenticated user's email
    viewers.forEach(function(user) {
      try {
        if (user.getEmail() !== userEmail) {
          if (enableDelay) {
            Utilities.sleep(100); // Apply delay if enabled
          }
          if (debugMode) {
            log += "Removing viewer/commenter: " + user.getEmail() + "<br>";
          }
          file.removeViewer(user); // Works for viewers and commenters
        } else if (debugMode) {
          log += "Skipping your user: " + userEmail + "<br>";
        }
      } catch (e) {
        log += "Failed to remove user: " + user.getEmail() + ". Error: " + e.message + "<br>";
      }
    });

    log += "All users have sucessfully been removed!";
    return log;
  } catch (e) {
    return "An error occurred: " + e.message;
  }
}
