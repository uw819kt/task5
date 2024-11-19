let number = 0;
let data = []; // ajax.jsonから取得したデータを格納するための変数を追加
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4) {
      if (request.status == 200) {
        const videoData = request.response;
        data = videoData;
      }
    }
  }
    request.open("GET", "ajax.json");
    request.responseType = "json"
    request.send(null);
}

function changeVideo() {  //ページが読み込まれてクリックしたら開始
   if (data.length == 0) {
    getData();
    }
   } if(data.length <= 1) {
    button.addEventListener('click', () => {
      titleArea.innerhtml = data[number].title;
      contentArea.innerHTML = data[number].content;
      videoArea.setAttribute("src", data[number].url);
      number == 2 ? number = 0 : number++;
      //次回クリック時numberが2と等しければ0に、2でなければ+1
    })
};


window.onload = changeVideo;