
function customRender(reactElement,container){
    /*
    const domElelment=document.createElement(reactElement.type)
    domElelment.innerHTML=reactElement.children
    domElelment.setAttribute('href',reactElement.props.href)
    domElelment.setAttribute('target',reactElement.props.target)

    container.appendChild(domElelment)
    */

    const domElelment=document.createElement(reactElement.type)
    domElelment.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
            if(prop==='children') continue;
            domElelment.setAttribute(prop,reactElement.props[prop])
            
        }
        container.appendChild(domElelment)
    }




const reactElement={
    type: 'a',
    props: {
        href: 'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}

const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)