//Work
//================================================== 

    fetch('https://raw.githubusercontent.com/NiqueWrld/Portfolio/main/json/work-data.json')
    .then(response => response.json())
    .then(data => {
      const timelineContainer = document.getElementById('work'); // Assuming you have a div with id="timeline" in your HTML
  
      // Iterate through each item in the JSON data
      data.forEach(item => {
        // Create elements
        const timelineBlock = document.createElement('div');
        timelineBlock.classList.add('timeline__block');
  
        const timelineBullet = document.createElement('div');
        timelineBullet.classList.add('timeline__bullet');
  
        const timelineHeader = document.createElement('div');
        timelineHeader.classList.add('timeline__header');
  
        const timeframe = document.createElement('p');
        timeframe.classList.add('timeline__timeframe');
        timeframe.textContent = item.timeframe;
  
        const title = document.createElement('h3');
        title.classList.add('item-title');
        title.textContent = item.title;
  
        const position = document.createElement('h5');
        position.textContent = item.position;
  
        const desc = document.createElement('div');
        desc.classList.add('timeline__desc');
        desc.innerHTML = `<p>${item.description}</p>`;
  
        // Append elements to the timeline block
        timelineHeader.appendChild(timeframe);
        timelineHeader.appendChild(title);
        timelineHeader.appendChild(position);
  
        timelineBlock.appendChild(timelineBullet);
        timelineBlock.appendChild(timelineHeader);
        timelineBlock.appendChild(desc);
  
        // Append the timeline block to the timeline container
        timelineContainer.appendChild(timelineBlock);
      });
    })
    .catch(error => console.error('Error fetching JSON:', error));

//Education
//================================================== 

fetch('../json/edu-data.json')
.then(response => response.json())
.then(data => {
  const timelineContainer = document.getElementById('edu'); // Assuming you have a div with id="timeline" in your HTML

  // Iterate through each item in the JSON data
  data.forEach(item => {
    // Create elements
    const timelineBlock = document.createElement('div');
    timelineBlock.classList.add('timeline__block');

    const timelineBullet = document.createElement('div');
    timelineBullet.classList.add('timeline__bullet');

    const timelineHeader = document.createElement('div');
    timelineHeader.classList.add('timeline__header');

    const timeframe = document.createElement('p');
    timeframe.classList.add('timeline__timeframe');
    timeframe.textContent = item.timeframe;

    const title = document.createElement('h3');
    title.classList.add('item-title');
    title.textContent = item.title;

    const position = document.createElement('h5');
    position.textContent = item.position;

    const desc = document.createElement('div');
    desc.classList.add('timeline__desc');
    desc.innerHTML = `<p>${item.description}</p>`;

    // Append elements to the timeline block
    timelineHeader.appendChild(timeframe);
    timelineHeader.appendChild(title);
    timelineHeader.appendChild(position);

    timelineBlock.appendChild(timelineBullet);
    timelineBlock.appendChild(timelineHeader);
    timelineBlock.appendChild(desc);

    // Append the timeline block to the timeline container
    timelineContainer.appendChild(timelineBlock);
  });
})
.catch(error => console.error('Error fetching JSON:', error));
