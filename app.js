let timeline = JSON.parse(data);
let even = true;
timeline.forEach(element => {
    //Create div element with class section (timeline title)
    let sectionElement = document.createElement('div');
    sectionElement.classList.add("section");
    //add id for navigation scrolling
    sectionElement.setAttribute('id', element.contact.replace(/\s/g,''));
    let node = document.createTextNode(element.contact);
    sectionElement.appendChild(node);
    //create navigation elements
    let navAnchor = document.createElement('a');
    navAnchor.setAttribute('href', '#' +  element.contact.replace(/\s/g,''));
    node = document.createTextNode(element.contact);
    navAnchor.appendChild(node);
    //add navigation link to the nav element
    document.getElementById("nav").appendChild(navAnchor);
    //add the section to the timeline.
    document.getElementById("timeline").appendChild(sectionElement);

    element.content.forEach((contentBlock, i) => {
        //Create container element
        let containerElement = document.createElement('div');
        containerElement.classList.add("container");
        //Define left or right alignment in timeline
        containerElement.classList.add((even) ? "left" : "right");
        even = !even;
        //Create content element
        let contentElement = document.createElement('div');
        contentElement.classList.add("content");
        //Create content title
        let titleElement = document.createElement('h2')
        node = document.createTextNode(contentBlock.section);
        //Add title to content element
        titleElement.appendChild(node);
        contentElement.appendChild(titleElement);
        //Create paragraph element with description
        let parElement = document.createElement('p');
        node = document.createTextNode(contentBlock.description);
        parElement.appendChild(node);
        //Add paragraph to conent element
        contentElement.appendChild(parElement);
        
        contentBlock.resources.forEach(resource => {
            //Add section for resource
            let resourceElement = document.createElement('section');
            resourceElement.classList.add('resource');
            //add tag span element with tag value as css class
            let spanElement = document.createElement('span');
            spanElement.classList.add(resource.tag);
            node = document.createTextNode(resource.tag);
            spanElement.appendChild(node);
            //add tag element to resource element
            resourceElement.appendChild(spanElement);
            //add hyperlink with resource
            let anchorElement = document.createElement('a');
            anchorElement.setAttribute('href', resource.linkUrl);
            node = document.createTextNode(resource.linkText);
            anchorElement.appendChild(node);
            //add hyperlink element to resource element (after tag)
            resourceElement.appendChild(anchorElement);
            //add resource element to content element (under description)
            contentElement.appendChild(resourceElement);
        });
        //Add content element to container element
        containerElement.appendChild(contentElement);
        //Add container element to the timeline
        document.getElementById("timeline").appendChild(containerElement);
    });
});