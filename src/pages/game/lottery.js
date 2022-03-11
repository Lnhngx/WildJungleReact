import React, { useEffect} from "react";
import { useRef } from "react";
import './lottery.css';

function Lottery(){
    const myCanvas = useRef(null);
    const myCanvas_bottom = useRef(null);
    // 利用useRef 抓到render出來的真實canvas
    // const [count,setCount] = useState(0);
    let painting = false;
    function startPosition(e){        
        painting = true;
        draw(e);
    }
    function finishPosition(){
        painting = false;
    }
    function draw(e){   
        const ctx = myCanvas.current.getContext("2d");  
        ctx.globalCompositeOperation = 'destination-out';   
        if(!painting) return;
        ctx.lineWidth = 60;
        ctx.lineCap = "round"; 
        ctx.lineTo(e.offsetX,e.offsetY);
        ctx.stroke();
        ctx.beginPath();
        show_result();
    }
    function show_result(){
        const ctx = myCanvas.current.getContext("2d");  
        const data = ctx.getImageData(70,60,250,150).data;
        let transparent_number = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i] === 0) {
                transparent_number++;
            }
        };
        if (transparent_number >= data.length * 0.79) {            
            ctx.canvas.style.opacity = 0;            
            myCanvas.current.removeEventListener("mousedown",startPosition);
            myCanvas.current.removeEventListener("mousemove",draw);
        }        
    }
    function first_render (ctx, ctx_bottom){
        const canvas = ctx.canvas;
        const canvas_bottom = ctx_bottom.canvas;
        
        const image = new Image();
        const image_bottom = new Image();
        image.src = "http://localhost:3000/img/game/lottery1.png";
        image_bottom.src = "http://localhost:3000/img/game/lottery1-back.png"
        image.onload = () => {
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        };
        image_bottom.onload = () => {
            ctx_bottom.drawImage(image_bottom,0,0,canvas_bottom.width,canvas_bottom.height);
            // ctx_bottom.fillStyle = 'red';
            // ctx_bottom.fillRect(70,60,250,150);
            ctx_bottom.font = "40px Arial";
            ctx_bottom.fillStyle = 'white';
            ctx_bottom.textAlign = 'center';
            ctx_bottom.fillText('銘謝惠顧',canvas_bottom.width/2,150);
        }
    }
    useEffect(()=>{
        // 刮刮樂表面的CSS
        myCanvas.current.style.marginLeft = '-401px';
        // 刮刮樂刮完後那面的CSS
        // myCanvas_bottom.current.style.position = 'absolute';
        // myCanvas_bottom.current.style.left = '65%';
        // myCanvas_bottom.current.style.zIndex = '999';
        const ctx = myCanvas.current.getContext("2d");
        const ctx_bottom = myCanvas_bottom.current.getContext("2d");
        ctx_bottom.font = "40px Arial";
        ctx_bottom.fillStyle = 'whtie';
        ctx_bottom.textAlign = 'center';
        ctx_bottom.fillText('銘謝惠顧',myCanvas_bottom.width/2,myCanvas_bottom.height/2);
        myCanvas.current.addEventListener("mousedown",startPosition);
        window.addEventListener("mouseup",finishPosition);
        myCanvas.current.addEventListener("mousemove",draw);
        first_render(ctx, ctx_bottom);
    },[])
    return (
        <>  
        <div className="lottery_container">
            <div className="lottery_closeBtn">
                <i class="fas fa-times"></i>
            </div>
            <div className="lottery_title">Scratch to reveal</div>
            <div className="lottery_text">用滑鼠按住拖曳下圖即可刮出獎勵</div>
            <div className="scratch_area">
                <canvas ref={myCanvas_bottom} width="401" height='556'></canvas>
                <canvas ref={myCanvas} width="401" height='556'></canvas>
            </div>
            <button className="lottery_bonusBtn" onClick={console.log('你他媽快去給我領獎')}>查看獎勵</button>
        </div>
        </>
    )
}
export default Lottery