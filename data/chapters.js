/*
  網站目錄資料：新增或上線一個章節時，只要修改這個檔案。
  - ready: true  → 首頁與冊別目錄會顯示可點選的卡片
  - ready: false → 顯示「準備中」
  - path 是相對於網站根目錄的資料夾（結尾要有 /）
  教科書為翰林版；其他章節做到時再加入，不要先猜章名。
*/
window.SITE = {
  title: '高中化學互動教學網',
  books: [
    {
      id: 'elective1',
      title: '選修化學 I',
      grade: '翰林版',
      path: 'elective1/',
      chapters: [
        { no: '第二章', title: '氣體', path: 'elective1/ch2/', ready: true,
          desc: '壓力與壓力計、氣體定律、PV = nRT 與分子動力論、道耳頓分壓定律；含心智圖與 62 張學習卡', cover: 'elective1/ch2/assets/slides/slide01.jpg' }
      ]
    }
  ]
};
