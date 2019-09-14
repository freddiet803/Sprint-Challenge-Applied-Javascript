// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function makeTab(topic) {
  //create elements
  let tab = document.createElement('div');
  //add class
  tab.classList.add('tab');
  tab.textContent = topic;
  return tab;
}

makeEachTopic = async url => {
  try {
    let res1 = await axios.get(url);
    //console.log(res1);
    res1.data.topics.forEach(element => {
      tabsSpan.appendChild(makeTab(element));
    });
    return res1;
  } catch (err) {
    console.log(err);
  }
};

let tabsSpan = document.querySelector('.topics');
makeEachTopic('https://lambda-times-backend.herokuapp.com/topics');
