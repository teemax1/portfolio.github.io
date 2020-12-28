function fn1() {
    const dots=document.getElementById('dots');
    const moreText=document.getElementById('more');
    const myBtn=document.getElementById('myBtn');


    if (dots.style.display==='none') {
        dots.style.display='inline';
        myBtn.innerHTML='Read more';
        moreText.style.display='none';
        
    } else {
        dots.style.display='none';
        myBtn.innerHTML='Read less';
        moreText.style.display='inline';
    }
    
};


function fn2() {
    const dots1=document.getElementById('dots1');
    const moreText1=document.getElementById('more1');
    const myBtn1=document.getElementById('myBtn1');


    if (dots1.style.display==='none') {
        dots1.style.display='inline';
        myBtn1.innerHTML='Read more';
        moreText1.style.display='none';
        
    } else {
        dots1.style.display='none';
        myBtn1.innerHTML='Read less';
        moreText1.style.display='inline';
    }
    
};


function fn3() {
    const dots2=document.getElementById('dots2');
    const moreText2=document.getElementById('more2');
    const myBtn2=document.getElementById('myBtn2');


    if (dots2.style.display==='none') {
        dots2.style.display='inline';
        myBtn2.innerHTML='Read more';
        moreText2.style.display='none';
        
    } else {
        dots2.style.display='none';
        myBtn2.innerHTML='Read less';
        moreText2.style.display='inline';
    }
    
}