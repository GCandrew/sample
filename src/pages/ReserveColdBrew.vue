<template>

    <div class="container navbar">
  
      <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href=">"> <img src="https://image.istarbucks.co.kr/common/img/common/icon_home.png"> </a></li>
      <li class="breadcrumb-item active" aria-current="page">리저브 콜드 브루</li>
    </ol>
  </nav>
  </div>
  
    <div class="container">
      <div class="row">
        <!-- 왼쪽 이미지와 썸네일 -->
        <div class="col-md-6 image-section">
          <div class="main-image-container">
            <img
              :src="imageSrc"
              class="main-image"
              alt="리저브 콜드 브루" 
              
              @mousemove="zoomImage"
              @mouseleave="resetZoom"
            />
            <div class="zoomed-image" :style="zoomStyle"></div>
            <div class="zoom-overlay" :style="overlayStyle"></div>
          </div>
          <!-- 썸네일 이미지들 추가 가능 -->
          <div class="thumbnails">
            <img v-for="thumb in thumbnails" :key="thumb" :src="thumb" class="thumbnail" @click="changeImage(thumb)" />
          </div>
        </div>
  
  
  
  
        <!-- 오른쪽 메뉴 정보 -->
  <div class="col-md-6 info-section">
    <h2>리저브 콜드 브루</h2>
    <p class="text-muted">Reserve Cold Brew</p>
    <hr class="m-hr"/>
    <p>
        리저브 커피 마스터의 정성으로 차갑게 추출한 깊고 부드러운 풍미의 커피
    </p>
    <hr />
    
    <!-- 1행: 2열 구성 -->
    <div class="row mt-4">
      <div class="col-6">
        <h5>제품 영양 정보</h5>
      </div>
      <div class="col-6 text-end">
        <p>Tall(톨) / 355ml (12 fl oz)</p>
      </div>
    </div>
    <hr />
  
    <!-- 2행: 4열 구성 -->
    <div class="row">
      <div class="col-3">
        <p>1회 제공량 (kcal)</p>
      </div>
      <div class="col-3 text-end v-line">
        <p>5</p>
      </div>
    
      <div class="col-3">
        <p>포화지방 (g)</p>
      </div>
      <div class="col-3 text-end">
        <p>0</p>
      </div>
      <div class="col-3">
        <p>단백질 (g)</p>
      </div>
      <div class="col-3 text-end v-line">
        <p>0</p>
      </div>
      <div class="col-3">
        <p>나트륨 (mg)</p>
      </div>
      <div class="col-3 text-end">
        <p>0</p>
      </div>
      <div class="col-3">
        <p>당류 (g)</p>
      </div>
      <div class="col-3 text-end v-line">
        <p>0</p>
      </div>
      <div class="col-3">
        <p>카페인 (mg)</p>
      </div>
      <div class="col-3 text-end">
        <p>190</p>
      </div>
    </div>
    <!--    <div class="row mt-4">
      <div class="col-12 comment">
        <p class="text-muted">
      <strong>알레르기 유발요인 :</strong> 우유 
        </p>
      </div>
    </div>
    -->

  
  </div>
      </div>
    </div>
    <hr class="center-hr"/>
    <div class="desc">
    <p>
        리저브 커피 마스터의 정성으로 차갑게 추출한 깊고 부드러운 풍미의 커피
    </p>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageSrc:
          "https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9200000002093]_20240318144604632.jpg",
        thumbnails: [
          // 썸네일 이미지 URL 추가
          "https://image.istarbucks.co.kr/upload/store/skuimg/2024/03/[9200000002093]_20240318144604632.jpg",
          // 다른 썸네일 이미지 링크
        ],
        zoomStyle: {
          backgroundImage: "",
          backgroundPosition: "0% 0%",
          backgroundSize: "175%",
          display: "none",
          width: "545px",
          height: "498px",
          position: "absolute",
          top: "20px",
          left: "100%",
          transform: "translateX(50px)",
          zIndex: 10,
        },
        overlayStyle: {
          display: "none",
          left: "0px",
          top: "0px",
          width: "272.5px",
          height: "249px",
        },
      };
    },
    methods: {
      zoomImage(e) {
        const image = e.target;
        const { left, top, width, height } = image.getBoundingClientRect();
        const offsetX = e.clientX - left;
        const offsetY = e.clientY - top;
  
        // 오버레이 사각형의 위치 계산
        const overlayWidth = parseFloat(this.overlayStyle.width);
        const overlayHeight = parseFloat(this.overlayStyle.height);
  
        const overlayLeft = Math.min(Math.max(offsetX - overlayWidth / 2, 0), width - overlayWidth);
        const overlayTop = Math.min(Math.max(offsetY - overlayHeight / 2, 0), height - overlayHeight);
  
             // 확대된 이미지에서의 위치 계산
             // 배율을 2로 유지  const zoomScale = 2;
        const x = (overlayLeft / (width - overlayWidth)) * 100; // 백분율로 계산하여 backgroundPosition 조정
        const y = (overlayTop / (height - overlayHeight)) * 100; // 백분율로 계산하여 backgroundPosition 조정
  
        // 확대 스타일 적용
        this.zoomStyle.backgroundImage = `url(${this.imageSrc})`;
        this.zoomStyle.backgroundPosition = `${x}% ${y}%`;
        this.zoomStyle.display = "block";
  
        // 확대 오버레이 스타일 적용
        this.overlayStyle.display = "block";
        this.overlayStyle.left = `${overlayLeft}px`;
        this.overlayStyle.top = `${overlayTop}px`;
      },
      resetZoom() {
        this.zoomStyle.display = "none";
        this.overlayStyle.display = "none";
      },
      changeImage(src) {
        this.imageSrc = src;
      },
    },
  };
  </script>
 
<style scoped>
.container {
  padding: 20px;
}

.image-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.main-image-container {
  position: relative;
}

.main-image {
  max-width: 500px;
  max-height: 498px;
  border-radius: 1px;
  margin-top: 20px;
}

.zoomed-image {
  width: 800px;
  height: 1800px;
  pointer-events: none;
  background-repeat: no-repeat;
  background-size: 200%;
  border-radius: 1px;
  display: none;
  position: absolute;
  top: 0;
  left: 100%; /* Adjust position to be next to the image */
  transform: translateX(20px); /* Adjust spacing between image and zoomed image */
  z-index: 10;
 
}

.zoom-overlay {
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0);
  background: rgba(255, 255, 255, 0.3);
  border-radius: 1px;
  pointer-events: none;
  display: none;
  z-index: 10;
  margin-top: 20px;
}

.thumbnails {
  margin-top: 10px;
}

.thumbnail {
  width: 100px;
  height: auto;
  margin-right: 380px;
  cursor: pointer;
  border: 1px solid #ddd;
  border-radius: 1px;
}

.info-section {
  padding: 20px;
}

h2 {
  margin-top: 0;
}
h5 {
  display: block;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 0;
  margin-right: 0;
  font-weight: bold;
}

p {
  font-family: 'Arial', sans-serif; /* 폰트 패밀리 */
  font-size: 16px;                  /* 폰트 크기 */
  color: #333;                      /* 폰트 색상 */
  line-height: 1.5;                 /* 줄 간격 */
  margin: 10px 0;                   /* 여백 */
}

.comment {
  background: rgba(244, 244, 242, 1);
}
.view-details {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  color: white;
  background-color: #00704a;
  border-radius: 5px;
  text-decoration: none;
}

.view-details:hover {
  background-color: #005f3a;
}

.vertical-line {
  border-left: 1px solid #000; /* 세로줄의 색상과 두께 */
  height: 10px;              /* 세로줄의 높이 */
  margin: 0 20px;             /* 좌우 여백 */
}

.navbar {
  position: absolute; /* 상단에 고정 */
  top: 10px;          /* 상단에서의 거리 */
  left: 480px;         /* 왼쪽에서의 거리 */
  z-index: 1000;      /* 다른 요소들 위에 표시되도록 설정 */
  background-color: white; /* 배경색 추가로 읽기 쉽게 설정 */
  padding: 10px;      /* 네비게이션 바에 여백 추가 */
  border-radius: 5px; /* 네비게이션 바의 모서리 둥글게 */
  justify-content:flex-end;
  
}

.center-hr {
  margin-left: auto;
  margin-right: auto;
  width: 1100px;
}
.desc {
  margin-left: 170px;
}

.v-line {
  border-right : thin dashed #a5a7b060;
  height : 41px;
}
.m-hr {
    height : 3px;
    background-color : black;
    border:#000
}
</style>