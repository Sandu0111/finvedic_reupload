document.getElementById('CC_next').onclick = function(){
    let lists = document.querySelectorAll('.CC_item');
    document.getElementById('CC_slide').appendChild(lists[0]);
   
}
document.getElementById('CC_prev').onclick = function(){
    let lists = document.querySelectorAll('.CC_item');
    document.getElementById('CC_slide').prepend(lists[lists.length - 1]);
    
}
  