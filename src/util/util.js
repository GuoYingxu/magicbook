
const WINDOW_WIDTH = 1080;
const WINDOW_HEIGHT = 1920
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
export function w(num,win_w){
  let __W =  win_w ? win_w : window.innerWidth
  console.log(__W, WINDOW_WIDTH)
  if(typeof num == 'number'){ 
    return num* __W/WINDOW_WIDTH
  }else{
    return 0
  }
}
export function h(num,win_h){
  let __h =win_h ?win_h: window.innerHeight
  console.log(__h,WINDOW_HEIGHT)
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