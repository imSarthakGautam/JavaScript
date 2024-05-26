/*
A Window object is made up of tabs, and you usually have more than one Window open. The titles of each open site in each Window object is held in an array. 
After working in the browser (opening new tabs, merging windows, and closing tabs), you want to print the tabs that are still open.
Closed tabs are removed from the array and new tabs (for simplicity) get added to the end of it.

The code editor shows an implementation of this functionality with functions for
 tabOpen(), tabClose(), and join(). 
The array tabs is part of the Window object that stores the name of the open pages.
*/

// tabs : array of titles of each site open
const Window = function(tabs) {
    this.tabs = tabs; 
  };
  
  // When you join two windows into one window
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  //  open a new tab
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); 
    return this;
  };
  
  // close a tab
  Window.prototype.tabClose = function(index) {
  
  // get the tabs before the tab
    const tabsBeforeIndex = this.tabs.slice(0, index);
    // get the tabs after the tab 
   const tabsAfterIndex = this.tabs.slice(index + 1); 
   // Join them together
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); 
  
    return this;
   };
  
  
  // Let's create three browser windows social, work and entertainment/videos
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); 
  
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); 
  
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); 
  
  // the tab opening, closing, and other operations
  const finalTabs = socialWindow
    .tabOpen() 
    .join(videoWindow.tabClose(2)) // Close third tab in video window, and join
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);