function fdecKg(fruitName)
{
    if(fruitName=="apple")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-apple').innerHTML);
    if(currentQuantity>1)
    {
    currentQuantity--;
  }
    document.getElementById('qnt-apple').innerHTML = currentQuantity;
  }
  else if(fruitName=="mango")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-mango').innerHTML);
    if(currentQuantity>1)
    {
    currentQuantity--;
  }
    document.getElementById('qnt-mango').innerHTML = currentQuantity;
  }
  else if(fruitName=="grapes")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-grapes').innerHTML);
    if(currentQuantity>1)
    {
    currentQuantity--;
  }
    document.getElementById('qnt-grapes').innerHTML = currentQuantity;
  }
  else
  {
    var currentQuantity = parseInt(document.getElementById('qnt-watermelon').innerHTML);
    if(currentQuantity>1)
    {
    currentQuantity--;
  }
    document.getElementById('qnt-watermelon').innerHTML = currentQuantity;
  }
  
}

function fincKg(fruitName)
{
  if(fruitName=="apple")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-apple').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-apple').innerHTML = currentQuantity;
  }
  else if(fruitName=="mango")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-mango').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-mango').innerHTML = currentQuantity;
  }
  else if(fruitName=="grapes")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-grapes').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-grapes').innerHTML = currentQuantity;
  }
  else 
  {
    var currentQuantity = parseInt(document.getElementById('qnt-watermelon').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-watermelon').innerHTML = currentQuantity;
  }
 
}

function vdecKg(vegName)
{
    if(vegName=="tomato")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-tomato').innerHTML);
    if(currentQuantity>1)
    {
    currentQuantity--;
  }
    document.getElementById('qnt-tomato').innerHTML = currentQuantity;
  }
  else if(vegName=="carrot")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-carrot').innerHTML);
    if(currentQuantity>1)
    {
    currentQuantity--;
  }
    document.getElementById('qnt-carrot').innerHTML = currentQuantity;
  }
  else if(vegName=="corn")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-corn').innerHTML);
    if(currentQuantity>1)
    {
    currentQuantity--;
  }
    document.getElementById('qnt-corn').innerHTML = currentQuantity;
  }
  else
  {
    var currentQuantity = parseInt(document.getElementById('qnt-bell-pepper').innerHTML);
    if(currentQuantity>1)
    {
    currentQuantity--;
  }
    document.getElementById('qnt-bell-pepper').innerHTML = currentQuantity;
  }
  
}

function vincKg(vegName)
{
  if(vegName=="tomato")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-tomato').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-tomato').innerHTML = currentQuantity;
  }
  else if(vegName=="carrot")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-carrot').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-carrot').innerHTML = currentQuantity;
  }
  else if(vegName=="corn")
  {
    var currentQuantity = parseInt(document.getElementById('qnt-corn').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-corn').innerHTML = currentQuantity;
  }
  else 
  {
    var currentQuantity = parseInt(document.getElementById('qnt-bell-pepper').innerHTML);
    currentQuantity++;
    document.getElementById('qnt-bell-pepper').innerHTML = currentQuantity;
  }
 
}