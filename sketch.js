let points = [[-1, 10], [1, 10], [3,11],[4,11],[6,10],[4,9],[3,9],[1,8],[3,9],[4,9],[5,8],[5,6],[4,7],[3,7],[1,5],[2,4],[2,-1],[3,-3],[3,-5],[4,-5],[5,-4],[6,-4],[7,-5],[5,-7],[4,-7],[3,-6],[3,-7],[-5,-7],[-5,-6],[-4,-5],[-3,-5],[-4,-4],[-4,-3],[-3,-2],[-2,-2],[-3,0],[-3,1],[-4,2],[-5,1],[-6,2],[-5,3],[-4,4],[-4,3],[-5,3],[-6,4],[-5,5],[-4,5],[-3,4],[-2,5],[-3,6],[-3,7],[-1,10]]; //list資料

function setup() {   //執行一次
  createCanvas(windowWidth, windowHeight); //畫布，寬為整個視窗的寬度，高度為整個視窗的高度
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
  background(255);
  // scale(50)
  scale(map(mouseX,0,width,-PI/2,PI))//往右圖案變大，往左變小
  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
  textSize(30)  //文字大小
  fill(0, 102, 153);  //設定顏色
  text("教育科技系",-50,0)  //顯示文字
  scale(1, -1);  //上下翻轉
  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
}
