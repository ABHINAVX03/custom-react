function customRender(reactElement,mainContainer){
    const domelement=document.createElement(reactElement.type)
    domelement.innerHTML=reactElement.children
    // domelement.setAttribute('href',reactElement.props.href)
    // domelement.setAttribute('target',reactElement.props.blank)
    // mainContainer.appendChild(domelement)
    for (const prop in reactElement.props){
        if(prop==='childern')continue
        domelement.setAttribute(prop,reactElement.props[prop])
    }
    mainContainer.appendChild(domelement)
}


reactElement={
    type:'a',
    props:{
        href:'https//www.google.com',
        target:'_blank'
    },
    children:'Click me to redirect'
}
const mainContainer = document.querySelector("#root")
customRender(reactElement,mainContainer)

