const nav_li = document.querySelectorAll("nav-li");

// window.location=header;

document.addEventListener('click',function(event){

    event = event || window.event;
    if (!event.target) event.target = event.srcElement;
    let clickedElement = event.target;
    var myElement = document.getElementById("#"+clickedElement.id);

    var topPos = myElement.offsetTop + 0;
    console.log(clickedElement.id)
    console.log(topPos)
    document.getElementById('main-content').scrollTop = topPos;

    let navs = document.getElementsByClassName('nav-li');
    for(var i = 0; i < navs.length ; i++)
    {
        navs[i].classList.remove('active');
    }

    if (clickedElement.classList.contains("nav-li")){ 
            clickedElement.classList.toggle("active")
        // window.location=clickedElement.id;
    }
    return;
})
