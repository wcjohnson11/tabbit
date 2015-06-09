var React = require('react');
var data = [];


var Menu = React.createClass({
  render () {
    var title = "Tabs";
    var items = this.props.data
      .map((tab) =>
       <li key={tab.id}><a href={tab.url}>{tab.title}</a></li>);
    return (
      <div>
        <h1>{title}</h1>
        <button onClick={alert}></button>
        <button onClick={alert}></button>
          <ol>
          {items}
          </ol>
      </div>
    );
  }
});

var TabButton = React.createClass({
  render() {
    return (
      <button></button>
    );
  }
});

var popupTab = document.getElementById('status');


function promiseQuery (options) {
  return new Promise (function(resolve,reject) {
    chrome.tabs.query(options, resolve);
  });
}

var tabs = promiseQuery({})
  .then(function(tabs){

    React.render(<Menu data={tabs}/>, popupTab);
    saveTabs(tabs);
  });


// Save the tabs to local storage
function saveTabs (data) {
       chrome.storage.local.set({'tabs': data}, function() {
        console.log('stored', data);
     });
};

// Get all tabs in local storage
function getTabs (){
  chrome.storage.local.get('tabs', function(tabs) {
    return tabs;
  });
};

function clearTabs (){
  chrome.tabs.query
}

var button =