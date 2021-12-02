// 當調整畫面大小時

function reportWindowSize() {
    const DesktopSize = 1441;
    const PhoneSize = 768;
    let currentSize = window.innerWidth;
    let fs = 16;
    console.log(currentSize, PhoneSize);
    if(currentSize<=PhoneSize){
        fs = 3.4;
    }else if(currentSize>DesktopSize){
        fs = 1.1;
    }else{
        fs = (-0.00357*currentSize)+6.14
        fs = fs >2?2:fs;
    }

    document.querySelector('html').style.fontSize=`${fs}vw`
}

window.onresize = reportWindowSize;
window.addEventListener("load", function(event) {
    reportWindowSize()
    
  });


