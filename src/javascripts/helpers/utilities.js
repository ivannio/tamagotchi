const printToDom = (toPrint, divID) => {
  const selectedDiv = document.getElementById(divID);
  selectedDiv.innerHTML = toPrint;
};

export default { printToDom };
