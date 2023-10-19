
/**
 * Retrieves the first element that matches the specified selector.
 *
 * @param {string} element - The CSS selector of the element to retrieve.
 * @returns {Element|null} The first element that matches the selector, or null if no element is found.
 */
 const el = (element) => document.querySelector(element);

 /**
 * Retrieves a list of elements that match the specified selector.
 *
 * @param {string} elements - The CSS selector of the elements to retrieve.
 * @returns {NodeList} A list of elements that match the selector.
 */
const els = (elements) => document.querySelectorAll(elements);

const setStorage = (key, value) => {
    localStorage.setItem(
      key,
      JSON.stringify({
        data: value,
      })
    );
  };
  
  const getStorage = (key) => {
    const data = localStorage.getItem(key);
  
    if (data) return JSON.parse(data).data;
  
    return null;
  };



  const renderHtml = (htmlString) => {
    app.innerHTML += htmlString;
  };
  
  
  const renderHtmlC = (htmlString, callback) => {
    app.innerHTML += htmlString;
    callback();
  };