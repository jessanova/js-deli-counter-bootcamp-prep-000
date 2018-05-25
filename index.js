//var katzDeliLine = []

function takeANumber(linex,newName){
  var x = linex
  x.push(newName)
  //return x
  return `Welcome, ${newName}. You are number ${x.length} in line.`
}

function nowServing(linex){
  if(linex.length==0){
    return "There is nobody waiting to be served!"
  }else{
    return "Currently serving "+linex.splice(0,1)+"."
  }
}

function currentLine(lines){
  var r = ""
  if (lines.length==0){
    r = "The line is currently empty."
  }else{
    r = "The line is currently: 1. "
    r += lines[0]
    for(let i=1;i<lines.length;i++){
    r+= ", "+(i+1)+". "+lines[i] 
    }
  }
  return r
}