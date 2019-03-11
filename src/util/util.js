
const WINDOW_WIDTH = 1920;
const WINDOW_HEIGHT = 1080
function findNodeList(nodeName,list){
  for(var i = 0;i<list.length;i++){
    let node = list[i];
    let name = node.$.name;
    if(name==nodeName){
      if(node.node instanceof Array){
        return node.node;
      }else{
        return [node.node]
      }
    }else{
      if(node.node && node.node.length>0){
        let res = findNodeList(nodeName,node.node)
        if(res!=null){
          return res
        }
      }
    }
  }
  return  null
}
function findNode(nodeName,list){
  for(var i = 0;i<list.length;i++){
    let node = list[i];
    let name = node.$.name;
    if(name==nodeName){
      return node;
    }else{
      if(node.node && node.node.length>0){
        let res = findNode(nodeName,node.node)
        if(res!=null){
          return res
        }
      }
    }
  }
  return  null
}
function w(num,win_w){
  let __W =  win_w ? win_w : window.innerWidth
  if(typeof num == 'number'){ 
    return num* __W/WINDOW_WIDTH
  }else{
    return 0
  }
}
function h(num,win_h){
  let __h =win_h ?win_h: window.innerHeight
  if(typeof num == 'number'){
    return num* __h/WINDOW_HEIGHT
  }else{
    return 0
  }
}
export default {
  findNodeList:findNodeList,
  w:w,
  h:h,
  findNode: findNode
}