// 當調整畫面大小時

function reportWindowSize() {
    const DesktopSize = 1441;
    const PhoneSize = 768;
    let currentSize = window.innerWidth;
    let fs = 16;
    console.log(currentSize, PhoneSize);
    if(currentSize<=PhoneSize){
        console.log(1)
        fs = 3.4;
    }else if(currentSize>DesktopSize){
        console.log(1)
        fs = 1.1;
    }else{
        console.log(3)
        fs = (-0.00357*currentSize)+6.14
        fs = fs >2?2:fs;
    }

    document.querySelector('html').style.fontSize=`${fs}vw`
    console.log(document.querySelector('html').style.fontSize )
}

window.onresize = reportWindowSize;
window.addEventListener("load", function(event) {
    reportWindowSize()
    
  });