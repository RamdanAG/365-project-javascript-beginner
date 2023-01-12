function color(warna){
    let a = getComputedStyle(warna)
    let b = a.backgroundColor
    document.getElementsByTagName("body")[0].style.backgroundColor=b
}

//The getComputedStyle() method gets the computed CSS properties and values of an HTML element.
//The getComputedStyle() method returns a CSSStyleDeclaration object.