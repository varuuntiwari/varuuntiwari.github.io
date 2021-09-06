function changeBody(topic){
    for(x of document.getElementsByClassName('content')){
        x.style.display='none';
    }
    document.getElementById(topic).style.display='flex';
}
