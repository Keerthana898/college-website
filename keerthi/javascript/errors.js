
    const jsonstring = '{"name":"pavan",age:30}';
try{
    const user = JSON.parse(jsonstring);
    console.log(user);
}
catch(error)
{
    console.log("wrong undhi chudu");
    console.log("Message",error.message);
}

console.log("/n");