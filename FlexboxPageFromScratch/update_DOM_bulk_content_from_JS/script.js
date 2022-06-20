class Component_Type1 {
    constructor (housingElem, initCount) {
        this.housingElem = housingElem;
        this.count = initCount;
    }

    count = 0;
    countBy = 1;

    headingText = `Hello World`;
    buttonText = "Functionless button.";
    paraText = "This content has been overwritten.";

    removeAllChildren(elementId) {
        let element = document.getElementById(elementId)
    
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }
    // addElement(tag, classes, styles, inner) {
    //     let newElement = document.createElement(tag);
    //     classes.forEach((item, index, arr) => {
    //         newElement.classList.add(arr[index]);
    //     });
    // }
    updateSelf(countBy, newContent) {
        this.removeAllChildren(this.housingElem);

        let updatedContent;
        this.countBy = countBy ? countBy : this.countBy;

        if (newContent) {
            updatedContent = newContent
        }
        else {
            updatedContent = document.createElement("div");
        
            let heading = document.createElement("h1");
            heading.textContent = `${this.headingText} ${this.count}`;
            updatedContent.appendChild(heading);
            
            let button = document.createElement("button");
            button.textContent = this.buttonText;
            updatedContent.appendChild(button);
            
            let para = document.createElement("p");
            para.textContent = this.paraText;
            updatedContent.appendChild(para);
            
            this.count += countBy;
        }

        document.getElementById(this.housingElem).appendChild(updatedContent);

        console.log("Success");
    }
}

let component1 = new Component_Type1("component1", 0);
console.log(component1.housingElem);