// @ts-check

/**
 * @param {HTMLElement} el 
*/
function clck(el){
    el.classList.toggle("hidden");
}
/**
 * @param {HTMLElement} el 
*/
function enter(el){
    el.classList.add("hovered");
}
/**
 * @param {HTMLElement} el 
*/
function leave(el){
    el.classList.remove("hovered");
}