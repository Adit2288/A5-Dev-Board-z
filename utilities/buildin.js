function convertedInnerText(id)
{
    const value = document.getElementById(id).innerText;
     const convertedValue = parseFloat(value);
     return convertedValue;
}

function setInnertextById(id,value)
{
    document.getElementById(id).innerText=value;
}