// 當調整畫面大小時

function reportWindowSize() {
    const DesktopSize = 960;
    const PhoneSize = 440;
    let currentSize = window.innerWidth;
    let fs = 16;
    console.log();
    if(currentSize<=PhoneSize){
        fs = 30;
    }else if(currentSize>=DesktopSize){
        fs = 21;
    }else{
        fs = 21+0.0086*(DesktopSize-currentSize)
    }

    document.querySelector('html').style.fontSize=`${fs}px`
}

// window.onresize = reportWindowSize;
window.addEventListener("load", function(event) {
    // reportWindowSize()
  });